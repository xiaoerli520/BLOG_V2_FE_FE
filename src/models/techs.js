import * as TechService from '../services/tech';
import * as UserService from '../services/users';
import * as OurService from '../services/our';
import { query } from "../services/example";

export default {
  namespace: 'techs',
  state: {
    lists: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(OurService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: data.total,
          page: parseInt(page)
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/techs') {
          dispatch({ type: 'fetch', payload: query })
        }
      })
    }
  },
};
