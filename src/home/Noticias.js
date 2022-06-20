import React from 'react';
import './Noticias.css';
function Noticias(props) {
    return (
        <section id="noticias" className='padded'>
            <div className="container">
                <h2>Noticias</h2>
                <div className="row">
                    <div className="col">
                        <h3>Noticia 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur ratione recusandae ullam asperiores non nemo! Voluptates atque repellendus aperiam possimus alias dolorum fugiat ipsam, sequi molestias accusantium labore at facere voluptatem.</p>
                    </div>
                    <div className="col">
                        <h3>Noticia 2</h3>
                        <p>Odio quos dolores, suscipit officia, praesentium ullam iste libero eligendi quod impedit quaerat tempora placeat odit ad voluptas commodi sequi porro quis cupiditate corrupti. Provident cum officia nihil voluptates, animi laboriosam delectus?</p>
                    </div>
                    <div className="col">
                        <h3>Noticia 3</h3>
                        <p>Quasi, veniam fuga repudiandae mollitia ad obcaecati nostrum. Inventore incidunt modi voluptatibus maiores, ullam aliquid hic, illo eligendi atque deleniti omnis. Temporibus consectetur reprehenderit impedit porro dolorum ipsam ipsa, earum explicabo suscipit?</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Noticias;