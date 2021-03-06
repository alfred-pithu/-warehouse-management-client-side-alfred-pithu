import React from 'react';
import { Link } from 'react-router-dom';
import useAllProducts from '../../Hooks/useAllProducts';
import ProductCard from '../ProductCard/ProductCard';

const HomeItemSection = () => {
    const [allproducts] = useAllProducts('');
    const sixProducts = allproducts.slice(0, 6);

    return (
        <div className='my-5'>
            <div className='row row-cols-1 row-cols-lg-3 g-5  '>
                {
                    sixProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            <div className=' d-flex justify-content-end my-4'>
                <Link className='btn btn-dark  ms-auto border' to='/manageinventory'> Manage Inventories</Link>
            </div>
        </div>
    );
};

export default HomeItemSection;