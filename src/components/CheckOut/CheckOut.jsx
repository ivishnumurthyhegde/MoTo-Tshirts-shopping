import React, { useEffect, useState } from 'react'
import { Paper,Stepper, StepLabel, Step, Typography, CircularProgress, Divider, Button, CssBaseline } from '@mui/material'
import useStyles from './styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import { commerce } from '../../lib/Commerce';
import { Link } from 'react-router-dom';

const steps=["Address Details" , "Payment Details"];
const CheckOut = ({cart, order, onCaptureCheckout, error}) => {
    const [loading, setLoading] = useState(true);
    const [shippingData, setShippingData]= useState({});
const [checkoutToken, setToken]= useState(null);

    useEffect(()=>{
        const generateToken= async()=>{
            try {
            const token= await commerce.checkout.generateToken(cart.id , {type: "cart"});
            console.log("this is token",token);
            setToken(token);
            setLoading(false);
            } catch(error){
               
            }
        }
        generateToken();
    },[cart]);

 const test=(data)=>{
    setShippingData(data);
    nextStep();
 }
 const nextStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep+1);

 const backStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep-1);
 


    const [activeStep, setActiveStep]= useState(0);
    const classes=  useStyles();




    let Confirmation = () => (order.customer ? (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br />
          <Button LinkComponent={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ));
    
      if (error) {
        Confirmation = () => (
          <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
          </>
        );
      }

const Form= ()=> activeStep===0
? <AddressForm checkoutToken={checkoutToken} test={test} /> 
:<PaymentForm
shippingData={shippingData}
checkoutToken={checkoutToken}
backStep={backStep}
onCaptureCheckout={onCaptureCheckout}
nextStep={nextStep} 
/>


  return (
    <>
    <CssBaseline />
    <div className={classes.toolbar} />
    <main className={classes.layout} >
        <Paper className={classes.paper}>
        <Typography variant='h4'  align='center' > checkout</Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((step)=>(
            <Step key={step}>
                <StepLabel> {step}</StepLabel>
            </Step>
        ))}

        </Stepper>
        {loading ? ( // Show loading spinner if loading is true
        <div>
              <CircularProgress color="primary" size={60} thickness={4} sx={{ color: 'red' }}/>
            </div>
          ) : activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};


export default CheckOut