<!--CAROUSEL-->
<div id="feature-box" class="carousel slide feature" data-ride="carousel">

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <?php foreach($carousel as $i=>$item): ?>
    <div class="item <?php if($i==0){ echo "active"; } ?>" data-item-index="<?php echo $i; ?>">
      <img src="<?php echo $item->content->photos[0]->alt_sizes[0]->url; ?>" alt="...">
      <div class="carousel-caption black-fade">
        <?php echo split_caption($item->content->caption); ?>
        <div class="red-fade"></div>
      </div>
    </div>
    <?php endforeach; ?>


  </div>

    <!-- Indicators -->
    <ol class="carousel-indicators">
      <?php foreach($carousel as $i=>$item): ?>
        <li data-target="#feature-box" data-slide-to="<?php echo $i;?>" class="<?php if($i==0){ echo "active"; } ?>"></li>
      <?php endforeach; ?>
    </ol>

</div>
<!-- /--Carousel -->

<hr />