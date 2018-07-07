import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import './SwapButton.css';

const SwapButton = ({ onSwapStations }) => {
  return (
    <button className="swap-btn" onClick={onSwapStations}>
      <FontAwesomeIcon icon={faExchangeAlt} />
    </button>
  );
};
export default SwapButton;
