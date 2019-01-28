import styled from "styled-components";

const Layout = styled.div`
  background-color: ${props => props.theme.bgLight};
`;

const Header = styled.header`
  height: 60px;
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.greyLight};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 19px 34px -15px ${props => props.theme.grey};
`;
const Main = styled.section`
  height: calc(100vh - 60px);
`;
const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  @media (min-width: 500px) {
    width: 1000px;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  background-color: #fff;
  width: 100%;
  min-width: 100%;
  border: 1px solid ${props => props.theme.greyLight};
  border-radius: 3px;
  box-shadow: 6px 3px 12px 0 rgba(0, 0, 0, 0.05);
  & .flex {
    display: flex;
    & > * {
      flex: 1 100%;
    }
    & .stats {
      font-size: 0.8rem;
      background-color: ${props => props.theme.greyLight};
      border-radius: 3px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      padding: 1.8rem;
      margin: -1.8rem;
      /* margin-right: -1.8rem; */
    }
  }
  & .card-body {
    padding: 1.8rem;
    & h3 {
      color: ${props => props.theme.greyDark};
      font-size: 14px;
    }
    & .number {
      font-size: 2rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 60px 120px;
  grid-auto-rows: auto;
  grid-gap: 2rem;

  & .pageTitle {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
    border: 1px solid ${props => props.theme.greyLight};
    border-radius: 3px;
    box-shadow: 6px 3px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 1rem;
  }
  & .schools {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    & .number {
      color: ${props => props.theme.info};
    }
  }
  & .staffs {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    & .number {
      color: ${props => props.theme.danger};
    }
  }
  & .students {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
    & .number {
      color: ${props => props.theme.warning};
    }
  }

  & .teachers {
    grid-column: 1 / 5;
    grid-row: 3 / 4;
  }

  & .main_chart {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    grid-column: 5 / 7;
    grid-row: 2 / 4;
  }

  & .mid_chart {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }
`;

export { Layout, Header, Main, Container, Card, Grid };
