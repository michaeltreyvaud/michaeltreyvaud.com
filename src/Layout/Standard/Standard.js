import React from 'react';
import PropTypes from 'prop-types';

import { AppShell } from '@mantine/core';

import Header from '../../Components/V2/Header';
import { ROUTE_V2_HOME, ROUTE_V2_NLP, ROUTE_V2_SHOWCASE } from '../../routes';

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
