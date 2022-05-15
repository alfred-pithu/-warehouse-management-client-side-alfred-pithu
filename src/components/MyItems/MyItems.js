import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProductCard from '../ProductCard/ProductCard';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, []);

    return (
        <div className='container pt-5'>

            <div className='row row-cols-1 row-cols-lg-3 g-5  '>
                {
                    myProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default MyItems;