import React from 'react';
import './StationList.css';

const StationList = props => {
  const { onSelectStationFrom, onSelectStationTo, stationList } = props;
  const onSelect = onSelectStationFrom || onSelectStationTo;
  return (
    <ul className="stations" onClick={onSelect}>
      {stationList.map((station, index) => {
        return (
          <li className="stations__item" key={index}>
            {station}
          </li>
        );
      })}
    </ul>
  );
};

export default StationList;
