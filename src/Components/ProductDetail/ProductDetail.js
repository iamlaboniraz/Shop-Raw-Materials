import React from 'react';
import { useHistory } from 'react-router';
// import {Card, Button} from 'react-bootstrap';
// import Checkout from '../Checkout/Checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
// import './ProductDetail';



import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { Button } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: "100px",
        marginLeft: "100px",
        boxShadow: "10px 10px 40px rgb(32, 20, 3)",
    },
    media: {
        height: "50%",
        paddingTop: '70.25%',
    },

    avatar: {
        backgroundColor: red[500],
    },
}));

const ProductDetail = ({ product }) => {
    const classes = useStyles();
    console.log("product", product)
    const history = useHistory();

    const handleClick = (_id) => {
        history.push(`/products/${_id}`)
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        F
                    </Avatar>
                }
                title={product.name}
                subheader={product.wight}
            />
            <CardMedia
                className={classes.media}
                image={product.imageURL}
            />
            <CardContent>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <h4 style={{ color: 'green' }}><AttachMoneyIcon /><strong>{product.price}</strong></h4>
                </IconButton>
                <IconButton aria-label="share">
                    <Button style={{ textAlign: "right" }} className="btn btn-danger" onClick={() => handleClick(product._id)}><ShoppingCartIcon />Buy Now</Button>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ProductDetail;