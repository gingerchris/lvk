<section class="content chat">
	<div class="sub-heading-section">
		<h2><?php echo $post->content->title; ?></h2>
		<p><i><?php echo date("F jS, Y",$post->post_timestamp); ?></i><p>
		</div>
		<section>
			<div>
				<?php foreach($post->content->dialogue as $chat): ?>
                    <p><strong><?php echo $chat->label;?></strong> <?php echo $chat->phrase; ?></p>
                <?php endforeach; ?>
			</div>
			<div class="cta-container"><a href="#" class="more">Read More</a></div>
		</section>
	</div>
</section>