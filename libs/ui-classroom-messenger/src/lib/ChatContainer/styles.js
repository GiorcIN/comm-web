export const styles = {
  rootContainer: {
    backgroundColor: 'background.light',
    width: '100%',
  },
  gridItem: {
    boxShadow: '0px 2px 3px #EAE9F0',
  },
  chatHeader: {
    justifyContent: 'center',
  },
  avatarContainer: {
    display: 'flex',
    alignSelf: 'center',
  },
  textBoxIcon: {
    color: 'primary.main',
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  textField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      color: 'primary.light',
      borderRadius: '0.5rem',
      '& fieldset': {
        borderColor: 'primary.main',
      },
      '&:hover fieldset': {
        borderColor: 'primary.main',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary.main',
      },
    },
  },
  textBoxContainer: {
    alignItems: 'center',
    padding: '1rem 0',
  },
  textBoxItem: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 0.5rem',
  },
  textBoxInput: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
};
