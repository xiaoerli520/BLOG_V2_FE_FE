import React from 'react';
import styles from './MainLayout.css';
import Sider from './Sider';

function MainLayout({ children, location }) {
  return (
    <div className={styles.normal}>
      <div className={styles.left}>
        <Sider location={location} />
      </div>
      <div className={styles.right}>
        <div className={styles.content}>
          <div className={styles.main}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
