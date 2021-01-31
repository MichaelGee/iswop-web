import React from 'react';
import PropTypes from 'prop-types';

const UilLetterChineseA = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20,5H13V4a1,1,0,0,0-2,0V5H4A1,1,0,0,0,4,7H15.88214a14.49252,14.49252,0,0,1-3.94067,7.95227A14.42561,14.42561,0,0,1,8.66406,9.67041a1.0002,1.0002,0,0,0-1.88867.65918,16.41412,16.41412,0,0,0,3.68012,5.95825,14.29858,14.29858,0,0,1-5.769,2.73511A1.00015,1.00015,0,0,0,4.89941,21a1.01758,1.01758,0,0,0,.21485-.023,16.297,16.297,0,0,0,6.831-3.31885A16.38746,16.38746,0,0,0,18.78711,20.977a1,1,0,0,0,.42578-1.9541,14.38226,14.38226,0,0,1-5.78955-2.73316A16.4802,16.4802,0,0,0,17.89233,7H20a1,1,0,0,0,0-2Z'
  }));
};

UilLetterChineseA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilLetterChineseA.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilLetterChineseA;