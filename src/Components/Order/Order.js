import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import OrderDetail from './OrderDetail';
import { Table } from 'react-bootstrap';
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`

            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (

        <div style={{ marginTop: "50px",textAlign: "center" }} className="container">
            <div className="jumbotron">
                <div className="card">
                    {/* <div className="card-header">
                        All Order List
                    </div> */}
                    {/* <img src="..." className="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        <h5 className="card-title">All Order List</h5>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Wight</th>
                                    <th scope="col">Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    orders.map(order => <OrderDetail key={order._id} order={order}></OrderDetail>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

       
    );
};

export default Order;