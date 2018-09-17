import React from 'react';
import { connect } from 'dva';
import styles from './Newlayout.css';
import NewLayout from '../components/NewLayout/NewLayout';

function Newlayout({ location }) {
  return (
    <div className={styles.normal11}>
      <NewLayout location={location}/>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Newlayout);
