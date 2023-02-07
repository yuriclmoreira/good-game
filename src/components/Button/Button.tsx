import React from 'react';

import "./Button.scss"

interface ButtonTypes {
    text: string;
    image: string
}

const Button = ({ text, image }: ButtonTypes) => {
    return (
        <div className='button'>
            <img src={image} alt={text} />
            <span>{text}</span>
        </div>



    );
};

export default Button;