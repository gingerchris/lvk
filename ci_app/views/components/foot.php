        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>
            window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>');
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=758951694122803";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>
        <?php if(isset($admin)): ?>
            <script src="<?php echo base_url('frontend/js/admin.js'); ?>"></script>
        <?php else: ?>
            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX3ZiPumONOy59nle-23F9iGyHdqfWABI&sensor=false&libraries=places"></script>
            <script>
            var base = "<?php echo base_url(); ?>";
            <?php if(isset($jsVars)): foreach($jsVars as $k=>$v): ?>
                    var <?php echo $k; ?> = <?php echo json_encode($v); ?>;
            <?php endforeach; endif; ?>
            </script>
            <script src="<?php echo base_url('frontend/js/frontend.js'); ?>"></script>
        <?php endif; ?>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var meta = <?php echo json_encode($meta); ?>;
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>