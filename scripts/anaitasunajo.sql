-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2020 a las 21:50:40
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `anaitasunajo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `ID` int(11) NOT NULL,
  `Título` varchar(60) NOT NULL,
  `Descripción` text NOT NULL,
  `Imagen` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`ID`, `Título`, `Descripción`, `Imagen`) VALUES
(1, 'Reapertura de las piscinas exteriores', 'Desde este próximo fin de semana, las piscinas exteriores se reabrirán para el público hasta el final de la temporada de verano.\r\n\r\nLes informamos que deben de respetar a los socorristas y cuidar el espacio abierto para el disfrute de todos.\r\n\r\nAdemás, el día de la inauguración a las 16:00, habrá preparado un evento para los niños con un hinchables y juegos variados', ''),
(2, 'Ven a apoyar a nuestro equipo de balonmano', 'El proximo día 25 de mayo a 12:00, nuestro equipo de balonmano, SCR Anaitasuna se juega el pase a la liga de campeones del próximo año contra el Rios Renovables.\r\n\r\nLos precios de las entradas son los siguientes:\r\n\r\n- 1 adulto: 8€ (antes 12€)\r\n- 2 adultos: 15€ (antes 20€)\r\n\r\nLas entradas de los niños a partir de 8 años serán de 1€ por cada niño acompañado de un adulto responsable.\r\n\r\nLlenemos el pabellón y seamos el jugador extra para ayudar a nuestro equipo favorito, la apertura de puertas será a las 11:00', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios`
--

CREATE TABLE `socios` (
  `DNI` varchar(9) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellidos` varchar(100) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Telefono` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `socios`
--

INSERT INTO `socios` (`DNI`, `Nombre`, `Apellidos`, `Correo`, `Telefono`) VALUES
('73589639F', 'Pablo', 'García López', 'pGarcíaLo@gmail.com', 693489962);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `socios`
--
ALTER TABLE `socios`
  ADD PRIMARY KEY (`DNI`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
