<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// This is the common Frontend Controller which others inherit from
// it handles basic setup, session check and can
// provide some useful common functions

class Ralph_Controller extends CI_Controller {

    public function __construct() {
        //initialise base
        parent::__construct();

        $this->data = array();

        $this->data['ogTags'] = array(
        	'og:image'		=> base_url('frontend/image/fb.jpg'),
        	'og:title'		=> '',
        	'og:url'		=> base_url(),
        	'og:description'=> '',
        	'og:site_name'	=> '',
        	'og:type'		=> 'website',
        	'fb:app_id'		=> $this->config->item('fb_app_id')
        );

        $this->data['meta'] = array(
        	'title'			=> '',
        	'description'	=> '',
        	'fbshare'		=> '',
        	'tweet'			=> '',
        	'base'			=> base_url(),
        );

    }

}