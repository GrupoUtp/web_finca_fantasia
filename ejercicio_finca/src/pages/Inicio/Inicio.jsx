import swal from "sweetalert";
import Inversion from "./componentes/Inversion";
import Observacion from "../Sweet/compone/Observacion";
import { Link, NavLink } from "react-router-dom";
import Carousel from '../.././components/Carousel';
import { useEffect, useState } from "react";
import axios from "axios";
import Sweet from "../Sweet/Sweet";


const Inicio = () => {
    
    // const fecha = new Date().toLocaleString();
    const inversiones = [
        {_id:1, nombre_coin: "Habitación Sweet", valor_invertido:"Habitación VIP cuenta con acceso principal al balcón, hamaca y una vista espectacular a la hermosa villavicencio", coins:"$100.000"},
        {_id:2, nombre_coin: "Habitación Doble", valor_invertido:"Ideal para parejas, cuenta con cama doble muy comoda, baño la privacidad perfecta para pasar momentos inolvidables ", coins:"$80.000"},
        {_id:3, nombre_coin: "Habitación Familiar", valor_invertido:"Perfecta para compartir con tú familia o grupos grandes como en la casa de los abuelos, comodos camarotes para noches hogareñas", coins:"$120.000"},
        {_id:4, nombre_coin: "Caminata Ecológica", valor_invertido:"Sal de  la  rutina, ejercita tu cuerpo y mente, caminando a un magnífico mirador y/o a una revitalizante cascada y llenar tus pulmones de aire limpio", coins:"$0"},
        {_id:5, nombre_coin: "Ocaciones Especiales", valor_invertido:"Organizamos tu velada romántica, una deliciosa cena a la luz de la luna, decoración de la habitación con un tinte de romance para esa persona especial", coins:"Varios"},
        {_id:6, nombre_coin: "Por Días", valor_invertido:"Alquila toda la finca por días, celebra cumpleaños, matrimonios, solo tú familia o amigos para disfrutar de completa privacidad como en tu hogar", coins:"Según el día"},
    ];

    

//     const handleDelete = (comentario) => {
//         swal({
//             title: "Estás seguro(a)?",
//             text: "Si borras el comentario, no se podrá recuperar",
//             icon: "warning",
//             buttons: true,            
//             dangerMode: true,
//           })          
//           .then((willDelete) => {              
//               if (willDelete) {
//                   axios.delete("http://localhost:5000/api/comentario/" + comentario._id)
//                   .then((respuesta) => {
//                   swal("El comentario " + comentario._id + " fue borrado",{
//                   icon: "success",
//                 });
//                   console.log(respuesta); 
//                   //obtenerComentarios();       
//                 })
//                   .catch((error) =>{
//                   console.log(error);                  
//             });
//         }
//     });
// };
    return ( 
        <div>
        <Carousel />              
        <div className="p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Finca Fantasia de la Montaña</h1>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {inversiones.map((inversion) => (
                   
                    <Inversion key={inversion._id} 
                    inversion={inversion} 
                    />
                    
                ))}
                
            </div>
        </div>
        </div>
     );
    };

export default Inicio ;