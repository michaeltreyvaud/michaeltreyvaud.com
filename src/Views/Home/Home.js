import React from 'react';

import profileImage from '../../Images/profile_image_500_500.jpg';
import Page from '../../Components/Page';
import IconLink from '../../Components/IconLink';

import AWSIcon from '../../Icons/AWS';
import ReactIcon from '../../Icons/React';
import GitHubIcon from '../../Icons/GitHub';
import LinkedInIcon from '../../Icons/LinkedIn';
import styles from './Home.module.css';

const items = [{
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

function Home() {
  const containerProps = { style: { background: 'white' } };
  const footerProps = { items };
  return (
    <Page containerProps={containerProps} footerProps={footerProps}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h1>Hi &#128075;</h1>
          <h3>I am Michael Treyvaud</h3>
          <h3>Software Generalist, AWS expert and AI enthusiast</h3>
        </div>
        <div className={styles.image}>
          <img
            className={styles.profileImage}
            alt="Michael Treyvaud"
            src={profileImage}
          />
        </div>
      </div>
    </Page>
  );
}

export default Home;
