import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import NewLayout from '../components/NewLayout/NewLayout';
import QueueAnim from 'rc-queue-anim';

function IndexPage({ location }) {
  return (
    <NewLayout location={location}>

    <div  className={styles.normal}>
      <QueueAnim
        type="top"
        duration="1500"
      >
      <div key={1} className={styles.title}>
        GTX's BLOG 2
      </div>
      <div key={2} className={styles.bottom}>
        Get The apeX<br/>
        <a href="https://github.com/getify/You-Dont-Know-JS/">You Don't Know JS</a><br/>
        <a href="http://php.net/manual/zh/">PHP-MANUAL</a>
      </div>
      </QueueAnim>
    </div>

    </NewLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
