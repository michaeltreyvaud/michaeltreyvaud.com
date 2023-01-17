import React from 'react';
import PropTypes from 'prop-types';

import styles from './Sublist.module.css';

function SubList({ items, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.subListContainer} data-testid="Components-Sublist-Container">
      <ul className={styles.subList}>
        {items.map((_item) => (
          <li key={_item?.text} className={styles.subListItem}>
            {_item?.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

SubList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
  })),
  isOpen: PropTypes.bool,
};

SubList.defaultProps = {
  items: [],
  isOpen: false,
};

export default SubList;
