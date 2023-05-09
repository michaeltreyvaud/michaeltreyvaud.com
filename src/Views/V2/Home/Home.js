import React from 'react';
import { Container, Title, Accordion } from '@mantine/core';

import Banner from './Banner';
import useStyles from './Home.styles';
import competencies from '../../Home/competencies';

function Home() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Banner />
      <Title align="center" className={classes.title}>
        Competencies
      </Title>
      <Accordion variant="separated">
        {competencies.map((_compentency) => (
          <Accordion.Item className={classes.item} value={_compentency.text}>
            <Accordion.Control>{_compentency.text}</Accordion.Control>
            <Accordion.Panel>
              {_compentency
                .items
                .reduce((_acc, _curr, _idx) => (_idx === 0 ? `${_curr.text}` : `${_acc}, ${_curr.text}`), '')}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default Home;
