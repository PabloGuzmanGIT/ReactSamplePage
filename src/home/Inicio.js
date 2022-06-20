import React from 'react';
import Banner from './Banner';
import Nosotros from './Nosotros';
import Noticias from './Noticias';

function Inicio(props) {
    return (
        <>
            <Banner/>
            <Nosotros/>
            <Noticias/>
        </>
    );
}

export default Inicio;