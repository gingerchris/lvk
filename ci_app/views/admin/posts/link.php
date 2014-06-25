<div class="panel panel-primary <?php if($post->sticky): ?>panel-success<?php endif; ?> <?php if(isset($newPost) && $newPost): ?>panel-danger<?php endif; ?>" id="blog-<?php echo $post->post_id; ?>">
    <div class="panel-heading clearfix">
        <h3 class="panel-title">Link</h3>
    </div>
    <div class="panel-body jumbotron">
        <div class="row">
            <div class="col-md-9">
                <h2><a href="<?php echo $post->content->url; ?>" target="_blank"><?php echo $post->content->title; ?></a></h2>
                <div class="caption"><?php echo $post->content->description; ?></div>
            </div>
            <div class="col-md-3">
                <div class="btn-group pull-right">
                    <button type="button" class="btn btn-primary post-update" data-post-id="<?php echo $post->post_id; ?>">Update <span class="glyphicon glyphicon-refresh"></span></button>
                    <a href="http://www.tumblr.com/edit/<?php echo $post->post_id; ?>" target="_blank" class="btn btn-default">Edit <span class="glyphicon glyphicon-pencil"></span></a>
                </div>
            </div>
        </div>
        <?php $this->load->view('admin/posts/tags',array('post'=>$post)); ?>
    </div>
</div>