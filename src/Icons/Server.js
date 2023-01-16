import React from 'react';
import PropTypes from 'prop-types';

function Server({ width, height, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height}>
      <path
        fill={fill}
        d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM344
        152c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm96-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24
        24-24s24 10.7 24 24zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zM344
        408c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm104-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z"
      />
    </svg>
  );
}

Server.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

Server.defaultProps = {
  width: 15,
  height: 15,
  fill: '#888888',
};

export default Server;
