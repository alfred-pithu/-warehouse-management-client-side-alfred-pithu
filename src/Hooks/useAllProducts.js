import { useEffect, useState } from "react";

function useAllProducts(dependency) {
    const [allproducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://arcane-citadel-12309.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [dependency])
    return [allproducts]
}

export default useAllProducts;