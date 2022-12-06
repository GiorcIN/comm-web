import BroadcastBackground from '../../../../../apps/host/dashboard/dashboard/src/assets/svg/DashboardCard-01.svg';
import ChatBackground from '../../../../../apps/host/dashboard/dashboard/src/assets/svg/DashboardCard-02.svg';

export const styles = {
  rootCardBroadcast: {
    borderRadius: '1rem',
    border: 'none',
    boxShadow: 'none',
    backgroundImage: `url(${BroadcastBackground})`,
    backgroundColor: 'primary.dark',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    padding: '2rem 4rem',
  },
  rootCardChat: {
    borderRadius: '1.5rem',
    border: 'none',
    boxShadow: 'none',
    backgroundImage: `url(${ChatBackground})`,
    backgroundColor: 'background.light',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    padding: '2rem 4rem',
  },
  cardButton: {
    minWidth: 'max-content',
    textTransform: 'none',
    marginTop: '1rem',
    boxShadow: 'none',
    color: 'background.light',
  },
  mediaContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  templatesButton: {
    marginTop: '1rem',
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
