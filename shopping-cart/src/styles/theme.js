import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#F08F33',
    },
    secondary: {
      main: '#1574D9',
    },
  },
  typography: {
    fontFamily: 'Montserrat'
  }
});