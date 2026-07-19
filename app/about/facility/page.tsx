import type { Metadata } from "next";
import PageHero from "../../_components/ui/PageHero";
import ConsultCTA from "../../_components/ui/ConsultCTA";
import HospitalGallery from "../../_components/home/HospitalGallery";

export const metadata: Metadata = {
  title: "시설 안내 | ARTE 성형외과",
  description: "365일 방역 클린룸과 안전한 수술 환경을 소개합니다",
};

export default function AboutFacilityPage() {
  return (
    <>
      <PageHero
        en="FACILITY"
        title="시설 안내"
        description="365일 운영되는 방역 클린룸과 안전한 수술 환경을 소개합니다."
      />

      <HospitalGallery />

      <ConsultCTA />
    </>
  );
}
