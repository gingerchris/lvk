<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Blog extends My_Controller {
	public function __construct() {
	    //initialise base
	    parent::__construct();
	    $this->data['admin'] 	= true;
	    $this->data['page'] 	= "blog";

	    $this->load->model('blog_model');
	    $this->load->config('admin');
	}

	public function index($category=0, $page=null)
	{
		if(is_numeric($page)){
			$page--;
		}else{
			$page = 0;
		}

		$offset = $page*10;
		if($category == 0)
		{
			$this->data['posts'] = $this->blog_model->get_posts($offset);
		}else{
			$this->data['posts'] = $this->blog_model->get_posts($offset,$category);
			$cats = $this->config->item('post_categories');
			if(array_key_exists($category, $cats))
			{
				$this->data['category_tag'] = $cats[$category];
			}else{
				$this->data['category_tag'] = false;
			}

		}
		$page ++;
		$pages 	= ceil($this->blog_model->count_posts($category)/$this->config->item('display_posts'));
		$current_url = "admin/blog/";
		if($category>0){
			$current_url .= $category."/";
		}

		$this->data['pagination'] = array(
			'page' 	=> $page,
			'pages' => $pages,
			'base'	=> $current_url."page/",
			'prev'	=> ($page > 1 ? $current_url."page/".($page-1) : false),
			'next'	=> ($page < $pages ? $current_url."page/".($page+1) : false)
		);

		$this->data['meta']['category'] = $category;

		if (!$this->input->is_ajax_request()) {
			$this->load->view('components/head',$this->data);
			$this->load->view('admin/components/header',$this->data);
		}

		$this->load->view('admin/blog', $this->data);

		if (!$this->input->is_ajax_request()) {
			$this->load->view('components/foot',$this->data);
		}
	}

	public function updateBlog($category)
	{
		$this->blog_model->fetch_posts();
		$this->index($category);
	}

	public function updatePost($post_id)
	{
		$this->load->helper('array');
		$post = array_to_object($this->blog_model->fetch_update_post($post_id));

		if(in_array($this->config->item('sticky_tag'), $post->content->tags)){
			$this->data['sticky'] = true;
		}

		$this->data['newPost'] = true;

		$this->data['post'] = $post;
		$this->load->view('admin/posts/'.$post->post_type,$this->data);

	}

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */