import React, { useState } from 'react';
import fakeData from '../../fakeData/data.js';
import './User.css';
import UserList from '../UserList/UserList.js';
import Cart from '../Cart/Cart.js';

const User = () => {
    
    const first15 = fakeData.slice(0, 15);
    const [users, setUsers] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddUser = (user) => {
        const newFriend =[...cart, user];
        setCart(newFriend);
    }

    return (
        <div className="user-container">
            <div className="userList-container">

                {
                    users.map(user => <UserList
                        handleAddUser = {handleAddUser}
                         user={user}
                         > </UserList> )
                }
        
            </div>
            <div className="userInfo-container"></div>
            <Cart total={cart}> </Cart>
           
        </div>
    );
};

export default User;