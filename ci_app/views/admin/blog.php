<div class="row" id="blog-content">
	<div class="col-md-10 col-md-offset-1">
		<div class="clearfix">
			<h3>Blog Posts</h3>
			<button type="button" class="btn btn-primary pull-right blog-update">Update All <span class="glyphicon glyphicon-refresh"></span></button>
		</div>

		<?php $this->load->view('admin/components/pager', $pagination); ?>

		<div class="list-group">
			<?php if(isset($posts) && count($posts)>0):
					foreach($posts as $post): ?>
				<?php $this->load->view('admin/posts/'.$post->post_type,array('post'=>$post)); ?>
			<?php endforeach;
			else: ?>

				<div class="jumbotron">
				    <h1>No Posts Found!</h1>
				    <?php if($category_tag): ?>
						<p>Tag your posts with '<?php echo $category_tag; ?>' and click Update All to fetch new posts.</p>
						<p><button type="button" class="btn btn-primary blog-update">Update All <span class="glyphicon glyphicon-refresh"></span></button></p>
					<?php else: ?>
						<p>The category you're looking for doesn't even exist!</p>
					<?php endif; ?>
				</div>

			<?php endif; ?>
		</div>

		<?php $this->load->view('admin/components/pager', $pagination); ?>

	</div>
</div>