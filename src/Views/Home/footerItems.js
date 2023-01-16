import React from 'react';

import AWSIcon from '../../Icons/AWS';
import ReactIcon from '../../Icons/React';
import GitHubIcon from '../../Icons/GitHub';
import LinkedInIcon from '../../Icons/LinkedIn';
import IconLink from '../../Components/IconLink';

const footerItems = [{
  key: 'itemone',
  text: 'Built using',
  icon: <ReactIcon />,
}, {
  key: 'itemtwo',
  text: 'Powered by',
  icon: <AWSIcon />,
}, {
  key: 'itemthree',
  text: 'View Source',
  icon: <IconLink icon={<GitHubIcon />} link="https://github.com/michaeltreyvaud/michaeltreyvaud.com" />,
}, {
  key: 'itemfour',
  text: 'Experience',
  icon: <IconLink icon={<LinkedInIcon />} link="https://www.linkedin.com/in/michael-treyvaud-00b00196/" />,
}];

export default footerItems;
