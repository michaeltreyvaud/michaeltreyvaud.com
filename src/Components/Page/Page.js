import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Page.module.css';

function Page({
  children, footerProps, containerProps, headerProps,
}) {
  const containerStyle = containerProps?.style || {};
  const footerItems = footerProps?.items || [];
  const headerItems = headerProps?.items || [];
  return (
    <div className={styles.container} style={containerStyle} data-testid="Components-Page-Container">
      <div className={styles.pageContainer}>
        <Header items={headerItems} />
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
  footerProps: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.node,
    })),
  }),
  containerProps: PropTypes.shape({
    style: PropTypes.shape({
      backgroundColor: PropTypes.string,
    }),
  }),
  headerProps: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
    })),
  }),
};

Page.defaultProps = {
  children: null,
  footerProps: {},
  containerProps: {},
  headerProps: {},
};

export default Page;
