<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Members extends CI_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     *      http://example.com/index.php/welcome
     *  - or -
     *      http://example.com/index.php/welcome/index
     *  - or -
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
    }

    public function index()
    {
        $this->load->view('components/head',$this->data);
        $this->load->view('components/header',$this->data);

        $this->load->view('members',$this->data);

        $this->load->view('components/footer',$this->data);
        $this->load->view('components/foot',$this->data);
    }

    public function recipe(){
        $this->load->view('components/head',$this->data);
        $this->load->view('components/header',$this->data);

        $this->load->view('recipe-view',$this->data);

        $this->load->view('components/footer',$this->data);
        $this->load->view('components/foot',$this->data);
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */