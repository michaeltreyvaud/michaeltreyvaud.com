import React from 'react';

import styles from './Header.module.css';

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

function Header() {
  return (
    <div className={styles.container} data-testid="Components-Header-Container">
      <ul className={styles.items}>
        {items.map((_item) => <li className={styles.item} key={_item.key}>{_item.text}</li>)}
      </ul>
    </div>
  );
}

export default Header;
