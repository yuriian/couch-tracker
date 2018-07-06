import React from 'react';
import './SwapButton.css';

const SwapButton = ({ onSwapStations }) => {
  return <button className="swap-btn" onClick={onSwapStations} />;
};
export default SwapButton;
