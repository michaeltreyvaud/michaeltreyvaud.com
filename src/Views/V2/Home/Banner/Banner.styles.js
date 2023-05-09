import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default useStyles;
