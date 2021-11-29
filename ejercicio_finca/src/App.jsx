import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from "./pages/Inicio/Inicio";
import CrearInversion from "./pages/CrearInversion/CrearInversion";
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Sweet from './pages/Sweet/Sweet';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <NavBar />
        </div> 
              
        <div className="container">
        <Switch>
            <Route exact path="/">              
              <Carousel />              
              <Inicio />               
            </Route>
            <Route path="/crear-inversion">
              <CrearInversion />
            </Route>  
            <Route path="/sweet">
              <Sweet />
            </Route>          
          </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
