<section class="content photo">
	<div class="sub-heading-section">
		<h2>Photo</h2>
		<p><i><?php echo date("F jS, Y",$post->post_timestamp); ?></i><p>
		</div>
		<section>
			<div>
				<?php foreach ($post->content->photos as $photo): ?>
					<img src="<?php echo $photo->alt_sizes[1]->url; ?>" alt="<?php echo $post->content->caption; ?>" />
				<?php endforeach; ?>
				<?php echo $post->content->caption; ?>
			</div>
			<div class="cta-container"><a href="#" class="more">Read More</a></div>
		</section>
	</div>
</section>