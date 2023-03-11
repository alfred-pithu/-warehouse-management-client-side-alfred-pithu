import { useEffect, useState } from "react";

function useAllProducts(dependency) {
    const [allproducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://ishop-bocf.onrender.com/allproducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [dependency])
    return [allproducts]
}

export default useAllProducts;