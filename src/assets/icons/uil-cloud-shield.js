import React from 'react';
import PropTypes from 'prop-types';

const UilCloudShield = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.42,7.22A7,7,0,0,0,5.06,9.11a4,4,0,0,0-.38,7.66,1.13,1.13,0,0,0,.32.05,1,1,0,0,0,.32-2A2,2,0,0,1,4,13a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,1,5.53,1,1,0,1,0,1,1.74A5,5,0,0,0,22,12,5,5,0,0,0,18.42,7.22Zm-3.63,4.44a2.73,2.73,0,0,1-2.2-.47,1,1,0,0,0-1.18,0,2.72,2.72,0,0,1-2.2.47,1,1,0,0,0-.84.2,1,1,0,0,0-.37.77V16a4.63,4.63,0,0,0,1.84,3.7l1.57,1.15a1,1,0,0,0,1.18,0l1.57-1.16A4.6,4.6,0,0,0,16,16V12.63a1,1,0,0,0-.37-.77A1,1,0,0,0,14.79,11.66ZM14,16A2.62,2.62,0,0,1,13,18l-1,.72L11,18A2.62,2.62,0,0,1,10,16V13.72a4.68,4.68,0,0,0,2-.55,4.68,4.68,0,0,0,2,.55Z'
  }));
};

UilCloudShield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCloudShield.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCloudShield;