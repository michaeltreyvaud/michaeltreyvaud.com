import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header({
  items,
}) {
  return (
    <div className={styles.container} data-testid="Components-Header-Container">
      <ul className={styles.items}>
        {items.map((_item) => (
          <li className={styles.item} key={_item?.key}>
            <Link className={styles.link} to={_item?.link}>{_item?.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
  })),
};

Header.defaultProps = {
  items: [],
};

export default Header;
