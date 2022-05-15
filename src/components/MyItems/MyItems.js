import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, []);
    return (
        <div>
            <h2>My Items: {myProducts.length}</h2>
        </div>
    );
};

export default MyItems;