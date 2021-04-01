import React from 'react';

const OrderDetail = (order) => {
    console.log("order",order)
    const { address, check, orderTime,user } = order.order;
    const { imageURL,name,price,wight } = order.order.checkout
    return (

        <tr>
            <th scope="row"><img style={{ height: "100px", width: "150px" }} src={imageURL}
                className="img-fluid img-thumbnail" alt="Sheep" /></th>
            <td>{user}</td>
            <td>{name}</td>
            <td>{wight}</td>
            <td>{price}</td>
            <td>{check}</td>
            <td>{address}</td>
            <td>{ new Date(orderTime).toDateString('dd/MM/YYYY')}</td>
        </tr>


    );
};

export default OrderDetail;