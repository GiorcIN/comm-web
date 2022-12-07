export const styles = {
  rootContianer: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 3px #EAE9F0',
    height: '100%',
  },
  groupTitle: {
    fontSize: '1.25rem',
    width: 'fit-content',
  },
  accordionContainer: {
    position: 'inherit',
    boxShadow: 'none',
  },
  accordionDeco: {
    position: 'relative',
    width: '100%',
    '&::before': {
      content: '""',
      display: 'block',
      height: '1px',
      width: '100%',
      position: 'relative',
      top: '50%',
      left: '1rem',
      backgroundColor: 'primary.main',
    },
  },
  expandIcon: {
    color: 'primary.main',
  },
};
