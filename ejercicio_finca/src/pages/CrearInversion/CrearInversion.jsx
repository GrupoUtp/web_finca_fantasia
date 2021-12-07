import { useState } from "react";
import React from "react";
import axios from "axios";

const CrearInversion = () => {      
    const [comentario, setComentario] = useState("");
    

const handleSubmit = (e) => {
    e.preventDefault();  
    console.log(comentario);      
    console.log("Submit");

    axios.post("http://localhost:5000/api/crear-comentario", {
      comentario,
    })
    .then((respuesta) => {
      console.log(respuesta);
      setComentario("");
    })
    .catch((error) => {
      console.log(error);
    });
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
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
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