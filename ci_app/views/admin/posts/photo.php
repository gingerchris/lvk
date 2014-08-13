<div class="panel panel-primary <?php switch($post->post_category){
case 1:
	echo 'panel-success';
	break;
case 2:
	echo 'panel-info';
	break;
case 3:
	echo 'panel-warning';
	break;
case 4:
	echo 'panel-danger';
	break;
default:
	echo 'panel-primary';
}
	?> <?php if(isset($newPost) && $newPost): ?>panel-danger<?php endif; ?>" id="blog-<?php echo $post->post_id; ?>">
	<div class="panel-heading clearfix">
		<h3 class="panel-title">Photo</h3>
	</div>
	<div class="panel-body jumbotron">
		<div class="row">
		    <div class="col-md-12">
		    	<?php $this->load->view('admin/buttons',array('id'=>$post->post_id)); ?>

				<img src="<?php echo $post->content->photos[0]->alt_sizes[1]->url; ?>" alt="<?php echo $post->content->caption; ?>" />
				<div class="caption"><?php echo $post->content->caption; ?></div>
		    </div>		    
		</div>
		<?php $this->load->view('admin/posts/tags',array('post'=>$post)); ?>
	</div>
</div>