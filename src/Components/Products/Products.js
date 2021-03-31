import React, { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const Products = () => {
    const [products, setProduct] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div className="row">
        {
            products.map(product => <ProductDetail key={product._id} product={product}></ProductDetail>)
        }
        </div>
    );
};

export default Products;