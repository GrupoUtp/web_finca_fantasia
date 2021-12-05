import axios from "axios";
import { useEffect, useState } from "react";
import Observacion from "./compone/Observacion";

const Sweet = () => {
    const [comentarios, setComentarios] = useState([]);
    const obtenerComentario = () => {
        axios.get("http://localhost:5000/api/comentarios")
        .then((respuesta) => {
            setComentarios(respuesta.data);
            console.log(respuesta.data);
            
        })
        .catch((error) => {
            console.log(error); 
        });
    };
    useEffect(() => {
        obtenerComentario();
    },[]);
    return ( 
        <div>
        {comentarios.map((comentario) => (
                   
                   <Observacion key={comentario._id} 
                   comentario={comentario}
                //    obtenerComentario={obtenerComentario} 
                   />
                   
        ))}
        </div>
     );
}
 
export default Sweet;