import { all } from "redux-saga/effects";
import authSagaList from "./authSaga";
const rootSaga = function* () {
  yield all([...authSagaList]);
};

export default rootSaga;
