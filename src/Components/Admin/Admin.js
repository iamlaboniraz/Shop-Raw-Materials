import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const user = { ...loggedInUser }
        const ProductData = {
            user: user.email,
            name: data.name,
            price: data.price,
            wight: data.wight,
            imageURL: imageURL
        };
        const url = `https://lychee-tart-92702.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(ProductData)

        })
            .then(res => res.json())
            .then(result=>{
                console.log(result)
                if(result){
                    alert("Product add successfully")
                }
            })

    }

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '45e47385d44c6af4de0f73e4d5b3e06a');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }



    return (
        <div>

            <Sidebar></Sidebar>
            <div className="container">
                <div className="jumbotron">
                    <div style={{ margin: "10px" }} className="card">
                        <div className="card-body">
                            <h2 style={{ color: "rgb(87, 11, 17)" }} className="card-title">Add Product</h2>
                            <form className="product-form" onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input name="name" ref={register} className="form-control" placeholder="Enter Product Name" />
                                </div>
                                <div className="form-group">
                                    <label>Add Price</label>
                                    <input name="price" ref={register} className="form-control" placeholder="Enter Price" />
                                </div>
                                <div className="form-group">
                                    <label>Wight</label>
                                    <input name="wight" ref={register} className="form-control" placeholder="Enter Wight" />
                                </div>
                                <div className="form-group">
                                    <label>Add Product Picture</label>
                                    <br />
                                    <input name="image" type="file" onChange={handleImageUpload} />
                                </div>
                                <input type="submit" className="btn btn-block btn-lg btn-danger" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Admin;