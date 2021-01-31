import React from 'react';
import PropTypes from 'prop-types';

const UilClipboardBlank = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,4H16a2,2,0,0,0-2-2H10A2,2,0,0,0,8,4H7A3,3,0,0,0,4,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V7A3,3,0,0,0,17,4ZM10,4h4V5h0V6H10V4Zm8,15a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H8a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2h1a1,1,0,0,1,1,1Z'
  }));
};

UilClipboardBlank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilClipboardBlank.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilClipboardBlank;