-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2021 a las 04:21:32
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest_api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `quantity` int(100) NOT NULL,
  `price` double NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `sex`, `quantity`, `price`, `image`, `created_at`) VALUES
(2, 'Crocks fan 2.4', 'masculino', 22, 1800, 'http://d26lpennugtm8s.cloudfront.net/stores/001/147/672/products/crocs-literide-gris-cu20459206j1-74495013b25571eefb15868735299414-640-0.jpg', '2021-03-01 03:57:37'),
(10, 'Zapatilla topper modelo MPO-312', 'unisex', 6, 8300, 'https://statics.glamit.com.ar/media/catalog/product/cache/82/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc04869.jpg', '2021-03-01 09:19:02'),
(13, 'Gorra Nike Verde', 'unisex', 33, 900, 'https://drifters.com.ar/uploads/product_image/17256/650w_628683-224-PHSFH001.jpg', '2021-03-01 17:54:16'),
(14, 'Ojotas nike', 'femenino', 55, 3200, 'https://d26lpennugtm8s.cloudfront.net/stores/001/210/943/products/504476be-0f09-4766-9fff-516e9f0bead4_nube-ef52efb0015403672816016853266814-1024-1024.jpg', '2021-03-02 03:41:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `sex`, `email`, `password`, `created_at`) VALUES
(1, 'Agustin', 'Baez Nuñez', 'masculino', 'agusszurdob@gmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-02-25 02:19:16'),
(2, 'Penelope', 'Cruz', 'femenino', 'nuncaponerapodo@gmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-02-25 02:21:34'),
(3, 'Leo', 'Nuñez', 'masculino', 'leopoldo@gmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-02-25 02:21:34'),
(4, 'Fernanda', 'Baez', 'femenino', 'fer1998@gmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-02-25 02:22:07'),
(5, 'Pedro', 'Sanchez', 'unisex', 'pedritoloco@hotmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-02-28 04:52:04'),
(6, 'Maria', 'Antonieta', 'femenino', 'tyolos@gmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-03-01 17:15:29'),
(14, 'Agustin', 'Lopez', 'unisex', 'aaaaaaaa@gmail.com', '12345678', '2021-03-01 18:04:08'),
(15, 'Pedro', 'Sanchez', 'unisex', 'pedritoloco2@hotmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-03-02 04:54:47'),
(16, 'Male', 'Castro', 'femenino', 'malelacampora@hotmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-03-02 05:28:38'),
(17, 'Sofia', 'Castro', 'femenino', 'sofiwaaaa@hotmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-03-02 06:29:21'),
(18, 'Sofia', 'Montiel', 'femenino', 'totototoot@hotmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-03-02 06:30:40'),
(19, 'Camila', 'Rodo', 'femenino', 'asdasdasda@hotmail.com', 'eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg.K74FkCP791lgTlwIaV73qo-DRETi9pbX2LzfgEd6zEM', '2021-03-02 06:31:31');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
