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
  title: "코성형 | 아르떼성형외과",
  description: "얼굴 전체 비율을 고려한 아르떼성형외과의 맞춤 코성형",
};

const methods = [
  {
    name: "융비술 (콧대 성형)",
    description:
      "실리콘 또는 자가진피를 이용해 낮은 콧대를 세우고 얼굴 비율에 맞는 콧대 라인을 형성합니다.",
    points: [
      "피부 두께에 맞춘 보형물 종류 선택",
      "자연스러운 곡선의 콧대 라인 형성",
      "염증 위험을 낮춘 정교한 삽입 기법",
    ],
  },
  {
    name: "코끝 성형",
    description:
      "뭉툭하거나 무너진 코끝을 연골 이식으로 세우고, 얼굴과 조화로운 코끝 모양을 만듭니다.",
    points: [
      "귀연골·비중격연골 등 자가조직 활용",
      "콧볼 축소와 동시 진행 가능",
      "오랜 시간이 지나도 자연스러운 유지력",
    ],
  },
  {
    name: "매부리코 교정",
    description: "돌출된 비골과 연골을 다듬어 매끄러운 콧대 라인을 완성합니다.",
    points: [
      "돌출 부위 절삭 후 라인 정리",
      "콧대 전체 밸런스 재조정",
      "필요 시 콧대 성형과 동시 진행",
    ],
  },
  {
    name: "콧볼 축소",
    description: "넓거나 벌어진 콧볼을 좁혀 코 전체의 균형을 맞춥니다.",
    points: [
      "최소 절개로 흉터 최소화",
      "좌우 비대칭 콧볼 교정",
      "다른 코성형과 자연스러운 조화",
    ],
  },
];

const knowhowItems = [
  {
    icon: "01",
    image: "/clients/note-clinic/images/knowhow/nose-balance.jpg",
    title: "얼굴 전체 비율 분석",
    description:
      "코만 보지 않고 이마·눈매·턱끝까지 고려한 전체적인 밸런스를 설계합니다.",
  },
  {
    icon: "02",
    image: "/clients/note-clinic/images/knowhow/nose-autograft.jpg",
    title: "자가조직 우선 원칙",
    description:
      "이물감과 부작용을 최소화하기 위해 귀연골 등 자가조직을 우선적으로 활용합니다.",
  },
  {
    icon: "03",
    image: "/clients/note-clinic/images/knowhow/nose-simulation.jpg",
    title: "정교한 3D 시뮬레이션",
    description:
      "수술 전 예상 결과를 시각화해 충분히 상담한 후 디자인을 확정합니다.",
  },
  {
    icon: "04",
    image: "/clients/note-clinic/images/knowhow/nose-revision.jpg",
    title: "재수술 전문 노하우",
    description:
      "기존 보형물과 조직 상태를 정밀 진단해 안전한 재건 계획을 수립합니다.",
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
    title: "코 전용 압박 밴드 케어",
    description:
      "수술 부위 부종을 최소화하는 맞춤 압박 밴드와 교체 스케줄을 제공합니다.",
    image: "/clients/note-clinic/images/aftercare/nose-band-care.jpg",
  },
  {
    title: "실밥 · 캐스트 제거",
    description: "경과에 맞춰 코 안팎의 캐스트와 실밥을 안전하게 제거합니다.",
    image: "/clients/note-clinic/images/aftercare/nose-cast-removal.jpg",
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
    question: "코성형 후 붓기는 얼마나 지속되나요?",
    answer:
      "개인차가 있지만 초기 붓기는 2주 이내에 상당 부분 가라앉고, 코끝의 미세한 붓기는 3~6개월에 걸쳐 서서히 빠지며 자연스러운 라인이 완성됩니다.",
  },
  {
    question: "보형물은 안전한가요?",
    answer:
      "식약처 인증을 받은 보형물만 사용하며, 개인의 피부 두께와 조직 상태에 맞는 재질과 크기를 선택해 부작용 위험을 최소화합니다.",
  },
  {
    question: "코 재수술도 상담이 가능한가요?",
    answer:
      "네, 가능합니다. 기존 보형물의 종류와 위치, 조직 손상 여부를 정밀 검사한 후 안전한 재건 계획을 세워 상담해 드립니다.",
  },
  {
    question: "안경은 언제부터 착용할 수 있나요?",
    answer:
      "코에 압박이 가지 않는 안경은 실밥 제거 후 착용 가능하며, 도수 안경 등 무게가 있는 안경은 약 4주 후부터 착용을 권장합니다.",
  },
];

export default function NosePage() {
  return (
    <>
      <PageHero
        en="NOSE SURGERY"
        title="코성형"
        description="코는 얼굴의 중심입니다. 조화로운 콧대와 자연스러운 코끝을 위한 맞춤 코성형을 제안합니다."
      />

      <TreatmentIntro
        title="코 하나로, 얼굴의 인상이 정리됩니다"
        description="아르떼성형외과는 개인의 코 형태와 피부 두께, 얼굴 골격을 함께 고려한 자연스러운 코성형을 지향합니다. 인공적인 티가 나지 않도록, 얼굴 전체와 조화를 이루는 라인을 설계합니다."
        image="/clients/note-clinic/images/treatments/nose-hover.jpg"
        imageAlt="코성형 상담 이미지"
        points={[
          "얼굴 전체 비율을 고려한 콧대·코끝 디자인",
          "자가조직(귀연골·비중격연골) 활용으로 이물감 최소화",
          "코끝 성형·매부리코 교정 등 세부 교정 가능",
          "재수술 시에도 안전한 조직 재건 노하우",
        ]}
      />

      <TreatmentMethods
        title="코성형 방법"
        subtitle="TREATMENT METHODS"
        methods={methods}
      />

      <KnowhowSection
        title="코성형 노하우"
        subtitle="OUR KNOW-HOW"
        items={knowhowItems}
      />

      <DoctorSection
        name="김아르떼 원장"
        title="성형외과 전문의"
        specialty="NOSE SPECIALIST"
        career={career}
        image="/clients/note-clinic/images/doctor/nose-doctor.jpg"
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
        title="균형 잡힌 콧대의 완성"
        subtitle={"전문의와의 1:1 상담을 통해\n당신의 얼굴에 가장 잘 어울리는 코를 설계해 드립니다."}
      />
    </>
  );
}
