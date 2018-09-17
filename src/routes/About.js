import React from 'react';
import marked from 'marked';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import NewLayout from '../components/NewLayout/NewLayout';
import styles from './About.css';




function About({ location }) {
  return (
    <NewLayout location={location}>
    <div className={styles.normal} dangerouslySetInnerHTML={{__html: marked('# MyBlog2.0\n' +
      '\n' +
      '## 技术栈进化\n' +
      '\n' +
      '### 前端\n' +
      '\n' +
      '```\n' +
      'Bootstrap -> {Dva + AntDesign}\n' +
      '```\n' +
      '\n' +
      '\n' +
      '### 后端\n' +
      '\n' +
      '```\n' +
      'CodeIgniter3 -> Egg\n' +
      '```\n' +
      '\n' +
      '> Still Evolution GTX\n' +
      '\n')}} >

    </div>
    </NewLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(About);
