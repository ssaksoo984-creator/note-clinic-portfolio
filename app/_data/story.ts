export interface StoryPoint {
  number: string;
  title: string;
  description: string;
}

export const storyPoints: StoryPoint[] = [
  {
    number: "01",
    title: "믿을 수 있는 실력인가",
    description:
      "매달 진행되는 증례 컨퍼런스와 학회 활동으로, 원장 개인의 경험이 아닌 병원 전체의 기준으로 안전을 검증합니다.",
  },
  {
    number: "02",
    title: "과잉진료는 없는가",
    description:
      "필요한 만큼만 제안하는 것을 원칙으로, 상담부터 수술 범위까지 개인의 상태에 맞춘 최소한의 계획만을 안내합니다.",
  },
  {
    number: "03",
    title: "끝까지 책임지는가",
    description:
      "수술 후에도 담당의가 직접 경과를 확인하며, 만족스러운 결과가 자리 잡을 때까지 사후관리를 지속합니다.",
  },
];
