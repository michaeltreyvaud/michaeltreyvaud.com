import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: 'black',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#FAEDF1',
      color: '#FF8AAE',
    },
  },
  linkActive: {
    '&, &:hover': {
      backgroundColor: '#FAEDF1',
      color: '#FF8AAE',
    },
  },
}));

export default useStyles;
