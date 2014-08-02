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

		//get sticky posts first
		$this->data['blog'] = $this->blog_model->get_posts(0,1);
		//if there aren't enough stickies to fill the blog module, load enough recent posts to fill it
		if(count($this->data['blog']) < $this->config->item('blog_count')){
			$remain = $this->config->item('blog_count') - count($this->data['blog']);
			$this->data['blog'] = array_merge($this->data['blog'],$this->blog_model->get_posts(0,-1,$remain));
		}
		

		$a = array_slice($this->blog_model->get_posts(0,2),0,1);
		$this->data['about'] = $a[0];

		$this->data['menu'] = $this->blog_model->get_posts(0,4,0);


		$this->load->vars($this->data);

		$this->load->view('home');
	}

	public function contact(){

		$body = "Enquiry recieved ".date('l jS \of F Y h:i:s A');
		$body .= "From : ".$this->input->post('name');
		$body .= "\n Email : ".$this->input->post('email');
		
		if($this->input->post('tel')){
			$body .= "\n Tel : ".$this->input->post('tel');
		}

		if($this->input->post('enquiry_type') == "enquiry"){
			$body .= "\n Enquiry : ".$this->input->post('details');
		}else{
			$body .= "\n Date Required : ".$this->input->post('date_required');
			$body .= "\n Cake Type : ".$this->input->post('cake_type');
			$body .= "\n Quantity : ".$this->input->post('quantity');
			$body .= "\n Additional Details : ".$this->input->post('additional_info');
		}

		$this->load->library('email');

		$this->email->from('website@litlevanillakichen.co.uk', 'Website Enquiry');
		$this->email->to('chrisdowling84@gmail.com'); 
		$this->email->reply_to($this->input->post('email'));

		$this->email->subject('New Enquiry from littlevanillakitchen.co.uk');
		$this->email->message($body);	

		$this->email->send();
		echo $this->email->print_debugger();


	}

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */