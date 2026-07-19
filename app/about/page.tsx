import type { Metadata } from "next";
import PageHero from "../_components/ui/PageHero";
import ConsultCTA from "../_components/ui/ConsultCTA";
import PhilosophyDetail from "../_components/sub/PhilosophyDetail";
import HistoryTimeline from "../_components/sub/HistoryTimeline";
import AwardsSection from "../_components/sub/AwardsSection";

export const metadata: Metadata = {
  title: "병원소개 | ARTE 성형외과",
  description: "자연스러운 아름다움을 완성하는 ARTE 성형외과의 철학과 히스토리",
};

const values = [
  {
    title: "자연스러움",
    description: "인위적인 변화보다 본연의 매력을 살리는 디자인을 우선합니다.",
  },
  {
    title: "안전",
    description: "마취통증의학과 전문의 상주와 체계적인 프로세스로 안전을 최우선으로 합니다.",
  },
  {
    title: "섬세함",
    description: "1mm의 차이까지 고려하는 정교한 설계로 완성도를 높입니다.",
  },
];

const milestones = [
  { year: "2013", description: "ARTE 성형외과 강남점 개원" },
  { year: "2016", description: "365일 운영되는 방역 클린룸 시스템 도입" },
  { year: "2018", description: "마취통증의학과 전문의 상주 체계 구축" },
  { year: "2021", description: "누적 상담 3만 건 돌파" },
  { year: "2024", description: "의료진 4인 체제로 확장, 시설 전면 리뉴얼" },
];

const awards = [
  "대한성형외과학회 인증의",
  "대한미용성형외과학회 정회원",
  "우수 의료기관 인증 (안전관리 부문)",
  "ISO 9001 의료서비스 품질 인증",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        en="ABOUT ARTE"
        title="병원소개"
        description="자연스러운 아름다움을 완성하는 ARTE 성형외과의 철학을 소개합니다."
      />

      <PhilosophyDetail
        lead="원래 그 사람이었던 것처럼"
        description="ARTE 성형외과는 화려함보다 조화를, 과감함보다 섬세함을 추구합니다. 자연스러움이야말로 가장 완성도 높은 아름다움이라 믿으며, 개인의 고유한 매력을 살리는 것을 최우선 가치로 삼습니다."
        values={values}
      />

      <HistoryTimeline title="히스토리" subtitle="HISTORY" milestones={milestones} />

      <AwardsSection
        title="수상 및 인증"
        subtitle="AWARDS & CERTIFICATIONS"
        awards={awards}
      />

      <ConsultCTA />
    </>
  );
}
