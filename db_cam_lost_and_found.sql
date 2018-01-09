-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 28, 2017 at 05:27 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_cam_lost_and_found`
--

-- --------------------------------------------------------

--
-- Table structure for table `laf_advertising`
--

CREATE TABLE `laf_advertising` (
  `id` int(11) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `provider_name` varchar(255) NOT NULL,
  `tracking_code_large` varchar(500) NOT NULL,
  `tracking_code_medium` varchar(500) NOT NULL,
  `tracking_code_small` varchar(500) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_advertising`
--

INSERT INTO `laf_advertising` (`id`, `slug`, `provider_name`, `tracking_code_large`, `tracking_code_medium`, `tracking_code_small`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Bottom', 'Google Absence', '<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<!-- large970x90-visualText -->\r\n<ins class=\"adsbygoogle\"\r\n	 style=\"display:inline-block;width:970px;height:90px\"\r\n	 data-ad-client=\"ca-pub-2461204719026790\"\r\n	 data-ad-slot=\"8943644949\"></ins>\r\n<script>\r\n	(adsbygoogle = window.adsbygoogle || []).push({});\r\n</script>', '<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<!-- large970x90-visualText -->\r\n<ins class=\"adsbygoogle\"\r\n	 style=\"display:inline-block;width:970px;height:90px\"\r\n	 data-ad-client=\"ca-pub-2461204719026790\"\r\n	 data-ad-slot=\"8943644949\"></ins>\r\n<script>\r\n	(adsbygoogle = window.adsbygoogle || []).push({});\r\n</script>', '<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<!-- large970x90-visualText -->\r\n<ins class=\"adsbygoogle\"\r\n	 style=\"display:inline-block;width:970px;height:90px\"\r\n	 data-ad-client=\"ca-pub-2461204719026790\"\r\n	 data-ad-slot=\"8943644949\"></ins>\r\n<script>\r\n	(adsbygoogle = window.adsbygoogle || []).push({});\r\n</script>', 1, '2017-11-08 14:25:26', '2017-12-19 06:17:57'),
(2, 'Popup', 'Google Absence', '<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<!-- large970x90-visualText -->\r\n<ins class=\"adsbygoogle\"\r\n	 style=\"display:inline-block;width:970px;height:90px\"\r\n	 data-ad-client=\"ca-pub-2461204719026790\"\r\n	 data-ad-slot=\"8943644949\"></ins>\r\n<script>\r\n	(adsbygoogle = window.adsbygoogle || []).push({});\r\n</script>', '<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<!-- large970x90-visualText -->\r\n<ins class=\"adsbygoogle\"\r\n	 style=\"display:inline-block;width:970px;height:90px\"\r\n	 data-ad-client=\"ca-pub-2461204719026790\"\r\n	 data-ad-slot=\"8943644949\"></ins>\r\n<script>\r\n	(adsbygoogle = window.adsbygoogle || []).push({});\r\n</script>', '<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<!-- large970x90-visualText -->\r\n<ins class=\"adsbygoogle\"\r\n	 style=\"display:inline-block;width:970px;height:90px\"\r\n	 data-ad-client=\"ca-pub-2461204719026790\"\r\n	 data-ad-slot=\"8943644949\"></ins>\r\n<script>\r\n	(adsbygoogle = window.adsbygoogle || []).push({});\r\n</script>', 1, '2017-11-08 14:25:46', '2017-12-19 06:17:56');

-- --------------------------------------------------------

--
-- Table structure for table `laf_comment`
--

CREATE TABLE `laf_comment` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment` varchar(225) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_comment`
--

INSERT INTO `laf_comment` (`id`, `item_id`, `user_id`, `comment`, `created_at`, `updated_at`) VALUES
(1, 81, 35, 'Hello', '2017-12-22 09:15:11', '2017-12-22 09:15:11'),
(2, 81, 35, 'Loy', '2017-12-22 09:47:59', '2017-12-22 09:47:59'),
(3, 81, 35, 'Was', '2017-12-22 09:54:04', '2017-12-22 09:54:04'),
(4, 81, 35, 'Jom loy mes', '2017-12-22 09:59:04', '2017-12-22 09:59:04'),
(5, 81, 35, 'Jom loy mes', '2017-12-22 09:59:05', '2017-12-22 09:59:05'),
(6, 81, 35, 'Jom loy mes', '2017-12-22 09:59:06', '2017-12-22 09:59:06'),
(7, 81, 35, 'Jom loy mes', '2017-12-22 09:59:06', '2017-12-22 09:59:06'),
(8, 81, 35, 'Jom loy mes', '2017-12-22 09:59:06', '2017-12-22 09:59:06'),
(9, 81, 35, 'Jom loy mes', '2017-12-22 09:59:41', '2017-12-22 09:59:41'),
(10, 81, 35, 'good', '2017-12-22 10:01:40', '2017-12-22 10:01:40'),
(11, 80, 35, 'hasah', '2017-12-22 10:03:38', '2017-12-22 10:03:38'),
(12, 80, 35, 'good', '2017-12-22 10:04:43', '2017-12-22 10:04:43'),
(13, 53, 35, 'not found', '2017-12-22 10:05:48', '2017-12-22 10:05:48'),
(14, 52, 35, 'Nice', '2017-12-22 10:07:27', '2017-12-22 10:07:27'),
(15, 81, 35, 'what', '2017-12-22 10:15:40', '2017-12-22 10:15:40'),
(16, 81, 35, 'yes', '2017-12-22 10:16:55', '2017-12-22 10:16:55'),
(17, 81, 37, 'Oh so good', '2017-12-22 10:17:33', '2017-12-22 10:17:33'),
(18, 52, 37, 'so good', '2017-12-22 10:19:50', '2017-12-22 10:19:50'),
(19, 80, 37, 'oh', '2017-12-22 10:20:27', '2017-12-22 10:20:27'),
(20, 53, 37, 'Nice', '2017-12-22 10:20:35', '2017-12-22 10:20:35'),
(21, 52, 37, 'why not', '2017-12-22 10:20:44', '2017-12-22 10:20:44'),
(22, 80, 37, 'alot', '2017-12-22 10:21:57', '2017-12-22 10:21:57'),
(23, 52, 37, 'that right', '2017-12-22 10:22:07', '2017-12-22 10:22:07'),
(24, 52, 37, 'nice on length', '2017-12-22 10:22:29', '2017-12-22 10:22:29'),
(25, 81, 40, 'oh no', '2017-12-22 22:42:21', '2017-12-22 22:42:21'),
(26, 52, 40, 'good', '2017-12-22 23:30:46', '2017-12-22 23:30:46'),
(27, 52, 35, 'nice', '2017-12-23 07:49:14', '2017-12-23 07:49:14'),
(28, 52, 42, 'let go', '2017-12-25 06:18:34', '2017-12-25 06:18:34'),
(29, 82, 35, 'good', '2017-12-27 09:38:57', '2017-12-27 09:38:57');

-- --------------------------------------------------------

--
-- Table structure for table `laf_description_page`
--

CREATE TABLE `laf_description_page` (
  `id` int(11) NOT NULL,
  `index` int(11) NOT NULL,
  `icon` varchar(225) DEFAULT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `title` varchar(225) NOT NULL,
  `description` varchar(300) NOT NULL,
  `page_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_description_page`
--

INSERT INTO `laf_description_page` (`id`, `index`, `icon`, `active`, `title`, `description`, `page_id`, `created_at`, `updated_at`) VALUES
(2, 2, 'fa fa-download fa-2x', 0, 'Easy setup App', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 1, '2017-11-08 15:44:36', '2017-11-08 09:49:06'),
(3, 3, 'fa fa-mobile fa-2x', 0, 'On-the-go', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 1, '2017-11-08 15:45:13', '2017-11-08 09:20:44'),
(4, 4, 'fa fa-users fa-2x', 1, 'Social connect', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 1, '2017-11-08 15:46:12', '2017-11-08 15:46:12'),
(5, 5, 'fa fa-sliders fa-2x', 1, 'Dedicated support', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 1, '2017-11-08 15:46:12', '2017-11-08 15:46:12'),
(6, 1, 'fa fa-cogs fa-2x', 0, 'User Settings', 'Lorem ipsum dolor sit amet.', 2, '2017-11-08 17:04:15', '2017-11-08 10:13:26'),
(8, 2, 'fa fa-envelope fa-2x', 0, 'Messages Inbox', 'Lorem ipsum dolor sit amet.', 2, '2017-11-08 17:10:59', '2017-11-08 10:14:04'),
(9, 3, 'fa fa-users fa-2x', 0, 'Friends List', 'Lorem ipsum dolor sit amet.', 2, '2017-11-08 17:10:59', '2017-11-08 10:14:56'),
(10, 4, 'fa fa-comments fa-2x', 0, 'Live Chat Messages', 'Lorem ipsum dolor sit amet', 2, '2017-11-08 17:10:59', '2017-11-08 10:15:33'),
(11, 5, 'fa fa-calendar fa-2x', 0, 'Calendar / Planner', 'Lorem ipsum dolor sit amet.', 2, '2017-11-08 17:10:59', '2017-11-08 10:16:27'),
(12, 6, 'fa fa-map-marker fa-2x', 0, 'My Places', 'Lorem ipsum dolor sit amet.', 2, '2017-11-08 17:10:59', '2017-11-08 10:16:57'),
(13, 7, 'fa fa-film fa-2x', 0, 'Media Player™', 'Lorem ipsum dolor sit amet.', 2, '2017-11-08 17:10:59', '2017-11-08 10:17:35'),
(14, 8, 'fa fa-compass fa-2x', 0, 'Intuitive Statistics', 'Lorem ipsum dolor sit amet.', 2, '2017-11-08 17:10:59', '2017-11-08 10:18:20'),
(15, 9, 'fa fa-picture-o fa-2x', 0, 'Weather on-the-go', 'Lorem ipsum dolor sit amet.', 2, '2017-11-08 17:10:59', '2017-11-08 10:20:20'),
(17, 10, 'fa fa-plus fa-2x', 1, 'And much more!', 'Lorem ipsum dolor sit amet.', 2, '2017-11-08 17:35:47', '2017-11-08 17:35:47');

-- --------------------------------------------------------

--
-- Table structure for table `laf_feature`
--

CREATE TABLE `laf_feature` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `description` varchar(225) NOT NULL,
  `icon` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `laf_item`
--

CREATE TABLE `laf_item` (
  `id` int(11) NOT NULL,
  `item_name` varchar(225) NOT NULL,
  `item_type_id` int(11) NOT NULL,
  `item_category_id` int(11) NOT NULL,
  `item_description` varchar(300) NOT NULL,
  `contact_number` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `item_gallery_id` int(11) DEFAULT NULL,
  `icon` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_item`
--

INSERT INTO `laf_item` (`id`, `item_name`, `item_type_id`, `item_category_id`, `item_description`, `contact_number`, `user_id`, `location_id`, `item_gallery_id`, `icon`, `active`, `created_at`, `updated_at`) VALUES
(52, 'bat hz', 1, 1, 'good', '92828292', 42, 0, NULL, 0, 1, '2017-12-14 10:03:51', '2017-12-14 10:03:51'),
(53, 'samsung', 2, 0, 'test', '9328383838', 35, 0, NULL, 0, 1, '2017-12-15 05:32:11', '2017-12-15 05:32:11'),
(80, 'test', 1, 2, 'ss', '09929292', 40, 0, NULL, 1, 1, '2017-12-19 10:28:26', '2017-12-19 10:28:26'),
(81, 'good', 1, 1, 'good than', '09929292', 40, 0, NULL, 1, 1, '2017-12-19 10:35:14', '2017-12-19 10:35:14'),
(82, 'test item', 1, 0, 'good item', '0393939393', 35, 0, NULL, 1, 1, '2017-12-27 09:36:56', '2017-12-27 09:36:56');

-- --------------------------------------------------------

--
-- Table structure for table `laf_item_category`
--

CREATE TABLE `laf_item_category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_item_category`
--

INSERT INTO `laf_item_category` (`id`, `category_name`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Laptop', 1, '2017-11-08 12:37:43', '2017-11-08 12:37:43'),
(3, 'Vihecle', 1, '2017-11-08 06:49:47', '2017-11-08 06:49:47');

-- --------------------------------------------------------

--
-- Table structure for table `laf_item_gallery`
--

CREATE TABLE `laf_item_gallery` (
  `id` int(11) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `item_id` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `laf_liker`
--

CREATE TABLE `laf_liker` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_liker`
--

INSERT INTO `laf_liker` (`id`, `item_id`, `user_id`, `created_at`, `updated_at`) VALUES
(59, 81, 37, '2017-12-21 09:40:48', '2017-12-21 09:40:48'),
(60, 81, 42, '2017-12-21 09:41:08', '2017-12-21 09:41:08'),
(61, 81, 40, '2017-12-21 09:41:22', '2017-12-21 09:41:22'),
(66, 81, 35, '2017-12-21 09:41:50', '2017-12-21 09:41:50'),
(67, 80, 35, '2017-12-21 10:15:48', '2017-12-21 10:15:48'),
(68, 52, 35, '2017-12-23 07:49:27', '2017-12-23 07:49:27'),
(69, 80, 42, '2017-12-25 06:17:44', '2017-12-25 06:17:44'),
(70, 52, 42, '2017-12-25 06:17:59', '2017-12-25 06:17:59'),
(71, 53, 42, '2017-12-25 06:18:11', '2017-12-25 06:18:11'),
(72, 82, 35, '2017-12-27 09:41:30', '2017-12-27 09:41:30');

-- --------------------------------------------------------

--
-- Table structure for table `laf_location`
--

CREATE TABLE `laf_location` (
  `id` int(11) NOT NULL,
  `country_code` varchar(11) NOT NULL DEFAULT 'KH',
  `location_name` int(11) NOT NULL,
  `longitude` varchar(22) NOT NULL,
  `latitude` varchar(22) NOT NULL,
  `feature_code` varchar(11) NOT NULL DEFAULT 'PPLC',
  `poputation` int(11) DEFAULT NULL,
  `time_zone` varchar(50) NOT NULL DEFAULT 'Asia/Phnom_Penh',
  `item_id` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_location`
--

INSERT INTO `laf_location` (`id`, `country_code`, `location_name`, `longitude`, `latitude`, `feature_code`, `poputation`, `time_zone`, `item_id`, `active`, `created_at`, `updated_at`) VALUES
(61, 'KH', 0, '104.89883650000002', '11.5592794', 'PPLC', NULL, 'Asia/Phnom_Penh', 50, 0, '2017-12-14 09:57:20', '2017-12-14 09:57:20'),
(62, 'KH', 0, '104.89882899999998', '11.5592764', 'PPLC', NULL, 'Asia/Phnom_Penh', 51, 0, '2017-12-14 09:59:14', '2017-12-14 09:59:14'),
(63, 'KH', 0, '104.89879510000003', '11.559275699999999', 'PPLC', NULL, 'Asia/Phnom_Penh', 52, 0, '2017-12-14 10:03:51', '2017-12-14 10:03:51'),
(64, 'KH', 0, '104.89883199999997', '11.5592533', 'PPLC', NULL, 'Asia/Phnom_Penh', 53, 0, '2017-12-15 05:32:11', '2017-12-15 05:32:11'),
(65, 'KH', 0, '104.8971177366684', '11.560817817878355', 'PPLC', NULL, 'Asia/Phnom_Penh', 82, 0, '2017-12-27 09:36:56', '2017-12-27 09:36:56'),
(66, 'KH', 0, '104.8978902128647', '11.557601379828059', 'PPLC', NULL, 'Asia/Phnom_Penh', 82, 0, '2017-12-27 09:36:56', '2017-12-27 09:36:56');

-- --------------------------------------------------------

--
-- Table structure for table `laf_map`
--

CREATE TABLE `laf_map` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `longitude` varchar(20) NOT NULL,
  `latitude` varchar(20) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `laf_message`
--

CREATE TABLE `laf_message` (
  `id` int(11) NOT NULL,
  `sender_email` varchar(50) NOT NULL,
  `reciever_email` varchar(50) NOT NULL,
  `item_id` int(11) NOT NULL,
  `message` varchar(225) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `laf_migrations`
--

CREATE TABLE `laf_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `laf_page`
--

CREATE TABLE `laf_page` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(225) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_page`
--

INSERT INTO `laf_page` (`id`, `name`, `description`, `active`, `created_at`, `updated_at`) VALUES
(1, 'About', 'Oleose Beautiful App Landing Page', 0, '2017-11-08 15:04:41', '2017-11-08 09:57:01'),
(2, 'Features', 'Learn more about this feature packed App', 0, '2017-11-08 15:04:41', '2017-11-08 10:07:37'),
(3, 'Reviews', '', 1, '2017-11-08 15:05:10', '2017-11-08 15:05:10'),
(4, 'Screens', '', 1, '2017-11-08 15:05:10', '2017-11-08 15:05:10'),
(5, 'Demo', '', 1, '2017-11-08 15:05:29', '2017-11-08 15:05:29'),
(6, 'GetApp', '', 1, '2017-11-08 15:05:29', '2017-11-08 15:05:29'),
(7, 'Support', '', 1, '2017-11-08 15:05:36', '2017-11-08 15:05:36');

-- --------------------------------------------------------

--
-- Table structure for table `laf_payment`
--

CREATE TABLE `laf_payment` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `pack_id` int(11) NOT NULL,
  `payment_method_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `laf_payment_method`
--

CREATE TABLE `laf_payment_method` (
  `id` int(11) NOT NULL,
  `country_code` varchar(55) NOT NULL DEFAULT 'KH',
  `name` varchar(100) NOT NULL,
  `description` varchar(225) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `laf_setting`
--

CREATE TABLE `laf_setting` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `value` varchar(5000) NOT NULL,
  `description` varchar(225) NOT NULL,
  `field` varchar(225) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_setting`
--

INSERT INTO `laf_setting` (`id`, `name`, `value`, `description`, `field`, `parent_id`, `active`, `created_at`, `updated_at`) VALUES
(1, 'logo', '[{id:1,value:\'1.png\'}]', 'logo app', '', 1, 1, '2017-11-08 15:31:57', '2017-11-08 15:31:57'),
(2, 'slider', '[{id:1,value:\'1.png\'}, {id:2,value:\'2.png\', {id:3,value:\'3.png\'}]', 'slider for website', '', 1, 1, '2017-11-08 15:33:37', '2017-11-08 15:33:37'),
(3, 'Skin template', '[{id:1,value:\'#84add5\'}]', 'color skin teamplate', '', 1, 1, '2017-11-08 15:38:30', '2017-11-08 15:38:30');

-- --------------------------------------------------------

--
-- Table structure for table `laf_type`
--

CREATE TABLE `laf_type` (
  `id` int(11) NOT NULL,
  `type_name` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_type`
--

INSERT INTO `laf_type` (`id`, `type_name`, `active`) VALUES
(1, 'Lost', 1),
(2, 'Found', 1);

-- --------------------------------------------------------

--
-- Table structure for table `laf_users`
--

CREATE TABLE `laf_users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `sex` tinyint(1) NOT NULL,
  `password` varchar(150) NOT NULL,
  `remember_token` varchar(150) NOT NULL,
  `user_type_id` int(11) NOT NULL,
  `profile` tinyint(1) DEFAULT '0',
  `icon` int(1) NOT NULL DEFAULT '0',
  `ip_address` varchar(50) DEFAULT NULL,
  `activation_token` varchar(100) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `blocked` tinyint(1) NOT NULL DEFAULT '0',
  `closed` tinyint(1) NOT NULL DEFAULT '0',
  `last_login_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `laf_users`
--

INSERT INTO `laf_users` (`id`, `name`, `email`, `phone`, `sex`, `password`, `remember_token`, `user_type_id`, `profile`, `icon`, `ip_address`, `activation_token`, `active`, `blocked`, `closed`, `last_login_at`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', '', 0, '$2y$10$CtcACLYtuDBsZdjrCI7KXOf6DhQVcffEtN/pdGLDewfcR6I4jpKDy', 'E12fomIBTiAxtSSXDEGh3iOjJUSLXDWBmNLk6pVrrlKUy5qQUUzSZSyFuVnk', 0, NULL, 0, NULL, NULL, 1, 0, 0, '2017-11-06 15:22:00', '2017-11-06 08:22:00', '2017-11-06 08:22:00'),
(35, 'Vannchhai', 'vannchhai@gmail.com', '0393939393', 0, 'c4ca4238a0b923820dcc509a6f75849b', '1', 1, 1, 1, '', '1', 1, 0, 0, '2017-11-19 08:48:41', '2017-11-19 08:48:41', '2017-12-27 08:05:32'),
(37, 'chendaV', 'chenda@gmail.com', '015999990', 0, '$2y$10$kN65bXefjklzhGhdoYrl4OV7O7wyXjiGnzssqC5DYs9nS4vq2Mu/i', '1', 1, 1, 1, '', '1', 1, 0, 0, '2017-11-20 15:17:22', '2017-11-20 15:17:22', '2017-12-22 10:19:09'),
(40, 'mesa', 'mesa@gmail.com', '09929292', 1, '$2y$10$lC3MmTMt9luE94Vbw.BJXOhjhoIGdgwMnw0Uw2rZJOJTSsBJgxNzu', '1', 1, 1, 0, '', '1', 1, 0, 0, '2017-11-20 15:35:13', '2017-11-20 15:35:13', '2017-12-20 08:43:32'),
(42, 'viphea', 'viphea@gmail.com', '92828292', 1, '$2y$10$nJUzBybpZP8amsqa8/zXB.jyhB/.E51t2HIc310HdM63wqcbHLXNq', '1', 1, 0, 0, '', '1', 1, 0, 0, '2017-11-20 15:40:22', '2017-11-20 15:40:22', '2017-12-15 08:15:22'),
(43, 'test', 'test@gmail.com', '039939393', 0, '202cb962ac59075b964b07152d234b70', '', 1, 0, 0, '000.000.000.000', NULL, 1, 0, 0, '2017-12-27 13:33:29', '2017-12-27 06:33:29', '2017-12-27 06:33:29'),
(44, 'good', 'good@gmail.com', '222222', 0, '$2y$10$E8ok9Q1nDbcnozTyJowYl.gEGI0NKQ931yUeStELOa9XZACbCYUo6', '', 1, 0, 0, '000.000.000.000', NULL, 1, 0, 0, '2017-12-27 13:37:29', '2017-12-27 06:37:29', '2017-12-27 06:38:16');

-- --------------------------------------------------------

--
-- Table structure for table `laf_user_download`
--

CREATE TABLE `laf_user_download` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `plate_form` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `laf_advertising`
--
ALTER TABLE `laf_advertising`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_comment`
--
ALTER TABLE `laf_comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_description_page`
--
ALTER TABLE `laf_description_page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_feature`
--
ALTER TABLE `laf_feature`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_item`
--
ALTER TABLE `laf_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_item_category`
--
ALTER TABLE `laf_item_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_item_gallery`
--
ALTER TABLE `laf_item_gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_liker`
--
ALTER TABLE `laf_liker`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_location`
--
ALTER TABLE `laf_location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_map`
--
ALTER TABLE `laf_map`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_message`
--
ALTER TABLE `laf_message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_migrations`
--
ALTER TABLE `laf_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_page`
--
ALTER TABLE `laf_page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_payment`
--
ALTER TABLE `laf_payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_payment_method`
--
ALTER TABLE `laf_payment_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_setting`
--
ALTER TABLE `laf_setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_type`
--
ALTER TABLE `laf_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_users`
--
ALTER TABLE `laf_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laf_user_download`
--
ALTER TABLE `laf_user_download`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `laf_advertising`
--
ALTER TABLE `laf_advertising`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `laf_comment`
--
ALTER TABLE `laf_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `laf_description_page`
--
ALTER TABLE `laf_description_page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `laf_feature`
--
ALTER TABLE `laf_feature`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laf_item`
--
ALTER TABLE `laf_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `laf_item_category`
--
ALTER TABLE `laf_item_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `laf_item_gallery`
--
ALTER TABLE `laf_item_gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laf_liker`
--
ALTER TABLE `laf_liker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `laf_location`
--
ALTER TABLE `laf_location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `laf_map`
--
ALTER TABLE `laf_map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laf_message`
--
ALTER TABLE `laf_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laf_migrations`
--
ALTER TABLE `laf_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laf_page`
--
ALTER TABLE `laf_page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `laf_payment`
--
ALTER TABLE `laf_payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laf_payment_method`
--
ALTER TABLE `laf_payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laf_setting`
--
ALTER TABLE `laf_setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `laf_type`
--
ALTER TABLE `laf_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `laf_users`
--
ALTER TABLE `laf_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `laf_user_download`
--
ALTER TABLE `laf_user_download`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
