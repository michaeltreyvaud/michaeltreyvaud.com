import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  Text,
  Transition,
  Paper,
} from '@mantine/core';
import { useDisclosure, useClickOutside } from '@mantine/hooks';
import useStyles from './Header.style';

function Header({ navigationLinks }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const handleClick = useCallback(() => {
    if (opened) {
      close();
    }
  }, [opened]);
  const ref = useClickOutside(handleClick);

  const items = navigationLinks.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: location.pathname === link.link })}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <MantineHeader height={60} mb={120}>
      <Container className={classes.header} ref={ref}>
        <Group>
          <Text fz="md">michael.treyvaud@gmail.com</Text>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
}

Header.propTypes = {
  navigationLinks: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  })),
};

Header.defaultProps = {
  navigationLinks: [],
};

export default Header;
