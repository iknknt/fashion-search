const breakpoints = require('./breakpoints');
const { createMuiTheme, responsiveFontSizes } = require('@material-ui/core/styles');

module.exports = responsiveFontSizes(createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['"Noto Sans JP"', 'sans-serif'].join(','),
  },
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
    },
    secondary: {
      light: '#ae52d4',
      main: '#7b1fa2',
      dark: '#4a0072',
    },
  },
  breakpoints: {
    values: {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
    },
  },
}));
