<section class="content video">
	<div class="sub-heading-section">
		<h2>Video</h2>
		<p><i><?php echo date("F jS, Y",$post->post_timestamp); ?></i><p>
	</div>
		<section>
			<h2><?php echo $post->content->caption; ?></h2>
            <div><?php echo $post->content->player[2]->embed_code; ?></div>
			<div class="cta-container"><a href="#" class="more">Read More</a></div>
		</section>
	</div>
</section>