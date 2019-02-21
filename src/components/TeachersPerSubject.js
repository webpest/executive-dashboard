import React from "react";
import Chart from "react-apexcharts";

const TeachersPerSubject = ({ data }) => {
  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.type}
      height="400"
    />
  );
};

export default TeachersPerSubject;
