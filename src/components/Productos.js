import React, { useEffect, useState } from 'react';
import './Productos.css';
function Productos(props) {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        //console.log(props.categoriaProducto);
        leerProductos(props.categoriaProducto);
    }, [props.categoriaProducto]);

    const leerProductos = (idcategoria) => {
        const rutaServicio = "https://servicios.campus.pe/servicioproductos.php";

        var formData = new FormData();
        formData.append("caty", idcategoria);
        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProductos(data);
            })
    }

    const mostrarProductosTabla = () => {
        return (
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th className="text-end">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(item =>
                        <tr key={item.idproducto}>
                            <td>{item.idproducto}</td>
                            <td>{item.nombre}</td>
                            <td className="text-end">{parseFloat(item.precio).toFixed(2)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const mostrarCuadriculaTabla = () => {
        return (
            <div className="row row-cols-1 row-cols-md-5 g-4" id="cards-productos">
                {productos.map(item =>
                    <div className="col" key={item.idproducto}>
                        <div className="card">
                            <img src={"https://servicios.campus.pe/" + item.imagenchica} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">{item.nombre}</h6>
                                <p className="card-text">S/ {parseFloat(item.precio).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="bi bi-table"></i></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="bi bi-grid-3x3-gap-fill"></i></button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {mostrarProductosTabla()}
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    {mostrarCuadriculaTabla()}
                </div>
            </div>

        </div>
    );
}

export default Productos;