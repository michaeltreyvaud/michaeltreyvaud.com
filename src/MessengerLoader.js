import React, { useContext } from 'react';
import { ReactInteractiveMessenger } from '@hypermediocrity/alpha-interactve-messenger';

import { MessengerThemeContext } from './Context/MessengerTheme';

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
    content: `This live chat widget is easily embeddable into your own homepage,
  and construction is underway to integrate with tensorflow JS on the client
  - so you can train / test / validate / inference NLP models on the client, no server needed`,
    position: 'left',
  }, {
    type: 'text',
    content: 'For the moment, you can check out the showcase on the top left to view my customization options',
    position: 'left',
  }];
  return (
    <ReactInteractiveMessenger
      theme={theme}
      headerOptions={headerOptions}
      launcherOptions={launcherOptions}
      welcomeMessages={welcomeMessages}
      textAreaOptions={textAreaOptions}
      messages={messages}
    />
  );
}

export default MessengerLoader;
