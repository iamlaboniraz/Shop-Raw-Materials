import React, { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import { Spinner } from 'react-bootstrap';
import useFullPageLoading from '../useFullPageLoading/useFullPageLoading';

const Products = () => {
    const [products, setProduct] = useState([])
    const [loader, showLoader, hideLoader] = useFullPageLoading();

    useEffect(() => {
        showLoader();
        fetch('https://lychee-tart-92702.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                hideLoader();
                setProduct(data)
            })

    }, [])

    return (
        <div className="row">
            {
                products.map(product => <ProductDetail key={product._id} product={product}></ProductDetail>)
            }
            <Spinner style={{marginTop:"10%",marginLeft:"50%"}} animation="border" name={loader} variant="primary" />
        </div>
    );
};

export default Products;