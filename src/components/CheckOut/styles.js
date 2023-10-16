import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    position: 'relative',
  },
  toolbar: {
    minHeight: 3, // Customize toolbar height as needed
  },
  layout: {
    marginTop: '5%',
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (min-width: 600px)': {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: '2rem',
    marginBottom: '2rem',
    padding: '1rem',
    '@media (max-width: 600px)': {
      width: '100%',
      marginTop: '3rem',
    },
    '@media (min-width: 600px)': {
      marginTop: '6rem',
      marginBottom: '6rem',
      padding: '1.5rem',
    },
  },
  stepper: {
    padding: '1.0rem 0 1.5rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: '1.5rem',
    marginLeft: '1rem',
  },
  divider: {
    margin: '2rem 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
