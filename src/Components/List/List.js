import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CarretDownIcon from '../../Icons/CarretDown';
import CarretUpIcon from '../../Icons/CarretUp';
import styles from './List.module.css';

function SubList({ items, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.subListContainer}>
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
    <div className={styles.listContainer}>
      <h3 className={styles.listTitle}>{title}</h3>
      <ul className={styles.list}>
        {items.map((_item, _index) => {
          const isOpen = openIndex === _index;
          return (
            <li key={_item?.text} className={styles.listItem} onClick={() => toggle(_index)}>
              <div className={styles.textContainer}>
                {_item?.icon}
                <span className={styles.text}>
                  {_item?.text}
                </span>
                {isOpen ? <CarretUpIcon /> : <CarretDownIcon />}
              </div>
              <SubList items={_item?.items} isOpen={isOpen} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

List.defaultProps = {
  items: [],
  title: '',
};

export default List;
