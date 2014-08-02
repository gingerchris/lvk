<h1>FAQs</h1>
<?php foreach($faq as $post){
	$this->load->view('posts/faq', array('post'=>$post, 'category'=>'menu'));
}?>