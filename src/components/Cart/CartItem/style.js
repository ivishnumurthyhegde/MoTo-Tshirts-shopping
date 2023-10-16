import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  media: {
    height: 370, 
    paddingBottom: -50,
'  @media (max-width: 600px)': {
    media: {
      height: 350, // Adjust the height for smaller screens
      width: 260,
    },
  }

  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  // Mobile-responsive styles using CSS media queries
  '@media (max-width: 600px)': {
    media: {
      height: 350,
    },
    cardContent: {
      flexDirection: 'column', // Adjust the flex direction for smaller screens
      alignItems: 'center', // Center-align content for smaller screens
    },
  },
}));

export default useStyles;
