import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import styles from './Footer.module.css';

function Footer({ items }) {
  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        {items.reverse().map((_item) => (
          <Item key={_item.key} text={_item.text} icon={_item.icon} />
        ))}
      </ul>
    </div>
  );
}

Footer.propTypes = {
  items: PropTypes.array,
};

Footer.defaultProps = {
  items: [],
};

export default Footer;
