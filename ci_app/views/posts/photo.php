<section class="content photo">
	<div class="sub-heading-section">
		<h2><?php echo pull_title($post->content->caption); ?></h2>
		<p><i><?php echo date("F jS, Y",$post->post_timestamp); ?></i><p>
	</div>
	<section>
		<div>
			<?php foreach ($post->content->photos as $photo): ?>
				<img src="<?php echo $photo->alt_sizes[1]->url; ?>" alt="<?php echo pull_title($post->content->caption); ?>" />
			<?php endforeach; ?>
			<?php echo pull_body($post->content->caption); ?>
		</div>
	</section>
</section>