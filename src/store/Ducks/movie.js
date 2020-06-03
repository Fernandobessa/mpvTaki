import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  setMoovieData: ["text"],
  getAssyncMoovie: ["stringSearch"],
  setProgressData: ["progress"],
  setMoovieDetailsData: ["text"],
  getAssyncDetails: ["idMovie"],
});
console.log(Types);

/**
 * Handlers
 */
const INITIAL_STATE = { listMoovie: [], progress: false, datails: [] };

const setMoovieData = (state = INITIAL_STATE, action) => ({
  ...state,
  listMoovie: action,
});
const setProgressData = (state = INITIAL_STATE, action) => ({
  ...state,
  progress: action,
});
const setMoovieDetailsData = (state = INITIAL_STATE, action) => ({
  ...state,
  datails: action,
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.SET_MOOVIE_DATA]: setMoovieData,
  [Types.SET_PROGRESS_DATA]: setProgressData,
  [Types.SET_MOOVIE_DETAILS_DATA]: setMoovieDetailsData,
});
