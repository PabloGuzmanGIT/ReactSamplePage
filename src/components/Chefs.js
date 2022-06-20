import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './Chefs.css';

function Chefs(props) {
  const [chefs, setChefs] = useState([]);
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [name, setname] = useState("");

  useEffect(() => {
    leerChefs();
  }, []);

  const leerChefs = (e) => {
    const rutaServicio = "https://sampledb-ep1.000webhostapp.com/cheflist.php";
    fetch(rutaServicio)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setChefs(data);
        document.getElementById("btnBuscar").click();
      });
  };

  const buscar = () => {
    let chefFiltrados = chefs.filter((item) => {
      return name !== "" ? item["name"].indexOf(name) > 0 : true;
    });
    setDatosFiltrados(chefFiltrados);
  };
  //Sudamerica
  //indexOf("meri") => 5
  //indexOf("Su") => 0

  



    return (
      <section id="proveedores" className="padded">
        <div className="container">
          <h2>Chef</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre"
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              id="btnBuscar"
              onClick={() => buscar()}
            >
              Consultar
            </button>
          </div>
          <table className="table">
            <thead className="tablehead">
              <tr>
                <th>Ranking</th>
                <th>Nombre</th>
                <th>Pais</th>
              </tr>
            </thead>
            <tbody>
              {datosFiltrados.map((item) => (
                <tr key={item.ranking}>
                  <td>{item.ranking}</td>
                  <td>{item.name}</td>
                  <td>{item.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
      </section>
    );
  }


export default Chefs;
