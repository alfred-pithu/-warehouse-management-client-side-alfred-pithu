import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAllProducts from '../../Hooks/useAllProducts';
import TableRow from '../TableRow/TableRow';

const ManageInventory = () => {

    const deleteItem = (id) => {
        fetch(`https://arcane-citadel-12309.herokuapp.com/deleteitem/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const [allproducts] = useAllProducts(deleteItem);


    return (
        <div className='container pt-5'>

            <div className='d-flex justify-content-end my-3'>
                <Link className='btn btn-light border border-1 rounded-1 py-0 px-4' to='/additems'> Add New Item</Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allproducts.map(product => <TableRow key={product._id} deleteItem={deleteItem} allproducts={allproducts} product={product}></TableRow>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ManageInventory;