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
  title: "안면윤곽 | 아르떼성형외과",
  description: "광대·사각턱·턱끝의 균형을 고려한 아르떼성형외과의 맞춤 안면윤곽",
};

const methods = [
  {
    name: "광대축소술",
    description:
      "돌출된 광대뼈를 안쪽으로 밀어넣거나 절삭해 갸름한 얼굴 옆선을 만듭니다.",
    points: [
      "광대 앞·뒤 돌출을 함께 교정",
      "자연스러운 미소 라인 유지",
      "좌우 비대칭 교정 가능",
    ],
  },
  {
    name: "사각턱수술",
    description: "발달된 턱뼈 각을 부드럽게 다듬어 매끄러운 하관 라인을 완성합니다.",
    points: [
      "턱뼈 두께에 맞춘 절삭량 설계",
      "구강 내 절개로 흉터 없음",
      "씹는 근육(교근) 축소와 병행 가능",
    ],
  },
  {
    name: "턱끝수술",
    description: "턱끝의 길이와 방향을 조정해 부드러운 얼굴 라인의 균형을 맞춥니다.",
    points: [
      "전진·후퇴·축소 등 방향별 맞춤 교정",
      "옆모습 라인까지 고려한 설계",
      "다른 안면윤곽 수술과 동시 진행 가능",
    ],
  },
  {
    name: "윤곽 지방흡입",
    description: "볼과 턱 아래 지방을 정리해 갸름한 얼굴 라인을 더욱 선명하게 만듭니다.",
    points: [
      "최소 흉터의 정교한 캐뉼라 시술",
      "골격 교정 후 남은 볼륨 정리",
      "자연스러운 얼굴 그림자 라인 완성",
    ],
  },
];

const knowhowItems = [
  {
    icon: "01",
    image: "/clients/note-clinic/images/knowhow/facial-balance.jpg",
    title: "통합 안면 밸런스 설계",
    description:
      "광대·턱·턱끝을 따로 보지 않고 얼굴 전체 균형을 하나의 라인으로 설계합니다.",
  },
  {
    icon: "02",
    image: "/clients/note-clinic/images/knowhow/facial-nerve-mapping.jpg",
    title: "신경 위치 정밀 진단",
    description:
      "CT 판독을 통해 안면 신경과 혈관 위치를 사전에 파악해 안전성을 높입니다.",
  },
  {
    icon: "03",
    image: "/clients/note-clinic/images/knowhow/facial-minimal-dissection.jpg",
    title: "최소 박리 원칙",
    description:
      "불필요한 조직 손상을 줄여 붓기와 회복 기간을 최소화하는 수술법을 우선합니다.",
  },
  {
    icon: "04",
    image: "/clients/note-clinic/images/knowhow/facial-aftercare.jpg",
    title: "체계적 사후관리",
    description:
      "수술 후 경과에 맞춘 단계별 관리 프로그램으로 회복부터 완성까지 함께합니다.",
  },
];

const career = [
  "대한성형외과학회 정회원",
  "대한미용성형외과학회 정회원",
  "○○대학교 의과대학 졸업",
  "○○대학병원 성형외과 수련",
  "아르떼성형외과 대표원장",
];

const aftercareItems = [
  {
    title: "압박 헬멧 케어",
    description:
      "수술 부위를 안정적으로 잡아주는 맞춤 압박 헬멧과 관리 스케줄을 제공합니다.",
    image: "/clients/note-clinic/images/aftercare/facial-compression-helmet.jpg",
  },
  {
    title: "림프 마사지 프로그램",
    description: "붓기 감소를 돕는 전문 림프 마사지를 회복 단계에 맞춰 진행합니다.",
    image: "/clients/note-clinic/images/aftercare/facial-lymph-massage.jpg",
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

const faqs = [
  {
    question: "안면윤곽 수술 후 감각 저하가 생기나요?",
    answer:
      "일시적인 입술·턱 주변 감각 저하가 있을 수 있으나, 대부분 신경 자극에 의한 일시적 증상으로 수개월 내 서서히 회복됩니다.",
  },
  {
    question: "뼈를 깎으면 부작용 위험이 큰가요?",
    answer:
      "수술 전 정밀 CT 판독으로 신경과 혈관 위치를 미리 파악하고, 최소 절삭·최소 박리 원칙을 적용해 부작용 위험을 최소화합니다.",
  },
  {
    question: "입원이 필요한가요?",
    answer:
      "수술 범위에 따라 1~2일 입원을 권장하며, 회복 경과를 보아 담당의와 상의해 퇴원 시기를 결정합니다.",
  },
  {
    question: "붓기는 언제 빠지나요?",
    answer:
      "초기 붓기는 2~3주 내 대부분 가라앉고, 자연스러운 얼굴선이 완성되기까지는 약 3~6개월이 소요됩니다.",
  },
];

export default function FacialPage() {
  return (
    <>
      <PageHero
        en="FACIAL CONTOURING"
        title="안면윤곽"
        description="갸름하고 부드러운 얼굴선을 위한 정교한 안면윤곽 수술을 제안합니다."
      />

      <TreatmentIntro
        title="얼굴선 하나로, 전체 인상이 갸름해집니다"
        description="아르떼성형외과는 광대·사각턱·턱끝의 균형을 함께 고려한 안면윤곽 수술을 지향합니다. 단순히 뼈를 깎는 것이 아니라, 신경과 근육의 위치를 세심하게 살펴 안전하고 자연스러운 라인을 완성합니다."
        image="/clients/note-clinic/images/treatments/facial-hover.jpg"
        imageAlt="안면윤곽 상담 이미지"
        points={[
          "광대·사각턱·턱끝을 아우르는 통합 디자인",
          "안면 신경 위치를 고려한 정교한 절삭",
          "부작용을 낮추는 최소 절개·최소 박리 원칙",
          "마취과 전문의 상주로 안전한 수술 환경",
        ]}
      />

      <TreatmentMethods
        title="안면윤곽 방법"
        subtitle="TREATMENT METHODS"
        methods={methods}
      />

      <KnowhowSection
        title="안면윤곽 노하우"
        subtitle="OUR KNOW-HOW"
        items={knowhowItems}
      />

      <DoctorSection
        name="김아르떼 원장"
        title="성형외과 전문의"
        specialty="FACIAL CONTOURING SPECIALIST"
        career={career}
        image="/clients/note-clinic/images/doctor/facial-doctor.jpg"
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
        title="갸름한 얼굴선의 완성"
        subtitle={"전문의와의 1:1 상담을 통해\n안전하고 자연스러운 안면윤곽을 설계해 드립니다."}
      />
    </>
  );
}
