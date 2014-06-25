define(function() {
    var Search = function() {
        this.url = "/mk/search-dummy.json", this.resultsPerPage = 2, this.results = [], 
        this.elem = {
            resultContainer: $("#results"),
            pagContainer: $("#search-paginate ol"),
            searchBox: $("#search"),
            alt: $("#random")
        };
    };
    return Search.prototype = {}, Search;
});