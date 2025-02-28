/* eslint-disable no-dupe-keys */
import React from 'react';
import { Radar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
  Legend,
  ChartDataLabels // 플러그인 등록
);

// 육각형 배경색 커스텀 플러그인
const customBackgroundPlugin = {
  id: 'customBackgroundPlugin',
  beforeDraw: (chart) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;

    const { width, height } = chartArea;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2; // 전체 반지름

    const levels = [1, 0.66, 0.33]; // 각 단계별 비율
    const colors = [
      'rgba(235,210,182, 1)',
      'rgba(255,225,193, 1)',
      'rgba(255,249,222, 1)',
    ]; // 투명도 조정
    const startAngle = -Math.PI / 2 - Math.PI / 6; // ✅ -30도(라디안 변환) 반영

    ctx.save();
    levels.forEach((level, index) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + startAngle; // ✅ -30도 적용
        const x = centerX + Math.cos(angle) * radius * level;
        const y = centerY + Math.sin(angle) * radius * level;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = colors[index];
      ctx.fill();
    });
    ctx.restore();
  },
};

const labels = [
  { text: '실재형', subText: 'Realistic', color: '#FF4D4D' }, // R (Red)
  { text: '탐구형', subText: 'Investigative', color: '#FFA500' }, // I (Orange)
  { text: '예술형', subText: 'Artistic', color: '#6A5ACD' }, // A (Purple)
  { text: '사회형', subText: 'Social', color: '#1E90FF' }, // S (Blue)
  { text: '진취형', subText: 'Enterprising', color: '#32CD32' }, // E (Green)
  { text: '관습형', subText: 'Conventional', color: '#FFD700' }, // C (Yellow)
];

// 6각 레이더 차트 컴포넌트
const CareerRadarChart = () => {
  // 육각형 최외곽 꼭지점에 라벨을 추가하는 플러그인
  const customCornerLabelsPlugin = {
    id: 'customCornerLabelsPlugin',
    afterDraw: (chart) => {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;

      const { width, height } = chartArea;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) / 2.0; // 가장 외곽 꼭짓점 위치

      ctx.save();
      // ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const startAngle = -Math.PI / 2 - Math.PI / 6; // -30도 적용

      labels.forEach((label, index) => {
        const angle = (Math.PI / 3) * index + startAngle; // 꼭짓점 위치 조정
        const x = centerX + Math.cos(angle) * radius * 1; // 외곽으로 배치
        const y = centerY + Math.sin(angle) * radius * 1;

        // 원형 배경 그리기
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, Math.PI * 2);
        ctx.fillStyle = label.color;
        ctx.fill();

        // 글자 위치 조정 (왼쪽/오른쪽 구분)
        const textOffset = Math.cos(angle) > 0 ? 25 : -25; // 양수: 오른쪽, 음수: 왼쪽

        // 원 안의 한 글자 (영문 첫 글자)
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(label.subText[0], x, y);

        // 원 옆의 텍스트 (한글)
        ctx.fillStyle = 'black';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = Math.cos(angle) > 0 ? 'left' : 'right';
        const offsetY =
          label.text === '실재형' || label.text === '탐구형'
            ? 0
            : label.text === '진취형' || label.text === '사회형'
              ? -25
              : -10;
        ctx.fillText(label.text, x + textOffset, y + offsetY);

        // 원 옆의 영문 텍스트 (서브 텍스트)
        ctx.font = '14px Arial';
        ctx.fillStyle = label.color;
        ctx.textAlign = Math.cos(angle) > 0 ? 'left' : 'right';
        ctx.fillText(label.subText, x + textOffset, y + offsetY + 15);

        // 원 옆의 영문 텍스트 (서브 텍스트)
        ctx.font = '12px Arial';
        ctx.fillStyle = 'gray';
        ctx.textAlign = Math.cos(angle) > 0 ? 'left' : 'right';
        ctx.fillText(`(0/0)`, x + textOffset, y + offsetY + 30);

        // 폰트 원래대로 복구
        ctx.font = 'bold 16px Arial';
      });

      ctx.restore();
    },
  };
  // 데이터 정의
  const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: '선택 카드 수',
        data: [50, 30, 40, 25, 50, 70], // 데이터 값 (예제)
        backgroundColor: 'rgba(255,107,107, 0.7)', // 내부 색상
        borderColor: '#ff6b6b', // 테두리 색상
        borderWidth: 2,
        pointRadius: 0, // 점 크기
        // pointBackgroundColor: '#ff6384', // 포인트 색상
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1, // ✅ 차트의 비율을 1:1로 강제 적용

    scales: {
      r: {
        startAngle: -30, // 시작 각도
        suggestedMin: 0,
        suggestedMax: 100,
        beginAtZero: true,
        grid: {
          display: false, // 그리드 숨김
        },
        ticks: {
          display: false, // 눈금선 숨김
        },
        angleLines: {
          color: 'gray', // 축선 색상
          borderDash: [2, 3], // 점선 스타일 적용
        },
        pointLabels: {
          display: false, // 점수 숨김
        },
      },
    },

    plugins: {
      customBackgroundPlugin, // 배경색 채우기
      customCornerLabelsPlugin, // 꼭짓점 라벨 추가
      legend: {
        display: false, // 범례 숨김
      },
      datalabels: {
        color: '#6e6d6a', // 점수 색상
        font: {
          size: 12,
          weight: '400',
        },
        formatter: (value) => value, // 점수 표시
        anchor: 'end', // 라벨 위치 조정
        align: function (context) {
          // 꼭짓점 방향에 따라 `align` 값 동적 설정
          const index = context.dataIndex;
          const angle = index * (360 / 6) - 90; // 6각형 기준으로 각도 계산 (-90도 보정)

          if (angle < -60) return 'left'; // 위쪽 꼭지점
          if (angle < 0) return 'right'; // 오른쪽 위
          if (angle < 60) return 'right'; // 오른쪽 아래
          if (angle < 120) return 'right'; // 아래쪽 꼭지점
          if (angle < 180) return 'left'; // 왼쪽 아래
          return 'left'; // 왼쪽 위
        },
        offset: -1, // 위치 조정
      },
    },
  };

  return (
    <ChartContainer>
      <Radar
        data={data}
        options={options}
        plugins={[customBackgroundPlugin, customCornerLabelsPlugin]}
      />
    </ChartContainer>
  );
};

// 스타일 적용 (Chart 크기 조정)
const ChartContainer = styled.div`
  width: 440px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CareerRadarChart;
