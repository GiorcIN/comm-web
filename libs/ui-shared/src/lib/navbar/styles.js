export const styles = {
  titleTypo: {
    marginRight: 2,
    display: { xs: 'none', md: 'flex' },
    fontWeight: 400,
    letterSpacing: '.2rem',
    textDecoration: 'none',
  },
  titleTypoXs: {
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    fontFamily: 'Judson',
    fontWeight: 200,
    letterSpacing: '.1rem',
    textDecoration: 'none',
  },
  menuBox: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
  },
  menuBoxXs: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
  menuButton: {
    marginRight: '0.5rem',
    textTransform: 'none',
    boxShadow: 'none',
    '& > *:first-child': {
      '& > *:first-child': {
        fontSize: '1.75rem',
      },
    },
  },
  iconButton: {
    border: '2px solid #EAE9F0',
    borderRadius: '25%',
  },
  iconStyle: {
    color: 'primary.main',
  },
  logoContainer: {
    flexBasis: 'fit-content',
  },
};
