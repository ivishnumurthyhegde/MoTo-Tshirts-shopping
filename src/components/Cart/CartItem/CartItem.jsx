import React from 'react'
import { Typography, Button, CardMedia,Card, CardActions, CardContent } from '@mui/material'
import useStyles from './style'


const CartItem = ( {item , handleUpdateCart,handleRemoveFromCart}) => {
    const classes= useStyles();
  return (
   <Card>
    <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
    <CardContent className={classes.cardContent}>
    <Typography variant="h5"> 
    {item.name}
    </Typography>
    <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>

    </CardContent>

    <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
            <Button type="button" size="small" onClick={()=>handleUpdateCart(item.id, item.quantity-1)}> -</Button>
            <Typography> {item.quantity}</Typography>
            <Button type="button" size="small"  onClick={()=>handleUpdateCart(item.id, item.quantity+1)}> +</Button>
        </div>
        <Button type="button" color="secondary" variant="contained" onClick={()=>handleRemoveFromCart(item.id)}> Remove</Button>
    </CardActions>

   </Card>
  )
}

export default CartItem