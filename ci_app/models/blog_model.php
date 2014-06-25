<?php

class Blog_model extends CI_model {

	public function __construct() {
		parent::__construct();
		$this->load->library('tumblr');
		$this->load->config('admin');
	}

	public function get_stickies(){
		return $this->get_posts(0,1);
	}

	public function get_posts($offset=0, $category=0)
	{
		//select all fields and if the post is sticky or not (to order sticky posts first)
		$this->db->select('*,CASE WHEN post_category=1 THEN 1 ELSE 0 END as sticky', false);
		if($category>0){
			$this->db->where('post_category',$category);
		}

		$this->db->limit($this->config->item('display_posts'),$offset);
		$this->db->order_by('sticky','DESC');
		$this->db->order_by('post_id', 'DESC');
		$query = $this->db->get('blog');

		$posts = array();
		foreach($query->result() as $k=>$result){
			$posts[$k] = $result;
			$posts[$k]->content = json_decode($result->post_content);
			unset($posts[$k]->post_content);
		}
		return $posts;
	}

	public function count_posts($category=0)
	{
		if($category>0){
			$this->db->where('post_category',$category);
		}
		return $this->db->count_all_results('blog');

	}

	public function fetch_posts()
	{
		//Fetch the latest posts from Tumblr
		$posts = $this->tumblr->posts($this->tumblr->tumblr_url);
		var_dump($posts);
		$insertPosts	= array();
		$updatePosts	= array();
		$insertTags		= array();
		$deleteTags		= array();
		//format them for our database into an array called $insertPosts
		foreach($posts->response->posts as $post)
		{
			$insertPosts[(string)$post->id] = $this->tumblr2array($post);
			//the tags need inserting to the database as well
			$insertTags = $this->tags2array((string)$post->id,$post->tags,$insertTags);
		}

		//if posts are already in the DB then we don't want to add them again.
		//we take them out of the $insertPosts array and add them to $updatePosts instead
		$this->db->select('post_id');
		$db_posts = $this->db->get('blog');
		foreach($db_posts->result() as $post)
		{
			if(in_array($post->post_id, array_keys($insertPosts)))
			{
				//this post is already in the database - remove from insert array and update instead
				$updatePosts[$post->post_id] = $insertPosts[$post->post_id];
				unset($insertPosts[$post->post_id]);
				//we also need to delete this posts tags for easy updating
				$deleteTags[] = $post->post_id;
			}
		}

		if(count($deleteTags)>0){
			$this->db->where_in('post_id',$deleteTags)->delete('blog_tags');
		}

		if(count($insertTags)>0){
			$this->db->insert_batch('blog_tags',$insertTags);
		}

		if(count($insertPosts)>0)
		{
			$this->db->insert_batch('blog',$insertPosts);
		}

		if(count($updatePosts)>0)
		{
			$this->db->update_batch('blog',$updatePosts, 'post_id');
		}

		return asort(array_merge($insertPosts, $updatePosts));
	}

	public function fetch_update_post($post_id)
	{
		//Fetch the post from Tumblr and update the DB
		$post = $this->tumblr->posts($this->tumblr->tumblr_url,$post_id);
		$post = $post->response->posts[0];
		$update = $this->tumblr2array($post);

		$this->db->update('blog', $update, "post_id = ".$post_id);

		//Update the tags as well
		$tags = $this->tags2array((string)$post->id,$post->tags);
		$this->db->where('post_id',$post_id)->delete('blog_tags');

		if(count($tags)>0)
		{
			$this->db->insert_batch('blog_tags',$tags);
		}

        $update['content'] = json_decode($update['post_content']);
        unset($update['post_content']);

		return $update;
	}

	//format a tumblr post object into the format required by our DB
	private function tumblr2array($post)
	{
		//if the post is tagged as sticky, we need to sticky in in the DB
		$category = 0;
		foreach($post->tags as $tag)
		{
			if(in_array($tag, $this->config->item('post_categories')))
			{
				$category = array_search($tag, $this->config->item('post_categories'));
			}
		}

		return array(
				'post_id'			=> (string)$post->id,
				'post_slug'			=> $post->slug,
				'post_type'			=> $post->type,
				'post_timestamp'	=> $post->timestamp,
				'post_content'		=> json_encode($post),
				'post_category'		=> $category
			);
	}

	private function tags2array($post_id,$tags, $return=array()){
		foreach($tags as $tag)
		{
			if(!in_array($tag, $this->config->item('post_categories')))
			{
				$return[] = array(
					'post_id'   => (string)$post_id,
					'tag'		=> $tag
				);
			}
		}
		return $return;
	}

}
