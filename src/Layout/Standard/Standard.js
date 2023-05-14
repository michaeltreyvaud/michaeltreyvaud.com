import React from 'react';
import PropTypes from 'prop-types';

import { AppShell } from '@mantine/core';

import Header from '../../Components/V2/Header';
import { ROUTE_HOME, ROUTE_NLP, ROUTE_SHOWCASE } from '../../routes';

const links = [
  {
    link: ROUTE_HOME,
    label: 'Home',
  },
  {
    link: ROUTE_SHOWCASE,
    label: 'Live Chat Designer',
  },
  {
    link: ROUTE_NLP,
    label: 'NLP Editor',
  },
];

function Standard({ children }) {
  return (
    <AppShell
      padding="md"
      header={<Header navigationLinks={links} />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  );
}

Standard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Standard;
