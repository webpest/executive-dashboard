import React from "react";
import { connect } from "dva";
import styled from "styled-components";
import { Card, Grid } from "./style";
import TeachersPerSubject from "../../components/TeachersPerSubject";
import Chart from "react-apexcharts";
import { Object } from "es6-shim";
import SchoolItem from "../../components/SchoolItem";
import Layout from "../../components/Layout";

const SchoolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.8rem;
`;

const Schools = ({ schools, dispatch }) => {
  const { data } = schools;
  return (
    <Layout>
      <SchoolGrid>
        {data !== undefined &&
          data.map((school, i) => <SchoolItem {...school} key={i} />)}
      </SchoolGrid>
    </Layout>
  );
};

Schools.propTypes = {};

export default connect(({ schools }) => ({
  schools
}))(Schools);
