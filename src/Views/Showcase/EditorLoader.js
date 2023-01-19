import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MessengerThemeContext } from '../../Context/MessengerTheme';

/*
* QFix until editor is released publically on npm
* static bundle generated and hosted on S3
* bundle is loaded in a script tag in the head of index.html
* initalized here just for convenience
*/
function EditorLoader({ editorRef }) {
  const { setTheme } = useContext(MessengerThemeContext);
  React.useEffect(() => {
    if (window.ReactLiveChatEditor) {
      window.ReactLiveChatEditor({
        element: editorRef.current,
        onUpdateTheme: setTheme,
      });
    }
  }, []);
  return null;
}

EditorLoader.propTypes = {
  editorRef: PropTypes.node.isRequired,
};

export default EditorLoader;
