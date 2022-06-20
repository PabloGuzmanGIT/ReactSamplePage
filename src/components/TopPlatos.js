import React, { useEffect, useState } from 'react';
import './TopPlatos.css';


function TopPlatos(props) {
    const [platos, setPlatos] = useState([]);
    useEffect(() => {
        leerEmpleados();
    }, []);

    const leerEmpleados = (e) => {
        
        const rutaServicio = "https://sampledb-ep1.000webhostapp.com/plato.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPlatos(data);
            })
    };

    return (
        <section id="empleados" className='padded'>
            <div className="container">
                <h2>Top Platos</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4" id="CardsP"  >
                    {platos.map(item =>
                        <div className="col" key={item.plato}>
                            <div className="card">
                                
                                <img src={"https://sampledb-ep1.000webhostapp.com/assets/" + item.foto} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.plato}</h5>
                                    <p className="card-text">{item.plato}</p>
                                    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TopPlatos;