import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import CrearInversion from "./pages/CrearInversion/CrearInversion";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Sweet from "./pages/Sweet/Sweet";
import Vip from "./pages/Vip/Vip";
import HabDoble from "./pages/HabDoble/HabDoble";
import HabFamiliar from "./pages/HabFamiliar/HabFamiliar";
import Atracciones from "./pages/Atracciones/Atracciones";

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
        <Route path="vip" element={<Vip />} />
        <Route path="hab-doble" element={<HabDoble />} />
        <Route path="hab-familiar" element={<HabFamiliar />} />
        <Route path="Atracciones" element={<Atracciones />} />

      </Routes>
    </div>
  );
}

export default App;
