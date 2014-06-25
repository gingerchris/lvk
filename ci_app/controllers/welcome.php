<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

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
	    $this->load->helper('RALPH_display_helper');
	}

	public function index()
	{

		$this->load->model('blog_model');

		$this->data['carousel'] = $this->blog_model->get_posts(0,3);

		$this->load->view('components/head',$this->data);
		$this->load->view('components/header',$this->data);

		$this->load->view('components/carousel',$this->data);
		$this->load->view('components/small-features',$this->data);

		$this->load->view('components/footer',$this->data);
		$this->load->view('components/foot',$this->data);
	}

	public function malaysia()
	{

		$this->load->view('components/head',$this->data);
		$this->load->view('components/header',$this->data);

		$this->load->view('malaysia',$this->data);

		$this->load->view('components/footer',$this->data);
		$this->load->view('components/foot',$this->data);
	}

	public function contact()
	{

		$this->load->view('components/head',$this->data);
		$this->load->view('components/header',$this->data);

		$this->load->view('contact',$this->data);

		$this->load->view('components/footer',$this->data);
		$this->load->view('components/foot',$this->data);
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */