import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        open: false,
        items: [],
        total: 0,
    },

    reducers: {
        toggleCart: (state) => {
            state.open = !state.open;
        },

        openCart: (state) => {
            state.open = true;
        },

        closeCart: (state) => {
            state.open = false;
        },

        add_to_cart: (state, action) => {
            const itemExists = state.items.some(item => item.id === action.payload.id);
            if (!itemExists) {
                state.items.push(action.payload);
            } else {
                const item = state.items.find(item => item.id === action.payload.id);
                item.quantity += 1;
                item.price += action.payload.price;
            }
        
            state.total = state.items.reduce((prev, curr) => prev + curr.price, 0);
            
            
            localStorage.setItem("cart", JSON.stringify(state.items));
        },

        delete_from_cart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);

           
            state.total = state.items.reduce((prev, curr) => prev + curr.price, 0);
        },

        removeAll: (state) => {
            state.items = [];
            state.total = 0; 
        },

        updateItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                switch (action.payload.operation) {
                    case 'add':
                        item.quantity += 1;
                        item.price += action.payload.price;
                        break;
                    case 'subtract':
                        if (item.quantity > 1) {
                            item.quantity -= 1;
                            item.price -= action.payload.price;
                        } else {
                            state.items = state.items.filter(cartItem => cartItem.id !== item.id);
                        }
                        break;
                    default:
                        break;
                }
            }

         
            state.total = state.items.reduce((prev, curr) => prev + curr.price, 0);
        },
    }
});

export const {
    toggleCart,
    openCart,
    closeCart,
    add_to_cart, 
    delete_from_cart,
    removeAll,
    updateItem,
} = cartSlice.actions;

export default cartSlice.reducer;