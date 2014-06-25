$(function(){

    $('.toggle-delete').on('click',function(){
        $(this).parent().toggleClass('delete');
    });

    if($('#search').length > 0){
       search.init();
    }

    if($('#map').length > 0){
        google.maps.event.addDomListener(window, 'load', map.init());
    }

    if($('.fb-comments').length > 0){
        $('.fb-comments').attr('data-width',$('.fb-comments').parent().width());
    }



});