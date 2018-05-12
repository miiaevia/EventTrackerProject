-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema insulindb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `insulindb` ;

-- -----------------------------------------------------
-- Schema insulindb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `insulindb` DEFAULT CHARACTER SET utf8 ;
USE `insulindb` ;

-- -----------------------------------------------------
-- Table `insulin_treatment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `insulin_treatment` ;

CREATE TABLE IF NOT EXISTS `insulin_treatment` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `units` INT(11) NOT NULL,
  `treatement_date` DATETIME NOT NULL DEFAULT current_timestamp,
  `type` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO insulin@localhost;
 DROP USER insulin@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'insulin'@'localhost' IDENTIFIED BY 'insulin';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'insulin'@'localhost';
GRANT SELECT, INSERT, TRIGGER ON TABLE * TO 'insulin'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `insulin_treatment`
-- -----------------------------------------------------
START TRANSACTION;
USE `insulindb`;
INSERT INTO `insulin_treatment` (`id`, `units`, `treatement_date`, `type`, `brand`) VALUES (1, 10, '2018-05-09 00:00:00', 'slow', 'solo star');
INSERT INTO `insulin_treatment` (`id`, `units`, `treatement_date`, `type`, `brand`) VALUES (2, 12, '2018-05-09 00:00:00', 'slow', 'solo star');
INSERT INTO `insulin_treatment` (`id`, `units`, `treatement_date`, `type`, `brand`) VALUES (3, 8, '2018-05-10 00:00:00', 'slow', 'solo star');
INSERT INTO `insulin_treatment` (`id`, `units`, `treatement_date`, `type`, `brand`) VALUES (4, 11, '2018-05-10 00:00:00', 'slow', 'solo star');
INSERT INTO `insulin_treatment` (`id`, `units`, `treatement_date`, `type`, `brand`) VALUES (5, 9, '2018-05-11 00:00:00', 'slow', 'solo star');

COMMIT;
