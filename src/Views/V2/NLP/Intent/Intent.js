import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  Group,
  Flex,
  Text,
  ActionIcon,
  Button,
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
        <Stack spacing={0}>
          <Group>
            <Title order={4}>Intent</Title>
          </Group>
          <Text fz="md">
            Intents are composed of Utterances and Answers, you can configure these options below
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
        <Stack spacing={0}>
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
          {utterances.map((_utt, _index) => (
            <TextInput
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
        <Stack spacing={0}>
          <Group>
            <Title order={4}>Answers</Title>
            <Tooltip label="Add Answer">
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
                value={value}
                label="Model Response"
                placeholder="Model Response"
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
                  <Tooltip label="Remove Answer">
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
        <Button className={classes.saveButton}>
          Save
        </Button>
      </Stack>
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
