import { getDashBoardData } from "../services/dashboard";

export default {
  namespace: "dashboard",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === "/") {
          dispatch({
            type: "fetchDashBoardData"
          });
        }
      });
    }
  },

  effects: {
    *fetchDashBoardData({ payload }, { call, put }) {
      try {
        const { data } = yield call(getDashBoardData);
        console.log(data);
        yield put({ type: "save", data });
      } catch (error) {
        console.log(error);
      }
    }
  },

  reducers: {
    save(state, { data }) {
      return { ...state, ...data };
    }
  }
};
