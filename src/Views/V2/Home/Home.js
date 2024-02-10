import React from 'react';
import {
  Container,
  Title,
  Accordion,
  Space,
} from '@mantine/core';

import Banner from './Banner';
import useStyles from './Home.styles';
import competencies from './competencies';

function Home() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.container}>
      <Banner />
      <Space h="md" />
      <Title align="center" order={3}>
        Competencies
      </Title>
      <Space h="md" />
      <Accordion variant="separated">
        {competencies.map((_compentency) => (
          <Accordion.Item
            className={classes.item}
            value={_compentency.text}
            key={_compentency.text}
          >
            <Accordion.Control>
              <div className={classes.control}>
                <div
                  className={classes.icon}
                  style={{ backgroundColor: _compentency?.iconBackgroundColor }}
                >
                  {_compentency?.icon}
                </div>
                <div className={classes.controlText}>
                  {_compentency.text}
                </div>
              </div>
            </Accordion.Control>
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
