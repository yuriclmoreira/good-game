import React from 'react';

import "./Banner.scss";

import banner from "../../assets/icons/banner/banner.png";
import start from "../../assets/icons/banner/estrelas.png";
import headset from "../../assets/icons/banner/headset.png";
import btn from "../../assets/icons/banner/btn-plus.png";
import bubble from "../../assets/icons/banner/bubble-top.png";
import bubble2 from "../../assets/icons/banner/bubble-botton.png";
const Banner = () => {
    return (
        <>

            <div className='container-banner'>


                <div className='informatios'>
                    <img src={start}></img>
                    <h1>Headphone</h1>
                    <h2>"W103 Sinta a Magica"</h2>
                    <h3>headset</h3>
                    <hr />
                    <p>Suas emoções começam quando você coloca os <br /> headphones, então não perca essa oportunidade.</p>
                    <button className='btn btn-buy'>Comprar </button>
                    <button className='btn btn-add'>Adicionar ao carrinho </button>
                </div>

                <img className='headSet' src={headset}></img>
                <img className='btn' src={btn}></img>
                <img className='bubble' src={bubble}></img>
                <img className='bubble2' src={bubble2}></img>
                <img className='banner' src={banner}></img>

            </div >


            <ul className='btn-products'>
                <li><h1>Nossos produtos</h1></li>
                <li> <button className='btn-base btn-blue'>Top</button></li>
                <li> <button className='btn-base btn-trans'>Popular</button></li>
                <li> <button className='btn-base btn-trans'>Mais vendidos</button></li>
                <h3>Categoria</h3>
            </ul>



        </>







    );
};

export default Banner;