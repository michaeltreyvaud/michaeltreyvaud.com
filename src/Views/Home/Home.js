import React from 'react';

import profileImage from '../../Images/profile_image_500_500.jpg';
import Page from '../../Components/Page';
import List from '../../Components/List';

import competencies from './competencies';
import items from './footerItems';

import styles from './Home.module.css';

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
      <List items={competencies} title="Competencies" />
    </Page>
  );
}

export default Home;
