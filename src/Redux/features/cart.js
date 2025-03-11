import { createSlice } from "@reduxjs/toolkit";



const itemsOfCart=localStorage.getItem("")

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
                localStorage.setItem("cart", action.payload);
                
            } else {
                const item = state.items.find(item => item.id === action.payload.id);
                item.quantity += 1;
                item.price += action.payload.price;

              
                
            }
        },

        delete_from_cart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },

        removeAll: (state) => {
            state.items = [];
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