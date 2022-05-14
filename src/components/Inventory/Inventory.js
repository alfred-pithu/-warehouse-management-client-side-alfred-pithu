// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({})
    const { _id, name, img, description, price, supplier, quantity, sold } = productData;


    useEffect(() => {
        fetch(`http://localhost:5000/singleItem/${id}`, {
        })
            .then(res => res.json())
            .then(data => setProductData(data))

    }, [])

    // console.log(productData);

    const delivered = () => {
        fetch(`http://localhost:5000/decreasequantity/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => console.log(data))

    };

    return (
        <div className='container'>
            <h2>Inventory: {id} </h2>

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4 border d-flex align-items-center p-3">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <br />
                            <p className="card-text">{description}</p>
                            <h6>Price: {price}</h6>
                            <h6>Supplier: {supplier}</h6>
                            <h6>Quantity: {quantity}</h6>
                            <h6>Sold: {sold}</h6>
                            <br />
                            <button onClick={delivered} className='btn btn-primary'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inventory;