import React from "react";
import {Link} from 'react-router-dom'

import {Banner} from "../../containers";
import './style.scss'

const Home = () => {
    return (
        <div className='thanks-page'>
            <Banner/>
            <h2 className='title'>Trandy IT</h2>
            <h2>Дякуємо за покупку!</h2>
            <Link to='/'>
                <button className='basic-button'>На головну</button>
            </Link>
        </div>
    )
}

export default Home
