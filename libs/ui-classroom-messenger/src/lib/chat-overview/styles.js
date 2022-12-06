export const styles = {
  rootPaper: {
    boxShadow: 'none',
    border: 'none',
    borderRadius: '1.5rem',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    msOverflowStyle: 'none',
  },
  rootBox: {
    margin: '2rem',
  },
  titleContainer: {
    justifyContent: 'start',
    alignItems: 'baseline',
    display: 'flex',
  },
  chatButton: {
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
};
