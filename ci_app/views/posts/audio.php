<section class="content audio">
	<div class="sub-heading-section">
		<h2><?php echo $post->content->caption; ?></h2>
		<p><i><?php echo date("F jS, Y",$post->post_timestamp); ?></i><p>
		</div>
		<section>
			<div>
				<?php echo $post->content->embed; ?>
			</div>
			<div class="cta-container"><a href="#" class="more">Read More</a></div>
		</section>
	</div>
</section>