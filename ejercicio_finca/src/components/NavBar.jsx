import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Finca</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Crear-inversion">Crear Comentarios</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sweet">Ver comentarios</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/vip">Hab VIP</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Hab-doble">Hab Doble</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Hab-familiar">Hab Familiar</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Atracciones">Atracciones</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}
 
export default NavBar;