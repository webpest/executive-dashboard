import { connect } from "dva";
import { Link } from "dva/router";
import { Object } from "es6-shim";
import React from "react";
import Chart from "react-apexcharts";
import Layout from "../../components/Layout";
import TeachersPerSubject from "../../components/TeachersPerSubject";
import { capitalize } from "../../utils/helper";
import { Card, Grid } from "./style";

const SchoolDetail = ({ schools: { schoolDetail } }) => {
  if (schoolDetail === undefined) return null;
  const {
    totalNoOfSchools,
    noOfStudents,
    noOfStaff,
    noOfFemaleStudents,
    noOfMaleStudents,
    noOfMaleStaff,
    noOfFemaleStaff,
    boardingStudents,
    dayStudents,
    schoolName
    // teachersPerSubject
  } = schoolDetail;
  const teachersPerSubject = {
    ACCT: 10,
    BS: 7,
    GEO: 2,
    ENG: 13,
    PHY: 4,
    BIO: 5,
    PHE: 1,
    MATHS: 6,
    SS: 8,
    GOVT: 8,
    CHEM: 2,
    COMM: 11
  };
  const TPS = {
    width: "500",
    type: "line",
    options: {
      title: {
        text: "Teachers Per Core Subject",
        align: "left"
      },
      chart: {
        id: "basic-bar"
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
  const teacherGender = {
    options: {
      labels: ["Male", "Female"],
      legend: {
        position: "bottom",
        horizontalAlign: "center"
      },
      title: {
        text: "Teacher's Gender",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "16px",
          color: "#263238"
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%"
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    },
    series: [noOfMaleStaff, noOfFemaleStaff]
  };

  const studentGender = {
    options: {
      labels: ["Male", "Female"],
      dataLabels: {
        enabled: false
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center"
      },
      title: {
        text: "Student's Gender",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "16px"
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%"
          }
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    },
    series: [noOfMaleStudents, noOfFemaleStudents]
  };
  return (
    <Layout>
      <Grid>
        <div className="pageTitle">
          <h1>
            <Link to="/schools">Schools</Link> > {capitalize(schoolName)}
          </h1>
        </div>

        <div className="staffs">
          <Card>
            <div className="card-body">
              <h3>Staff</h3>
              <span className="number">{noOfStaff}</span>
            </div>
          </Card>
        </div>
        <div className="students">
          <Card>
            <div className="card-body">
              <div className="flex">
                <div>
                  <h3>Students</h3>
                  <span className="number">{noOfStudents}</span>
                </div>
                <div className="stats">
                  <div>
                    Day <span>{dayStudents}</span>
                  </div>
                  <div>
                    Boarding <span>{boardingStudents}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="teachers">
          <Card>
            <div className="card-body">
              <TeachersPerSubject data={TPS} />
            </div>
          </Card>
        </div>
        <div className="main_chart">
          <Card>
            <div className="card-body">
              <Chart
                options={studentGender.options}
                series={studentGender.series}
                type="donut"
                width="200"
              />
            </div>
          </Card>
          <Card>
            <div className="card-body">
              <Chart
                options={teacherGender.options}
                series={teacherGender.series}
                type="donut"
                width="200"
              />
            </div>
          </Card>
        </div>
      </Grid>
    </Layout>
  );
};

SchoolDetail.propTypes = {};

export default connect(({ schools: { schoolDetail } }) => ({
  schools: { schoolDetail }
}))(SchoolDetail);
