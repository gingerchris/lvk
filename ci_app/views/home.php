<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Little Vanilla Kitchen - Bespoke Cakes and Cupcakes.</title>
	<meta name="description" content="Little Vanilla Kitchen specialises in making delicious, beautiful cakes.">

	<meta property="og:title" content="Little Vanilla Kitchen - Bespoke Cakes and Cupcakes."/>
	<meta property="og:type" content="website"/>
	<meta property="og:image" content="<?php echo base_url('assets_min/img/1.jpg'); ?>"/>
	<meta property="og:description" content="Little Vanilla Kitchen specialises in making delicious, beautiful cakes."/>

	<meta name="viewport" content="width=device-width, user-scalable=no">

	<link href="<?php echo base_url(); ?>assets_min/css/styles.css" rel="stylesheet" type="text/css" media="all"/>
	<link href="<?php echo base_url(); ?>assets_min/css/foundation-icons.min.css" rel="stylesheet" type="text/css" media="all"/>

	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?php echo base_url('assets_min/icons'); ?>/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo base_url('assets_min/icons'); ?>/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo base_url('assets_min/icons'); ?>/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo base_url('assets_min/icons'); ?>/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="60x60" href="<?php echo base_url('assets_min/icons'); ?>/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?php echo base_url('assets_min/icons'); ?>/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="<?php echo base_url('assets_min/icons'); ?>/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?php echo base_url('assets_min/icons'); ?>/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="<?php echo base_url('assets_min/icons'); ?>/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="<?php echo base_url('assets_min/icons'); ?>/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="<?php echo base_url('assets_min/icons'); ?>/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="<?php echo base_url('assets_min/icons'); ?>/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="<?php echo base_url('assets_min/icons'); ?>/favicon-128.png" sizes="128x128" />
	<meta name="application-name" content="&nbsp;"/>
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="<?php echo base_url('assets_min/icons'); ?>/mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="<?php echo base_url('assets_min/icons'); ?>/mstile-70x70.png" />
	<meta name="msapplication-square150x150logo" content="<?php echo base_url('assets_min/icons'); ?>/mstile-150x150.png" />
	<meta name="msapplication-wide310x150logo" content="<?php echo base_url('assets_min/icons'); ?>/mstile-310x150.png" />
	<meta name="msapplication-square310x310logo" content="<?php echo base_url('assets_min/icons'); ?>/mstile-310x310.png" />

