import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Page.module.css';

function Page({ children, footerProps, containerProps }) {
  const containerStyle = containerProps?.style || {};
  const footerItems = footerProps?.items || [];
  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
        <Footer items={footerItems} />
      </div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
  footerProps: PropTypes.object,
  containerProps: PropTypes.object,
};

Page.defaultProps = {
  children: null,
  footerProps: {},
  containerProps: {},
};

export default Page;
