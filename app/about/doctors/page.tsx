import type { Metadata } from "next";
import PageHero from "../../_components/ui/PageHero";
import ConsultCTA from "../../_components/ui/ConsultCTA";
import DoctorGrid from "../../_components/sub/DoctorGrid";

export const metadata: Metadata = {
  title: "의료진 소개 | 아르떼성형외과",
  description: "각 분야 전문성을 갖춘 아르떼성형외과 의료진을 소개합니다",
};

const doctors = [
  {
    name: "김아르떼 대표원장",
    title: "성형외과 전문의",
    specialty: "CHIEF DIRECTOR",
    image: "/clients/note-clinic/images/doctor/team-kim.jpg",
    intro: "완벽한 수술을 위해 끊임없이 연구하고\n치열하게 고민합니다.",
    career: [
      "현 아르떼성형외과 대표원장",
      "전 리페어성형외과 원장",
      "연세대학교 의과대학 졸업",
      "연세대학교 세브란스병원 수련의",
      "연세대학교 세브란스병원 성형외과 전문의",
    ],
    societies: [
      "대한성형외과학회 정회원",
      "대한미용성형외과학회 정회원",
      "대한두개안면성형외과학회 정회원",
    ],
    research:
      "김아르떼, 이하은, 정도윤. 「합병증 최소화를 위한 안전 마취 프로토콜에 관한 연구」, 대한성형외과학회, 2021년.",
  },
  {
    name: "박아이 원장",
    title: "성형외과 전문의",
    specialty: "EYE SPECIALIST",
    image: "/clients/note-clinic/images/doctor/team-park.jpg",
    intro: "눈매 하나로 인상 전체가 달라진다는 믿음으로\n1mm의 균형까지 세심하게 설계합니다.",
    career: [
      "현 아르떼성형외과 눈성형 담당원장",
      "전 온누리안과성형외과 원장",
      "고려대학교 의과대학 졸업",
      "고려대학교 안암병원 수련의",
      "고려대학교 안암병원 성형외과 전문의",
    ],
    societies: ["대한성형외과학회 정회원", "대한안성형외과학회 정회원"],
    research:
      "박아이, 최윤서. 「매몰법 쌍꺼풀 수술 후 재발률 감소를 위한 술기 비교 연구」, 대한안성형외과학회, 2020년.",
  },
  {
    name: "이코 원장",
    title: "성형외과 전문의",
    specialty: "NOSE SPECIALIST",
    image: "/clients/note-clinic/images/doctor/team-lee.jpg",
    intro: "얼굴 전체의 균형 속에서 자연스러운 코 라인을\n찾아내는 것을 최우선으로 생각합니다.",
    career: [
      "현 아르떼성형외과 코성형 담당원장",
      "전 라인성형외과 원장",
      "성균관대학교 의과대학 졸업",
      "삼성서울병원 수련의",
      "삼성서울병원 성형외과 전문의",
    ],
    societies: ["대한성형외과학회 정회원", "대한코성형학회 정회원"],
    research:
      "이코, 한서준. 「자가 늑연골을 이용한 코끝 성형의 장기 추적 결과」, 대한코성형학회, 2022년.",
  },
  {
    name: "최라인 원장",
    title: "성형외과 전문의",
    specialty: "FACIAL CONTOURING SPECIALIST",
    image: "/clients/note-clinic/images/doctor/team-choi.jpg",
    intro: "뼈와 신경의 구조를 정밀하게 살펴\n안전하고 자연스러운 라인을 완성합니다.",
    career: [
      "현 아르떼성형외과 안면윤곽 담당원장",
      "전 조각라인성형외과 원장",
      "가톨릭대학교 의과대학 졸업",
      "서울성모병원 수련의",
      "서울성모병원 성형외과 전문의",
    ],
    societies: ["대한성형외과학회 정회원", "대한두개안면성형외과학회 정회원"],
    research:
      "최라인, 오지훈. 「사각턱 수술 후 신경 손상 예방을 위한 접근법 비교」, 대한두개안면성형외과학회, 2021년.",
  },
];

export default function AboutDoctorsPage() {
  return (
    <>
      <PageHero
        en="MEDICAL TEAM"
        title="의료진 소개"
        description="각 분야 전문성을 갖춘 아르떼성형외과 의료진을 소개합니다."
      />

      <DoctorGrid title="의료진" subtitle="OUR DOCTORS" doctors={doctors} />

      <ConsultCTA />
    </>
  );
}
