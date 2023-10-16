import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography, Icon } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import logo from "../../assests/Mototshirt.jpg";
import './styles.css';
import { Link, useLocation } from 'react-router-dom';


const Navbar = ({totalItems}) => {
 const location= useLocation();
  
  return (
      <>
    <AppBar position='fixed' className="appBar" color='inherit'>
   <Toolbar>
   <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <Typography variant='h6' className="title" color="inherit">
            <img src={logo} alt="MoTo T-shirts" className="image" />
            MoTo Tshirts
          </Typography>
        </Link>
    <div className="grow" sx={{}} /> 

    { location.pathname==='/'&& (
    <div className="button">
        <IconButton LinkComponent={Link} to="/cart" aria-label='Show cart Items' color='inherit' >
            <Badge badgeContent={totalItems} color='secondary'></Badge>
            <ShoppingCart />
        </IconButton>
    </div>
    )}
   </Toolbar>

    </AppBar>

    </>

  )
}

export default Navbar

