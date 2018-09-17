import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import NewLayout from '../components/NewLayout/NewLayout';
import styles from './NotFound.css';

function NotFound({ location }) {
  return (
    <NewLayout location={location}>
    <div className={styles.normal}>
      <Icon type="loading" /> 404 NOT FOUND
    </div>
    </NewLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(NotFound);
