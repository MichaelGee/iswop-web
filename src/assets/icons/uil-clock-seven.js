import React from 'react';
import PropTypes from 'prop-types';

const UilClockSeven = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM12,6a.99974.99974,0,0,0-1,1v4.749L9.61816,14.32666a1.00029,1.00029,0,0,0,1.76368.94434l1.5-2.79883A1.00586,1.00586,0,0,0,13,12V7A.99974.99974,0,0,0,12,6Z'
  }));
};

UilClockSeven.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilClockSeven.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilClockSeven;