import { createStyles } from '@mantine/core';

const styles = createStyles(() => ({
  intent: {
    minHeight: 32,
    justifyContent: 'space-between',
  },
  intentText: {
    marginLeft: 4,
    '&:hover': {
      color: '#FF8AAE',
      cursor: 'pointer',
    },
  },
  activeIntent: {
    backgroundColor: '#FAEDF1',
    color: '#FF8AAE',
  },
  deleteIntent: {
    backgroundColor: '#FAEDF1',
    '&:hover': {
      backgroundColor: '#FAEDF1',
    },
  },
}));

export default styles;
