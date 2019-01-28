import React from "react";
import PropTypes from "prop-types";
import { HalfCircleSpinner } from "react-epic-spinners";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  & .loader {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    height: 40px;
    width: 40px;
    -webkit-box-shadow: 5px 5px 50px -7px rgba(92, 92, 92, 1);
    -moz-box-shadow: 5px 5px 50px -7px rgba(92, 92, 92, 1);
    box-shadow: 5px 5px 50px -7px rgba(92, 92, 92, 1);
  }
`;

const Loader = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <Overlay>
          <div className="loader">
            <HalfCircleSpinner size={25} color="#56E3B1" />
          </div>
        </Overlay>
      ) : null}
    </div>
  );
};

Loader.defaultProps = {
  loading: false
};
Loader.propTypes = {
  loading: PropTypes.bool
};

export default Loader;
