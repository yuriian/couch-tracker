import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SwapButton.css';

const SwapButton = ({ onSwapStations }) => {
  return (
    <button className="swap-btn" onClick={onSwapStations}>
      <FontAwesomeIcon icon="exchange-alt" />
    </button>
  );
};
export default SwapButton;
