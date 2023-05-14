import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  Group,
  Flex,
  Text,
  ActionIcon,
  TextInput,
  Stack,
  Tooltip,
} from '@mantine/core';
import { Plus, Trash } from 'tabler-icons-react';

import useStyles from './Intent.styles';

function Intent({ intent, onUpdate }) {
  const { classes } = useStyles();
  const { utterances, answers, intent: intentName } = intent;
  return (
    <Flex direction="column">
      <Stack spacing="xl">
        <Stack spacing={2}>
          <Group>
            <Title order={4}>Intent</Title>
          </Group>
          <Text fz="md">
            Intents are composed of Utterances and Responses, you can configure these options below
          </Text>
          <TextInput
            label="Intent Name"
            placeholder="Intent Name"
            value={intentName}
            onChange={(e) => onUpdate({
              ...intent,
              intent: e.target.value,
            })}
          />
        </Stack>
        <Stack spacing={2}>
          <Group>
            <Title order={4}>Utterances</Title>
            <Tooltip label="Add Utterance">
              <ActionIcon
                onClick={() => onUpdate({
                  ...intent,
                  utterances: [...utterances, ''],
                })}
              >
                <Plus size="1.125rem" color="#FF8AAE" />
              </ActionIcon>
            </Tooltip>
          </Group>
          <Text fz="md">
            What user-typed sentences would you like to detect?
          </Text>
          {(utterances || []).map((_utt, _index) => (
            <TextInput
              key={`utterance-${_index}`}
              label="Utterance"
              placeholder="User Utterance"
              value={_utt}
              onChange={(e) => onUpdate({
                ...intent,
                utterances: utterances.map((_utts, _uttsIdx) => {
                  if (_uttsIdx === _index) {
                    return e.target.value;
                  }
                  return _utts;
                }),
              })}
              rightSection={(
                <Tooltip label="Remove Utterance">
                  <ActionIcon
                    className={classes.deleteUtterance}
                    onClick={() => onUpdate({
                      ...intent,
                      utterances: utterances.filter((_utts, _uttsIdx) => _uttsIdx !== _index),
                    })}
                  >
                    <Trash size="1.125rem" color="#FF8AAE" />
                  </ActionIcon>
                </Tooltip>
              )}
            />
          ))}
        </Stack>
        <Stack spacing={2}>
          <Group>
            <Title order={4}>Responses</Title>
            <Tooltip label="Add Response">
              <ActionIcon
                onClick={() => onUpdate({
                  ...intent,
                  answers: [...answers, ''],
                })}
              >
                <Plus size="1.125rem" color="#FF8AAE" />
              </ActionIcon>
            </Tooltip>
          </Group>
          <Text fz="md">
            What would you like to respond with when your model detects an utterance?
          </Text>
          {(answers || []).map((_ans, _index) => {
            const value = typeof _ans === 'string' ? _ans : _ans.answer;
            return (
              <TextInput
                key={`answer-${_index}`}
                value={value}
                label="Response"
                placeholder="Response"
                onChange={(e) => onUpdate({
                  ...intent,
                  answers: answers.map((_anss, _anssIdx) => {
                    if (_anssIdx === _index) {
                      return e.target.value;
                    }
                    return _anss;
                  }),
                })}
                rightSection={(
                  <Tooltip label="Remove Response">
                    <ActionIcon
                      className={classes.deleteUtterance}
                      onClick={() => onUpdate({
                        ...intent,
                        answers: answers.filter((_anss, _ansIndex) => _ansIndex !== _index),
                      })}
                    >
                      <Trash size="1.125rem" color="#FF8AAE" />
                    </ActionIcon>
                  </Tooltip>
                )}
              />
            );
          })}
        </Stack>
      </Stack>
    </Flex>
  );
}

Intent.propTypes = {
  intent: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.string),
    intent: PropTypes.string,
    utterances: PropTypes.arrayOf(PropTypes.string),
  }),
  onUpdate: PropTypes.func,
};

Intent.defaultProps = {
  intent: {
    answers: [],
    intent: '',
    utterances: [],
  },
  onUpdate: () => {},
};

export default Intent;
