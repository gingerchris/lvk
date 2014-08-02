<section class="content faq">
	<section>
		<div>
			<?php foreach($post->content->dialogue as $chat): ?>
                <p><strong><?php echo $chat->label;?></strong> <?php echo $chat->phrase; ?></p>
            <?php endforeach; ?>
		</div>
	</section>
</section>