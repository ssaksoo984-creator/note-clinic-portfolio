import HeroSlider from "./_components/home/HeroSlider";
import TreatmentCards from "./_components/home/TreatmentCards";
import BeforeAfterSection from "./_components/home/BeforeAfterSection";
import HospitalGallery from "./_components/home/HospitalGallery";
import LocationSection from "./_components/home/LocationSection";
import ConsultCTA from "./_components/ui/ConsultCTA";
import ProcessSection from "./_components/sub/ProcessSection";
import StorySection from "./_components/sub/StorySection";
import { processSteps } from "./_data/process";
import { storyPoints } from "./_data/story";

export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* 진료분야가 고정되고 상담절차가 그 위로 슬라이드해 덮는 스택 효과 — 범위를 이 래퍼로 한정 */}
      <div className="relative">
        <TreatmentCards />
        <ProcessSection
          title="상담부터 사후관리까지"
          subtitle="OUR PROCESS"
          steps={processSteps}
        />
      </div>
      <BeforeAfterSection />
      <StorySection
        title="ARTE가 지켜온 약속"
        subtitle="WHY ARTE"
        points={storyPoints}
      />
      <HospitalGallery />
      <LocationSection />
      <ConsultCTA bg />
    </>
  );
}
