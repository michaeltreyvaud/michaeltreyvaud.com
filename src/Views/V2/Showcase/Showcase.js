import React, { useRef } from 'react';

import EditorLoader from '../../Showcase/EditorLoader';

function Showcase() {
  const editorRef = useRef();
  return (
    <>
      <div ref={editorRef} />
      <EditorLoader editorRef={editorRef} />
    </>
  );
}

export default Showcase;
