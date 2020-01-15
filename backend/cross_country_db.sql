-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 10 Gru 2019, 17:42
-- Wersja serwera: 10.4.10-MariaDB
-- Wersja PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `cross_country_db`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `bieg`
--

CREATE TABLE `bieg` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `DATA_BIEG` date NOT NULL,
  `ID_TRASA` int(10) NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `NAZWA_BIEG` varchar(100) NOT NULL DEFAULT 'Bieg',
  `BIEG_AKCEPTACJA` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `bieg`
--

INSERT INTO `bieg` (`ID_BIEG`, `DATA_BIEG`, `ID_TRASA`, `LOGIN_UZYTKOWNIK`, `NAZWA_BIEG`, `BIEG_AKCEPTACJA`) VALUES
(1, '0010-10-10', 1, 'cxzvef', 'loooool', b'1');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `bieg_zakonczony`
--

CREATE TABLE `bieg_zakonczony` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `DATA_BIEG` date NOT NULL,
  `ID_TRASA` int(10) NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `NAZWA_BIEG` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `bieg_zakonczony`
--

INSERT INTO `bieg_zakonczony` (`ID_BIEG`, `DATA_BIEG`, `ID_TRASA`, `LOGIN_UZYTKOWNIK`, `NAZWA_BIEG`) VALUES
(1, '2019-12-10', 1, 'lamazlo21', 'Skok przez tyczki');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `komentarze`
--

