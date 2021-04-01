import React, { useEffect, useState } from 'react';
import ManageProductDetails from './ManageProductDetails';

const ManageProduct = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (

        <div style={{ marginTop: "50px", textAlign: "center" }} className="container">
            <div className="jumbotron">
                <div className="card">

                    <div className="card-body">
                        <h5 className="card-title">All Product List</h5>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Wight</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    products.map(product =>
                                        <ManageProductDetails key={product._id} product={product}></ManageProductDetails>
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManageProduct;