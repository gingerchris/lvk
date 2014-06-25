<ul class="pager">
  <li class="previous <?php if(!$prev): ?>disabled<?php endif; ?>"><a href="<?php echo base_url($prev);?>">&larr; Newer</a></li>
  <li class="next <?php if(!$next): ?>disabled<?php endif; ?>"><a href="<?php echo base_url($next);?>">Older &rarr;</a></li>
</ul>