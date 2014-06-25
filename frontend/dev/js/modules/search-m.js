define(function(require) {
    // Ensure jQuery is required as it will likely be used in the carousel
    //var $ = require('jquery');

    // Define an object and then return it for instantiation later
    var Search = function() {
        this.url = "/mk/search-dummy.json";
        this.resultsPerPage = 2;
        this.results = [];
        this.elem = {
            resultContainer : $('#results'),
            pagContainer : $('#search-paginate ol'),
            searchBox : $('#search'),
            alt : $('#random')
        };
    };

    Search.prototype = {

    };

    return Search;
});