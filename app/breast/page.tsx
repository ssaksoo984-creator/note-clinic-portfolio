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
  title: "가슴성형 | ARTE 성형외과",
  description: "체형과 흉곽 구조를 고려한 ARTE 성형외과의 맞춤 가슴성형",
};

const methods = [
  {
    name: "가슴확대술 (보형물)",
    description:
      "체형과 원하는 볼륨에 맞춰 보형물의 크기와 모양을 선택해 자연스러운 확대 효과를 만듭니다.",
    points: [
      "코헤시브 젤 보형물 등 안전성 검증 제품 사용",
      "겨드랑이·유륜 등 흉터 최소화 절개 위치 선택",
      "좌우 비대칭 교정과 동시 진행 가능",
    ],
  },
  {
    name: "지방이식 가슴성형",
    description: "자가 지방을 채취해 이식하는 방법으로, 이물감 없는 자연스러운 볼륨을 만듭니다.",
    points: [
      "보형물 없이 자가조직만으로 진행",
      "지방흡입 부위 체형 교정 효과 동시 기대",
      "소량 볼륨 보완에 적합",
    ],
  },
  {
    name: "가슴 리프팅",
    description: "처진 가슴의 처짐을 개선하고 유두·유륜 위치를 재조정해 탄력 있는 라인을 완성합니다.",
    points: [
      "처짐 정도에 따른 맞춤 절개 디자인",
      "보형물과 동시 진행으로 볼륨·탄력 동시 개선",
      "수유 후 변화된 가슴 개선에 효과적",
    ],
  },
  {
    name: "가슴축소술",
    description: "과도하게 크거나 무거운 가슴을 축소해 어깨·척추 부담을 줄이고 균형 잡힌 라인을 만듭니다.",
    points: [
      "처짐 개선을 동반한 축소 디자인",
      "어깨 통증·자세 개선 효과",
      "좌우 비대칭 교정 가능",
    ],
  },
];

const knowhowItems = [
  {
    icon: "01",
    image: "/clients/note-clinic/images/knowhow/breast-fit-design.jpg",
    title: "체형 맞춤 보형물 설계",
    description:
      "흉곽 넓이와 체형을 고려해 가장 자연스러운 크기와 모양의 보형물을 제안합니다.",
  },
  {
    icon: "02",
    image: "/clients/note-clinic/images/knowhow/breast-scarless-incision.jpg",
    title: "무흉터에 가까운 절개",
    description: "겨드랑이·유륜 등 흉터가 최소화되는 위치를 정교하게 설계합니다.",
  },
  {
    icon: "03",
    image: "/clients/note-clinic/images/knowhow/breast-capsular-prevention.jpg",
    title: "피막구축 최소화 기법",
    description: "정밀한 지혈과 세심한 박리로 피막구축 등 합병증 위험을 낮춥니다.",
  },
  {
    icon: "04",
    image: "/clients/note-clinic/images/knowhow/breast-aftercare.jpg",
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
  "ARTE 성형외과 대표원장",
];

const aftercareItems = [
  {
    title: "전용 압박 브라 케어",
    description:
      "보형물 위치 고정과 붓기 관리를 돕는 전용 압박 브라와 교체 스케줄을 제공합니다.",
    image: "/clients/note-clinic/images/aftercare/breast-compression-bra.jpg",
  },
  {
    title: "마사지 가이드 프로그램",
    description: "피막구축 예방을 위한 올바른 마사지 방법을 단계별로 안내합니다.",
    image: "/clients/note-clinic/images/aftercare/breast-massage-guide.jpg",
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
    question: "보형물 수명은 얼마나 되나요?",
    answer:
      "보형물 자체의 수명 제한은 없으나, 정기적인 검진을 통해 파손이나 위치 변화 여부를 확인하는 것을 권장합니다.",
  },
  {
    question: "수유에 영향이 있나요?",
    answer:
      "유선과 유관을 보존하는 절개 방법을 사용하므로 대부분의 경우 수유 기능에 큰 영향을 주지 않습니다. 개인차가 있어 상담 시 자세히 안내해 드립니다.",
  },
  {
    question: "일상 복귀는 언제부터 가능한가요?",
    answer:
      "가벼운 일상생활은 1주일 이내 가능하며, 팔을 크게 사용하는 운동이나 무거운 물건을 드는 활동은 4~6주간 피하는 것을 권장합니다.",
  },
  {
    question: "피막구축이 걱정됩니다.",
    answer:
      "정밀한 지혈과 세심한 박리, 올바른 마사지 관리로 피막구축 위험을 최소화하고 있으며, 정기 검진을 통해 조기에 확인하고 대응합니다.",
  },
];

export default function BreastPage() {
  return (
    <>
      <PageHero
        en="BREAST SURGERY"
        title="가슴성형"
        description="자연스러운 볼륨과 균형 잡힌 라인을 위한 맞춤 가슴성형을 제안합니다."
      />

      <TreatmentIntro
        title="자연스러운 볼륨, 완벽한 라인의 균형"
        description="ARTE 성형외과는 개인의 체형과 흉곽 구조를 고려한 자연스러운 가슴성형을 지향합니다. 인공적인 볼륨감보다 몸 전체와 조화를 이루는 자연스러운 라인을 최우선으로 설계합니다."
        image="/clients/note-clinic/images/treatments/breast-hover.jpg"
        imageAlt="가슴성형 상담 이미지"
        points={[
          "체형·흉곽 구조를 고려한 맞춤 보형물 선택",
          "가슴확대·축소·리프팅까지 폭넓은 옵션",
          "무흉터에 가까운 정교한 절개 위치 설계",
          "마취과 전문의 상주로 안전한 수술 환경",
        ]}
      />

      <TreatmentMethods
        title="가슴성형 방법"
        subtitle="TREATMENT METHODS"
        methods={methods}
      />

      <KnowhowSection
        title="가슴성형 노하우"
        subtitle="OUR KNOW-HOW"
        items={knowhowItems}
      />

      <DoctorSection
        name="김아르떼 원장"
        title="성형외과 전문의"
        specialty="BREAST SPECIALIST"
        career={career}
        image="/clients/note-clinic/images/doctor/breast-doctor.jpg"
      />

      <AftercareSlider
        title="ARTE만의 사후관리"
        subtitle="AFTERCARE"
        items={aftercareItems}
      />

      <section className="py-20 md:py-32 px-6 bg-rule/20">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle en="FAQ" ko="자주 묻는 질문" center />
          <div className="mt-14">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <ConsultCTA
        title="자연스러운 볼륨의 완성"
        subtitle={"전문의와의 1:1 상담을 통해\n당신의 체형에 가장 잘 어울리는 라인을 설계해 드립니다."}
      />
    </>
  );
}
