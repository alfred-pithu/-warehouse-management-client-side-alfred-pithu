import React from 'react';
import { Link } from 'react-router-dom';

const MyItemCard = ({ product, deleteItem }) => {
    const { _id, name, img, description, price, supplier, quantity } = product;
    const url = `/inventory/${_id}`

    const deleteConfirm = () => {
        const popupConfirm = window.confirm('Sure to delete ?')
        console.log(popupConfirm);
        if (popupConfirm) {
            deleteItem(_id)
        }
    }
    return (
        <div className='col mx-auto'>
            <div className="card" >
                <div className='w-50 mx-auto'>
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h6>Price: {price}</h6>
                    <h6>Quantity: {quantity} </h6>
                    <h6>Supplier : {supplier}</h6>
                    <p>id: {_id}</p>
                    <Link to={url} className="btn btn-primary">Update</Link>
                    <button className=' btn btn-danger mx-3' onClick={deleteConfirm}>Delete</button>
                </div>
            </div >
        </div >
    );
};

export default MyItemCard;