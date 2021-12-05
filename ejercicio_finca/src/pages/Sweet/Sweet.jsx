import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";



const Sweet = (props) => {
        let navigate = useNavigate();
        const { comentario, obtenerComentario  } = props;
        console.log(props)
    return ( 
        <React.Fragment>            
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">                    
                    <h4 className="my-0 fw-normal">{comentario}</h4>
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
                        // handleDelete(inversion)
                    }}
                    >
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
};
 
export default Sweet;