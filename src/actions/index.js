const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    };
};

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
};

const removeFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    };
};

const itemPlus = (id) => {
    return {
        type: 'ITEM_COUNT_PLUS',
        payload: id
    };
};

const itemMinus = (id) => {
    return {
        type: 'ITEM_COUNT_MINUS',
        payload: id
    };
};

const sendOrder = () => {
    return {
        type: 'SEND_ORDER'
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    removeFromCart,
    itemPlus,
    itemMinus,
    sendOrder
};