import PropTypes from "prop-types";
import React from "react";

const Icon = ({ name }) => {
  return <i className={`icon-${name}`} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};
export default Icon;
