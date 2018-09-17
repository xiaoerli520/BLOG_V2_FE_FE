import * as DetailService from '../services/detail';
import * as FdetailService from '../services/fdetail';
import * as LdetailService from '../services/ldetail';

export default {
  namespace: 'detail',
  state: {
    id: null,
    title: null,
    content: null
  },
  reducers: {
    save(state, { payload: { id, title, content } }) {
      return { ...state, id, title, content };
    },
  },
  effects: {
    *fetch({ payload: { id = 9 } } , { call, put }) { // 在这里需要多传一个参数来进行确定表格
      const { data } = yield call(DetailService.fetch, { id } );
      // console.log(id);
      // console.log(data);
      yield put({
        type: 'save',
        payload: {
          id: data.data[0].id,
          title: data.data[0].title,
          content: data.data[0].content
        },
      });
    },
    *FrontFetch({ payload: { id = 1 } }, { call, put }) {
      const { data } = yield call(FdetailService.fetch, { id });
      yield put({
        type: 'save',
        payload: {
          id: data.data[0].id,
          title: data.data[0].title,
          content: data.data[0].content,
        }
      })
    },
    *LinuxFetch({ payload: { id = 1 } }, { call, put }) {
      const { data } = yield call(LdetailService.fetch, { id });
      yield put({
        type: 'save',
        payload: {
          id: data.data[0].id,
          title: data.data[0].title,
          content: data.data[0].content,
        }
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/Detail") {
          // console.log(query); // 这是一个obj
          // 依旧从这里获取ID
          // console.log(pathname);
          // 不同的接口 需要根据不同的pathname向不同的表进行fetch
          dispatch({ type: 'fetch', payload: query })
        } else if (pathname === '/Fdetail') {
          dispatch({ type: 'FrontFetch', payload: query })
        } else if (pathname === '/Ldetail') {
          dispatch({ type: 'LinuxFetch', payload: query })
        }
      })
    }
  },
};
