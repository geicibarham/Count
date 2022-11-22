import Landing from "./components/landing/landing";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Firstgame from "./components/firstGame/Firstgame";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/first" element={<Firstgame />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
