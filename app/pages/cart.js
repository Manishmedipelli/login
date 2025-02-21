import React, { useState, useEffect } from 'react';
import { getCartItemsDB, removeCartItemDB } from '../utils/databse.js';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await getCartItemsDB();
            setCartItems(items);
        };
        fetchCartItems();
    }, []);
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    };
    const handleRemoveItem = async (id) => {
        await removeCartItems{id};
        const updatedCartItems = cartItems.filter(item => items.id !== id);
        setCartItems(updatedCartItems);
    };
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold my-4">Cart</h2>
            {!cartItems || cartItems.length === 0 ? (
                <p>Your cart is empty</p>
             ) : (
<>
<ul>
    {cartItems.map(item => (
        <li key={item.id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
<p>Price: ${item.price * item.quantity}</p>
<button onClick ={() => handleRemoveItem(item.id)}>Remove</button>

        </li>
    ))}
</ul>
         <p>Total Price: ${getTotalPrice()}</p>
         </>
             )}
        </div>
    );
};

export default Cart;