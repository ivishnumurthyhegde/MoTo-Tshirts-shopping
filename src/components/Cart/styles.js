import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  toolbar: {
    paddingTop: '5%',
    backgroundColor: '#fff',
    '@media (max-width: 600px)': {
      paddingTop: '15%', // Adjust the padding-top for smaller screens
    },
  },
  title: {
    marginTop: '3%',
    '@media (max-width: 600px)': {
      marginTop: '10%',
    },
  },
  emptyButton: {
    minWidth: '150px',
    marginBottom: '5px',
    marginRight: '25px',
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '3%',
    width: '100%',
    justifyContent: 'space-between',
  },
  // Responsive styles for screens smaller than 600px (xs)
  '@media (max-width: 600px)': {
    emptyButton: {
      marginRight: '0', // Remove right margin on small screens
    },
  },
}));

export default useStyles;
