import React from 'react';
import { connect } from 'dva';
import styles from './Index.css';
import Header from '../components/Header/Header'

function Index() {
  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.fontend}>
        fontend
      </div>
      <div className={styles.backend}>
        backend
      </div>
      <div className={styles.linux}>
        linux
      </div>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
