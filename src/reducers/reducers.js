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

const initialStations = {
  stationListFrom: [],
  stationListTo: [],
  isShowStationListFrom: false,
  isShowStationListTo: false
};

export const manageStationList = (state = initialStations, action = {}) => {
  switch (action.type) {
    case SHOW_STATION_LIST_FROM:
      return Object.assign({}, state, {
        stationListFrom: action.payload,
        isShowStationListFrom: true,
        isShowStationListTo: false
      });

    case SHOW_STATION_LIST_TO:
      return Object.assign({}, state, {
        stationListTo: action.payload,
        isShowStationListTo: true,
        isShowStationListFrom: false
      });

    case HIDE_STATION_LIST_FROM:
      return Object.assign({}, state, {
        isShowStationListFrom: false
      });

    case HIDE_STATION_LIST_TO:
      return Object.assign({}, state, {
        isShowStationListTo: false,
      });

    default:
      return state;
  }
};

const initialSelectedStations = {
  stationFrom: '',
  stationTo: ''
};

export const selectStation = (state = initialSelectedStations, action = {}) => {
  switch (action.type) {
    case SELECT_STATION_FROM:
      return Object.assign({}, state, {
        stationFrom: action.payload
      });

    case SELECT_STATION_TO:
      return Object.assign({}, state, {
        stationTo: action.payload
      });

    case SWAP_STATIONS:
      const stationFrom = state.stationTo;
      const stationTo = state.stationFrom;

      return Object.assign({}, state, {
        stationFrom,
        stationTo
      });

    default:
      return state;
  }
};

const initialSearchStation = {
  searchQueryFrom: '',
  searchQueryTo: ''
};

export const setSearchStation = (state = initialSearchStation, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY_FROM:
      return Object.assign({}, state, {
        searchQueryFrom: action.payload
      });

    case CHANGE_SEARCH_QUERY_TO:
      return Object.assign({}, state, {
        searchQueryTo: action.payload
      });

    default:
      return state;
  }
};