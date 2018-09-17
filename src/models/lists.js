import * as usersService from '../services/users';
import * as TechService from '../services/tech';
import * as OurService from '../services/our';
import * as LinuxService from '../services/linux';

export default {
  namespace: 'lists',
  state: {
    lists: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page }; // 尝试将数据清空之后重新进行获取
    },
  },
  effects: {
    *fetchTech({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(TechService.fetch, { page });
      yield put({
        type: 'save',
        payload: { // 这是用于存储的数据
          data,
          total: parseInt(data.total, 10),
          page: parseInt(page, 10),
        },
      });
    },
    *fetchOur({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(OurService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(data.total, 10),
          page: parseInt(page, 10)
        }
      })
    },
    *fetchLinux({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(LinuxService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(data.total, 10),
          page: parseInt(page, 10)
        }
      })
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/List') { //可以进行相应的渲染了
          dispatch({ type: 'fetchTech', payload: query });
        } else if (pathname === '/techs') {
          dispatch({ type: 'fetchOur', payload: query });
        } else if (pathname === '/Linux') {
          dispatch({ type: 'fetchLinux', payload: query })
        }
      });
    },
  },
};
