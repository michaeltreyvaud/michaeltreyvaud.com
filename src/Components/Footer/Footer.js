import React from 'react';

import styles from './Footer.module.css';

const items = [{
  key: 'itemone',
  text: 'One',
}, {
  key: 'itemtwo',
  text: 'Two',
}, {
  key: 'itemthree',
  text: 'Three',
}, {
  key: 'itemfour',
  text: 'Four',
}, {
  key: 'itemfive',
  text: 'Five',
}, {
  key: 'itemsix',
  text: 'Six',
}];

function Footer() {
  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        {items.map((_item) => <li className={styles.item} key={_item.key}>{_item.text}</li>)}
      </ul>
    </div>
  );
}

export default Footer;
