import React from "react";
import {Button, Carousel} from "react-bootstrap";
import {Link} from 'react-router-dom'

import './style.scss'
import {useSelector} from "react-redux";

const Slider = () => {
    const sliderProducts = useSelector(({Products}) => Products.list.filter(item => (
        item.available && item.toSlider && item.newItem
    )))

    console.log(sliderProducts)

    return (
        <Carousel className='slider'>
            {
                sliderProducts.map(product => (
                    <Carousel.Item key={product.id}>
                        <div style={{
                            background: `url(${product.images.slider}) no-repeat center center`,
                            backgroundSize: 'cover'
                        }}
                             className="slider__image"/>
                        <Carousel.Caption>
                            <h3>{product.name}</h3>
                            <Link to='/'>
                                <Button variant='dark'>
                                    КУПИТИ {product.price} UAH
                                </Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Slider
