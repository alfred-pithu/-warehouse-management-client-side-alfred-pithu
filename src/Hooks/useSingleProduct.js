import React, { useEffect, useState } from 'react';

const useSingleProduct = (id) => {
    const [productData, setProductData] = useState({});


    useEffect(() => {
        fetch(`https://ishop-bocf.onrender.com/singleItem/${id}`, {
        })
            .then(res => res.json())
            .then(data => setProductData(data))

    }, [id])
    return [productData];
};

export default useSingleProduct;