import bannerService from './banner.service';

const bannerQuery = {
    getBanners: () => bannerService.getBanners(),
    getBannerById: (parent, args) => bannerService.getBannerById(args.id),
};

const bannerMutation = {
    addBanner: (parent, args) => bannerService.addBanner(args.banner),
    updateBanner: (parent, args) => bannerService.updateBanner(args),
    deleteBanner: (parent, args) => bannerService.deleteBanner(args.id),
};

export {bannerQuery, bannerMutation};
