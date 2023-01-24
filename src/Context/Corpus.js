import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import DEFAULT_CORPUS from '../testCorpus.json';

export const CorpusContext = createContext({});

export function CorpusProvider({ children }) {
  const [corpus, setCorpus] = useState(DEFAULT_CORPUS);
  const value = useMemo(() => ({
    corpus, setCorpus,
  }), [corpus, setCorpus]);
  return (
    <CorpusContext.Provider value={value}>
      {children}
    </CorpusContext.Provider>
  );
}

CorpusProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
