import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import './Checkout.css'
const Checkout = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser] = useContext(UserContext);
    let _id = useParams();
    const [checkout, setCheckout] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5055/products/` + _id.id;
        fetch(url)
            .then(res => res.json())
            .then(data => setCheckout(data))
    }, [_id])

    const { name, price, wight, imageURL } = checkout;


    const onSubmit = data => {
        const user = { ...loggedInUser }
        const checkoutDetail = {
            checkout: checkout,
            user: user.email,
            check: data.phoneNumber,
            address: data.address,
            orderTime: new Date()
        };
        const url = `http://localhost:5055/checkout`;

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(checkoutDetail)

        })
            .then(res => res.json())
            .then(data => {
                alert('Your order placed successfully', data)
            })
    }
    return (

        <div className="row">
            <div className="col-75">
                <div className="container">
                    <div style={{ margin: "10px" }} className="card">
                        <div className="card-body">
                            <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Checkout</h2>
                            {/* checkout form */}
                            <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input name="email" defaultValue={loggedInUser.email} ref={register} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input name="phoneNumber" ref={register} className="form-control" placeholder="Enter Phone number" />
                                </div>

                                <div className="form-group">
                                    <label>Your Address</label>
                                    <input name="address" ref={register} className="form-control" placeholder="Enter Your Address" />
                                </div>
                                <input type="submit" value="Checkout" className="btn btn-block btn-lg btn-danger" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

             {/* checkout Detail */}
            <div className="col-25">
                <div className="container">
                    <h4>Checkout Detail <span className="price" style={{ color: "black" }}><i className="fa fa-shopping-cart"></i></span></h4><hr />
                    <p><a href="#">product Picture</a><img style={{ height: "100px", width: "150px" }} src={imageURL}
                        className="img-fluid img-thumbnail" alt="Sheep" /></p>
                    <p><a href="#">Product Name</a> <span className="price">{name}</span></p>
                    <p><a href="#">Wight</a> <span className="price">{wight}</span></p>
                    <p><a href="#">Price</a> <span className="price">${price}</span></p>

                    <hr></hr>
                    <p>Total Price <span className="price" style={{ color: "black" }}><b>${price}</b></span></p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;