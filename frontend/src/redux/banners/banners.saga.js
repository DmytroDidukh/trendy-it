import { takeEvery, call, put } from 'redux-saga/effects';

import {
    setBanners,
    setLoading,
} from './banners.actions';
import { getBanners } from '../../services/banners';
import { GET_BANNERS } from './banners.types';

function* handleBannersLoad() {
    try {
        yield put(setLoading(true));
        const banners = yield call(getBanners);
        yield put(setBanners(banners.data.getBanners));
        yield put(setLoading(false));
    } catch (error) {
        console.log(error);
    }
}

export default function* bannersSaga() {
    yield takeEvery(GET_BANNERS, handleBannersLoad);
}
