import React from 'react';
import PropTypes from 'prop-types';

import { AppShell } from '@mantine/core';

import Header from '../../Components/V2/Header';

function Standard({ children }) {
  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs">Header</Header>}
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
