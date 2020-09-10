export const routes = {
    pathToLogin: '/',
    pathToProducts: '/products',
    pathToOrders: '/orders',
    pathToBanners: '/banners'
};

export const SNACKBAR_MESSAGES = {
    add: {
        success: 'Додано успішно',
        error: 'Щось пішло не так',
    },
    update: {
        success: 'Зміненно успішно',
        error: 'Не вдалось оновити',
    },
    delete: {
        success: 'Видалено успішно',
        error: 'Не вдалось видалити',
    },
    login: {
        success: 'Вітаємо! Вхід успішний'
    }
}

export const PRODUCT_DEFAULT = {
    name: '',
    price: 0,
    oldPrice: 0,
    description: '',
    newItem: false,
    sale: false,
    available: false,
    toSlider: false
};

export const IMAGE_DEFAULT = {
    link: ''
};

export const COLORS_DEFAULT = [
    {black: false},
    {silver: false},
    {white: false},
    {blue: false},
    {yellow: false},
    {orange: false},
    {red: false},
    {green: false},
    {pink: false},
    {purple: false},
    {brown: false},
];

export const COLORS_HEX = [
    {black: '#000000'},
    {silver: '#949494'},
    {white: '#ffffff'},
    {blue: '#00308c'},
    {yellow: '#eeca07'},
    {orange: '#ee4807'},
    {red: '#ff0000'},
    {green: '#2eae1c'},
    {pink: '#e607ee'},
    {purple: '#5800fc'},
    {brown: '#692e19'},
];

export const ORDER_STATUSES = {
    done: {name: 'Виконані', status: 'done'},
    processing: {name: 'Обробляються', status: 'processing'},
    canceled: {name: 'Скасовано', status: 'canceled'},
}

export const MENU_ITEMS = [
    {name: 'Продукція', link: '/products', color: '#52a360'},
    {name: 'Замовлення', link: '/orders', color: '#674794'},
    {name: 'Баннери', link: '/banners', color: '#d03d03'},
    {name: 'Налаштування', link: '/settings', color: '#212529'},
]
