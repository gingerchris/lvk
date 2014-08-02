<section class="content audio">
	<div class="sub-heading-section">
		<h2><?php echo $post->content->caption; ?></h2>
		<p><i><?php echo date("F jS, Y",$post->post_timestamp); ?></i><p>
	</div>
	<section>
		<div>
			<?php echo $post->content->embed; ?>
		</div>
	</section>
</section>