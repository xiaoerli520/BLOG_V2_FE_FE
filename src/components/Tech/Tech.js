import React from 'react';
import { connect } from 'dva'
import { Table, Pagination, Popconfirm, Card, Spin } from 'antd';
import { routerRedux } from 'dva/router';
import { PAGE_SIZE } from '../../constants';
import QueueAnim from 'rc-queue-anim';
import styles from './Tech.css';

function Tech({ dispatch, list: dataSource, loading, total, page: current }) {
  // 根据数据进行map渲染
  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/techs',
      query: { page },
    }));
  }
  // 进行分页
  function RenderData() {

    if (dataSource !== undefined) {
      const linksItem = dataSource.data.map((item, index) => {
        return (
          <Card key={index} title={item.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>{item.content}</p>
          </Card>
        );
      });
      return (
        <QueueAnim
          type="top"
          duration="500"
        >
          {linksItem}
        </QueueAnim>
      );
    } else {
      return (
        <Spin size="large" />
      );
    }
  }
  return (
    <div className={styles.normal}>
      <h1>this is a component for fetch own api</h1>

      {RenderData()}

      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={PAGE_SIZE}
        onChange={pageChangeHandler}
      />

    </div>
  );
}

function mapStateToProps(state) {
  const { list  , total, page } = state.techs;
  return {
    loading: state.loading.models.techs,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Tech);
