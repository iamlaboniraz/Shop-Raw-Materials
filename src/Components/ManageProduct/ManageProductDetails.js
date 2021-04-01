import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ManageProductDetails = (product) => {
    const { _id, user, name, price, wight } = product.product;

    const deleteProduct = (event,id) => {
        const url = `http://localhost:5055/manageProduct/${id}`;
        if (window.confirm('Are you sure?')) 
        {
            fetch(url, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        alert("Your Product successfully Deleted")
                        
                    }
                })
        }
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