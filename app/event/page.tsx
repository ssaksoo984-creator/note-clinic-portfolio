import type { Metadata } from "next";
import PageHero from "../_components/ui/PageHero";
import ConsultCTA from "../_components/ui/ConsultCTA";
import EventAccordionList from "../_components/sub/EventAccordionList";

export const metadata: Metadata = {
  title: "이벤트 | ARTE 성형외과",
  description: "ARTE 성형외과에서 진행 중인 이벤트와 프로모션을 확인해 보세요",
};

const IMG = "/clients/note-clinic/images/event";

const events = [
  {
    title: "봄맞이 눈성형 상담 프로모션",
    period: "2025.03.01 - 2025.04.30",
    summary: "쌍꺼풀 수술 상담 시 전 라인업 20% 할인 혜택을 드립니다.",
    detail:
      "매몰법·절개법·눈매교정 등 전 눈성형 라인업에 대해 상담 후 결제 시 20% 할인이 적용됩니다. 온라인 사전예약 고객에 한해 정밀 상담이 무료로 진행되며, 타 이벤트와 중복 적용은 불가합니다.",
    image: `${IMG}/spring-eye-promotion.jpg`,
  },
  {
    title: "코성형 리즈널 케어 패키지",
    period: "상시 진행",
    summary: "코성형 진행 시 붓기케어 서비스 3회를 무료로 제공합니다.",
    detail:
      "융비술·코끝성형·매부리코 교정 등 코성형을 진행하는 모든 고객에게 전담 스태프의 붓기케어 서비스를 3회 무료로 제공합니다. 회복 스케줄에 맞춰 담당 코디네이터가 방문 일정을 안내해 드립니다.",
    image: `${IMG}/nose-care-package.jpg`,
  },
  {
    title: "신규 회원 전용 첫 상담 이벤트",
    period: "상시 진행",
    summary: "첫 방문 고객에 한해 정밀 상담을 무료로 진행합니다.",
    detail:
      "ARTE 성형외과를 처음 방문하는 고객을 대상으로 3D 시뮬레이션을 포함한 정밀 상담을 무료로 제공합니다. 상담 후 바로 수술 일정을 결정하지 않아도 되며, 충분히 고민하신 후 다시 방문하셔도 좋습니다.",
    image: `${IMG}/first-visit-event.jpg`,
  },
  {
    title: "여름 대비 안면윤곽 얼리버드",
    period: "2025.05.01 - 2025.06.30",
    summary: "안면윤곽 3종(광대·사각턱·턱끝) 결합 시 최대 15% 할인됩니다.",
    detail:
      "광대축소술·사각턱수술·턱끝수술을 동시에 진행하는 경우 최대 15%까지 할인이 적용됩니다. 결합 수술 여부는 개인의 골격 상태에 따라 담당의와 상담 후 결정되며, 안전을 위해 무리한 결합은 권장하지 않습니다.",
    image: `${IMG}/summer-facial-earlybird.jpg`,
  },
  {
    title: "후기 작성 감사 이벤트",
    period: "상시 진행",
    summary: "수술 후기 작성 시 사후관리 서비스 1회를 추가로 제공합니다.",
    detail:
      "수술 후 경과 사진과 후기를 작성해 주신 고객께 감사의 의미로 사후관리 서비스(붓기케어 또는 흉터관리) 1회를 추가 제공합니다. 후기 작성은 개인정보 노출 없이 익명으로도 가능합니다.",
    image: `${IMG}/review-thanks-event.jpg`,
  },
];

export default function EventPage() {
  return (
    <>
      <PageHero
        en="EVENT"
        title="이벤트"
        description="ARTE 성형외과에서 진행 중인 이벤트와 프로모션을 확인해 보세요."
      />

      <section className="py-20 md:py-32 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <EventAccordionList events={events} />
        </div>
      </section>

      <ConsultCTA />
    </>
  );
}
