import React, {useState} from "react";
import {useSelector} from "react-redux";

import {toLowerCase} from '../../utils'

import './style.scss'

const Banners = () => {
    const { products} = useSelector(({Products}) => ({
        products: Products.list,
    }))

    const [filteredList, setFilteredList] = useState([])
    const [listVisibility, setListVisibility] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const onSearch = (e) => {
        const {value} = e.target
        const result = []

        if (!value) {
            setListVisibility(false)
            return
        }
        setSearchValue(value)
        setListVisibility(true)

        const inProducts = products.filter(({name}) => toLowerCase(name).includes(toLowerCase(value)))

        result.push( ...inProducts)
        setFilteredList(result)
    }

    return (
        <div className='banners'>

        </div>
    )
}

export default Banners
