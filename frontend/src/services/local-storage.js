export const clearLocalStorage = () => {
    const trendy = {
        wishlist: [],
        cart: []
    };
    localStorage.setItem('trendy', JSON.stringify(trendy));
};

if (!localStorage.getItem('trendy')) {
    clearLocalStorage();
}

export const getFromLocalStorage = (name) => {
    const localObject = JSON.parse(localStorage.getItem('trendy'));
    return localObject[name];
};

export const setToLocalStorage = (name, item) => {
    const localObject = JSON.parse(localStorage.getItem('trendy'));
    localObject[name] = item;
    localStorage.setItem('trendy', JSON.stringify(localObject));
};
