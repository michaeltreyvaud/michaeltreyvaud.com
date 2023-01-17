import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CarretDownIcon from '../../Icons/CarretDown';
import CarretUpIcon from '../../Icons/CarretUp';
import Sublist from './Sublist';
import styles from './List.module.css';

function List({ items, title }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggle = (_index) => {
    if (openIndex === _index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(_index);
    }
  };
  return (
    <div className={styles.listContainer} data-testid="Components-List-Container">
      <h3 className={styles.listTitle}>{title}</h3>
      <ul className={styles.list}>
        {items.map((_item, _index) => {
          const isOpen = openIndex === _index;
          return (
            <li
              key={_item?.text}
              className={styles.listItem}
            >
              <button className={styles.listItemButton} onClick={() => toggle(_index)} type="button">
                <div className={styles.textContainer}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: _item?.iconBackgroundColor }}
                  >
                    {_item?.icon}
                  </div>
                  <span className={styles.text}>
                    {_item?.text}
                  </span>
                  {isOpen ? <CarretUpIcon /> : <CarretDownIcon />}
                </div>
                <Sublist items={_item?.items} isOpen={isOpen} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    iconBackgroundColor: PropTypes.string,
    icon: PropTypes.node,
    items: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
    })),
  })),
  title: PropTypes.string,
};

List.defaultProps = {
  items: [],
  title: '',
};

export default List;
