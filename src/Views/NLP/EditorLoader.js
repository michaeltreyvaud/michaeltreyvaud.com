import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CorpusContext } from '../../Context/Corpus';

/*
* QFix until editor is released publically on npm
* static bundle generated and hosted on S3
* bundle is loaded in a script tag in the head of index.html
* initalized here just for convenience
*/
function EditorLoader({ editorRef }) {
  const { corpus, setCorpus } = useContext(CorpusContext);
  React.useEffect(() => {
    if (window.ReactLiveChatEditor) {
      window.ReactIntentEditor({
        element: editorRef.current,
        value: corpus,
        onSave: (_val) => setCorpus({
          name: 'Corpus',
          locale: 'en-US',
          data: _val,
        }),
      });
    }
  }, []);
  return null;
}

EditorLoader.propTypes = {
  editorRef: PropTypes.node.isRequired,
};

export default EditorLoader;
