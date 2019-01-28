import React from "react";
import styled from "styled-components";
import { Link } from "dva/router";
import { capitalize } from "../utils/helper";

const Item = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 100%;
  border: 1px solid ${props => props.theme.greyLight};
  border-radius: 3px;
  box-shadow: 6px 3px 12px 0 rgba(0, 0, 0, 0.05);
  padding: 1.8rem;

  & a {
    color: ${props => props.theme.info};
    text-decoration: none;

    & :hover {
      text-decoration: underline;
    }
  }
  & h3 {
    text-transform: capitalize;
    text-align: center;
    font-size: 0.8rem;
    line-height: initial;
  }
  & .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80px;
    overflow: hidden;
    margin-bottom: 0.5rem;

    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  & .stat {
    margin-top: 0.4rem;
    & li {
      padding: 0.1rem 0.4rem;
      border: 1px solid ${props => props.theme.greyLight};
      color: ${props => props.theme.greyDark};
      border-radius: 3px;
      font-size: 0.7rem;
      float: left;
      margin-right: 0.4rem;
      & :last-child {
        margin-right: 0;
      }
    }
  }
`;

const SchoolItem = ({
  schoolCode,
  schoolName,
  logoUrl,
  noOfStudents,
  noOfStaff
}) => {
  return (
    <Item>
      <div className="logo">
        <img src={logoUrl} alt="" />
      </div>
      <Link to={`/schools/${schoolCode}`}>
        <h3>{capitalize(schoolName)}</h3>
      </Link>
      <ul className="stat">
        <li>{noOfStaff} Staff</li>
        <li>{noOfStudents} Students</li>
      </ul>
    </Item>
  );
};

export default SchoolItem;
