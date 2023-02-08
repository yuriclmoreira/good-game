import React from 'react';
import { Produto } from '../../assets/data/mock';

import "./Card.scss"
import plus from "../../assets/icons/products/plus.png";

const Card = ({ cover, title, subTitle, price }: Produto) => {
    return (
        <>

            <div className='box'>
                <ul className='list'>
                    <li> <img className='cover' src={cover} /></li>
                    <li><h1>{title}</h1></li>
                    <li><h2>{subTitle}</h2></li>
                    <li><p>{price}</p></li>
                    <ul className='list-plus'>
                        <li><img src={plus}></img></li>
                        <li><h3>Adicionar ao carrinho</h3></li>
                    </ul>

                </ul>


            </div>

        </>




    );
};

export default Card;