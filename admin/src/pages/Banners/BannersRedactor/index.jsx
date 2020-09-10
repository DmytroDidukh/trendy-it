import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button} from 'react-bootstrap';

import {addBanner, updateBanner} from "../../../redux/banner/banner.actions";

import './style.scss';

const BannerRedactor = ({redactorState}) => {
    const dispatch = useDispatch()
    const { banner} = useSelector(({Banners}) => ({
        banner: Banners.banner
    }));

    const bannerDefault = {title: '', description: '', image: '', toSlider: false};

    const [id, setId] = useState('');
    const [bannerObj, setBannerObj] = useState(bannerDefault)

    useEffect(() => {
        if (banner) {

        } else {
            onResetInputs()
        }
    }, [banner]);

    const onInputChange = (e) => {
        const value = isFinite(e.target.value) ? +e.target.value : e.target.value
        const newObj = {...bannerObj};

        newObj[e.target.name] = value
        setBannerObj(newObj)
    }

    const onSaveProduct = () => {
        if (bannerObj.title) {
            dispatch(redactorState === 'add' ?
                addBanner({...bannerObj}) :
                updateBanner({id, banner: {...bannerObj}}))
            onResetInputs();
        } else {
            window.alert('Всі поля з "*" повинні бути заповнені!')
        }
    }

    const onResetInputs = () => {
        setId('');
        setBannerObj(bannerDefault)
    }

    return (
        <div className='prodcut-redactor-container'>
            <Form>
                <div className='prodcut-redactor-flex'>
                    <div className='prodcut-redactor-flex-left'>
                        <Form.Group>
                            <Form.Label>*Заголовок:</Form.Label>
                            <Form.Control
                                name='name'
                                type="text"
                                placeholder="Введіть назву продукту"
                                value={bannerObj.name || ''}
                                onChange={onInputChange}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>*Опис:</Form.Label>
                            <Form.Control
                                name='description'
                                type="text"
                                placeholder="Введіть опис баннеру"
                                value={bannerObj.description || ''}
                                onChange={onInputChange}/>
                        </Form.Group>
                    </div>
                    <div className='prodcut-redactor-flex-right'>
                        <Form.Group>
                            <Form.Label>*Посилання на зоображення:</Form.Label>
                            <Form.Control
                                name='image'
                                type="text"
                                placeholder="Введіть посилання на зображення"
                                value={bannerObj.image || ''}
                                onChange={onInputChange}/>
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

export default BannerRedactor;


