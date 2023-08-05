import React from "react";
import { RecordDiv } from "../../styles/student/StudentHomeStyle";
import { ResponsiveLine } from "@nivo/line";

const RecapSchoolRecord = () => {
  const data = [
    {
      id: "한국사",
      color: "hsl(231, 100%, 59%)",
      data: [
        {
          x: `2021-1 중간`,
          y: 4,
        },
        {
          x: "2021-1 기말",
          y: 4,
        },
        {
          x: "2021-2 중간",
          y: 5,
        },
        {
          x: "2021-2 기말",
          y: 4,
        },
        {
          x: "2022-1 중간",
          y: 3,
        },
        {
          x: "2022-1 기말",
          y: 2,
        },
        {
          x: "2022-2 중간",
          y: 2,
        },
        {
          x: "2022-2 기말",
          y: 2,
        },
      ],
    },
    {
      id: "영어",
      color: "hsl(213, 70%, 50%)",
      data: [
        {
          x: `2021-1 중간`,
          y: 3,
        },
        {
          x: "2021-1 기말",
          y: 2,
        },
        {
          x: "2021-2 중간",
          y: 2,
        },
        {
          x: "2021-2 기말",
          y: 1,
        },
        {
          x: "2022-1 중간",
          y: 2,
        },
        {
          x: "2022-1 기말",
          y: 2,
        },
        {
          x: "2022-2 중간",
          y: 1,
        },
        {
          x: "2022-2 기말",
          y: 2,
        },
      ],
    },
    {
      id: "수학",
      color: "hsl(342, 70%, 50%)",
      data: [
        {
          x: `2021-1 중간`,
          y: 1,
        },
        {
          x: "2021-1 기말",
          y: 5,
        },
        {
          x: "2021-2 중간",
          y: 3,
        },
        {
          x: "2021-2 기말",
          y: 2,
        },
        {
          x: "2022-1 중간",
          y: 2,
        },
        {
          x: "2022-1 기말",
          y: 1,
        },
        {
          x: "2022-2 중간",
          y: 1,
        },
        {
          x: "2022-2 기말",
          y: 1,
        },
      ],
    },
    {
      id: "국어",
      color: "hsl(45, 70%, 50%)",
      data: [
        {
          x: `2021-1 중간`,
          y: 1,
        },
        {
          x: "2021-1 기말",
          y: 2,
        },
        {
          x: "2021-2 중간",
          y: 3,
        },
        {
          x: "2021-2 기말",
          y: 2,
        },
        {
          x: "2022-1 중간",
          y: 1,
        },
        {
          x: "2022-1 기말",
          y: 1,
        },
        {
          x: "2022-2 중간",
          y: 3,
        },
        {
          x: "2022-2 기말",
          y: 1,
        },
        // {
        //   x: "2023-1 중간",
        //   y: 1,
        // },
        // {
        //   x: "2023-1 기말",
        //   y: 1,
        // },
        // {
        //   x: "2023-2 중간",
        //   y: 3,
        // },
        // {
        //   x: "2023-2 기말",
        //   y: 1,
        // },
      ],
    },
  ];

  return (
    <RecordDiv>
      <div className="chart">
        <ResponsiveLine
          data={data}
          margin={{ top: 30, right: 60, bottom: 70, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "1",
            max: "5",
            stacked: false,
            reverse: true,
          }}
          axisLeft={{ tickValues: [1, 2, 3, 4, 5] }}
          gridYValues={[1, 2, 3, 4, 5]}
          colors={["#B2A4FF", "#FFB4B4", "#C3EDC0", "gold"]}
          lineWidth={3}
          pointSize={5}
          pointColor={{ theme: "background" }}
          pointBorderWidth={3}
          pointBorderColor={{ from: "serieColor" }}
          useMesh={true}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 55,
              itemDirection: "left-to-right",
              itemWidth: 70,
              itemHeight: 20,
              itemOpacity: 1,
              symbolSize: 12,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
      <div className="record-text">
        <div className="exam-title-wrap">
          <span className="exam-title">2023학년도 2학기 중간고사</span>
          <span>주요 과목 등급</span>
        </div>
        <div className="subject-grade">
          <p>
            <span className="subject-title korean">국어</span>
            <span className="grade-num korean">3</span>
            <span>등급</span>
          </p>
          <p>
            <span className="subject-title math">수학</span>
            <span className="grade-num math">2</span>
            <span>등급</span>
          </p>
          <p>
            <span className="subject-title english">영어</span>
            <span className="grade-num english">3</span>
            <span>등급</span>
          </p>
          <p>
            <span className="subject-title k-history">한국사</span>
            <span className="grade-num k-history">2</span>
            <span>등급</span>
          </p>
        </div>
      </div>
    </RecordDiv>
  );
};

export default RecapSchoolRecord;
