import { connect } from "dva";
import { Link } from "dva/router";
import React from "react";
import DataCard from "../../components/DataCard";
import GenderIndicator from "../../components/GenderIndicator";
import Layout from "../../components/Layout";
import TeachersPerSubject from "../../components/TeachersPerSubject";
import { Container, Grid, Table } from "./style";

const DashBoard = ({ app, dashboard, loading, dispatch }) => {
  if (Object.keys(dashboard).length < 0) return null;
  const {
    totalNoOfSchools,
    noOfStudents,
    noOfStaff,
    noOfMaleStudents,
    noOfFemaleStudents,
    noOfMaleStaff,
    noOfFemaleStaff,
    boardingStudents,
    dayStudents,
    teachersPerSubject
  } = dashboard;

  const TPS = {
    width: "500",
    type: "line",
    options: {
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["#44B38C"],
        width: 3,
        dashArray: 0
      },
      title: {
        text: "Teachers / Core Subject",
        align: "left",
        style: {
          fontSize: "28px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700
        }
      },
      grid: {
        borderColor: "#e8f1fb"
      },
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories:
          teachersPerSubject !== undefined && teachersPerSubject !== null
            ? Object.keys(teachersPerSubject)
            : null
      }
    },
    series: [
      {
        name: "Teachers",
        data:
          teachersPerSubject !== undefined && teachersPerSubject !== null
            ? Object.values(teachersPerSubject)
            : null
      }
    ]
  };
  return (
    <Layout>
      <Grid>
        <DataCard
          color="#44B38C"
          heading={totalNoOfSchools}
          subheading={<Link to="/schools">Schools</Link>}
          icon="bank"
        />
        <DataCard
          color="#3D79CC"
          heading={noOfStaff}
          subheading={<Link to="/staff">Staff</Link>}
          icon="users"
          footer={
            <GenderIndicator male={noOfMaleStaff} female={noOfFemaleStaff} />
          }
        />
        <DataCard
          color="orange"
          heading={noOfStudents}
          subheading={<Link to="/staff">Students</Link>}
          icon="graduation-cap"
          footer={
            <GenderIndicator
              male={noOfMaleStudents}
              female={noOfFemaleStudents}
            />
          }
        />
        <DataCard
          color="red"
          heading="21200"
          subheading={<Link to="/staff">Total Staff</Link>}
          icon="chart-pie"
        />
        <div className="tps">
          <Container>
            <TeachersPerSubject data={TPS} />
          </Container>
        </div>
        <div className="tps_data">
          <Container>
            <Table style={{ width: "100%" }}>
              <tr>
                <th>Subject</th>
                <th>#</th>
              </tr>
              {teachersPerSubject !== undefined && teachersPerSubject !== null
                ? Object.entries(teachersPerSubject).map(key => (
                    <tr>
                      <td>{key[0]}</td>
                      <td>{key[1]}</td>
                    </tr>
                  ))
                : null}
            </Table>
          </Container>
        </div>
      </Grid>
    </Layout>
  );
};

DashBoard.propTypes = {};

export default connect(({ app, dashboard }) => ({
  dashboard
}))(DashBoard);
