-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 06, 2019 at 09:21 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cross_country_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Bieg`
--

CREATE TABLE `Bieg` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `DATA_BIEG` date NOT NULL,
  `ID_TRASA` int(10) NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `NAZWA_BIEG` varchar(100) NOT NULL DEFAULT 'Bieg',
  `BIEG_AKCEPTACJA` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Bieg`
--

INSERT INTO `Bieg` (`ID_BIEG`, `DATA_BIEG`, `ID_TRASA`, `LOGIN_UZYTKOWNIK`, `NAZWA_BIEG`, `BIEG_AKCEPTACJA`) VALUES
(1, '0010-10-10', 1, 'cxzvef', 'loooool', b'0');

-- --------------------------------------------------------

--
-- Table structure for table `Bieg_Zakonczony`
--

CREATE TABLE `Bieg_Zakonczony` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `DATA_BIEG` date NOT NULL,
  `ID_TRASA` int(10) NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `NAZWA_BIEG` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Komentarze`
--

CREATE TABLE `Komentarze` (
  `ID_KOMENTARZ` int(10) UNSIGNED NOT NULL,
  `DATA_KOMENTARZ` date NOT NULL DEFAULT current_timestamp(),
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `TRESC_KOMENTARZA` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Przeszkoda`
--

CREATE TABLE `Przeszkoda` (
  `ID_PRZESZKODA` int(10) UNSIGNED NOT NULL,
  `NAZWA_PRZESZKODA` varchar(60) NOT NULL,
  `TRUDNOSC_PRZESZKODA` varchar(20) NOT NULL,
  `OPIS_PRZESZKODA` varchar(500) NOT NULL DEFAULT 'Przeszkoda na biegu...'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Przeszkoda_Bieg`
--

CREATE TABLE `Przeszkoda_Bieg` (
  `ID_PRZESZKODA` int(10) UNSIGNED NOT NULL,
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `ILOSC_PRZESZKODA` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Trasa`
--

CREATE TABLE `Trasa` (
  `ID_TRASA` int(10) NOT NULL,
  `POCZATEK_TRASA` varchar(50) NOT NULL,
  `KONIEC_TRASA` varchar(50) NOT NULL,
  `MIASTO_TRASA` varchar(50) NOT NULL,
  `DLUGOSC_TRASA` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Trasa`
--

INSERT INTO `Trasa` (`ID_TRASA`, `POCZATEK_TRASA`, `KONIEC_TRASA`, `MIASTO_TRASA`, `DLUGOSC_TRASA`) VALUES
(1, 'wro', 'wro', 'xd', 100);

-- --------------------------------------------------------

--
-- Table structure for table `Uczestnicy_Bieg`
--

CREATE TABLE `Uczestnicy_Bieg` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `OBECNOSC_BIEGACZ` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Uczestnicy_Bieg_Zakonczony`
--

CREATE TABLE `Uczestnicy_Bieg_Zakonczony` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `CZAS` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Uzytkownik`
--

CREATE TABLE `Uzytkownik` (
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `IMIE_UZYTKOWNIK` varchar(100) NOT NULL,
  `NAZWISKO_UZYTKOWNIK` varchar(100) NOT NULL,
  `DATA_URODZENIA_UZYTKOWNIK` date NOT NULL,
  `HASHED_PASS_UZYTKOWNIK` varchar(60) NOT NULL,
  `TYP_UZYTKOWNIK` varchar(20) NOT NULL DEFAULT 'biegacz',
  `WOLONTARIAT_ILOSC` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Uzytkownik`
--

INSERT INTO `Uzytkownik` (`LOGIN_UZYTKOWNIK`, `IMIE_UZYTKOWNIK`, `NAZWISKO_UZYTKOWNIK`, `DATA_URODZENIA_UZYTKOWNIK`, `HASHED_PASS_UZYTKOWNIK`, `TYP_UZYTKOWNIK`, `WOLONTARIAT_ILOSC`) VALUES
('borer.fredy', 'Garnett', 'Wiegand', '2019-01-05', 'b8467bcad958f0189de8a6e4a0b2545226e5be0d', 'Miss', 2),
('cxzvef', 'asdsad', 'zxcxzc', '2010-10-10', '$2b$10$hmy1AA8fOQadxqjY1jTIqOqdhjSpixpSMTP0NtvujN.lKabE.E/py', 'Biegacz', 0),
('ernest.hickle', 'Augustus', 'Hodkiewicz', '2000-04-29', '6748e866a40ae6abdf07dd04da57c0c065137a9b', 'Prof.', 9),
('ertresafd', 'asdsad', 'zxcxzc', '2010-10-10', '$2b$10$NUWZ992ppKmWsqliaGN.ueTwTVmf4KlO9UMt6y8sKLEJ7qRuFMxNy', 'Biegacz', 0),
('ertret', 'asdsad', 'zxcxzc', '2010-10-10', 'asdsa', 'Biegacz', 0),
('garett41', 'Rossie', 'Abbott', '2003-01-16', 'c9ada581a42ff338ee31b74ceca7e91aa6d70e8f', 'Prof.', 8),
('gerhold.oliver', 'Armando', 'Bartoletti', '2001-03-04', 'a28a554de23844b5482822ded46d910d457f7cdf', 'Mr.', 7),
('lamazlo21', '0010-10-1', '1csadsf', '2010-10-10', '$2b$10$VDeFQUduu8I6WP7siQZEN.JaS28Ueryci7f3kiPAElkG2QtTFiYha', 'Biegacz', 0),
('lamazlo213', '0010-10-1', '1csadsf', '2010-10-10', '$2b$10$EneQxqrF/akNcxqt2CGe6eS5ouUaYiZDyygUq09zwn6qSg2WJvewO', 'Biegacz', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Wiadomosc`
--

CREATE TABLE `Wiadomosc` (
  `ID_WIADOMOSC` int(10) UNSIGNED NOT NULL,
  `LOGIN_NADAWCA` varchar(50) NOT NULL,
  `LOGIN_ODBIORCA` varchar(50) NOT NULL,
  `DATA_WIADOMOSC` date NOT NULL DEFAULT current_timestamp(),
  `TRESC_WIADOMOSC` varchar(5000) NOT NULL,
  `STATUS_WIADOMOSC` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Wiadomosc`
--

INSERT INTO `Wiadomosc` (`ID_WIADOMOSC`, `LOGIN_NADAWCA`, `LOGIN_ODBIORCA`, `DATA_WIADOMOSC`, `TRESC_WIADOMOSC`, `STATUS_WIADOMOSC`) VALUES
(1, 'borer.fredy', 'lamazlo213', '2019-12-06', 'asdsadf', 0),
(2, 'borer.fredy', 'lamazlo213', '2019-12-06', 'asdsadf', 0),
(3, 'borer.fredy', 'lamazlo213', '2019-12-06', 'looool', 0),
(4, 'borer.fredy', 'lamazlo213', '2019-12-06', 'xd', 0),
(5, 'cxzvef', 'lamazlo213', '2019-12-06', 'xd', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Wolontariusze_Bieg`
--

CREATE TABLE `Wolontariusze_Bieg` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `OBECNOSC_WOLONTARIUSZ` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Bieg`
--
ALTER TABLE `Bieg`
  ADD PRIMARY KEY (`ID_BIEG`),
  ADD KEY `ID_TRASA` (`ID_TRASA`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`);

--
-- Indexes for table `Bieg_Zakonczony`
--
ALTER TABLE `Bieg_Zakonczony`
  ADD PRIMARY KEY (`ID_BIEG`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`),
  ADD KEY `ID_TRASA` (`ID_TRASA`);

--
-- Indexes for table `Komentarze`
--
ALTER TABLE `Komentarze`
  ADD PRIMARY KEY (`ID_KOMENTARZ`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`),
  ADD KEY `ID_BIEG` (`ID_BIEG`);

--
-- Indexes for table `Przeszkoda`
--
ALTER TABLE `Przeszkoda`
  ADD PRIMARY KEY (`ID_PRZESZKODA`);

--
-- Indexes for table `Przeszkoda_Bieg`
--
ALTER TABLE `Przeszkoda_Bieg`
  ADD KEY `ID_PRZESZKODA` (`ID_PRZESZKODA`),
  ADD KEY `ID_BIEG` (`ID_BIEG`);

--
-- Indexes for table `Trasa`
--
ALTER TABLE `Trasa`
  ADD PRIMARY KEY (`ID_TRASA`);

--
-- Indexes for table `Uczestnicy_Bieg`
--
ALTER TABLE `Uczestnicy_Bieg`
  ADD KEY `ID_BIEG` (`ID_BIEG`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`);

--
-- Indexes for table `Uczestnicy_Bieg_Zakonczony`
--
ALTER TABLE `Uczestnicy_Bieg_Zakonczony`
  ADD KEY `ID_BIEG` (`ID_BIEG`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`);

--
-- Indexes for table `Uzytkownik`
--
ALTER TABLE `Uzytkownik`
  ADD PRIMARY KEY (`LOGIN_UZYTKOWNIK`);

--
-- Indexes for table `Wiadomosc`
--
ALTER TABLE `Wiadomosc`
  ADD PRIMARY KEY (`ID_WIADOMOSC`),
  ADD KEY `LOGIN_NADAWCA` (`LOGIN_NADAWCA`),
  ADD KEY `LOGIN_ODBIORCA` (`LOGIN_ODBIORCA`);

--
-- Indexes for table `Wolontariusze_Bieg`
--
ALTER TABLE `Wolontariusze_Bieg`
  ADD KEY `LOGIN_BIEGACZ` (`LOGIN_UZYTKOWNIK`),
  ADD KEY `ID_BIEG` (`ID_BIEG`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Wiadomosc`
--
ALTER TABLE `Wiadomosc`
  MODIFY `ID_WIADOMOSC` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Bieg`
--
ALTER TABLE `Bieg`
  ADD CONSTRAINT `Bieg_ibfk_1` FOREIGN KEY (`ID_TRASA`) REFERENCES `Trasa` (`ID_TRASA`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Bieg_ibfk_2` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `Uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Bieg_Zakonczony`
--
ALTER TABLE `Bieg_Zakonczony`
  ADD CONSTRAINT `Bieg_Zakonczony_ibfk_1` FOREIGN KEY (`ID_TRASA`) REFERENCES `Trasa` (`ID_TRASA`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Bieg_Zakonczony_ibfk_2` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `Uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Komentarze`
--
ALTER TABLE `Komentarze`
  ADD CONSTRAINT `Komentarze_ibfk_1` FOREIGN KEY (`ID_BIEG`) REFERENCES `Bieg_Zakonczony` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Komentarze_ibfk_2` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `Uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Przeszkoda_Bieg`
--
ALTER TABLE `Przeszkoda_Bieg`
  ADD CONSTRAINT `Przeszkoda_Bieg_ibfk_1` FOREIGN KEY (`ID_PRZESZKODA`) REFERENCES `Przeszkoda` (`ID_PRZESZKODA`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Przeszkoda_Bieg_ibfk_2` FOREIGN KEY (`ID_BIEG`) REFERENCES `Bieg` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Uczestnicy_Bieg`
--
ALTER TABLE `Uczestnicy_Bieg`
  ADD CONSTRAINT `Uczestnicy_Bieg_ibfk_1` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `Uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Uczestnicy_Bieg_ibfk_2` FOREIGN KEY (`ID_BIEG`) REFERENCES `Bieg` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Uczestnicy_Bieg_Zakonczony`
--
ALTER TABLE `Uczestnicy_Bieg_Zakonczony`
  ADD CONSTRAINT `Uczestnicy_Bieg_Zakonczony_ibfk_1` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `Uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Uczestnicy_Bieg_Zakonczony_ibfk_2` FOREIGN KEY (`ID_BIEG`) REFERENCES `Bieg_Zakonczony` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Wiadomosc`
--
ALTER TABLE `Wiadomosc`
  ADD CONSTRAINT `Wiadomosc_ibfk_1` FOREIGN KEY (`LOGIN_ODBIORCA`) REFERENCES `Uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Wiadomosc_ibfk_2` FOREIGN KEY (`LOGIN_NADAWCA`) REFERENCES `Uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Wolontariusze_Bieg`
--
ALTER TABLE `Wolontariusze_Bieg`
  ADD CONSTRAINT `Wolontariusze_Bieg_ibfk_1` FOREIGN KEY (`ID_BIEG`) REFERENCES `Bieg` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Wolontariusze_Bieg_ibfk_2` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `Uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
