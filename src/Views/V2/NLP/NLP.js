import React, { useState, useContext } from 'react';

import {
  Container,
  Grid,
} from '@mantine/core';

import Intents from './Intents';
import Intent from './Intent';
import Model from './Model';
import useStyles from './NLP.styles';

import { CorpusContext } from '../../../Context/Corpus';

function NLP() {
  const { classes } = useStyles();
  const { corpus, setCorpus } = useContext(CorpusContext);
  const [intents, setIntents] = useState(corpus.data || []);
  const [selectedIntent, setSelectedIntent] = useState(0);

  const selectIntent = (_idx) => {
    setSelectedIntent(_idx);
  };
  const deleteIntent = (_idx) => {
    setIntents((_curr) => [..._curr.filter((_int, _idex) => _idx !== _idex)]);
  };
  const updateIntent = (_index, _val) => {
    const updatedIntents = intents.map((_int, _idx) => {
      if (_idx === _index) {
        return _val;
      }
      return _int;
    });
    setIntents(updatedIntents);
  };
  return (
    <Container size="xl" className={classes.container}>
      <Grid>
        <Grid.Col sm={12} md={12} lg={4} xl={4}>
          <Intents
            intents={intents}
            selectedIntent={selectedIntent}
            onSelect={selectIntent}
            onDelete={deleteIntent}
          />
        </Grid.Col>
        <Grid.Col sm={12} md={12} lg={4} xl={4}>
          <Intent
            intent={intents?.[selectedIntent] || {}}
            onUpdate={(_val) => updateIntent(selectedIntent, _val)}
          />
        </Grid.Col>
        <Grid.Col sm={12} md={12} lg={4} xl={4}>
          <Model />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default NLP;
