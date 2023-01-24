import React, { useContext } from 'react';
import { ReactNLPMessenger } from '@hypermediocrity/alpha-nlp-messenger';

import { MessengerThemeContext } from './Context/MessengerTheme';
import { CorpusContext } from './Context/Corpus';

function MessengerLoader() {
  const {
    theme, headerOptions, launcherOptions, textAreaOptions,
  } = useContext(MessengerThemeContext);
  const { corpus } = useContext(CorpusContext);
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
    content: 'Everything you see here is hand crafted, and fully customizable!',
    position: 'left',
  }, {
    type: 'text',
    content: 'Edit the style of this chat widget in the Live Chat Designer',
    position: 'left',
  }, {
    type: 'text',
    content: 'Edit NLP intents in the NLP Editor',
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
      corpus={corpus}
    />
  );
}

export default MessengerLoader;
