import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  ActionIcon,
  Group,
  Flex,
  Text,
  Tooltip,
} from '@mantine/core';
import { Plus, Trash } from 'tabler-icons-react';
import useStyles from './Intents.styles';

function Intents({
  intents, selectedIntent, onSelect, onDelete, onAdd,
}) {
  const { classes, cx } = useStyles();
  return (
    <Flex direction="column">
      <Group>
        <Title order={4}>Intents</Title>
        <Tooltip label="Add Intent">
          <ActionIcon onClick={onAdd}>
            <Plus size="1.125rem" color="#FF8AAE" />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Flex
        direction="column"
        wrap="wrap"
      >
        {intents.map((_intent, _idx) => (
          <Group
            key={`intents-${_idx}`}
            className={cx(classes.intent, { [classes.activeIntent]: selectedIntent === _idx })}
            onClick={() => onSelect(_idx)}
          >
            <Text fz="md" className={classes.intentText}>{_intent?.intent}</Text>
            {selectedIntent === _idx && (
              <Tooltip label="Remove Intent">
                <ActionIcon onClick={() => onDelete(_idx)} className={classes.deleteIntent}>
                  <Trash size="1.125rem" color="#FF8AAE" />
                </ActionIcon>
              </Tooltip>
            )}
          </Group>
        ))}
      </Flex>
    </Flex>
  );
}

Intents.propTypes = {
  intents: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.string),
    intent: PropTypes.string,
    utterances: PropTypes.arrayOf(PropTypes.string),
  })),
  selectedIntent: PropTypes.number,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
};

Intents.defaultProps = {
  intents: [],
  selectedIntent: 0,
  onSelect: () => {},
  onDelete: () => {},
  onAdd: () => {},
};

export default Intents;
