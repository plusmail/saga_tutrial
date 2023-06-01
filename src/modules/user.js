import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

const GET_USER = "users/GET_USER";
const GET_USER_SUCCESS = "users/GET_USER_SUCCESS";
const GET_USER_FAILURE = "users/GET_USER_FAILURE";

export const getUser = (id) => ({ type: GET_USER, payload: id });

const getUserSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});
const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
  error: true,
});

const getUserById = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};

function* getUserSaga(action) {
  try {
    const response = yield call(getUserById, action.payload);
    yield put(getUserSuccess(response.data));
  } catch (e) {
    yield put(getUserFailure(e));
  }
}

export function* usersSaga() {
  yield takeEvery(GET_USER, getUserSaga);
}

const initialState = {
  user: [],
  loading: {
    user: false,
  },
  error: {
    user: null,
  },
};

function user(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: { ...state.loading, user: true },
      };
    case GET_USER_SUCCESS:
      console.log("GET_USER_SUCCESS", action.payload);
      return {
        ...state,
        loading: { ...state.loading, user: false },
        user: action.payload,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, user: false },
        error: { ...state.error, user: action.payload },
      };
    default:
      return state;
  }
}

export default user;
