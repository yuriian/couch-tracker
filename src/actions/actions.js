import {
  SHOW_STATION_LIST_FROM,
  SHOW_STATION_LIST_TO,
  HIDE_STATION_LIST_FROM,
  HIDE_STATION_LIST_TO,
  SELECT_STATION_FROM,
  SELECT_STATION_TO,
  SWAP_STATIONS,
  CHANGE_SEARCH_QUERY_FROM,
  CHANGE_SEARCH_QUERY_TO
} from './../constants';

import stationListMock from '../stationsMock';
import { apiCall } from './../api/api';

// export const requestStationList = () => dispatch => {
//   dispatch({ type: REQUEST_STATION_LIST });

//   apiCall('url')
//     .then(data => dispatch({ type: REQUEST_STATIONS_SUCCESS, payload: data }))
//     .catch(error =>
//       dispatch({ type: REQUEST_STATIONS_FAILED, payload: error })
//     );
// };

export const showStationListFrom = () => {
  return {
    type: SHOW_STATION_LIST_FROM,
    payload: stationListMock
  };
};

export const showStationListTo = () => {
  return {
    type: SHOW_STATION_LIST_TO,
    payload: stationListMock
  };
};

export const hideStationListFrom = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: HIDE_STATION_LIST_FROM
    });
  }, 150);
};

export const hideStationListTo = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: HIDE_STATION_LIST_TO
    });
  }, 150);
};

export const addStationFrom = stationName => {
  return dispatch => {
    dispatch({
      type: SELECT_STATION_FROM,
      payload: stationName
    });

    // dispatch({
    //   type: HIDE_STATION_LIST_FROM
    // });

    dispatch({ type: CHANGE_SEARCH_QUERY_FROM, payload: '' });
  };
};

export const addStationTo = stationName => {
  return dispatch => {
    dispatch({
      type: SELECT_STATION_TO,
      payload: stationName
    });

    // dispatch({
    //   type: HIDE_STATION_LIST_TO
    // });

    dispatch({ type: CHANGE_SEARCH_QUERY_TO, payload: '' });
  };
};

export const swapStations = () => {
  return {
    type: SWAP_STATIONS
  };
};

export const setSearchQueryFrom = text => dispatch => {
  dispatch({ type: CHANGE_SEARCH_QUERY_FROM, payload: text });
  dispatch({ type: SELECT_STATION_FROM, payload: '' });
};

export const setSearchQueryTo = text => dispatch => {
  dispatch({ type: CHANGE_SEARCH_QUERY_TO, payload: text });
  dispatch({ type: SELECT_STATION_TO, payload: '' });
};
