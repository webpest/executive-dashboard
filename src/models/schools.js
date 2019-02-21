import pathToRegexp from "path-to-regexp";
import { getSchool, getSchools } from "../services/schools";

export default {
  namespace: "schools",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        const match = pathToRegexp("/schools/:id").exec(location.pathname);
        if (location.pathname === "/schools") {
          dispatch({
            type: "fetchSchools"
          });
        }
        if (match) {
          const schoolId = match[1];
          dispatch({
            type: "fetchSchool",
            schoolId
          });
        }
      });
    }
  },

  effects: {
    *fetchSchools({ payload }, { call, put }) {
      try {
        const list = yield call(getSchools);
        yield put({
          type: "save",
          data: {
            ...list
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    *fetchSchool({ schoolId }, { call, put }) {
      try {
        const { data } = yield call(getSchool, schoolId);
        console.log(data);
        yield put({
          type: "save",
          data: {
            schoolDetail: {
              ...data
            }
          }
        });
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
