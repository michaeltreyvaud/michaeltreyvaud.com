import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  Group,
  Flex,
  Text,
  ActionIcon,
  Button,
} from '@mantine/core';
import { Plus } from 'tabler-icons-react';

import useStyles from './Intent.styles';

function Intent({ intent }) {
  console.log(intent);
  const { classes } = useStyles();
  return (
    <Flex direction="column">
      <Group>
        <Title order={4}>Intent</Title>
      </Group>
      <Text fz="md">
        Intents are composed of Utterances and Answers, you can configure these options below
      </Text>
      <Group>
        <Title order={4}>Utterances</Title>
        <ActionIcon>
          <Plus size="1.125rem" color="#FF8AAE" />
        </ActionIcon>
      </Group>
      <Text fz="md">
        What user-typed sentences would you like to detect?
      </Text>
      <Group>
        <Title order={4}>Answers</Title>
        <ActionIcon>
          <Plus size="1.125rem" color="#FF8AAE" />
        </ActionIcon>
      </Group>
      <Text fz="md">
        What would you like to respond with when your model detects an utterance?
      </Text>
      <Button className={classes.saveButton}>
        Save
      </Button>
    </Flex>
  );
}

Intent.propTypes = {
  intent: PropTypes.objectOf(PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string,
      opts: PropTypes.string,
    })),
    intent: PropTypes.string,
    utterances: PropTypes.arrayOf(PropTypes.string),
  })),
};

Intent.defaultProps = {
  intent: {},
};

export default Intent;
