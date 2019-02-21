import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-row-gap: 0;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  width: 100%;
  font-size: 0.8rem;
  margin-top: 0.5rem;

  & .mLabel {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  & .mValue,
  .fValue {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    margin-top: -8px;
  }
  & .mValue {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  & .fLabel {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  & .fValue {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;
const Red = styled.span`
  color: ${props => props.theme.danger};
`;
const Green = styled.span`
  color: ${props => props.theme.primaryDark};
`;
const High = () => (
  <Green>
    <i className="icon-up-dir" />
  </Green>
);
const Low = () => (
  <Red>
    <i className="icon-down-dir" />
  </Red>
);

const GenderIndicator = ({ male, female }) => {
  return (
    <Container>
      <span className="mLabel">Male</span>
      <span className="mValue">
        {male > female ? <Green>{male}</Green> : <Red>{male}</Red>}
        {male > female ? <High /> : <Low />}
      </span>
      <span className="fLabel">Female</span>
      <span className="fValue">
        {female > male ? <Green>{female}</Green> : <Red>{female}</Red>}
        {female > male ? <High /> : <Low />}
      </span>
    </Container>
  );
};

export default GenderIndicator;
