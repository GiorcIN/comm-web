export const styles = {
  rootContainer: {
    borderBottom: '1px solid #EAE9F0',
  },
  searchContainer: {
    margin: '1rem 0',
  },
  leftContainer: {
    padding: '1rem 1.5rem',
    backgroundColor: 'background.light',
  },
  chatIcon: {
    width: '2rem',
    height: '2rem',
    marginRight: '0.5rem',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBoxIcon: {
    color: 'primary.main',
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  textfield: {
    '& .MuiOutlinedInput-root': {
      color: 'primary.main',
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
  rigthContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'background.light',
    padding: '1rem',
  },
  chatInfoContainer: {
    alignSelf: 'center',
  },
  contactDataContainer: {
    justifyContent: 'center',
  },
  infoBox: {
    width: 'fit-content',
    margin: '0 auto',
  },
  avatarImg: {
    width: '4rem',
    height: '4rem',
  },
  avatarContainer: {
    display: 'flex',
    alignSelf: 'center',
  },
  groupsBox: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};
