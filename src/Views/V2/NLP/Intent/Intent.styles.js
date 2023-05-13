import { createStyles } from '@mantine/core';

const styles = createStyles(() => ({
  saveButton: {
    background: '#FF8AAE',
    '&:hover': {
      backgroundColor: '#FAEDF1',
      color: '#FF8AAE',
    },
  },
  deleteUtterance: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}));

export default styles;
