import axios from 'axios';
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ManageProductDetails = (product) => {
    console.log("product list = = ",product)
    const { _id, user, name, price, wight } = product.product;

    const deleteProduct = (product,id) =>{
        console.log("delete", id);
        console.log("target value = ", product.product);
        const url = `http://localhost:5055/delete/${id}`;
        console.log(url)
        
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully",result)
                if (result) {
                    console.log("result = ",result,product.product)
                    // console.log(setDeleted(result))
                    
                }
            })
    }
    return (

            <tr>
                <td>{user}</td>
                <td>{name}</td>
                <td>{wight}</td>
                <td>{price}</td>
                <td><button className="btn btn-danger" onClick={() => deleteProduct(product,_id)}><DeleteIcon></DeleteIcon></button></td>
            </tr>
    );
};

export default ManageProductDetails;