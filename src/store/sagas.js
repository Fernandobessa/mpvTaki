import { delay } from "redux-saga";
import { takeLatest, put, call, select } from "redux-saga/effects";
import axios from "axios";
const API_KEY = "c741207dcc6e98c196eb7476b823b709";
const BASE_URL = "https://api.themoviedb.org/3";

function apiGetMoovie(someArg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        axios.get(
          BASE_URL +
            "/search/" +
            "movie" +
            "?api_key=" +
            API_KEY +
            "&language=en-US&page=1&include_adult=false&query=" +
            someArg
        )
      );
    }, 2000);
  });
}

function* getMoovie(action) {
  try {
    //const navigation = useNavigation();
    const response = yield call(apiGetMoovie, action.stringSearch);
    const progress = false;
    yield put({ type: "SET_MOOVIE_DATA", response });
    yield put({ type: "SET_PROGRESS_DATA", progress });
  } catch (err) {
    const progress = false;
    yield put({ type: "FAILURE_TODO_LIST" });
    yield put({ type: "SET_PROGRESS_DATA", progress });
  }
}
function apiGetDetails(someArg) {
  console.log(
    BASE_URL + "/movie/" + someArg + "?api_key=" + API_KEY + "&language=en-US"
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        axios.get(
          BASE_URL +
            "/movie/" +
            someArg +
            "?api_key=" +
            API_KEY +
            "&language=en-US"
        )
      );
    }, 2000);
  });
}
function* getDetails(action) {
  try {
    console.log(action);
    const response = yield call(apiGetDetails, action.idMovie);
    const progress = false;
    yield put({ type: "SET_MOOVIE_DETAILS_DATA", response });
    yield put({ type: "SET_PROGRESS_DATA", progress });
  } catch (err) {
    console.log(err);
    const progress = false;
    yield put({ type: "SET_PROGRESS_DATA", progress });
  }
}

export default function* root() {
  yield* [takeLatest("GET_ASSYNC_MOOVIE", getMoovie)];
  yield* [takeLatest("GET_ASSYNC_DETAILS", getDetails)];
}
