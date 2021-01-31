import React from 'react';
import PropTypes from 'prop-types';

const UilDna = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9.2,13.73a1,1,0,0,0-1.41-.05A11.18,11.18,0,0,0,4,22a1,1,0,0,0,2,0,9.15,9.15,0,0,1,3.15-6.86A1,1,0,0,0,9.2,13.73Zm10.17,4.64a10.86,10.86,0,0,0-1.6-3A14.31,14.31,0,0,0,14.06,12C16.3,10.57,20,7.4,20,2a1,1,0,0,0-2,0c0,5.4-4.59,8.17-6,8.89A13.42,13.42,0,0,1,9.31,9H12a1,1,0,0,0,0-2H7.55a9.39,9.39,0,0,1-1-2H15a1,1,0,0,0,0-2H6.06A8.14,8.14,0,0,1,6,2,1,1,0,0,0,4,2c0,7.57,7.3,10.79,7.61,10.92h0A12.93,12.93,0,0,1,14.7,15H12a1,1,0,0,0,0,2h4.43a9.07,9.07,0,0,1,1,2H9a1,1,0,0,0,0,2h8.94A8.26,8.26,0,0,1,18,22a1,1,0,0,0,2,0,10.5,10.5,0,0,0-.22-2.19A9.23,9.23,0,0,0,19.37,18.37Z'
  }));
};

UilDna.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDna.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDna;