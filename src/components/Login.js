import React from 'react';

function Login(props) {
    return (
        <section id="login" className='padded'>
            <div className="container">
                <h2 className='text-center'>Inicio de sesión</h2>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Usuario' />
                        </div>    
                        <div className="mb-3">
                            <input type="password" className='form-control' placeholder='Contraseña' />
                        </div>    
                        <div className="mb-3">
                            <button className='btn btn-primary'>Iniciar sesión</button>
                        </div>    
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
}

export default Login;