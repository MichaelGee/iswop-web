import React from 'react';
import PropTypes from 'prop-types';

const UilAndroid = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M14.97535,3.01886l.95982-1.73159a.19342.19342,0,0,0-.33833-.18756l-.97045,1.75078a6.54141,6.54141,0,0,0-5.25275,0L8.40316,1.09971a.19342.19342,0,0,0-.33833.18756l.95985,1.7316A5.54614,5.54614,0,0,0,5.93152,7.89522h12.137A5.54615,5.54615,0,0,0,14.97535,3.01886ZM9.19911,5.67446a.5068.5068,0,1,1,.5068-.5068A.50737.50737,0,0,1,9.19911,5.67446Zm5.60178,0a.5068.5068,0,1,1,.5068-.5068A.50737.50737,0,0,1,14.80089,5.67446Zm-8.86946,11.497a1.46713,1.46713,0,0,0,1.46713,1.46713h.9736v3.00095a1.36046,1.36046,0,1,0,2.72091,0V18.63859h1.81386v3.00095a1.36046,1.36046,0,1,0,2.72091,0V18.63859h.97364a1.46713,1.46713,0,0,0,1.46713-1.46713V8.37532H5.93143ZM4.06415,8.14191A1.362,1.362,0,0,0,2.7037,9.50237v5.66846a1.36046,1.36046,0,1,0,2.72091,0V9.50237A1.362,1.362,0,0,0,4.06415,8.14191Zm15.8717,0a1.362,1.362,0,0,0-1.36046,1.36046v5.66846a1.36046,1.36046,0,1,0,2.72091,0V9.50237A1.362,1.362,0,0,0,19.93585,8.14191Z'
  }));
};

UilAndroid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAndroid.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAndroid;