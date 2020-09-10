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
