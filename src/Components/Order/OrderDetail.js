import React from 'react';

const OrderDetail = (order) => {
    const { user, name, price, wight, imageURL } = order.order
    return (

        <tr>
            <th scope="row"><img style={{ height: "100px", width: "150px" }} src={imageURL}
                className="img-fluid img-thumbnail" alt="Sheep" /></th>
            <td>{user}</td>
            <td>{name}</td>
            <td>{wight}</td>
            <td>{price}</td>
        </tr>


    );
};

export default OrderDetail;