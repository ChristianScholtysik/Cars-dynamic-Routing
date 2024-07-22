import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurCars from "./pages/Our-Cars";
import Detailpage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-cars" element={<OurCars />} />
        <Route path="/our-cars/:carId" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
