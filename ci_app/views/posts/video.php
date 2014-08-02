<section class="content video">
	<div class="sub-heading-section">
		<h2><?php echo pull_title($post->content->caption); ?></h2>
		<p><i><?php echo date("F jS, Y",$post->post_timestamp); ?></i><p>
	</div>
	<section>
        <div><?php echo $post->content->player[2]->embed_code; ?></div>
        <?php echo pull_body($post->content->caption); ?>
	</section>
</section>