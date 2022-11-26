import Landing from "./components/landing/landing";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Firstgame from "./components/firstGame/Firstgame";
import SecondGame from "./components/secondGame/secondGame";
import Score from "./components/score/score";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/first" element={<Firstgame />} />
        <Route path="/scores" element={<Score />} />
        <Route path="/second" element={<SecondGame/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
