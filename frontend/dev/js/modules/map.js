function rad(x) {return x*Math.PI/180;}
var map = {
    infoWindow : new google.maps.InfoWindow(),
    bounds : new google.maps.LatLngBounds(),
    geocoder : new google.maps.Geocoder(),
    results : $('#mapResults'),
    init : function(){

        for (var i = 0; i < restaurants.length; i++) {
          map.bounds.extend( new google.maps.LatLng(restaurants[i].lat, restaurants[i].lng) );
        }

        var mapOptions = {
            center: map.bounds.getCenter(),
            zoom: 8
        };

        map.icon = new google.maps.MarkerImage(base + 'frontend/images/pin.png',
                // This marker is 129 pixels wide by 42 pixels tall.
                new google.maps.Size(36, 42),
                // The origin for this image is 0,0.
                new google.maps.Point(0,0),
                // The anchor for this image is the base of the flagpole at 18,42.
                new google.maps.Point(18, 42)
            );


        map.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        map.map.fitBounds(map.bounds);

        for (i = 0; i < restaurants.length; i++) {
            map.addMarker(i,restaurants[i]);
        }

        map.places = new google.maps.places.PlacesService(map.map);

        $('#restaurantSearch').on('keyup',function(){
            clearTimeout(map.searchTime);
            map.searchTime = setTimeout(function(){
                map.search($('#restaurantSearch').val());
            },500);
        });

        map.results.css('width',$('.col-md-4').innerWidth() - (parseInt($('.col-md-4').css('padding-left'))*2));
    },
    addMarker : function(key,info){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(info.lat, info.lng),
            map: map.map,
            info : info,
            icon : map.icon
        });
        restaurants[key].marker = marker;
        google.maps.event.addListener(marker, 'click', function(){
            map.clickMarker(marker,key);
        });
    },
    clickMarker : function(marker, i){
        $.Mustache.load(base+'/frontend/js/templates/map-window.mustache')
        .done(function () {
            var content = $.Mustache.render('infowindow',marker.info);
            map.infoWindow.setContent(content);
        });
        map.infoWindow.open(map.map,marker);
        var latLng = marker.getPosition(); // returns LatLng object
        map.map.setCenter(latLng);

    },
    search : function(searchTerm){
        var results = [];

        //search listed restaurants
        searchTerm = searchTerm.toLowerCase();
        for (var i = 0; i < restaurants.length; i++) {
            if(restaurants[i].name.toLowerCase().search(searchTerm) > -1){
                restaurants[i].key = i;
                results.push(restaurants[i]);
            }
        }

        //search google maps
        map.geocoder.geocode(
            {'address': searchTerm + ', UK'},
            function(res, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    for (i = 0; i < res.length; i++) {
                        results.push(res[i]);
                    }
                }
                if(results.length > 0){
                    map.showResults(results);
                }else{
                    map.noResults();
                }
            }
        );

    },
    showResults : function(results){
        map.results.html('');
        var res = [];
        for (var i = 0; i < results.length; i++) {
            var html, data, r = results[i];
            if(results[i].name){
                data = {
                    key : String(r.key),
                    copy : r.name + ', ' + r.address
                };
                res.push(data);
            }else{
                data = {
                    lat : r.geometry.location.d,
                    lng : r.geometry.location.e,
                    copy : r.formatted_address
                };
                res.push(data);
            }
        }
        $.Mustache.load(base+'/frontend/js/templates/map-window.mustache')
        .done(function () {
            map.results.mustache('searchResult',{'data':res});
            map.results.children('li').on('click',function(){
                map.clickResult($(this));
            });
        });
    },
    noResults : function(){
        map.results.html('<li class="noRes">No Results</li>');
    },
    clickResult : function(elem){
        if(elem.attr('data-r-key')){
            google.maps.event.trigger(restaurants[elem.attr('data-r-key')].marker, 'click', {
              latLng: new google.maps.LatLng(0, 0)
            });
        }else{
            var nearest = map.findNearest(elem.attr('data-lat'),elem.attr('data-lng'));
            var bounds = new google.maps.LatLngBounds ();
            google.maps.event.trigger(nearest.marker, 'click', {
              latLng: new google.maps.LatLng(0, 0)
            });
        }
        $('html, body').animate({
            scrollTop: $('#map').offset().top
         }, 500);
        map.results.html('');
    },
    findNearest : function(lat,lng){
        var R = 6371; // radius of earth in km
        var distances = [];
        var closest = -1;
        for( var i=0;i<restaurants.length; i++ ) {
            var mlat = restaurants[i].lat;
            var mlng = restaurants[i].lng;
            var dLat  = rad(mlat - lat);
            var dLong = rad(mlng - lng);
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c;
            distances[i] = d;
            console.log(d);
            if ( closest === -1 || d < distances[closest] ) {
                closest = i;
            }
        }
        return restaurants[closest];
    }
};
