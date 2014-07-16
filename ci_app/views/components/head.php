<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="<?php echo base_url('assets/css/normalize.css'); ?>">
        <?php if(isset($admin)): ?>
            <link rel="stylesheet" href="<?php echo base_url('assets/css/admin.css'); ?>">
        <?php else: ?>
            <link rel="stylesheet" href="<?php echo base_url('assets/css/styles.css'); ?>">
        <?php endif; ?>
        <script src="<?php echo base_url('assets/js/vendor/modernizr-2.6.2.min.js'); ?>"></script>
    </head>
    <body>
        <div id="fb-root"></div>