import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  Avatar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import profileImage from '../../../Images/profile_image_500_500.jpg';
import useStyles from './Header.style';

function Header({ navigationLinks }) {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(navigationLinks[0].link);
  const { classes, cx } = useStyles();

  const items = navigationLinks.map((link) => (
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
        <Avatar src={profileImage} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
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
