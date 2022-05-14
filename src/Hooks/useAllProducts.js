import { useEffect, useState } from "react";

function useAllProducts() {
    const [allproducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return [allproducts]
}

export default useAllProducts;