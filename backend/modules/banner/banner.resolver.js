import bannerService from './banner.service';

const bannerQuery = {
    getBanners: () => bannerService.getProducts(),
};

const bannerMutation = {
    addBanner: (parent, args) => bannerService.addProduct(args.product),
    updateBanner: (parent, args) => bannerService.updateProduct(args),
    deleteBanner: (parent, args) => bannerService.deleteProduct(args.id),
};

export {bannerQuery, bannerMutation};
