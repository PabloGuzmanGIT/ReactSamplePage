-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-06-2022 a las 19:11:07
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `platosimg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotoplatos`
--

CREATE TABLE `fotoplatos` (
  `plato` varchar(25) NOT NULL,
  `foto` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fotoplatos`
--

INSERT INTO `fotoplatos` (`plato`, `foto`) VALUES
('ajidegallina', 'ajidegallina.jpg'),
('cabritonortena', 'cabritonortena.jpg'),
('ajidegallina', 'ajidegallina.jpg'),
('cabritonortena', 'cabritonortena.jpg'),
('arrozconpollo', 'arrozconpollo.jpg'),
('hamburguesa', 'hamburguesa.jpg'),
('arrozconpollo', 'arrozconpollo.jpg'),
('hamburguesa', 'hamburguesa.jpg'),
('hotwings', 'hotwings.jpg'),
('lomo', 'lomo.jpg'),
('hotwings', 'hotwings.jpg'),
('lomo', 'lomo.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
