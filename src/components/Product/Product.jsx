import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, makeStyles } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes= useStyles();
    
  const handleAddToCart = () => onAddToCart(product.id, 1); 

  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
            <Typography variant='h6' gutterBottom gutterLeft>
                {product.name}
            </Typography>
            <Typography variant='h6'>
                {product.price.formatted_with_symbol}
            </Typography>
           
            </div>
            <Typography dangerouslySetInnerHTML={{__html:product.description}} variant='body2' color='textSecondary' />
             
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>

    </Card>
  )
}

export default Product