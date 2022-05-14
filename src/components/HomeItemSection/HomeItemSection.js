import React from 'react';
import useAllProducts from '../../Hooks/useAllProducts';
import ProductCard from '../ProductCard/ProductCard';

const HomeItemSection = () => {
    const [allproducts] = useAllProducts();
    const sixProducts = allproducts.slice(0, 6);
    console.log(sixProducts);
    return (
        <div className=''>
            {/* <h2>All products : {sixProducts.length}</h2> */}
            <div className='row row-cols-1 row-cols-lg-3 g-4 '>
                {
                    sixProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default HomeItemSection;