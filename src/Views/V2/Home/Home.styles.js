import { createStyles, rem } from '@mantine/core';

const styles = createStyles((theme) => ({
  container: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },
  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  control: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  controlText: {
    marginLeft: theme.spacing.sm,
  },
}));

export default styles;
