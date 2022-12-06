import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      light: '#ffffff',
      main: '#F2F7FA',
      dark: '#E5EFFA',
      contrastText: '#283056',
    },
    primary: {
      light: '#A1A4F1',
      main: '#33366A',
      dark: '#283056',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#545BE5',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main,
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    //iconColor: {
    //light: '#ffa726',
    //main: '#283056',
    //dark: '#ef6c00',
    //contrastText: 'rgba(0, 0, 0, 0.87)',
    //},
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.1,
  },
  typography: {
    fontFamily: [
      'Inner',
      'Judson',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
    ].join(','),
    fontSize: 16,
    fontWeightRegular: 400,
    body1: {
      fontSize: 16,
      lineHeight: '1.25rem',
      color: '#283056',
    },
    body2: {
      fontSize: 14,
      lineHeight: '1.25rem',
      color: '#9894B1',
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#283056',
      lineHeight: '2rem',
    },
    subtitle2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#33366A',
    },
    h6: {
      color: '#283056',
    },
  },
});
