/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.4.25-MariaDB : Database - task
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`task` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

USE `task`;

/*Table structure for table `comments` */

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `body` text DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `comments` */

insert  into `comments`(`id`,`created_at`,`updated_at`,`body`,`post_id`) values 
(1,'2022-12-05','2022-12-05','This is an example comment. My name is one',1),
(2,'2022-12-05','2022-12-05','This is an example comment. My name is two\r\n',2),
(3,'2022-12-05','2022-12-05','This is an example comment. My name is three',2),
(4,'2022-12-05','2022-12-05','This is an example comment. My name is four',3);

/*Table structure for table `post_tag` */

DROP TABLE IF EXISTS `post_tag`;

CREATE TABLE `post_tag` (
  `post_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `post_tag` */

insert  into `post_tag`(`post_id`,`tag_id`) values 
(1,1),
(1,2),
(2,2),
(2,3),
(3,1),
(3,3),
(4,1),
(4,3),
(4,4);

/*Table structure for table `posts` */

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `body` text DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `slug` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `posts` */

insert  into `posts`(`id`,`title`,`description`,`body`,`created_at`,`updated_at`,`slug`) values 
(1,'Post Example Title 1','This is an example description of the post 1','This post is the post 1. Here is a random quote : \"Quality is not an act, it is a habit\"','2022-12-05','2022-12-05','post-example-title-1'),
(2,'Post Example Title 2','This is an example description of the post 2','This post is the post 2. Here is a random quote : \"The only true wisdom is in knowing you know nothing.\"','2022-12-03','2022-12-03','post-example-title-2'),
(3,'Post Example Title 3','This is an example description of the post 3\r\n','This post is the post 3. Here is a random quote : \"Out of difficulties grow miracles.\"','2022-12-02','2022-12-02','post-example-title-3'),
(4,'Post Example Title 4','This is an example description of the post 4','This post is the post 4. Here is a random quote : \"Patience is bitter, but its fruit is sweet.\"','2022-11-30','2022-11-30','post-example-title-4');

/*Table structure for table `tags` */

DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `tags` */

insert  into `tags`(`id`,`title`) values 
(1,'Tag 1'),
(2,'Tag 2'),
(3,'Tag 3'),
(4,'Tag 4');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
