import React from 'react';
import { Typography, Container, Button, Grid, CircularProgress } from '@mui/material';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleRemoveFromCart, handleUpdateCart, handleEmptyCart }) => {
  const classes = useStyles();

  const emptyCart = () => (
    <Typography variant="subtitle1">
      Your cart is empty..! 
      <Typography> </Typography>
      <Link to="/" className={classes.link}>Start shopping now</Link>
    </Typography>
  );

  const filledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCart={handleUpdateCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5">Sub Total= {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) {
    return (
      <Container>
        <div className={classes.toolbar}>
          <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
          <CircularProgress />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        {cart.line_items.length === 0 ? emptyCart() : filledCart()}
      </div>
    </Container>
  );
}

export default Cart;
