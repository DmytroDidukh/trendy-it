import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import {addProduct, updateProduct} from "../../../redux/product/product.actions";
import {PRODUCT_DEFAULT, IMAGE_DEFAULT, COLORS_DEFAULT, COLORS_HEX} from '../../../config'

import './style.scss';

const ProductRedactor = ({redactorState}) => {
    const dispatch = useDispatch()
    const { product} = useSelector(({ Products}) => ({
        product: Products.product
    }));

    const [id, setId] = useState('');
    const [images, setImages] = useState([IMAGE_DEFAULT]);
    const [colors, setColors] = useState([COLORS_DEFAULT]);
    const [productObj, setProductObj] = useState(PRODUCT_DEFAULT)

    useEffect(() => {
        if (product) {
            const {price, oldPrice, name, description, id, images, colors, sale, available, newItem, toSlider} = product

            setId(id);
            setProductObj({price, oldPrice, name, description, images, available, sale, newItem, toSlider});
            setImages(images.map(img => ({link: img.link})));
            setColors(colors.map(color => ({type: color.type})));
        } else {
            onResetInputs()
        }
    }, [product]);

    const onInputChange = (e) => {
        const value = isFinite(e.target.value) ? +e.target.value : e.target.value
        const newObj = {...productObj};

        newObj[e.target.name] = value
        setProductObj(newObj)
    }

    const onCheckboxChange = ({target}) => {
       setProductObj({...productObj, [target.id]: target.checked})
    }

    const onImageInputChange = (idx, e) => {
        const values = [...images];
        values[idx].link = e.target.value;
        setImages(values);
    }

    const onAddImageInput = () => {
        const newArr = [...images]
        newArr.push(IMAGE_DEFAULT);
        setImages(newArr);
    }

    const onSaveProduct = () => {
        if (productObj.name && productObj.price) {
            dispatch(redactorState === 'add' ?
                addProduct({...productObj, images}) :
                updateProduct({id, product: {...productObj, images}}))
            onResetInputs();
        } else {
            window.alert('Всі поля з "*" повинні бути заповнені!')
        }
    }

    const onResetInputs = () => {
        setId('');
        setImages([IMAGE_DEFAULT])
        setProductObj(PRODUCT_DEFAULT)
    }

    return (
        <div className='prodcut-redactor-container'>
            <Form>
                <div className='prodcut-redactor-flex'>
                    <div className='prodcut-redactor-flex-left'>
                        <BootstrapSwitchButton
                            checked={productObj.available || false}
                            onlabel='В наявності'
                            offlabel='Немає в наявності'
                            onChange={onCheckboxChange}
                        />
                        <Form.Group>
                            <Form.Label>*Назва продукту:</Form.Label>
                            <Form.Control
                                name='name'
                                type="text"
                                placeholder="Введіть назву продукту"
                                value={productObj.name || ''}
                                onChange={onInputChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>*Ціна:</Form.Label>
                            <Form.Control
                                name='price'
                                type="number"
                                placeholder="Введіть ціну продукту"
                                value={productObj.price || 0}
                                onChange={onInputChange}/>
                        </Form.Group>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox"
                                        label="Новинка"
                                        id='newItem'
                                        checked={productObj.newItem || false}
                                        onChange={onCheckboxChange}/>
                        </Form.Group>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox"
                                        label="Розпродаж"
                                        id='sale'
                                        checked={productObj.sale || false}
                                        onChange={onCheckboxChange}/>
                        </Form.Group>

                        {productObj.sale && <Form.Group>
                            <Form.Label>Стара ціна:</Form.Label>
                            <Form.Control
                                name='oldPrice'
                                type="number"
                                placeholder="Введіть стару ціну продукту"
                                value={productObj.oldPrice || 0}
                                onChange={onInputChange}/>
                        </Form.Group>}

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox"
                                        label="Відобразити у на головній сторінці?"
                                        id='toSlider'
                                        checked={productObj.toSlider || false}
                                        onChange={onCheckboxChange}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Опис продукту:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="8"
                                name='description'
                                type="textarea"
                                placeholder="Введіть опис продукту"
                                value={productObj.description || ''}
                                onChange={onInputChange}
                            />

                        </Form.Group>
                    </div>

                    <div className='prodcut-redactor-flex-right'>
                        <Form.Group>
                            <Form.Label>Посилання на зоображення:</Form.Label>
                            {images.map((img, idx) => {
                                return (
                                    <Form.Control
                                        key={idx + img.link}
                                        name={`image-${idx}`}
                                        type="textarea"
                                        placeholder="Введіть посилання на зоображення"
                                        value={img.link || ''}
                                        onChange={e => onImageInputChange(idx, e)}/>
                                )
                            })}
                            <div className="addImageInput-btn">
                                <Button variant="outline-dark"
                                    onClick={onAddImageInput}>Додати зображення</Button>
                            </div>

                        </Form.Group>
                    </div>

                </div>
                <div className='category-redactor-buttons'>
                    <Button variant="primary" onClick={onSaveProduct}>
                        Зберегти
                    </Button>
                    <Button variant="dark" onClick={onResetInputs}>
                        Відмінити
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default ProductRedactor;


