import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const AddItems = () => {
    const [user, loading, error] = useAuthState(auth);

    const addClicked = (e) => {
        e.preventDefault()
        const email = user.email;
        const name = e.target.name.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = JSON.parse(e.target.quantity.value);
        const sold = JSON.parse(e.target.sold.value);
        const supplier = e.target.supplier.value;

        // console.log(quantity, typeof (quantity));
        // console.log(sold, typeof (sold));

        const newItem = { email, name, img, description, price, quantity, sold, supplier };
        console.log(newItem);

        fetch('https://arcane-citadel-12309.herokuapp.com/addnewitem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
        e.target.reset();
    }
    return (
        <div className='container pt-5'>
            <h3 className='text-center my-2'>Add Items here</h3>


            <form onSubmit={addClicked} className='w-50 mx-auto'>
                <div className="mb-3">
                    <label className="form-label">Your Email</label>
                    <input type="email" name='email' value={user?.email} className="form-control" readOnly />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" name='name' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="text" name='img' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" name='description' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="text" name='price' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input type="number" name='quantity' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sold</label>
                    <input type="number" name='sold' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Supplier Name</label>
                    <input type="text" name='supplier' className="form-control" />
                </div>

                <div className='d-flex justify-content-end'>
                    <input type="submit" className="btn btn-primary" value='Add'></input>
                </div>

            </form>
        </div>
    );
};

export default AddItems;