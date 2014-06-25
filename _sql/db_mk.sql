-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 20, 2014 at 03:13 PM
-- Server version: 5.1.44
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_mk`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE IF NOT EXISTS `blog` (
  `post_id` bigint(32) NOT NULL,
  `post_slug` varchar(50) NOT NULL,
  `post_type` varchar(32) NOT NULL,
  `post_timestamp` bigint(20) NOT NULL,
  `post_content` blob NOT NULL,
  `post_category` int(1) NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `blog_tags`
--

CREATE TABLE IF NOT EXISTS `blog_tags` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` bigint(20) NOT NULL,
  `tag` varchar(56) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=106 ;
