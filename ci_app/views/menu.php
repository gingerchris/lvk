<h1>Menu Items</h1>
<?php foreach($menu as $post){
	$this->load->view('posts/'.$post->post_type, array('post'=>$post, 'category'=>'menu'));
}?>