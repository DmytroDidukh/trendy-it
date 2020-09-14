import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";

import ProductCard from './product-card';
import {Card} from 'semantic-ui-react';
import {DropDown, Spinner, Pagination} from '../../components';
import {productFilterObject, productSortObject} from '../../constants';

import './style.scss';

const ProductList = ({location: {query}, match: {params}}) => {

    const {products, router} = useSelector(({Products, router}) => ({
        products: Products.list,
        router: router.location.pathname.slice(1),
    }))

    const [currentPage, setCurrentPage] = useState(1);

    const [productFilter, setProductFilter] = useState('all');
    const [productSort, setProductSort] = useState('new');

    const handleDropDown = (e, options) => {
        const id = e.target.closest('.dropdown').id;
        id === 'Розміри' ? setProductFilter(options.value) : setProductSort(options.value);
    }

    const productsFilter = () => {
        return products
            .filter(prod => productFilter === 'all' ? prod : prod.sizes[productFilter] > 0)
            .sort((a, b) => productSort === 'new' && new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .sort((a, b) => productSort === 'priceLow' && a.price - b.price)
            .sort((a, b) => productSort === 'priceHigh' && b.price - a.price)
            .map(product => <ProductCard key={product.id} product={product}/>)
    }

    const productsToShow = (length) => {
        return productsFilter().slice(length === 1 ? 0 : length, length + 10)
    }

    return (
        <div className="product-list__container">
            <div className="product-list__title">КАТАЛОГ</div>

            <div className="product-list__dropdown-section__flex">
                <div className="product-list__dropdown-section">

                    <DropDown
                        id={productFilterObject.filterName}
                        name={productFilter}
                        options={productFilterObject.filterOptions}
                        handleDropDown={handleDropDown}
                    />

                    <DropDown
                        id={productSortObject.sortName}
                        name={productSort}
                        options={productSortObject.sortOptions}
                        handleDropDown={handleDropDown}
                    />

                </div>
            </div>


            <div className="product-cards__container">
                {products.length ? (
                    <div className="product-cards__list">
                        <Card.Group itemsPerRow={4}>
                            {productsToShow(currentPage)}
                        </Card.Group>
                        <Pagination
                            productsFilter={productsFilter}
                            productsToShow={productsToShow}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                ) : (
                    <Spinner/>
                )}
            </div>
        </div>
    )
}

export default ProductList
