import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';

// Chart.js 모듈 등록
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// 진로검사 -> 자세히보기 -> 6각 레이더 차트 컴포넌트
const CareerRadarChart = () => {
  // 데이터 정의
  const data = {
    labels: [
      '실재형 (R)',
      '탐구형 (I)',
      '예술형 (A)',
      '사회형 (S)',
      '진취형 (E)',
      '관습형 (C)',
    ],
    datasets: [
      {
        label: '선택 카드 수',
        data: [50, 20, 20, 50, 50, 70], // 데이터 값 (예제)
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // 내부 색상
        borderColor: 'rgba(255, 99, 132, 1)', // 테두리 색상
        borderWidth: 2,
        pointBackgroundColor: '#ff6384', // 포인트 색상
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ff6384',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        suggestedMax: 100,
        ticks: {
          stepSize: 10,
          color: '#888', // 눈금 숫자 색상
        },
        grid: {
          color: (context) => {
            if (context.tick.value === 100) {
              return '#ff6384'; // 최외곽선 색상
            }
            return ''; // 내부 눈금선 색상
          },
        },
        angleLines: {
          color: '#000', // 축선 색상
          borderDash: [5, 5], // 점선 스타일 적용
        },
      },
    },
    plugins: {
      legend: {
        display: false, // 범례 숨김
      },
    },
  };

  return (
    <ChartContainer>
      <Radar data={data} options={options} />
    </ChartContainer>
  );
};

// 스타일 적용 (Chart 크기 조정)
const ChartContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CareerRadarChart;
