// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSingleProduct from '../../Hooks/useSingleProduct';

const Inventory = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({})



    const { _id, name, img, description, price, supplier, quantity, sold } = productData;


    // console.log(productData);

    const delivered = () => {
        fetch(`http://localhost:5000/decreasequantity/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setProductData(data)
            })

    };

    const addUnits = (event) => {
        event.preventDefault()
        const unitNumber = JSON.parse(event.target.addInput.value);
        console.log(unitNumber);

        fetch(`http://localhost:5000/increasequantity/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ unitNumber })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/singleItem/${id}`, {
        })
            .then(res => res.json())
            .then(data => setProductData(data))

    }, [id, delivered])

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

                            <form onSubmit={addUnits} className="input-group mb-3 mt-3 w-25">
                                <input type="number" className="form-control" name='addInput' placeholder='Add Units' />
                                <input className="btn btn-outline-secondary" type="submit" value='Add' id="button-addon2"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inventory;