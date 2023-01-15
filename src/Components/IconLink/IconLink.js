import React from 'react';
import PropTypes from 'prop-types';

function IconLink({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
}

IconLink.propTypes = {
  icon: PropTypes.node,
  link: PropTypes.string,
};

IconLink.defaultProps = {
  icon: null,
  link: '',
};

export default IconLink;
