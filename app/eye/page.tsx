import type { Metadata } from "next";
import PageHero from "../_components/ui/PageHero";
import ConsultCTA from "../_components/ui/ConsultCTA";
import SectionTitle from "../_components/ui/SectionTitle";
import TreatmentIntro from "../_components/sub/TreatmentIntro";
import TreatmentMethods from "../_components/sub/TreatmentMethods";
import KnowhowSection from "../_components/sub/KnowhowSection";
import DoctorSection from "../_components/sub/DoctorSection";
import AftercareSlider from "../_components/sub/AftercareSlider";
import FAQAccordion from "../_components/sub/FAQAccordion";

export const metadata: Metadata = {
  title: "눈성형 | 아르떼성형외과",
  description: "개인의 눈매와 얼굴 비율을 고려한 아르떼성형외과의 맞춤 눈성형",
};

const methods = [
  {
    name: "쌍꺼풀 매몰법",
    description:
      "피부 절개 없이 최소 개의 매듭으로 라인을 형성하는 방법으로, 붓기와 회복 기간이 짧아 자연스러운 라인을 원하는 분들에게 적합합니다.",
    points: [
      "절개 없이 진행되어 회복이 빠름",
      "눈꺼풀 피부·지방이 적은 경우에 적합",
      "라인 수정 및 재교정이 비교적 용이",
    ],
  },
  {
    name: "쌍꺼풀 절개법",
    description:
      "눈꺼풀 피부와 지방이 많거나 처짐이 있는 경우, 절개를 통해 여분의 조직을 정리하고 견고한 라인을 형성하는 방법입니다.",
    points: [
      "반영구적으로 유지되는 뚜렷한 라인",
      "처진 눈꺼풀·다크서클 개선에 효과적",
      "개인 맞춤 라인 디자인 가능",
    ],
  },
  {
    name: "앞트임 · 뒤트임",
    description:
      "눈 앞머리와 뒷꼬리의 길이를 조정해 눈의 가로 폭을 넓히고 전체적인 눈매 비율을 균형 있게 다듬는 방법입니다.",
    points: [
      "얼굴 전체 비율을 고려한 눈매 확장",
      "다른 눈성형과 병행 시 자연스러운 시너지",
      "흉터가 최소화되는 정교한 봉합",
    ],
  },
  {
    name: "눈매교정",
    description:
      "눈뜨는 근육의 힘이 약해 눈이 처져 보이거나 짝눈인 경우, 근육 기능을 개선해 또렷하고 좌우 균형 잡힌 눈매를 만듭니다.",
    points: [
      "졸려 보이는 인상 개선",
      "좌우 비대칭 눈매 균형 교정",
      "쌍꺼풀 수술과 동시 진행 가능",
    ],
  },
];

const knowhowItems = [
  {
    icon: "01",
    image: "/clients/note-clinic/images/knowhow/eye-design.jpg",
    title: "맞춤 눈매 디자인",
    description:
      "눈매, 눈꺼풀 두께, 얼굴 비율을 함께 분석해 개인에게 가장 자연스러운 라인을 설계합니다.",
  },
  {
    icon: "02",
    image: "/clients/note-clinic/images/knowhow/minimal-incision.jpg",
    title: "최소절개 원칙",
    description:
      "필요한 만큼만 절개하는 것을 원칙으로, 붓기와 회복 기간을 최소화하는 수술법을 우선 적용합니다.",
  },
  {
    icon: "03",
    image: "/clients/note-clinic/images/knowhow/natural-suture.jpg",
    title: "자연유착 봉합",
    description:
      "라인이 티나지 않도록 조직 간 자연스러운 유착을 유도하는 봉합 기법으로 마무리합니다.",
  },
  {
    icon: "04",
    image: "/clients/note-clinic/images/knowhow/aftercare.jpg",
    title: "체계적 사후관리",
    description:
      "수술 후 경과에 맞춘 단계별 관리 프로그램으로 회복부터 완성까지 함께합니다.",
  },
];

