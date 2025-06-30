import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Calendar, TrendingUp, Users, DollarSign, Clock, ArrowRight, CheckCircle, Star } from 'lucide-react';
import HomePage from './components/HomePage';
import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import Day5 from './components/Day5';
import Day6 from './components/Day6';
import Day7 from './components/Day7';
import Day8 from './components/Day8';
import Day9 from './components/Day9';
import Day10 from './components/Day10';
import Day11 from './components/Day11';
import Day12 from './components/Day12';
import Day13 from './components/Day13';
import Day14 from './components/Day14';
import Day15 from './components/Day15';
import Day16 from './components/Day16';
import Day17 from './components/Day17';
import Day18 from './components/Day18';
import Day19 from './components/Day19';
import Day20 from './components/Day20';
import Day21 from './components/Day21';
import Day22 from './components/Day22';
import Day23 from './components/Day23';
import Day24 from './components/Day24';
import Day25 from './components/Day25';
import Day26 from './components/Day26';
import Day27 from './components/Day27';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/day1" element={<Day1 />} />
      <Route path="/day2" element={<Day2 />} />
      <Route path="/day3" element={<Day3 />} />
      <Route path="/day4" element={<Day4 />} />
      <Route path="/day5" element={<Day5 />} />
      <Route path="/day6" element={<Day6 />} />
      <Route path="/day7" element={<Day7 />} />
      <Route path="/day8" element={<Day8 />} />
      <Route path="/day9" element={<Day9 />} />
      <Route path="/day10" element={<Day10 />} />
      <Route path="/day11" element={<Day11 />} />
      <Route path="/day12" element={<Day12 />} />
      <Route path="/day13" element={<Day13 />} />
      <Route path="/day14" element={<Day14 />} />
      <Route path="/day15" element={<Day15 />} />
      <Route path="/day16" element={<Day16 />} />
      <Route path="/day17" element={<Day17 />} />
      <Route path="/day18" element={<Day18 />} />
      <Route path="/day19" element={<Day19 />} />
      <Route path="/day20" element={<Day20 />} />
      <Route path="/day21" element={<Day21 />} />
      <Route path="/day22" element={<Day22 />} />
      <Route path="/day23" element={<Day23 />} />
      <Route path="/day24" element={<Day24 />} />
      <Route path="/day25" element={<Day25 />} />
      <Route path="/day26" element={<Day26 />} />
      <Route path="/day27" element={<Day27 />} />
    </Routes>
  );
}

export default App;