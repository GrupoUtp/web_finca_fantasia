import { useState } from "react";

const CrearInversion = () => {      
    const [coin_name, setCoinName] = useState("");
    const [inversion, setInversion] = useState("");
    const [coins, setCoins] = useState("");
    const [month, setMonth] = useState(() => new Date().getUTCMonth() + 1);
    const [day, setDay] = useState(() => new Date().getUTCDate());
    const [year, setYear] = useState(() => new Date().getUTCFullYear());


const handleSubmit = (e) => {
    e.preventDefault();    
    console.log("Submit");
  };

    return ( 
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
                    <label htmlFor="floatingInput">Nombre de coin</label>
                  </div> 
                <div className="form-floating">
                  <input 
                    type="number"
                    className="form-control"
                    id="floatingInversion"
                    placeholder="Monto Invertido"
                    value={inversion}
                    onChange={(e) => setInversion(e.target.value)}
                    required
                  />
                  <label htmlFor="floatingInput">Inversión USD</label>
                </div>
                <div className="form-floating">
                  <input 
                    type="number"
                    className="form-control"
                    id="floatingInversion"
                    placeholder="Coins compradas"
                    value={coins}
                    onChange={(e) => setCoins(e.target.value)}
                    required 
                  />
                  <label htmlFor="floatingInput">Coins compradas</label>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-floating">
                      <select 
                        className="form-select" 
                        id="floatingMonth"
                        aria-label="Floating Month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                      >  
                      {[...Array(12)].map((e, i) => {
                        return (
                          <option key={"month_" + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        );
                      })}                      
                      </select>
                      <label htmlFor="floatingSelect">Mes</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-floating">
                      <select 
                        className="form-select"
                        id="floatingDay"
                        aria-label="Floating Day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                      >
                        {[...Array(31)].map((e, i) => {
                          return (
                            <option 
                              key={"day_" + i} value={i + 1}>
                                {i + 1}
                              </option>
                          );
                        })}
                      </select>
                      <label htmlFor="floatingSelect">Día</label>
                    </div>
                  </div>
                    <div className="col-4">
                      <div className="form-floating">
                        <select
                          className="form-select" 
                          id="floatingYear"
                          aria-label="Floating Year"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                        >
                          {[...Array(15)].map((e, i) => {
                            return (
                              <option key={"year_" + i + 2021} value={i + 2021}>
                                {i + 2021}
                              </option>
                            );
                          })}
                          </select>
                          <label htmlFor="floatingSelect">Año</label>
                      </div>
                    </div>
                </div>
                  <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Crear
                  </button>                  
                </form>
            </div>
          </div>
  );
}    
 
export default CrearInversion ;