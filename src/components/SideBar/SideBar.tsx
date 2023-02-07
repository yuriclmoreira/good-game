
import React from 'react';

import "./SideBar.scss"
import icons from "./Import"
import Button from '../Button/Button';


const SideBar = () => {
    return (
        <div className='container'>
            <div className='primary-div'>
                <img src={icons.logo} ></img>
                <button className='btn'>catálogo</button>
            </div>
            <ul className='list'>
                <li><Button text="Perfil" image={icons.perfil} /></li>
                <li><Button text="Procurar" image={icons.procurar} /></li>
                <li><Button text="Favorito" image={icons.favorito} /></li>
                <li><Button text="Saldo" image={icons.carteira} /></li>
            </ul>
            <h1>categoria</h1>
            <ul className='list'>
                <li><Button text="Mouse" image={icons.mouse} /></li>
                <li><Button text="Fones" image={icons.fone} /></li>
                <li><Button text="Mouse pad" image={icons.mousePad} /></li>
                <li><Button text="Oculos Virtual" image={icons.vr} /></li>
                <li><Button text="Teclado" image={icons.teclado} /></li>
                <li><Button text="Computador" image={icons.computador} /></li>
            </ul>
            <ul className='social-media'>
                <li><img src={icons.twitter} ></img></li>
                <li><img src={icons.facebook} ></img></li>
                <li><img src={icons.youtube} ></img></li>
                <li><img src={icons.tiktok} ></img></li>
                <li><img src={icons.whatsapp} ></img></li>
            </ul>
            <ul className='list'>
                <li><Button text="ajuda" image={icons.ajuda} /></li>
                <li><Button text="condicoes" image={icons.condicoes} /></li>
                <li><Button text="Informações" image={icons.informacoes} /></li>

            </ul>
        </div>



    );
};

export default SideBar;
