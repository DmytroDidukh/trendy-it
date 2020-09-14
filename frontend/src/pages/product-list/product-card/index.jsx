import React, {useEffect, useState} from 'react'
import {Card, Image, Button, Label} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

import './style.scss';

const ProductCard = ({product}) => {


    const labelGenerator = (color, inner) => (
        <Label color={color} ribbon>
            {inner}
        </Label>
    )

    const salePercentage = Math.round(((product.oldPrice-product.price)/product.oldPrice)*100)

    if (product.name === 'Mattioli') {
        console.log('hot',product.hot)
        console.log('sale',product.sale)
    }

    return (
        <Link className="ui card product-card" to={`/catalog/${product.id}`}>
            <div className={'product-card__label-container'}>
                {product.newItem && labelGenerator('green', 'НОВИНКА')}
                {product.hot && labelGenerator('orange', 'ХІТ ПРОДАЖ')}
                {product.sale && labelGenerator('red', 'РОЗПРОДАЖ')}
            </div>
            <Image src={product.images.product[0].link} wrapped ui={false}/>
            <Card.Content>
                <div className="product-card__name">
                    {product.name}
                </div>
            </Card.Content>
            <Card.Content extra>
                <div className="product-card__price">
                    Ціна: {product.sale && <strike>{product.oldPrice} </strike>}
                    <span> {product.price}</span> UAH
                    {product.sale && <Label color='red'>-{salePercentage} %</Label>}
                </div>
                {!product.available && <div>Немає в наявності</div>}
            </Card.Content>
        </Link>
    )
}

export default ProductCard
