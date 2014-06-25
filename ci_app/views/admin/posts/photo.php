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
		    <div class="col-md-9">
				<img src="<?php echo $post->content->photos[0]->alt_sizes[1]->url; ?>" alt="<?php echo $post->content->caption; ?>" />
				<div class="caption"><?php echo $post->content->caption; ?></div>
		    </div>
		    <div class="col-md-3">
		        <div class="btn-group pull-right">
		            <button type="button" class="btn btn-primary post-update" data-post-id="<?php echo $post->post_id; ?>">Update <span class="glyphicon glyphicon-refresh"></span></button>
		            <a href="http://www.tumblr.com/edit/<?php echo $post->post_id; ?>" target="_blank" class="btn btn-default">Edit <span class="glyphicon glyphicon-pencil"></span></a>
		        </div>
		    </div>
		</div>
		<?php $this->load->view('admin/posts/tags',array('post'=>$post)); ?>
	</div>
</div>