<footer>
    Tags:
    <?php foreach ($post->content->tags as $tag): ?>
        <small>#<?php echo $tag; ?></small>
    <?php endforeach; ?>
</footer>