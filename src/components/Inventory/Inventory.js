// import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSingleProduct from '../../Hooks/useSingleProduct';

const Inventory = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({})
    const { _id, name, img, description, price, supplier, quantity, sold } = productData;

    const delivered = useCallback(() => {
        fetch(`https://ishop-bocf.onrender.com/decreasequantity/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    });

    const addUnits = useCallback((event) => {
        event.preventDefault()
        const unitNumber = JSON.parse(event.target.addInput.value);
        console.log(unitNumber);

        fetch(`https://ishop-bocf.onrender.com/increasequantity/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ unitNumber })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    });

    useEffect(() => {
        fetch(`https://ishop-bocf.onrender.com/singleItem/${id}`, {
        })
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [id, delivered, addUnits])

    return (
        <div className='container py-5'>

            <div className="card mb-3 border-0" >
                <div className="row g-0">
                    <div className="col-md-4  d-flex align-items-center p-3">
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

                            <form onSubmit={addUnits} className="input-group mb-3 mt-3 w-25">
                                <input type="number" className="form-control " name='addInput' placeholder='' />
                                <input className="btn btn-outline-secondary" type="submit" value='Restock' id="button-addon2"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inventory;

