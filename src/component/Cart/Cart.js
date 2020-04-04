import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.total


    //const total = cart.reduce((cart, user) => cart + user.yearlyIncome, 0)

   //another way we can do it by for loop.

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const addFriend = cart[i];
        total = total + addFriend.yearlyIncome;
        
    }

    return (
        <div className="sticky">
            <h3>Friends Summary</h3>
            <p>Total Friends: {cart.length} </p>
            <p>Total Yearly Income: ${total} </p>
        </div>
    );
};

export default Cart;