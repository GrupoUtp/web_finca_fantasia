import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import CrearInversion from "./pages/CrearInversion/CrearInversion";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Sweet from "./pages/Sweet/Sweet";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="crear-inversion" element={<CrearInversion />} />
        <Route path="sweet" element={<Sweet />} />
      </Routes>
    </div>
  );
}

export default App;
