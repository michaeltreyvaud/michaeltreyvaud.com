import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createStyles,
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import REMOVEME from '../../../Icons/AWS';
import { ROUTE_V2_HOME, ROUTE_V2_NLP, ROUTE_V2_SHOWCASE } from '../../../routes';

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
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

const links = [
  {
    link: ROUTE_V2_HOME,
    label: 'Home',
  },
  {
    link: ROUTE_V2_SHOWCASE,
    label: 'Live Chat Designer',
  },
  {
    link: ROUTE_V2_NLP,
    label: 'Editor',
  },
];

function Header() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <MantineHeader height={60} mb={120}>
      <Container className={classes.header}>
        <REMOVEME />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </MantineHeader>
  );
}

export default Header;
