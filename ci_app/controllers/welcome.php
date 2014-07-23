<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends My_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function __construct() {
	    //initialise base
	    parent::__construct();
	    $this->data = array();
	    $this->data['meta'] = array();
	    $this->load->helper('my_display_helper');
	}

	public function index()
	{

		$this->load->model('blog_model');

		$this->data['gallery'] = $this->blog_model->get_posts(0,3,0);
		$this->data['blog'] = array_merge($this->blog_model->get_posts(0,1),$this->blog_model->get_posts(0,-1));

		$a = array_slice($this->blog_model->get_posts(0,2),0,1);
		$this->data['about'] = $a[0];

		$this->data['menu'] = $this->blog_model->get_posts(0,4,0);


		$this->load->vars($this->data);

		$this->load->view('home');
	}

	public function posts($page){

	}

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */