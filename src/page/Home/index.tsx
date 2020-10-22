import React from 'react';
import ButtonIcon from '../../core/Components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.scss';


const Home = () => {
    return(
    <div className="home-container">
        <h1 className="text-title">Desafio do Capítulo 3, <br/>
             Bootcamp DevSuperior
        </h1>
        <p className="text-subtitle">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
            Favor observar as instruções passadas no capítulo sobre a elaboração <br /> deste projeto.
           <br /> Este design foi adaptado a partir de Ant Design System for Figma, de <br /> Mateusz Wierzbicki: antforfigma@gmail.com
        </p>
        <Link to="/search">
            <ButtonIcon text="Começar" />
        </Link>
       
    </div>
    );

}

export default Home;