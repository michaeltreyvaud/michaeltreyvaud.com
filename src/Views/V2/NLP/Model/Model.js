import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  Group,
  Flex,
  Stack,
  Text,
  TextInput,
  Button,
} from '@mantine/core';

import { buildModel, inference } from '../../../../lib/nlp';
import useStyles from './Model.styles';

function Model({ intents, setCorpus }) {
  const { classes } = useStyles();
  const [nlp, setNlp] = useState(null);
  const [training, setTraining] = useState(false);
  const [utterance, setUtterance] = useState('');
  const [response, setResponse] = useState(null);
  const train = async () => {
    if (!training) {
      setNlp(null);
      setTraining(true);
      setUtterance('');
      setResponse(null);
      const modelData = {
        name: 'Corpus',
        locale: 'en-US',
        data: intents,
      };
      const model = await buildModel(modelData);
      setNlp(model);
      setTraining(false);
      setCorpus(modelData);
    }
  };

  const test = async () => {
    const res = await inference(nlp, utterance);
    setResponse(res?.answers || []);
  };
  return (
    <Flex direction="column">
      <Stack spacing="xl">
        <Stack spacing={2}>
          <Group>
            <Title order={4}>Train Model</Title>
          </Group>
          <Text fz="md">
            Train your model right here in the browser!
          </Text>
          <Button className={classes.button} onClick={train}>
            Train
          </Button>
        </Stack>
        {nlp && (
          <Stack spacing={2}>
            <Group>
              <Title order={4}>Test Model</Title>
            </Group>
            <Text fz="md">
              Test your trained model below or via the interactive messenger
            </Text>
            <TextInput
              label="Test Utterance"
              placeholder="Type a test utterance"
              value={utterance}
              onChange={(e) => setUtterance(e.target.value)}
            />
            <Button className={classes.button} onClick={test}>
              Test
            </Button>
          </Stack>
        )}
        {response && (
          <Stack spacing={2}>
            <Group>
              <Title order={4}>Inference Response</Title>
            </Group>
            {response.length > 0 ? response.map((_res) => (
              <Text fz="md" key={_res}>
                {_res?.answer}
              </Text>
            )) : (
              <Text fz="md">
                No Response from model
              </Text>
            )}
          </Stack>
        )}
      </Stack>
    </Flex>
  );
}

Model.propTypes = {
  intents: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.string),
    intent: PropTypes.string,
    utterances: PropTypes.arrayOf(PropTypes.string),
  })),
  setCorpus: PropTypes.func,
};

Model.defaultProps = {
  intents: [],
  setCorpus: () => {},
};

export default Model;
