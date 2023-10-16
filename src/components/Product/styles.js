import { WidthFull } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles= makeStyles({
    root: {
      // maxWidth: 345, original width style
      maxWidth: '100%',
      
    },
    media: {
      height: 10,
      paddingTop: '99.25%', // 16:9
      padding:'50.5%',
      WidthFull:'50%'
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  });

  export default useStyles;