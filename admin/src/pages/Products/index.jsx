import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from 'react-bootstrap';

import {List} from '../../components';
import ProductRedactor from './ProductRedactor'
import {
    deleteProduct,
    setProduct,
    getProducts
} from "../../redux/product/product.actions";

import './style.scss'

const ProductsPage = () => {
    const dispatch = useDispatch();
    const {isLoading, products} = useSelector(({Products}) => ({
        isLoading: Products.loading,
        products: Products.list
    }))

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    const [redactorState, setRedactorState] = useState('');
    const [showRedactor, setShowRedactor] = useState(false);

    const onAddProduct = () => {
        setRedactorState('add')
        setShowRedactor(true);
        dispatch(setProduct(null))
    }

    const onEditProduct = (product) => {
        setRedactorState('edit')
        setShowRedactor(true);
        dispatch(setProduct(product))
    }

    const onDeleteProduct = ({id, name}) => {
        window.confirm(`Видалити ${name}?`) && dispatch(deleteProduct(id))
    }

    return (
        <div className='page-container'>
            <div className='page-list'>
                <Button className='list-add-button'
                        variant="primary"
                        onClick={onAddProduct}> Додати +</Button>
                <List

                    items={products}
                    isLoading={isLoading}
                    onEditItem={onEditProduct}
                    onDeleteItem={onDeleteProduct}
                />
            </div>
            <div className='page-item'>
                {showRedactor ? <ProductRedactor
                        redactorState={redactorState}
                    /> :
                    <div className='page-item-message'>Редагуйте елемет зі списку або добавте новий</div>}

            </div>
        </div>
    )
}

export default ProductsPage;
