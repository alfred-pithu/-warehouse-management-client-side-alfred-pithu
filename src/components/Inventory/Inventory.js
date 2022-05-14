// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({})
    const { _id, name, img, description, price, supplier, quantity, sold } = productData;

    useEffect(() => {
        fetch(`http://localhost:5000/singleItem/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setProductData(data))

    }, [id])
    console.log(productData);
    return (
        <div className='container'>
            <h2>Inventory: {id} </h2>

            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 border d-flex align-items-center p-3">
                        <img className='' src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8 d-flex align-items-center">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <br />
                            <p class="card-text">{description}</p>
                            <h6>Price: {price}</h6>
                            <h6>Supplier: {supplier}</h6>
                            <h6>Quantity: {quantity}</h6>
                            <h6>Sold: {sold}</h6>
                            <br />
                            <button className='btn btn-primary'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inventory;