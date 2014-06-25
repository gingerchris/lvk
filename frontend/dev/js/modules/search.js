var search = {
    url : base + "/search-dummy.json",
    resultsPerPage : 2,
    results : [],
    elem : {
        resultContainer : $('#results'),
        pagContainer : $('#search-paginate ol'),
        searchBox : $('#search'),
        alt : $('#random')
    },
    init : function(){
        search.initialContent = search.elem.resultContainer.html();
        search.elem.searchBox.on('focus',function(){
            $(this).addClass('active');
            search.elem.alt.removeClass('active').addClass('inactive');
        })
        .on('keyup',function(e){
            if (e.which <= 90 && e.which >= 48){
                clearTimeout(search.timer);
                var val = $(this).val();
                if(val.length > 2){
                    search.elem.searchBox.addClass('spinner');
                    search.timer = setTimeout(function(){
                        search.search(val);
                    },400);
                }else{
                    search.shortTerm();
                }
            }
        })
        .on('blur',function(){
            //if no search term, return to previous view
            if($(this).val().length === 0){
                $(this).removeClass('active');
                $('#random').addClass('active').removeClass('inactive');
                search.reset();
            }
        });
    },
    show : function(){
        $('.search-result').each(function(k,v){
            var img = $("<img src='"+ base + "frontend/dev/images/" + $(v).attr('data-image') + "' />");
            img.appendTo($(v));
            setTimeout(function(){
                var h = img.height();
                $(v).animate({'height':h+'px'},500).addClass('display');
                search.elemHeight = h + 20;
            },500);
        });
    },
    reset : function(){
        search.elem.resultContainer.html(search.initialContent);
    },
    noResults : function(){
        search.elem.resultContainer.html('');
        search.elem.pagContainer.html('');
        $.Mustache.load(base + '/frontend/js/templates/search-result.mustache')
        .done(function () {
            search.elem.resultContainer.mustache('no-result');
        });
    },
    shortTerm : function(){
        search.elem.resultContainer.html('');
        search.elem.pagContainer.html('');
        $.Mustache.load(base + '/frontend/js/templates/search-result.mustache')
        .done(function () {
            search.elem.resultContainer.mustache('no-term');
        });
    },
    search : function(term){
        console.log(term);
        $.getJSON( search.url, {
            searchTerm : term
        })
        .done(function( data ) {
            search.elem.searchBox.removeClass('spinner');
            if(data.results.length > 0){
                var totalResults = data.results.length;
                search.pages = Math.ceil(totalResults/search.resultsPerPage);
                for (var i = 0, j = totalResults; i<j; i+=search.resultsPerPage) {
                    search.results.push(data.results.slice(i,i+search.resultsPerPage));
                }
                search.append(0);
            }else{
                search.noResults();
            }
        });
    },
    append : function(page){
        //clear any old content/results
        search.elem.resultContainer.html('');
        search.elem.pagContainer.html('');

        //show the first page
        $.Mustache.load(base + '/frontend/js/templates/search-result.mustache')
        .done(function () {
            search.elem.resultContainer.mustache('search-result', search.results[page]);
            for ( var i = 0; i < search.pages; i++ ) {
                var data = { "page" : i};
                if(i === page){
                    data['active'] = true;
                }
                search.elem.pagContainer.mustache('pager',data);
            }
            search.show();
            search.paginate();
        });
    },
    paginate : function(){
        search.elem.pagContainer.children('li').on('click',function(){
            var page = $(this).attr('data-page');
            $(this).addClass('active').siblings().removeClass('active');
            search.changePage(page);
        });
    },
    changePage : function(page){
        search.elem.resultContainer.animate({'height':0},500,function(){
            search.append(Number(page));
            search.show();
            search.elem.resultContainer.animate({'height':(search.resultsPerPage * search.elemHeight) + 'px'},500);
            $('html, body').animate({
                scrollTop: search.elem.resultContainer.offset().top
             }, 500);
        });
    } ,
    timer : 0
};