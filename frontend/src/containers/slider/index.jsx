import React from "react";
import {Button, Carousel} from "react-bootstrap";
import {Link} from 'react-router-dom'

import './style.scss'
import {useSelector} from "react-redux";

const Slider = () => {
    const sliderProducts = useSelector(({Products}) => Products.list.filter( item => (
        item.available && item.toSlider && item.newItem
    )))

    return (
        <Carousel className='slider'>
            {
                sliderProducts.map(product => (
                    <Carousel.Item key={product.id}>
                       {/* <div style={{background: `url(${product.images[0].link}) no-repeat center center`}} className="slider__image"/>*/}

                        <img
                            className="d-block w-100 slider__image"
                            src={product.images[0].link}
                            alt={`Bag ${product.name}`}
                        />
                        <Carousel.Caption>
                            <h3>{product.name}</h3>
                            <Link to='/'>
                                <Button>
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
