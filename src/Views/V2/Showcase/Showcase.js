import React, { useRef } from 'react';

import { Container } from '@mantine/core';

import EditorLoader from './EditorLoader';
import useStyles from './Showcase.styles';

function Showcase() {
  const editorRef = useRef();
  const { classes } = useStyles();
  return (
    <Container size="xl" className={classes.container}>
      <div ref={editorRef} />
      <EditorLoader editorRef={editorRef} />
    </Container>
  );
}

export default Showcase;
