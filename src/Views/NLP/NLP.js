import React, { useRef } from 'react';

import Page from '../../Components/Page';
import headerItems from './headerItems';
import EditorLoader from './EditorLoader';

import styles from './NLP.module.css';

function NLP() {
  const editorRef = useRef();
  const containerProps = { style: { background: 'white' } };
  const headerProps = { items: headerItems };
  return (
    <Page containerProps={containerProps} headerProps={headerProps}>
      <div data-testid="Showcase-View-Container" className={styles.container}>
        <div ref={editorRef} className={styles.editor} />
        <EditorLoader editorRef={editorRef} />
      </div>
    </Page>
  );
}

export default NLP;
