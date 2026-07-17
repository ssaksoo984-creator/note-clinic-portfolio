import type { Metadata } from "next";
import PageHero from "../../_components/ui/PageHero";
import ConsultCTA from "../../_components/ui/ConsultCTA";
import LocationSection from "../../_components/home/LocationSection";
import TransitInfo from "../../_components/sub/TransitInfo";

export const metadata: Metadata = {
  title: "오시는 길 | 아르떼성형외과",
  description: "아르떼성형외과로 오시는 다양한 방법을 안내해 드립니다",
};

const transitItems = [
  {
    label: "지하철",
    description: "3호선 압구정역 3번 출구\n도보 5분 거리",
  },
  {
    label: "버스",
    description: "간선 143 · 145 · 146\n압구정로데오역 정류장 하차",
  },
  {
    label: "주차",
    description: "건물 내 지하주차장 이용 가능\n상담 고객 2시간 무료 발렛",
  },
];

export default function AboutLocationPage() {
  return (
    <>
      <PageHero
        en="LOCATION"
        title="오시는 길"
        description="아르떼성형외과로 오시는 다양한 방법을 안내해 드립니다."
      />

      <LocationSection />

      <TransitInfo
        title="교통 안내"
        subtitle="HOW TO GET THERE"
        items={transitItems}
      />

      <ConsultCTA />
    </>
  );
}
