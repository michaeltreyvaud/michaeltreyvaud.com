import React, { useContext } from 'react';
import { ReactNLPMessenger } from '@hypermediocrity/alpha-nlp-messenger';

import { MessengerThemeContext } from './Context/MessengerTheme';
import testCorpus from './testCorpus.json';

function MessengerLoader() {
  const {
    theme, headerOptions, launcherOptions, textAreaOptions,
  } = useContext(MessengerThemeContext);
  const welcomeMessages = ['Hello! 👋', "Welcome to Mike's home page"];
  const messages = [{
    type: 'text',
    content: 'Hello! 👋',
    position: 'left',
  }, {
    type: 'text',
    content: "Welcome to Mike's home page",
    position: 'left',
  }, {
    type: 'text',
    content: 'Everything you see here is hand crafted, and fully customizable',
    position: 'left',
  }, {
    type: 'text',
    content: 'I have integrated this widget with nlp.js, so you can build / train / test and inference against my model all in the browser.',
    position: 'left',
  }, {
    type: 'text',
    content: 'Give it a try, start by saying hello!',
    position: 'left',
  }];
  return (
    <ReactNLPMessenger
      theme={theme}
      headerOptions={headerOptions}
      launcherOptions={launcherOptions}
      welcomeMessages={welcomeMessages}
      textAreaOptions={textAreaOptions}
      messages={messages}
      corpus={testCorpus}
    />
  );
}

export default MessengerLoader;