</head>
<body class="wrapper">
	<div id="superContainer animted fadeIn">
		<div id="fullpage">
			<nav class="nav" id="nav">
				<ul>
					<li data-menuanchor="about"><a href="#about">About</a></li>
					<li data-menuanchor="gallery"><a href="#gallery">Gallery</a></li>
					<li data-menuanchor="lvk" class="logo"><a href="#lvk"><img src="<?php echo base_url(); ?>assets_min/img/lvk-logo.png"></a></li>
					<li data-menuanchor="news"><a href="#news">News</a></li>
					<li data-menuanchor="contact"><a href="#contact">Contact</a></li>
				</ul>
			</nav>

			<div class="section active" id="section0">
				<!--div class="big-logo"><img src="public/img/lvk-logo.png"></div-->
				<div class="intro-box">
					<p class="strapline">Bespoke cakes for all occasions</p>
				</div>
				<div class="hero-image"></div>
					<!--section class="content first">
					   <ul class="cb-slideshow">
			            <li><span>Image 01</span></li>
			            <li><span>Image 02</span></li>
			            <li><span>Image 03</span></li>
			            <li><span>Image 01</span></li>
			            <li><span>Image 02</span></li>
			            <li><span>Image 03</span></li>
			        </ul>
			    </section-->
			</div>
			<div class="section" id="section1">
				<h1 class="heading">About Little Vanilla Kitchen</h1>
				<section class="content">
					<h2 class="sub-heading">Little Vanilla Kitchen specialises in making delicious, beautiful cakes.</h2>
					<section>
						<div>
									<?php echo $about->content->body; ?>
						</div>
						<div class="cta-container"><a href="#" data-featherlight="faq" class="more">Read the FAQ's</a></div>
					</section>
				</section>
			</div>
			<div class="section" id="section2">
				<h1 class="heading">Gallery</h1>
				<section class="content">
					<div class="sub-heading-section">
						<h2 class="sub-heading">This gallery features a small selection of our previous designs. All our designs are bespoke so if you have an idea in mind and dont see what you are looking for please do not hesitate to contact us.</h2>
					</div>
					<section>
						<div class="gallery">
						<?php foreach ($gallery as $k=>$g): if($k < $this->config->item('gallery_count')):?>
							<div class="gallery-item">
								<a href="<?php echo $g->content->photos[0]->alt_sizes[0]->url; ?>" class="gallery">
									<img class="gallery-image" src="<?php echo $g->content->photos[0]->alt_sizes[2]->url; ?>" alt="<?php echo strip_tags($g->content->caption); ?>" />
									<p class="gallery-caption"><?php echo strip_tags($g->content->caption); ?></p>
								</a>
							</div>
						<?php else: ?>
								<a href="<?php echo $g->content->photos[0]->alt_sizes[0]->url; ?>" class="gallery"><img src="#" title="<?php echo strip_tags($g->content->caption); ?>" /></a>
						<?php endif; endforeach; ?>
						</div>
						<div class="cta-container"><a href="#" data-featherlight="menu" class="more" >Check Out The Menu</a></div>
					</section>
				</section>
			</div>
			<div class="section" id="section3">
				<h1 class="heading">Latest from the Blog</h1>
				<?php foreach($blog as $post){
					$this->load->view('posts/'.$post->post_type, array('post'=>$post, 'category'=>'blog'));
				}?>

				<div class="cta-container"><a href="#" class="more">Read More on our Tumblr</a></div>

			</div>
				<div class="section" id="section4">
					<h1 class="heading">Contact</h1>
					<section class="content last">
						<div class="sub-heading">
							<h2>Sub heading for contact</h2>
						</div>
						<section>
							<div>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.</p>
								<fieldset>
									<form action="<?php echo base_url(); ?>contact" method="POST" id="contact_form">
										<p>
											<label for="text_field">Name</label>
											<input type="text" id="name" name="name" required>
										</p>
										<p>
											<label for="text_area">Email</label>
											<input type="email" id="email" name="email" required>
										</p>
										<p>
											<label for="text_area">Telephone (optional)</label>
											<input type="tel" id="tel" name="tel">
										</p>
										<p>
											<label for="enquiry_type">Enquiry type:</label>
											<label>
												<input type="radio" class="radio" name="enquiry_type" value="enquiry" checked> General enquiry
											</label>
											<label>
												<input type="radio" class="radio" name="enquiry_type" value="order"> Make an order
											</label>
										</p>
										<div id="order-only" class="hidden extra-info">
											<p>
												<label for="date_required">Date required</label>
												<input type="date" name="date_required" />
											</p>
											<p>
												<label for="cake_type">Cake type</label>
												<input type="text" name="cake_type" />
											</p>
											<p>
												<label for="quantity">Quantity</label>
												<input type="number" name="quantity" />
											</p>
											<p>
												<label for="additional_info">Additional Details</label>
												<input type="text" name="additional_info" placeholder="eg. colour, theme" />
											</p>
											<p><i>Please note no orders are final until confirmed by us via email.</i></p>
										</div>
										<div id="enquiry-only" class="extra-info">
											<p>
												<label for="details">Details of Enquiry</label>
												<textarea name="details"></textarea>
											</p>
										</div>
									<div class="cta-container"><input class="button" type="submit" value="Send Enquiry"></div>
									</form>
								</fieldset>
							</div>
						</section>
						<div class="sub-heading">
							<h2>Find us online</h2>
						</div>
						<ul class="social-links">
							<li><a href="#"><i class="fi-social-twitter"></i></a></li>
							<li><a href="#"><i class="fi-social-facebook"></i></a></li>
							<li><a href="#"><i class="fi-mail"></i></a></li>
						</ul>
					</section>
				</div>

			</div>
		</div>

	</body>
	<link href='http://fonts.googleapis.com/css?family=Arapey:400italic,400' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="<?php echo base_url(); ?>assets_min/js/frontend.js"></script>
</html>