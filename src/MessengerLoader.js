import React, { useContext } from 'react';
import { ReactInteractiveMessenger } from '@hypermediocrity/alpha-interactve-messenger';

import { MessengerThemeContext } from './Context/MessengerTheme';

function MessengerLoader() {
  const { theme } = useContext(MessengerThemeContext);
  const headerOptions = {
    title: "Mike's Messenger",
    subTitle: 'Give me a try!',
    avatar: 'https://www.svgrepo.com/show/57853/avatar.svg',
    closeIcon: 'https://icons.veryicon.com/png/o/miscellaneous/kqt/close-116.png',
  };
  const launcherOptions = {
    icon: 'https://cdn-icons-png.flaticon.com/512/2068/2068998.png',
  };
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
      messages={messages}
    />
  );
}

export default MessengerLoader;
