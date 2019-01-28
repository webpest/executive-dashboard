import { connect } from "dva";
import { Link } from "dva/router";
import React from "react";
import styled from "styled-components";
import unitylogo from "../../assets/unity-logo.png";
import Loader from "../Loader";

const Wrapper = styled.div`
  background-color: ${props => props.theme.bgLight};
`;
const SideBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  height: auto;
  width: 120px;
`;
const Unity = styled.div`
  & a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: auto;
    text-decoration: none;
    color: ${props => props.theme.bgLight};
  }
  & h1 {
    display: inline-block;
    font-size: 1.5rem;
  }
`;

const UnityLogo = styled.h1`
  background: #fff url(${unitylogo}) no-repeat center center;
  background-size: contain;
  width: 45px;
  height: 45px;
  padding: 0.5rem;
  border-radius: 5px;
  display: inline-block;
  margin-right: 1rem;
`;

const Header = styled.header`
  height: 60px;
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.greyLight};
  display: flex;
  flex-direction: column;
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
const Layout = ({ app, loading, children }) => {
  return (
    <Wrapper>
      <Loader loading={loading.global} />
      <Header>
        <Container>
          <Unity>
            <Link to="/">
              <UnityLogo />
              <h1>Unity Schools</h1>{" "}
            </Link>
          </Unity>
        </Container>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </Wrapper>
  );
};

export default connect(({ app, loading }) => ({
  app,
  loading
}))(Layout);
