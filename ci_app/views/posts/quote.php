<section class="content quote">
	<div class="sub-heading-section">
		<p><i><?php echo date("F jS, Y",$post->post_timestamp); ?></i><p>
	</div>
		<section>
			<h2><?php echo $post->content->text; ?></h2>
			<div>
                <p>- <?php echo $post->content->source; ?></p>
			</div>
			<div class="cta-container"><a href="#" class="more">Read More</a></div>
		</section>
	</div>
</section>