CREATE TABLE `komentarze` (
  `ID_KOMENTARZ` int(10) UNSIGNED NOT NULL,
  `DATA_KOMENTARZ` date NOT NULL DEFAULT current_timestamp(),
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `TRESC_KOMENTARZA` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `przeszkoda`
--

CREATE TABLE `przeszkoda` (
  `ID_PRZESZKODA` int(10) UNSIGNED NOT NULL,
  `NAZWA_PRZESZKODA` varchar(60) NOT NULL,
  `TRUDNOSC_PRZESZKODA` varchar(20) NOT NULL,
  `OPIS_PRZESZKODA` varchar(500) NOT NULL DEFAULT 'Przeszkoda na biegu...'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `przeszkoda_bieg`
--

CREATE TABLE `przeszkoda_bieg` (
  `ID_PRZESZKODA` int(10) UNSIGNED NOT NULL,
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `ILOSC_PRZESZKODA` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `trasa`
--

CREATE TABLE `trasa` (
  `ID_TRASA` int(10) NOT NULL,
  `POCZATEK_TRASA` varchar(50) NOT NULL,
  `KONIEC_TRASA` varchar(50) NOT NULL,
  `MIASTO_TRASA` varchar(50) NOT NULL,
  `DLUGOSC_TRASA` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `trasa`
--

INSERT INTO `trasa` (`ID_TRASA`, `POCZATEK_TRASA`, `KONIEC_TRASA`, `MIASTO_TRASA`, `DLUGOSC_TRASA`) VALUES
(1, 'brochow', 'pwr', 'wroclaw', 50);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczestnicy_bieg`
--

CREATE TABLE `uczestnicy_bieg` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `OBECNOSC_BIEGACZ` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczestnicy_bieg_zakonczony`
--

CREATE TABLE `uczestnicy_bieg_zakonczony` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `CZAS` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownik`
--

CREATE TABLE `uzytkownik` (
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `IMIE_UZYTKOWNIK` varchar(100) NOT NULL,
  `NAZWISKO_UZYTKOWNIK` varchar(100) NOT NULL,
  `DATA_URODZENIA_UZYTKOWNIK` date NOT NULL,
  `HASHED_PASS_UZYTKOWNIK` varchar(60) NOT NULL,
  `TYP_UZYTKOWNIK` varchar(20) NOT NULL DEFAULT 'biegacz',
  `WOLONTARIAT_ILOSC` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `uzytkownik`
--

INSERT INTO `uzytkownik` (`LOGIN_UZYTKOWNIK`, `IMIE_UZYTKOWNIK`, `NAZWISKO_UZYTKOWNIK`, `DATA_URODZENIA_UZYTKOWNIK`, `HASHED_PASS_UZYTKOWNIK`, `TYP_UZYTKOWNIK`, `WOLONTARIAT_ILOSC`) VALUES
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
-- Struktura tabeli dla tabeli `wiadomosc`
--

CREATE TABLE `wiadomosc` (
  `ID_WIADOMOSC` int(10) UNSIGNED NOT NULL,
  `LOGIN_NADAWCA` varchar(50) NOT NULL,
  `LOGIN_ODBIORCA` varchar(50) NOT NULL,
  `DATA_WIADOMOSC` date NOT NULL DEFAULT current_timestamp(),
  `TRESC_WIADOMOSC` varchar(5000) NOT NULL,
  `STATUS_WIADOMOSC` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `wiadomosc`
--

INSERT INTO `wiadomosc` (`ID_WIADOMOSC`, `LOGIN_NADAWCA`, `LOGIN_ODBIORCA`, `DATA_WIADOMOSC`, `TRESC_WIADOMOSC`, `STATUS_WIADOMOSC`) VALUES
(1, 'borer.fredy', 'lamazlo213', '2019-12-06', 'asdsadf', 0),
(2, 'borer.fredy', 'lamazlo213', '2019-12-06', 'asdsadf', 0),
(3, 'borer.fredy', 'lamazlo213', '2019-12-06', 'looool', 0),
(4, 'borer.fredy', 'lamazlo213', '2019-12-06', 'xd', 0),
(5, 'cxzvef', 'lamazlo213', '2019-12-06', 'xd', 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wolontariusze_bieg`
--

CREATE TABLE `wolontariusze_bieg` (
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) NOT NULL,
  `OBECNOSC_WOLONTARIUSZ` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wyniki`
--

CREATE TABLE `wyniki` (
  `ID_WYNIK` int(10) NOT NULL,
  `LOGIN_UZYTKOWNIK` varchar(50) CHARACTER SET latin1 NOT NULL,
  `ID_BIEG` int(10) UNSIGNED NOT NULL,
  `MIEJSCE` int(5) NOT NULL,
  `CZAS` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `wyniki`
--

INSERT INTO `wyniki` (`ID_WYNIK`, `LOGIN_UZYTKOWNIK`, `ID_BIEG`, `MIEJSCE`, `CZAS`) VALUES
(1, 'gerhold.oliver', 1, 1, '23:52:00'),
(2, 'lamazlo213', 1, 2, '23:52:00');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `bieg`
--
ALTER TABLE `bieg`
  ADD PRIMARY KEY (`ID_BIEG`),
  ADD KEY `ID_TRASA` (`ID_TRASA`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`);

--
-- Indeksy dla tabeli `bieg_zakonczony`
--
ALTER TABLE `bieg_zakonczony`
  ADD PRIMARY KEY (`ID_BIEG`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`),
  ADD KEY `ID_TRASA` (`ID_TRASA`);

--
-- Indeksy dla tabeli `komentarze`
--
ALTER TABLE `komentarze`
  ADD PRIMARY KEY (`ID_KOMENTARZ`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`),
  ADD KEY `ID_BIEG` (`ID_BIEG`);

--
-- Indeksy dla tabeli `przeszkoda`
--
ALTER TABLE `przeszkoda`
  ADD PRIMARY KEY (`ID_PRZESZKODA`);

--
-- Indeksy dla tabeli `przeszkoda_bieg`
--
ALTER TABLE `przeszkoda_bieg`
  ADD KEY `ID_PRZESZKODA` (`ID_PRZESZKODA`),
  ADD KEY `ID_BIEG` (`ID_BIEG`);

--
-- Indeksy dla tabeli `trasa`
--
ALTER TABLE `trasa`
  ADD PRIMARY KEY (`ID_TRASA`);

--
-- Indeksy dla tabeli `uczestnicy_bieg`
--
ALTER TABLE `uczestnicy_bieg`
  ADD KEY `ID_BIEG` (`ID_BIEG`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`);

--
-- Indeksy dla tabeli `uczestnicy_bieg_zakonczony`
--
ALTER TABLE `uczestnicy_bieg_zakonczony`
  ADD KEY `ID_BIEG` (`ID_BIEG`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`);

--
-- Indeksy dla tabeli `uzytkownik`
--
ALTER TABLE `uzytkownik`
  ADD PRIMARY KEY (`LOGIN_UZYTKOWNIK`);

--
-- Indeksy dla tabeli `wiadomosc`
--
ALTER TABLE `wiadomosc`
  ADD PRIMARY KEY (`ID_WIADOMOSC`),
  ADD KEY `LOGIN_NADAWCA` (`LOGIN_NADAWCA`),
  ADD KEY `LOGIN_ODBIORCA` (`LOGIN_ODBIORCA`);

--
-- Indeksy dla tabeli `wolontariusze_bieg`
--
ALTER TABLE `wolontariusze_bieg`
  ADD KEY `LOGIN_BIEGACZ` (`LOGIN_UZYTKOWNIK`),
  ADD KEY `ID_BIEG` (`ID_BIEG`);

--
-- Indeksy dla tabeli `wyniki`
--
ALTER TABLE `wyniki`
  ADD PRIMARY KEY (`ID_WYNIK`),
  ADD KEY `LOGIN_UZYTKOWNIK` (`LOGIN_UZYTKOWNIK`),
  ADD KEY `ID_BIEG` (`ID_BIEG`);

--
-- AUTO_INCREMENT dla tabel zrzutów
--

--
-- AUTO_INCREMENT dla tabeli `wiadomosc`
--
ALTER TABLE `wiadomosc`
  MODIFY `ID_WIADOMOSC` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `bieg`
--
ALTER TABLE `bieg`
  ADD CONSTRAINT `Bieg_ibfk_1` FOREIGN KEY (`ID_TRASA`) REFERENCES `trasa` (`ID_TRASA`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Bieg_ibfk_2` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `bieg_zakonczony`
--
ALTER TABLE `bieg_zakonczony`
  ADD CONSTRAINT `Bieg_Zakonczony_ibfk_1` FOREIGN KEY (`ID_TRASA`) REFERENCES `trasa` (`ID_TRASA`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Bieg_Zakonczony_ibfk_2` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `komentarze`
--
ALTER TABLE `komentarze`
  ADD CONSTRAINT `Komentarze_ibfk_1` FOREIGN KEY (`ID_BIEG`) REFERENCES `bieg_zakonczony` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Komentarze_ibfk_2` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `przeszkoda_bieg`
--
ALTER TABLE `przeszkoda_bieg`
  ADD CONSTRAINT `Przeszkoda_Bieg_ibfk_1` FOREIGN KEY (`ID_PRZESZKODA`) REFERENCES `przeszkoda` (`ID_PRZESZKODA`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Przeszkoda_Bieg_ibfk_2` FOREIGN KEY (`ID_BIEG`) REFERENCES `bieg` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `uczestnicy_bieg`
--
ALTER TABLE `uczestnicy_bieg`
  ADD CONSTRAINT `Uczestnicy_Bieg_ibfk_1` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Uczestnicy_Bieg_ibfk_2` FOREIGN KEY (`ID_BIEG`) REFERENCES `bieg` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `uczestnicy_bieg_zakonczony`
--
ALTER TABLE `uczestnicy_bieg_zakonczony`
  ADD CONSTRAINT `Uczestnicy_Bieg_Zakonczony_ibfk_1` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Uczestnicy_Bieg_Zakonczony_ibfk_2` FOREIGN KEY (`ID_BIEG`) REFERENCES `bieg_zakonczony` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `wiadomosc`
--
ALTER TABLE `wiadomosc`
  ADD CONSTRAINT `Wiadomosc_ibfk_1` FOREIGN KEY (`LOGIN_ODBIORCA`) REFERENCES `uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Wiadomosc_ibfk_2` FOREIGN KEY (`LOGIN_NADAWCA`) REFERENCES `uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `wolontariusze_bieg`
--
ALTER TABLE `wolontariusze_bieg`
  ADD CONSTRAINT `Wolontariusze_Bieg_ibfk_1` FOREIGN KEY (`ID_BIEG`) REFERENCES `bieg` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Wolontariusze_Bieg_ibfk_2` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `wyniki`
--
ALTER TABLE `wyniki`
  ADD CONSTRAINT `wyniki_ibfk_1` FOREIGN KEY (`ID_BIEG`) REFERENCES `bieg_zakonczony` (`ID_BIEG`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `wyniki_ibfk_2` FOREIGN KEY (`LOGIN_UZYTKOWNIK`) REFERENCES `uzytkownik` (`LOGIN_UZYTKOWNIK`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
