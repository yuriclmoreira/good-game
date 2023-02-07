import React from 'react';

import "./Header.scss"

import user from "../../assets/icons/perfil/user.png";
import sino from "../../assets/icons/perfil/sino.png";
import mochila from "../../assets/icons/perfil/mochila.png";

const Header = () => {
    return (
        <>

            <input type="text" className="icon" placeholder="Procurar" />
            <ul className='profile-status'>

                <li><p>Will Smith</p></li>
                <li><img src={user} ></img></li>
                <li><img src={sino} ></img></li>
                <li><img src={mochila} ></img></li>
            </ul>

        </>




    );
};

export default Header;