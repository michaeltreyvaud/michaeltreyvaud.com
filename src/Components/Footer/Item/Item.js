import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.css';

function Item({ text, icon }) {
  return (
    <li className={styles.item}>
      <span className={styles.itemText}>
        {text}
      </span>
      {icon}
    </li>
  );
}

Item.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
};

Item.defaultProps = {
  text: '',
  icon: null,
};

export default Item;
