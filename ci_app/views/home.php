<h1>Blog Posts</h1>
<?php foreach($blog as $post){
	$this->load->view('posts/'.$post->post_type, array('post'=>$post, 'category'=>'blog'));
}?>

<h1>Gallery Items</h1>
<?php foreach($gallery as $post){
	$this->load->view('posts/'.$post->post_type, array('post'=>$post, 'category'=>'gallery'));
}?>

<h1>Menu Items</h1>
<?php foreach($menu as $post){
	$this->load->view('posts/'.$post->post_type, array('post'=>$post, 'category'=>'menu'));
}?>

<h1>About</h1>
<?php $this->load->view('posts/'.$about->post_type, array('post'=>$about, 'category'=>'about')); ?>