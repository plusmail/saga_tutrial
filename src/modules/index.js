import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading';
import user, {usersSaga} from './user';
import users from './users';


const rootReducer = combineReducers({
  counter,
  sample,
  loading,
  users,
  user
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([counterSaga(), sampleSaga(), usersSaga()]);
}

export default rootReducer;