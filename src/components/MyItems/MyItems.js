import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ProductCard from '../ProductCard/ProductCard';
import MyItemCard from './MyItemCard/MyItemCard';

const MyItems = () => {
    // const url = `/inventory/${product._id}`
    const [user, loading, error] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);



    const deleteItem = (id) => {
        fetch(`https://arcane-citadel-12309.herokuapp.com/deleteitem/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    useEffect(() => {
        fetch(`https://arcane-citadel-12309.herokuapp.com/myitems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [deleteItem]);

    return (
        <div className='container pt-5'>

            <div className='row row-cols-1 row-cols-lg-3 g-5  '>
                {
                    myProducts.map(product => <MyItemCard key={product._id} product={product} deleteItem={deleteItem}></MyItemCard>)
                }
            </div>
        </div>
    );
};

export default MyItems;