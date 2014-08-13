<div class="panel panel-primary <?php if(isset($sticky) && $sticky): ?>panel-success<?php endif; ?> <?php if(isset($newPost) && $newPost): ?>panel-danger<?php endif; ?>" id="blog-<?php echo $post->post_id; ?>">
    <div class="panel-heading clearfix">
        <h3 class="panel-title">Chat</h3>
    </div>
    <div class="panel-body jumbotron">
        <div class="row">
            <div class="col-md-12">
                <?php $this->load->view('admin/buttons',array('id'=>$post->post_id)); ?>

                <?php foreach($post->content->dialogue as $chat): ?>
                    <p><strong><?php echo $chat->label;?></strong> <?php echo $chat->phrase; ?></p>
                <?php endforeach; ?>
            </div>
        </div>
       <?php $this->load->view('admin/posts/tags',array('post'=>$post)); ?>
    </div>
</div>