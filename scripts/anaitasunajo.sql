-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2020 a las 21:15:52
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
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `nombre`, `apellidos`, `email`, `mensaje`) VALUES
(5, 'Julen', 'Osia IbÃ¡Ã±ez', 'julenoi95@gmail.com', 'Hola buenas vengo a hacer una prueba con AngularJS'),
(6, 'Pepe', 'Perez', 'pepep43@gmail.com', 'Hola esto es una prueba para la base'),
(7, 'Pepe', 'Perez', 'pepep43@gmail.com', 'Hola, esto es una prueba para el funcionamiento del formulario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deportes`
--

CREATE TABLE `deportes` (
  `iddeporte` int(11) NOT NULL,
  `deporte` varchar(50) NOT NULL,
  `maxjugadores` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `deportes`
--

INSERT INTO `deportes` (`iddeporte`, `deporte`, `maxjugadores`) VALUES
(1, 'balonmano', 50),
(2, 'gimnasia', 10),
(3, 'montañismo', 30),
(4, 'ciclismo', 9),
(5, 'futbol', 16),
(6, 'halterofilia', 7),
(7, 'judo', 10),
(8, 'natacion', 21),
(9, 'padel', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios`
--

CREATE TABLE `socios` (
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` int(2) NOT NULL,
  `email` varchar(100) NOT NULL,
  `iddeporte` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `socios`
--

INSERT INTO `socios` (`dni`, `nombre`, `apellido`, `edad`, `email`, `iddeporte`) VALUES
('12341241G', 'Pepe', 'Perez', 36, 'pepep43@gmail.com', 1),
('19599897G', 'Sonia', 'Luna', 25, 'sonilu95@gmail.com', 2),
('73430149G', 'Julen', 'Osia', 25, 'julenoi95@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `deportes`
--
ALTER TABLE `deportes`
  ADD PRIMARY KEY (`iddeporte`);

--
-- Indices de la tabla `socios`
--
ALTER TABLE `socios`
  ADD PRIMARY KEY (`dni`),
  ADD KEY `iddeporte` (`iddeporte`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `deportes`
--
ALTER TABLE `deportes`
  MODIFY `iddeporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `socios`
--
ALTER TABLE `socios`
  ADD CONSTRAINT `socios_ibfk_1` FOREIGN KEY (`iddeporte`) REFERENCES `deportes` (`iddeporte`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
