import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  ActionIcon,
  Group,
  Flex,
  Text,
} from '@mantine/core';
import { Plus, Trash } from 'tabler-icons-react';
import useStyles from './Intents.styles';

function Intents({
  intents, selectedIntent, onSelect, onDelete,
}) {
  const { classes, cx } = useStyles();
  return (
    <Flex direction="column">
      <Group>
        <Title order={4}>Intents</Title>
        <ActionIcon>
          <Plus size="1.125rem" color="#FF8AAE" />
        </ActionIcon>
      </Group>
      <Flex
        direction="column"
        wrap="wrap"
      >
        {intents.map((_intent, _idx) => (
          <Group
            key={_intent?.intent}
            className={cx(classes.intent, { [classes.activeIntent]: selectedIntent === _idx })}
            onClick={() => onSelect(_idx)}
          >
            <Text fz="md" className={classes.intentText}>{_intent?.intent}</Text>
            {selectedIntent === _idx && (
              <ActionIcon onClick={() => onDelete(_idx)} className={classes.deleteIntent}>
                <Trash size="1.125rem" color="#FF8AAE" />
              </ActionIcon>
            )}
          </Group>
        ))}
      </Flex>
    </Flex>
  );
}

Intents.propTypes = {
  intents: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string,
      opts: PropTypes.string,
    })),
    intent: PropTypes.string,
    utterances: PropTypes.arrayOf(PropTypes.string),
  })),
  selectedIntent: PropTypes.number,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
};

Intents.defaultProps = {
  intents: [],
  selectedIntent: 0,
  onSelect: () => {},
  onDelete: () => {},
};

export default Intents;
