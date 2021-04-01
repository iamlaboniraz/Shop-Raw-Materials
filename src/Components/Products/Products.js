import React, { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const Products = () => {
    const [products, setProduct] = useState([])

    useEffect(() =>{
        fetch('https://lychee-tart-92702.herokuapp.com/products')
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