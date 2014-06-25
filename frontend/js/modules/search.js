var search = {
    url: "/mk/search-dummy.json",
    resultsPerPage: 2,
    results: [],
    elem: {
        resultContainer: $("#results"),
        pagContainer: $("#search-paginate ol"),
        searchBox: $("#search"),
        alt: $("#random")
    },
    init: function() {
        search.initialContent = search.elem.resultContainer.html(), search.elem.searchBox.on("focus", function() {
            $(this).addClass("active"), search.elem.alt.removeClass("active").addClass("inactive");
        }).on("keyup", function(e) {
            if (e.which <= 90 && e.which >= 48) {
                clearTimeout(search.timer);
                var val = $(this).val();
                val.length > 2 ? (search.elem.searchBox.addClass("spinner"), search.timer = setTimeout(function() {
                    search.search(val);
                }, 400)) : search.shortTerm();
            }
        }).on("blur", function() {
            0 === $(this).val().length && ($(this).removeClass("active"), $("#random").addClass("active").removeClass("inactive"), 
            search.reset());
        });
    },
    show: function() {
        $(".search-result").each(function(k, v) {
            var img = $("<img src='/mk/frontend/dev/images/" + $(v).attr("data-image") + "' />");
            img.appendTo($(v)), setTimeout(function() {
                var h = img.height();
                $(v).animate({
                    height: h + "px"
                }, 500).addClass("display"), search.elemHeight = h + 20;
            }, 500);
        });
    },
    reset: function() {
        search.elem.resultContainer.html(search.initialContent);
    },
    noResults: function() {
        search.elem.resultContainer.html(""), search.elem.pagContainer.html(""), $.Mustache.load("/mk/frontend/js/templates/search-result.mustache").done(function() {
            search.elem.resultContainer.mustache("no-result");
        });
    },
    shortTerm: function() {
        search.elem.resultContainer.html(""), search.elem.pagContainer.html(""), $.Mustache.load("/mk/frontend/js/templates/search-result.mustache").done(function() {
            search.elem.resultContainer.mustache("no-term");
        });
    },
    search: function(term) {
        console.log(term), $.getJSON(search.url, {
            searchTerm: term
        }).done(function(data) {
            if (search.elem.searchBox.removeClass("spinner"), data.results.length > 0) {
                var totalResults = data.results.length;
                search.pages = Math.ceil(totalResults / search.resultsPerPage);
                for (var i = 0, j = totalResults; j > i; i += search.resultsPerPage) search.results.push(data.results.slice(i, i + search.resultsPerPage));
                search.append(0);
            } else search.noResults();
        });
    },
    append: function(page) {
        search.elem.resultContainer.html(""), search.elem.pagContainer.html(""), $.Mustache.load("/mk/frontend/js/templates/search-result.mustache").done(function() {
            search.elem.resultContainer.mustache("search-result", search.results[page]);
            for (var i = 0; i < search.pages; i++) {
                var data = {
                    page: i
                };
                i === page && (data.active = !0), search.elem.pagContainer.mustache("pager", data);
            }
            search.show(), search.paginate();
        });
    },
    paginate: function() {
        search.elem.pagContainer.children("li").on("click", function() {
            var page = $(this).attr("data-page");
            $(this).addClass("active").siblings().removeClass("active"), search.changePage(page);
        });
    },
    changePage: function(page) {
        search.elem.resultContainer.animate({
            height: 0
        }, 500, function() {
            search.append(Number(page)), search.show(), search.elem.resultContainer.animate({
                height: search.resultsPerPage * search.elemHeight + "px"
            }, 500), $("html, body").animate({
                scrollTop: search.elem.resultContainer.offset().top
            }, 500);
        });
    },
    timer: 0
};