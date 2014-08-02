<section class="content link">
	<div class="sub-heading-section">
		<h2>Link</h2>
		<p><i><?php echo date("F jS, Y",$post->post_timestamp); ?></i><p>
	</div>
	<section>
		<h2>
			<a href="<?php echo $post->content->url; ?>" target="_blank"><?php echo $post->content->title; ?></a>
		</h2>
		<div>
			<?php echo $post->content->description; ?>
		</div>
	</section>
</section>