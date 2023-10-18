import { createTheme } from '@mui/material';

// Example on how to theme taken from the MUI docs:
// https://mui.com/material-ui/customization/theming/
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1760a5',
      light: 'skyblue',
    },
    secondary: {
      main: '#15c630',
    },
    otherColor: {
      main: '#999',
    },
  },
});
