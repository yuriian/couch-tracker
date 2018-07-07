import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Form.css';
import StationList from './../stationList/StationList';
import SwapButton from './../swapButton/SwapButton';

import {
  showStationListFrom,
  showStationListTo,
  hideStationListFrom,
  hideStationListTo,
  addStationFrom,
  addStationTo,
  swapStations,
  setSearchQueryFrom,
  setSearchQueryTo
} from './../actions/actions';

const mapStateToProps = state => {
  return {
    stationListFrom: state.manageStationList.stationListFrom,
    stationListTo: state.manageStationList.stationListTo,
    isShowStationListFrom: state.manageStationList.isShowStationListFrom,
    isShowStationListTo: state.manageStationList.isShowStationListTo,

    selectedStationFrom: state.selectStation.stationFrom,
    selectedStationTo: state.selectStation.stationTo,

    searchQueryFrom: state.setSearchStation.searchQueryFrom,
    searchQueryTo: state.setSearchStation.searchQueryTo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFocusInputFrom: event => {
      event.preventDefault();
      dispatch(showStationListFrom());
    },
    onFocusInputTo: event => {
      event.preventDefault();
      dispatch(showStationListTo());
    },

    onBlurInputFrom: event => {
      event.preventDefault();
      dispatch(hideStationListFrom());
    },
    onBlurInputTo: event => {
      event.preventDefault();
      dispatch(hideStationListTo());
    },

    onSelectStationFrom: event => {
      event.preventDefault();
      dispatch(addStationFrom(event.target.textContent));
    },
    onSelectStationTo: event => {
      event.preventDefault();
      dispatch(addStationTo(event.target.textContent));
    },

    onSwapStations: event => {
      event.preventDefault();
      dispatch(swapStations());
    },

    onChangeInputFrom: event => {
      event.preventDefault();
      dispatch(setSearchQueryFrom(event.target.value));
    },
    onChangeInputTo: event => {
      event.preventDefault();
      dispatch(setSearchQueryTo(event.target.value));
    }
  };
};

class Form extends Component {
  submitForm = e => {
    e.preventDefault();
    console.log(this.inputFrom.value);
    console.log(this.inputTo.value);
  };

  render() {
    let { stationListFrom, stationListTo } = this.props;

    const {
      isShowStationListFrom,
      isShowStationListTo,

      searchQueryFrom,
      searchQueryTo,

      selectedStationFrom,
      selectedStationTo,

      onFocusInputFrom,
      onFocusInputTo,

      onBlurInputFrom,
      onBlurInputTo,

      onChangeInputFrom,
      onChangeInputTo,

      onSelectStationFrom,
      onSelectStationTo,

      onSwapStations
    } = this.props;
    debugger;

    if (searchQueryFrom) {
      stationListFrom = stationListFrom.filter(station =>
        station.toLowerCase().includes(searchQueryFrom.toLowerCase())
      );
    }

    if (searchQueryTo) {
      stationListTo = stationListTo.filter(station =>
        station.toLowerCase().includes(searchQueryTo.toLowerCase())
      );
    }

    const inputValueFrom = searchQueryFrom
      ? searchQueryFrom
      : selectedStationFrom;

    const inputValueTo = searchQueryTo ? searchQueryTo : selectedStationTo;

    const formBtnClass =
      !selectedStationFrom || !selectedStationTo
        ? 'form__btn form__btn--disabled'
        : 'form__btn';

    return (
      <form className="form" onSubmit={this.submitForm} action="#">
        <div className="form__name">Track Your Couch</div>
        <div className="form__input-container">
          <input
            className="form__input"
            onFocus={onFocusInputFrom}
            onBlur={onBlurInputFrom}
            onChange={onChangeInputFrom}
            type="text"
            ref={input => (this.inputFrom = input)}
            placeholder="From"
            value={inputValueFrom}
            required
          />
          {isShowStationListFrom ? (
            <StationList
              onSelectStationFrom={onSelectStationFrom}
              stationList={stationListFrom}
            />
          ) : (
            ''
          )}
        </div>
        <div className="form__input-container">
          <input
            className="form__input"
            onFocus={onFocusInputTo}
            onBlur={onBlurInputTo}
            onChange={onChangeInputTo}
            type="text"
            ref={input => (this.inputTo = input)}
            placeholder="To"
            value={inputValueTo}
            required
          />
          {isShowStationListTo ? (
            <StationList
              onSelectStationTo={onSelectStationTo}
              stationList={stationListTo}
            />
          ) : (
            ''
          )}
        </div>
        <button className={formBtnClass}>Continue</button>
        <SwapButton onSwapStations={onSwapStations} />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
