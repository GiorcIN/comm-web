export const styles = {
  rootBox: {
    margin: '1rem 0',
    padding: '2rem',
    borderRadius: '1.5rem',
    boxShadow: 'none',
  },
  bodyRowStyle: {
    border: 0,
    fontWeight: 500,
    height: '4rem',
  },
  headerRowStyle: {
    color: '#77738C',
    fontWeight: 400,
    '&:first-of-type': { display: 'none' },
    height: '4rem',
  },
  moreIcon: {
    color: '#9894B1',
  },
  titleContainer: {
    justifyContent: 'start',
    alignItems: 'baseline',
    display: 'flex',
  },
  titleButton: {
    marginLeft: '1rem',
    backgroundColor: 'background.dark',
    minWidth: 'max-content',
    textTransform: 'none',
    boxShadow: 'none',
    color: 'secondary.main',
    '&:hover': {
      backgroundColor: 'background.dark',
    },
  },
  tableRow: {
    '&:first-of-type td, &:first-of-type th': { border: 0 },
  },
  tableWrapper: {
    minWidth: 650,
  },
};
