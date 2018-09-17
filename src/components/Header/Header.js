import React from 'react';
import styles from './Header.css';

function Header() {
  // 获得当前日期
  function getDate() {
    let myDate = new Date();
    return "Today: "+myDate.toLocaleString()+" ";
  }

  return (
    <div className={styles.normal}>
      <div className={styles.title}>
        <h1>Coding News</h1>
      </div>
      <div className={styles.cal}>
        { getDate() }
        :)
      </div>
    </div>
  );
}

export default Header;