const aftercareItems = [
  {
    title: "붓기케어 서비스",
    description:
      "수술 직후부터 전담 관리 스태프가 개인별 붓기 정도에 맞춘 냉·온찜질과 관리 스케줄을 제공합니다.",
    image: "/clients/note-clinic/images/aftercare/swelling-care.jpg",
  },
  {
    title: "실밥 제거 · 경과 체크",
    description:
      "회복 단계에 맞춘 방문 일정으로 실밥 제거와 라인 상태를 세심하게 점검합니다.",
    image: "/clients/note-clinic/images/aftercare/checkup.jpg",
  },
  {
    title: "1:1 전담 코디네이터",
    description:
      "수술 전후 궁금한 점을 언제든 상담할 수 있도록 담당 코디네이터가 1:1로 배정됩니다.",
    image: "/clients/note-clinic/images/aftercare/coordinator.jpg",
  },
  {
    title: "야간 응급 핫라인",
    description:
      "수술 후 예기치 못한 증상이 있을 때 신속하게 연결되는 응급 상담 채널을 운영합니다.",
    image: "/clients/note-clinic/images/aftercare/hotline.jpg",
  },
];

const career = [
  "대한성형외과학회 정회원",
  "대한미용성형외과학회 정회원",
  "○○대학교 의과대학 졸업",
  "○○대학병원 성형외과 수련",
  "아르떼성형외과 대표원장",
];

const faqs = [
  {
    question: "쌍꺼풀 수술 후 붓기는 얼마나 지속되나요?",
    answer:
      "개인차가 있지만 일반적으로 수술 직후 붓기가 가장 심하고, 7~10일 이후부터 눈에 띄게 가라앉기 시작합니다. 자연스러운 라인이 자리 잡기까지는 약 1~3개월 정도의 시간이 소요됩니다.",
  },
  {
    question: "매몰법과 절개법 중 어떤 방법이 저에게 맞을까요?",
    answer:
      "눈꺼풀 피부와 지방의 양, 눈매의 처짐 정도에 따라 적합한 방법이 다릅니다. 상담을 통해 개인의 눈 상태를 정밀하게 분석한 후 가장 자연스러운 결과를 얻을 수 있는 방법을 함께 결정합니다.",
  },
  {
    question: "재수술도 상담이 가능한가요?",
    answer:
      "네, 가능합니다. 이전 수술의 조직 상태와 라인을 면밀히 검토한 뒤, 재수술에 맞는 맞춤 계획을 수립해 상담해 드립니다.",
  },
  {
    question: "수술 후 일상 복귀는 언제부터 가능한가요?",
    answer:
      "실밥 제거 전이라도 간단한 외출은 가능하나, 격렬한 운동이나 눈을 심하게 사용하는 활동은 최소 2주간 피하시는 것을 권장합니다. 정확한 시기는 경과에 따라 담당의와 상의해 결정합니다.",
  },
];

export default function EyePage() {
  return (
    <>
      <PageHero
        en="EYE SURGERY"
        title="눈성형"
        description="눈은 인상의 시작입니다. 자연스러운 눈매와 균형 잡힌 인상을 위한 맞춤 눈성형을 제안합니다."
      />

      <TreatmentIntro
        title="눈매 하나로, 인상 전체가 달라집니다"
        description="아르떼성형외과는 개인의 눈매와 얼굴 비율을 고려한 자연스러운 눈성형을 지향합니다. 과도한 절개보다 최소한의 개입으로, 원래 그런 눈매였던 것처럼 자연스러운 결과를 완성합니다."
        image="/clients/note-clinic/images/treatments/eye-hover.jpg"
        imageAlt="눈성형 상담 이미지"
        points={[
          "개인 눈매 분석을 통한 맞춤 디자인",
          "최소절개 매몰법부터 절개법까지 다양한 옵션",
          "자연유착 기법으로 티나지 않는 라인 형성",
          "마취과 전문의 상주로 안전한 수술 환경",
        ]}
      />

      <TreatmentMethods
        title="눈성형 방법"
        subtitle="TREATMENT METHODS"
        methods={methods}
      />

      <KnowhowSection
        title="눈성형 노하우"
        subtitle="OUR KNOW-HOW"
        items={knowhowItems}
      />

      <DoctorSection
        name="김아르떼 원장"
        title="성형외과 전문의"
        specialty="EYE SPECIALIST"
        career={career}
        image="/clients/note-clinic/images/doctor/eye-doctor.jpg"
      />

      <AftercareSlider
        title="아르떼만의 사후관리"
        subtitle="AFTERCARE"
        items={aftercareItems}
      />

      <section className="py-20 md:py-32 px-6 bg-rule/20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle en="FAQ" ko="자주 묻는 질문" center />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <ConsultCTA
        title="자연스러운 눈매의 시작"
        subtitle={"전문의와의 1:1 상담을 통해\n당신에게 꼭 맞는 눈성형을 설계해 드립니다."}
      />
    </>
  );
}
