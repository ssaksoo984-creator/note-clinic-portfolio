export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "1:1 맞춤 상담",
    description:
      "전문의와의 정밀 상담을 통해 개인의 골격과 비율을 분석하고, 가장 자연스러운 방향을 함께 설계합니다.",
  },
  {
    step: "02",
    title: "디자인 시뮬레이션",
    description:
      "상담 내용을 바탕으로 3D 시뮬레이션을 진행해, 수술 후 변화를 미리 확인하고 세부 사항을 조율합니다.",
  },
  {
    step: "03",
    title: "정밀 수술 진행",
    description:
      "마취과 전문의가 상주하는 안전한 환경에서, 설계된 디자인대로 정교하게 수술을 진행합니다.",
  },
  {
    step: "04",
    title: "맞춤 사후관리",
    description:
      "회복 단계에 맞춘 전담 코디네이터의 관리로, 결과가 안정적으로 자리 잡을 때까지 함께합니다.",
  },
];
