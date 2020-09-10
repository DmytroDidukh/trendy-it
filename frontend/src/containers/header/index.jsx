import React from "react";
import { Link } from "react-router-dom";

import RightBar from "./right-bar";
import './style.scss'

const Header = () => {
    return (
        <div className='main-header'>
            <Link to='/'>
                <img src={'./images/logo'} alt={'Shop logo'}/>
                <h1 className='main-header__logo'>Trendy IT</h1>
            </Link>
            <Link to='/'>
                <h3 className='main-header__catalog'>Каталог</h3>
            </Link>
            <RightBar />
        </div>
    )
}

export default Header;
