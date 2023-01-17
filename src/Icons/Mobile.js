import React from 'react';
import PropTypes from 'prop-types';

function Mobile({ width, height, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={width} height={height} data-testid="Icons-Mobile">
      <path
        fill={fill}
        d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224
        448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM304 64H80V384H304V64z"
      />
    </svg>
  );
}

Mobile.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

Mobile.defaultProps = {
  width: 15,
  height: 15,
  fill: '#888888',
};

export default Mobile;
