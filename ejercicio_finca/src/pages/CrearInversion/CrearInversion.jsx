import { useState } from "react";
import React from "react";

const CrearInversion = () => {      
    const [coin_name, setCoinName] = useState("");
    const [inversion, setInversion] = useState("");
    const [coins, setCoins] = useState("");
    const [month, setMonth] = useState(() => new Date().getUTCMonth() + 1);
    const [day, setDay] = useState(() => new Date().getUTCDate());
    const [year, setYear] = useState(() => new Date().getUTCFullYear());


const handleSubmit = (e) => {
    e.preventDefault();  
    console.log("coin", coin_name)  
    console.log("inversion", inversion)  
    console.log("Submit");
  };
// const Comentario = (props) => {        
//     const { comentarios, obtenerComentario } = props;

    return ( 
      <React.Fragment>
        <div>
          <div className="p-3 pb-md-4 mx-auto text-center">
            <h1>Crear Comentario</h1>
          </div> 
              <div className="form-crear-inversion text-center"> 
                <form onSubmit={handleSubmit}>
                  <div className="form-floating">
                    <input type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Nombre de Coin"
                    value={coin_name}
                    onChange={(e) => setCoinName(e.target.value)}
                    required 
                    />
                    <label htmlFor="floatingInput">Comentario</label>
                  </div>             
                
                  <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Crear
                  </button>                  
                </form>
            </div>
          </div> 
          {/* <div>
              {comentarios.map((comentario) =>(
                  <Comentario key={comentario._id}
                  comentario={comentario}
                  />
              ))}
          </div> */}
        </React.Fragment>         
  );          
}    
// } 
export default CrearInversion ;