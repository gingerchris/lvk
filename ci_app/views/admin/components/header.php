<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><?php echo $this->config->item('site_title');?></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#" class=" dropdown-toggle <?php if($page == "blog"): ?>active<?php endif; ?>" data-toggle="dropdown">Blog<b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="<?php echo base_url('admin/blog'); ?>">All Posts</a></li>
            <li class="list-group-item-success"><a href="<?php echo base_url('admin/blog/1'); ?>">Stickied Posts</a></li>
            <li class="list-group-item-info"><a href="<?php echo base_url('admin/blog/2'); ?>">About Page</a></li>
            <li class="list-group-item-warning"><a href="<?php echo base_url('admin/blog/3'); ?>">Gallery Posts</a></li>
            <li class="list-group-item-danger"><a href="<?php echo base_url('admin/blog/4'); ?>">Menu Posts</a></li>
            <li class="list-group-item-success"><a href="<?php echo base_url('admin/blog/5'); ?>">FAQ Posts</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>