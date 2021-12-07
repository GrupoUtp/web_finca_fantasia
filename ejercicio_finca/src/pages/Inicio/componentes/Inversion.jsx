import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Inversion = (props) => { 
    //console.log(props);
    let navigate = useNavigate();
    const { inversion, inversiones  } = props;
    // console.log(props)
    //console.log("props componente inversion", inversion);
    return (
        <React.Fragment>
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{inversion.nombre_coin}</h4>
                </div>
                <div className="card-body">
                    <h4 className="card-title pricing-card-title">
                    <small className="h6 text-muted fw-light d-block">
                            Sobre este servicio
                    </small>
                        <h3 className="my-0 fw-normal">{inversion.valor_invertido}</h3>                     
                        
                    </h4>
                    <h3 className="card-title pricing-card-title">
                        <h3 className="my-0 fw-normal">{inversion.coins}</h3>                        
                        <small className="h6 text-muted fw-ligh d-block">Costo</small>
                    </h3>
                    {/* <h3 className="card-title pricing-card-title">
                        {0}
                        <small className="h6 text-muted fw-ligh d-block">Actual</small>
                    </h3> */}
                    {/* <ul className="list_unstyled mt-3 mb-4">
                        <li>{inversion.fecha}</li>
                    </ul> */}
                    <button type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    onClick={() => {
                        if (inversion._id ==1){
                            navigate("vip");                            
                        }
                        if (inversion._id ==2){
                            navigate("Hab-doble");                            
                        }
                        if (inversion._id ==3){
                            navigate("Hab-familiar");                            
                        }
                        if (inversion._id ==4){
                            navigate("Atracciones");                            
                        }
                        if (inversion._id ==5){
                            navigate("Atracciones");                            
                        }
                        if (inversion._id ==6){
                            navigate("Atracciones");                            
                        }

                            console.log(inversion._id);
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

export default Inversion;