import React from 'react';
import slide1 from '../assets/chef1.jpg';
import slide2 from '../assets/chef2.jpg';
import slide3 from '../assets/chef3.jpg';

function Banner(props) {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Chef Europa</h5>
                            <p>Most European Kitchen are designed as dark themes</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Thai Coucine</h5>
                            <p>This kind of food has more natural ingredients rather than other competitors</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Paris Kitchen</h5>
                            <p>Always styling and outstanding design are some distinguish builds from others</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;