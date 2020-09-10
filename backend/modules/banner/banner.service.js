import {Banner} from '../../models';

class BannerService {
    getBanners() {
        return Banner.find();
    }

    addBanner(data) {
        const product = new Banner(data);
        return product.save();
    }

    updateBanner({id, banner}) {
        return Banner.findByIdAndUpdate(
            id,
            {$set: {...banner}},
            {new: true}
        );
    }

    deleteBanner(id) {
        return Banner.findByIdAndRemove(id)
    }
}

export default new BannerService();
