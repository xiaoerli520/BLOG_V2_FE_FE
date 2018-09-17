import React from 'react';
import { connect } from 'dva';
import styles from './Techs.css';
import MainLayout from '../components/MainLayout/MainLayout';
import NewLayout from '../components/NewLayout/NewLayout';
import TechComponent from '../components/Tech/Tech';

function Techs({ location }) {
  return (
    <NewLayout location={location}>
    <div className={styles.normal}>
      <TechComponent/>
    </div>
    </NewLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Techs);
