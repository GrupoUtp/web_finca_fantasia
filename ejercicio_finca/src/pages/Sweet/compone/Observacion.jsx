import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Sweet from "../Sweet";

const handleDelete = (comentario) => {
    swal({
        title: "Estás seguro(a)?",
        text: "Si borras el comentario, no se podrá recuperar",
        icon: "warning",
        buttons: true,            
        dangerMode: true,
      })          
      .then((willDelete) => {              
          if (willDelete) {
              axios.delete("http://localhost:5000/api/comentario/" + comentario._id)
              .then((respuesta) => {
              swal("El comentario " + comentario._id + " fue borrado",{
              icon: "success",
            });
              console.log(respuesta); 
            //   obtenerComentario();       
            })
              .catch((error) =>{
              console.log(error);                  
        });
    }
});
};

const Observacion = (props) => {
        let navigate = useNavigate();
        const { comentario, obtenerComentario } = props;
        // const { comentario, handleDelete  } = props;

        console.log(props)
    return ( 
        <React.Fragment>            
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">                    
                    <h4 className="my-0 fw-normal">{comentario.comentario}</h4>
                </div>
                <div className="card-body">
                    <h4 className="card-title pricing-card-title">
                    <small className="h6 text-muted fw-light d-block">
                            Comentarios
                    </small>                                            
                        
                    </h4>
                    
                    
                    <button type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    onClick={() => {
                       
                            console.log("");
                            handleDelete(comentario);
                    }}
                    >
                        Borrar
                    </button>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
};
 
export default Observacion;