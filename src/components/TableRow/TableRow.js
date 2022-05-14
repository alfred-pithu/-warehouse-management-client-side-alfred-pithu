import React, { useEffect } from 'react';

const TableRow = ({ product, deleteItem }) => {

    const { _id, name, img, description, price, supplier, quantity } = product;

    // deleteItem(_id);

    return (

        <tr>
            <td><img style={{ width: '35px' }} className='' src={img} alt="" /></td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td onClick={() => { deleteItem(_id) }} className='btn'>X</td>
        </tr>

    );
};

export default TableRow;