var updatePost = function(){
    var postID = $(this).attr('data-post-id'), target = $(this);
    console.log(postID);
    target.addClass('btn-danger');
    var jqxhr = $.ajax( meta.base + "admin/blog/update/post/" + postID )
      .done(function( result ) {
        target.removeClass('btn-danger');
        $('#blog-' + postID).replaceWith( result );
        setTimeout(function(){
            $('#blog-' + postID).removeClass('panel-danger');
        },150);
      });
};

var deletePost = function(){
    var postID = $(this).attr('data-post-id'), target = $(this);
    target.addClass('btn-warning');
    var jqxhr = $.ajax( meta.base + "admin/blog/delete/post/" + postID )
      .done(function( result ) {
        target.removeClass('btn-danger');
        $('#blog-' + postID).fadeOut(function(){
          $('#blog-' + postID).remove();
        });
      });
};

var updateAll = function(){
    var target = $(this);
    var jqxhr = $.ajax( meta.base + "admin/blog/update/" + meta.category )
      .done(function( result ) {
        target.removeClass('btn-danger');
        $('#blog-content').replaceWith( result );
      });
};


$(function(){
    $(document).on('click','.post-update',updatePost);
    $(document).on('click','.post-delete',deletePost);
    $(document).on('click','.blog-update',updateAll);
});