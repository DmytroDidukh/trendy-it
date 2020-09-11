import React from "react";
import {Link} from 'react-router-dom'

import {Banners, Slider} from "../../containers";
import './style.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__hero'>
                <Slider/>
                <Banners/>
            </div>
        </div>
    )
}

export default Home
