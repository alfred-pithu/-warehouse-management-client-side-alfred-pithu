import React, { useEffect, useState } from 'react';
import useAllProducts from '../../Hooks/useAllProducts';
import TableRow from '../TableRow/TableRow';

const ManageInventory = () => {
    const deleteItem = (id) => {
        fetch(`http://localhost:5000/deleteitem/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const [allproducts] = useAllProducts(deleteItem);


    return (
        <div className='container'>
            <h2>Inventory: {allproducts.length}</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        {/* <th scope="col"></th> */}
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