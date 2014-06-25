<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('split_caption'))
{

    function split_caption($caption)
    {
        $c = explode("\n", $caption);
        foreach($c as $k=>$i){
            $c[$k] = strip_tags($i);
        }
        $title = array_shift($c);
        return "<h2>".$title."</h2><p class='narrow'>".implode(' ',$c)."</p>";
    }

}