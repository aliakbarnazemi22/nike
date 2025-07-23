import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AthleteSection from "./components/AthleteSection";
import WinCollection from "./components/WinCollection";
import Category1 from "./components/Category1";
import Category2 from "./components/Category2";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AthleteSection />
      <WinCollection />
      <Category1 />
      <Category2 />
      <Footer />
    </div>
  );
}

export default App;
