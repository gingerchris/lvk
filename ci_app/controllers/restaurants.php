<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Restaurants extends CI_Controller {

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
        $this->data['meta'] = array();
        $this->load->helper('RALPH_display_helper');
    }

    public function index()
    {
        $this->load->model('blog_model');

        $this->data['carousel'] = $this->blog_model->get_posts(0,3);

        $this->data['jsVars']['restaurants'] = array(
            array(
                'name' => 'Puji Puji',
                'address' => '122 Balls Pond Road',
                'postcode' => 'N1 4AE',
                'img' => 'http://www.malaysiakitchen.co.uk/cache/com_zoo/images/restaurants_56_0_popup_20c789cebf146250bb9768a393c665c4.jpg',
                'tel' => '0795 267 4626',
                'link' => 'http://pujipujirestaurant.co.uk',
                'lat' => '51.546659',
                'lng' => '-0.083325'
            ),
            array(
                'name' => 'Suka @ The Sanderson',
                'address' => '50 Berners Street',
                'postcode' => 'W1T 3NG',
                'lat'   => '51.51741',
                'lng'   => '-0.136996',
            )
        );

        $this->load->view('components/head',$this->data);
        $this->load->view('components/header',$this->data);

        $this->load->view('components/carousel',$this->data);
        $this->load->view('restaurants',$this->data);

        $this->load->view('components/footer',$this->data);
        $this->load->view('components/foot',$this->data);
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */