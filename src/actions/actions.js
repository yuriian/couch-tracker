import {
  SHOW_STATION_LIST_FROM,
  SHOW_STATION_LIST_TO,
  HIDE_STATION_LIST,
  SELECT_STATION_FROM,
  SELECT_STATION_TO,
  SWAP_STATIONS,
  CHANGE_SEARCH_QUERY_FROM,
  CHANGE_SEARCH_QUERY_TO
} from './../constants';

import stationListMock from '../stationsMock';

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
export const hideStationList = () => {
  return {
    type: HIDE_STATION_LIST
  };
};

export const addStationFrom = stationName => {
  return dispatch => {
    dispatch({
      type: SELECT_STATION_FROM,
      payload: stationName
    });

    dispatch({
      type: HIDE_STATION_LIST
    });
  };
};

export const addStationTo = stationName => {
  return dispatch => {
    dispatch({
      type: SELECT_STATION_TO,
      payload: stationName
    });

    dispatch({
      type: HIDE_STATION_LIST
    });
  };
};

export const swapStations = () => {
  return {
    type: SWAP_STATIONS
  };
};

export const setSearchQueryFrom = text => ({
  type: CHANGE_SEARCH_QUERY_FROM,
  payload: text
});

export const setSearchQueryTo = text => ({
  type: CHANGE_SEARCH_QUERY_TO,
  payload: text
});
