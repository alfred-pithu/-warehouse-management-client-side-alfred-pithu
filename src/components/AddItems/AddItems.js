import React from 'react';

const AddItems = () => {
    const addClicked = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const sold = e.target.sold.value;
        const supplier = e.target.supplier.value;

        const newItem = { email, name, img, description, price, quantity, sold, supplier };
        console.log(newItem);

        fetch('http://localhost:5000/addnewitem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }
    return (
        <div className='container'>
            <h3>Add Items here</h3>

            <form onSubmit={addClicked} className='w-50 mx-auto'>
                <div className="mb-3">
                    <label className="form-label">Your Email</label>
                    <input type="email" name='email' className="form-control" />
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