import styled from "styled-components";

const Card = styled.div`
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  &:hover {
    box-shadow: 6px 6px 100px 0 rgba(0, 0, 0, 0.05);
  }
`;
const CardHeader = styled.div``;
const CardBody = styled.div``;
const CardFooter = styled.div``;
export { Card, CardHeader, CardBody, CardFooter };
