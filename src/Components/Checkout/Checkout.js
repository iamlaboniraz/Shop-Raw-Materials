import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Table } from 'reactstrap';

const Checkout = () => {
    let _id = useParams();
    const [checkout, setCheckout] = useState([]);

    useEffect(() => {
        console.log(_id)
        const url = `http://localhost:5055/products/` + _id.id;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setCheckout(data))
    }, [_id])

    const { user, name, price, wight } = checkout;
    console.log(user)
    return (
        <div>
            <div style={{ margin: "200px", boxShadow: "10px 10px 40px rgb(3, 54, 33)" }} class="card">
                <div style={{ color: "rgb(3, 54, 33)" }} class="card-header"><strong>Checkout</strong> </div>

                <table class="table ">
                    <thead>
                        <tr style={{ backgroundColor: "rgb(12, 103, 126)", color: "white" }}>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Wight</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>1</td>
                            <td>{wight}</td>
                            <td>{price}</td>
                        </tr>

                    </tbody>
                </table>

                <div style={{ textAlign: "right" }} class="card-footer">
                    <button className="btn btn-danger ">Checkout</button>
                </div>

            </div>

        </div>




        // <Table style={{margin:"100px"}} striped bordered hover>
        //     <thead>
        //         <tr>
        //             <th>Description</th>
        //             <th>Price</th>
        //             <th>Quantity</th>
        //             <th>Wight</th>
        //             <hr/>
        //         </tr>

        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>{name}</td>
        //             <td>{price}</td>
        //             <td>1</td>
        //             <td>{wight}</td>
        //         </tr>

        //     </tbody>
        // </Table>





        // <div>
        //     <h2>Email = {user}</h2>
        //     <h2>Name = {name}</h2>
        //     <h2>price = {price}</h2>
        //     <h2>wight = {wight}</h2>
        // </div>
    );
};

export default Checkout;