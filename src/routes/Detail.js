import React from 'react';
import { connect } from 'dva';
import styles from './Detail.css';
import DetailRender from '../components/Detail/Detail'
import MainLayout from '../components/MainLayout/MainLayout';
import NewLayout from '../components/NewLayout/NewLayout';

function Detail({ location, params }) {
  console.log(params);
  return (
    <NewLayout location={location}>
      <DetailRender id={params.id}/>
    </NewLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Detail);
