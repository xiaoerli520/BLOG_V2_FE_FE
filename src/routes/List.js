import React from 'react';
import { connect } from 'dva';
import styles from './List.css';
import MainLayout from '../components/MainLayout/MainLayout';
import NewLayout from '../components/NewLayout/NewLayout';
import Lister from '../components/Lister/Lister'

function List({ location }) {
  // can write sth
  console.log(location); // 通过location获取路由参数
  return (
    <NewLayout location={location}>
    <div className={styles.normal} >
      <Lister location={location}/>
    </div>
    </NewLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(List);
