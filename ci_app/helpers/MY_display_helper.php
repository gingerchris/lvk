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

// --------------------------------------------------------------------

/**
 * Pull title
 *
 * Take a post body and returns the first line, without HTML tags
 *
 * @param string - The HTML string containing the post body
 * @return object
 */
if ( ! function_exists('pull_title'))
{
 function pull_title($string)
 {
 	$lines = explode("\n",$string);
  	return strip_tags($lines[0]);
 }
}

// --------------------------------------------------------------------

/**
 * Pull body
 *
 * Take a post body and returns everything but the first line
 *
 * @param string - The HTML string containing the post body
 * @return object
 */
if ( ! function_exists('pull_body'))
{
 function pull_body($string)
 {
 	$lines = explode("\n",$string);
 	array_shift($lines);
  	return implode("\n",$lines);
 }
}