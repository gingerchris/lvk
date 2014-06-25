<h1>Restaurant Finder</h1>
<p class="intro narrow">Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  </p>
<div class="row">
    <div class="col-md-12">
        <div id="map"></div>
        <div id="map-search" class="col-md-4 col-md-offset-4">
            <label for="restaurantSearch">Search Restaurants</label>
            <input type="text" id="restaurantSearch" class="input input-alt form-control" placeholder="Enter place or restaurant name" />
            <ul id="mapResults"></ul>
        </div>
    </div>
</div>
<div class="row separate">
    <div class="col-md-8">
        <div class="fb-comments" data-href="http://malaysiakitchen.com/restaurants" data-numposts="5" data-colorscheme="light"></div>
    </div>
    <div class="col-md-4">
        <div class="contactbox">
            <img src="<?php echo base_url('frontend/images/contact.png'); ?>" alt="contact us" />
            <h2>Contact Us</h2>
            <a href="<?php echo base_url('contact'); ?>"></a>
        </div>
    </div>
</div>