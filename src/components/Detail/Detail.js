import React from 'react';
import marked from 'marked';
import { connect } from 'dva';
import { Spin } from 'antd';
import { routerRedux } from 'dva/router';
import QueueAnim from 'rc-queue-anim';
import styles from './Detail.css';

function DetailRender({ dispatch,  id, title, loading, content }) {

  // 尝试在列表页加一个handleclick 1 点击进入
  // 尝试在model加一个query的定义试试 2 在url修改进入


  // 削减在新的渲染未完成之前不进行显示
  function RenderDetail() {
    if (!loading) {
      return(
        <QueueAnim
          type="top"
          duration="500"
        >

          <div key={1} className={styles.title}>
            <h2>{title}</h2>
          </div>
          <div key={2} className={styles.content} dangerouslySetInnerHTML={{__html: marked(content)}}>

          </div>

        </QueueAnim>
      );
    } else {
      return(
        <Spin size={'large'} />
      );
    }
  }



  return (
    <div className={styles.normal}>

        {RenderDetail()}

    </div>
  );
}

function mapStateToProps(state) {
  const { id, title, content } = state.detail;
  return {
    loading: state.loading.models.detail,
    id,
    title,
    content,
  };
}


export default connect(mapStateToProps)(DetailRender);
