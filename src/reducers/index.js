const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const itemIndexAdd = state.items.findIndex( item => item.id === id);
            let newItem;
            if (itemIndexAdd === -1) {
                newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id, 
                    count: 1
                };
                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ]
                };
            }
            else {
                state.items[itemIndexAdd] = {
                    ...state.items[itemIndexAdd]
                };
                return {
                    ...state,
                    items: [
                        ...state.items
                    ]
                };
            }
        case 'ITEM_REMOVE_FROM_CART':
            const indexRemove = action.payload;
            const itemIndexRemove = state.items.findIndex( item => item.id === indexRemove);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndexRemove),
                    ...state.items.slice(itemIndexRemove + 1)
                ]
            };
        case 'ITEM_COUNT_MINUS':
            const indexMinus = action.payload;
            const itemIndexMinus = state.items.findIndex( item => item.id === indexMinus);
            if (state.items[itemIndexMinus].count > 1) {
                state.items[itemIndexMinus] = {
                    ...state.items[itemIndexMinus],
                    count: +state.items[itemIndexMinus].count - 1
                };
                return {
                    ...state,
                    items: [
                        ...state.items
                    ]
                };
            }
            else {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndexMinus),
                        ...state.items.slice(itemIndexMinus + 1)
                    ]
                };
            }    
        case 'ITEM_COUNT_PLUS':
            const indexPlus = action.payload;
            const itemIndexPlus = state.items.findIndex( item => item.id === indexPlus);
            state.items[itemIndexPlus] = {
                ...state.items[itemIndexPlus],
                count: +state.items[itemIndexPlus].count + 1
            };
            return {
                ...state,
                items: [
                    ...state.items
                ]
            };
        default:
            return state;
    }
};

export default reducer;