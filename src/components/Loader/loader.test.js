import React from "react";
import { shallow } from "enzyme";
import Loader from "./index";
import styled from "styled-components";
import { HalfCircleSpinner } from "react-epic-spinners";
import renderer from "react-test-renderer";
import "jest-styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
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

const setup = propOverrides => {
  const props = Object.assign(
    {
      loading: true
    },
    propOverrides
  );

  const wrapper = shallow(<Loader {...props} />);

  return {
    props,
    wrapper,
    loaderDiv: wrapper.find(".loader"),
    renderHalfCircleSpinner: wrapper.find(HalfCircleSpinner)
  };
};

describe("Loader Page", () => {
  // All tests will go here
  it("renders without crashing", () => {
    const { wrapper } = setup();

    expect(wrapper).not.toBeNull();
  });

  test("render overlay div", () => {
    const renderOverlay = renderer.create(<Overlay />).toJSON();
    expect(renderOverlay).toMatchSnapshot();
  });

  it("always renders a div with a .loader-div class", () => {
    const { loaderDiv } = setup();

    expect(loaderDiv.length).toBe(1);
  });

  it("always renders a `HalfCircleSpinner`", () => {
    const { renderHalfCircleSpinner } = setup();

    expect(renderHalfCircleSpinner.length).toBe(1);
  });
});
