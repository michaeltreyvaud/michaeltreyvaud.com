import React, { useRef } from 'react';

import Page from '../../Components/Page';
import headerItems from './headerItems';
import EditorLoader from './EditorLoader';

function Home() {
  const editorRef = useRef();
  const containerProps = { style: { background: 'white' } };
  const headerProps = { items: headerItems };
  return (
    <Page containerProps={containerProps} headerProps={headerProps}>
      <div data-testid="Showcase-View-Container">
        <div ref={editorRef} />
        <EditorLoader editorRef={editorRef} />
      </div>
    </Page>
  );
}

export default Home;
