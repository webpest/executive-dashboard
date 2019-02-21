import Color from "color";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 1.5rem 1rem;
  transition: box-shadow 0.6s;
  align-items: center;
  border: 1px solid #e8f1fb;
  &:hover {
    box-shadow: 6px 15px 28px rgba(0, 0, 0, 0.05);
  }
`;

export const Heading = styled.h3`
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 1;
  color: ${props => props.theme.secondaryColor};
`;

export const SubHeading = styled.h4`
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${props => props.theme.grey};
  & a {
    color: ${props => props.theme.grey};
    text-decoration: none;
    transition: all 0.6s;
    &:hover {
      text-decoration: underline;
      color: ${props => props.theme.info};
    }
  }
`;

export const TitlIcon = styled.span`
  font-size: 0.8rem;
  background-color: ${props =>
    Color(props.color)
      .lighten(0.8)
      .string()};
  margin-bottom: 0.5rem;
  width: 28px;
  height: 28px;
  display: flex;
  color: ${props => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Footer = styled.div``;
