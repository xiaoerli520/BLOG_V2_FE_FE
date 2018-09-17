import React from 'react';
import { Card, Pagination, Modal, Spin, Button } from 'antd';
import { Link } from 'dva/router';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { PAGE_SIZE } from "../../constants";
import QueueAnim from 'rc-queue-anim';
import styles from './Lister.css';

function Lister({ dispatch, list: dataSource, loading, total, page: current, location }) {


  console.log(11+location.pathname); // 可以获得相关路由地址 根据路由地址分别进行dispatch就可以

  function pageChangeHandler(page) {
    // 在这里根据不同的url进行判断dispatch的对象
    dispatch(routerRedux.push({
      pathname: '/List',
      query: { page },
    }));
  }

  function idChangeHandler(id) {

    // detail的id是统一的 所以不用改
    if (location.pathname === '/List') {
      dispatch(routerRedux.push({
        pathname: '/Detail',
        query: { id }
      }))
    } else if (location.pathname === '/techs') {
      dispatch(routerRedux.push({
        pathname: '/Fdetail',
        query: { id }
      }))
    } else if (location.pathname === '/Linux') {
      dispatch(routerRedux.push({
        pathname: '/Ldetail',
        query: { id }
      }))
    }

    // console.log(id);
  }

  function DataRender() {
    console.log(dataSource);
    if (dataSource !== undefined && !loading) {
      const linksItem = dataSource.data.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <Card title={item.title}  style={{ width: 850 }}>
              <p>{item.content.substr(0,10)}</p>
              <Button onClick={idChangeHandler.bind(null,item.id)}>Details</Button>
            </Card>
          </div>
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
      return(
        <div>
          <Spin size="large" />Loading...
        </div>
      );

    }
  }
  function titleRender() {
    if (location.pathname === '/List') {
      return (
        <h2>后端技术</h2>
      );
    } else if (location.pathname === '/techs') {
      return (
        <h2>前端技术</h2>
      );
    } else if(location.pathname === '/Linux') {
      return (
        <h2>Linux运维技术</h2>
      );
    }
  }


  return (
    <div className={styles.normal}>
      <div className={styles.title}>
        {titleRender()}
      </div>
      <div className={styles.content}>
        <QueueAnim
          type="top"
          duration="500"
        >
          {DataRender()}

        </QueueAnim>
      </div>
      <div  className={styles.pagi}>
        <Pagination
          onChange={pageChangeHandler}
          current={current}
          total={total}
          pageSize={PAGE_SIZE}
        />
      </div>

    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.lists;
  return {
    loading: state.loading.models.lists,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Lister);
