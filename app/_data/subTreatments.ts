export interface SubTreatment {
  slug: string;
  category: "eye" | "nose" | "facial" | "breast";
  categoryHref: string;
  categoryEn: string;
  title: string;
  description: string;
  image: string;
  points: string[];
}

export const subTreatments: SubTreatment[] = [
  {
    slug: "non-incision",
    category: "eye",
    categoryHref: "/eye",
    categoryEn: "EYE SURGERY",
    title: "쌍꺼풀 매몰법",
    description:
      "피부 절개 없이 최소 개의 매듭으로 라인을 형성하는 방법으로, 붓기와 회복 기간이 짧아 자연스러운 라인을 원하는 분들에게 적합합니다.",
    image: "/clients/note-clinic/images/treatments/eye-non-incision.jpg",
    points: [
      "절개 없이 진행되어 회복이 빠름",
      "눈꺼풀 피부·지방이 적은 경우에 적합",
      "라인 수정 및 재교정이 비교적 용이",
    ],
  },
  {
    slug: "incision",
    category: "eye",
    categoryHref: "/eye",
    categoryEn: "EYE SURGERY",
    title: "쌍꺼풀 절개법",
    description:
      "눈꺼풀 피부와 지방이 많거나 처짐이 있는 경우, 절개를 통해 여분의 조직을 정리하고 견고한 라인을 형성하는 방법입니다.",
    image: "/clients/note-clinic/images/treatments/eye-incision.jpg",
    points: [
      "반영구적으로 유지되는 뚜렷한 라인",
      "처진 눈꺼풀·다크서클 개선에 효과적",
      "개인 맞춤 라인 디자인 가능",
    ],
  },
  {
    slug: "ptosis-correction",
    category: "eye",
    categoryHref: "/eye",
    categoryEn: "EYE SURGERY",
    title: "눈매교정",
    description:
      "눈뜨는 근육의 힘이 약해 눈이 처져 보이거나 짝눈인 경우, 근육 기능을 개선해 또렷하고 좌우 균형 잡힌 눈매를 만듭니다.",
    image: "/clients/note-clinic/images/treatments/eye-ptosis-correction.jpg",
    points: [
      "졸려 보이는 인상 개선",
      "좌우 비대칭 눈매 균형 교정",
      "쌍꺼풀 수술과 동시 진행 가능",
    ],
  },
  {
    slug: "bridge-augmentation",
    category: "nose",
    categoryHref: "/nose",
    categoryEn: "NOSE SURGERY",
    title: "융비술 (콧대 성형)",
    description:
      "실리콘 또는 자가진피를 이용해 낮은 콧대를 세우고 얼굴 비율에 맞는 콧대 라인을 형성합니다.",
    image: "/clients/note-clinic/images/treatments/nose-bridge-augmentation.jpg",
    points: [
      "피부 두께에 맞춘 보형물 종류 선택",
      "자연스러운 곡선의 콧대 라인 형성",
      "염증 위험을 낮춘 정교한 삽입 기법",
    ],
  },
  {
    slug: "tip-plasty",
    category: "nose",
    categoryHref: "/nose",
    categoryEn: "NOSE SURGERY",
    title: "코끝 성형",
    description:
      "뭉툭하거나 무너진 코끝을 연골 이식으로 세우고, 얼굴과 조화로운 코끝 모양을 만듭니다.",
    image: "/clients/note-clinic/images/treatments/nose-tip-plasty.jpg",
    points: [
      "귀연골·비중격연골 등 자가조직 활용",
      "콧볼 축소와 동시 진행 가능",
      "오랜 시간이 지나도 자연스러운 유지력",
    ],
  },
  {
    slug: "hump-nose",
    category: "nose",
    categoryHref: "/nose",
    categoryEn: "NOSE SURGERY",
    title: "매부리코 교정",
    description: "돌출된 비골과 연골을 다듬어 매끄러운 콧대 라인을 완성합니다.",
    image: "/clients/note-clinic/images/treatments/nose-hump-nose.jpg",
    points: [
      "돌출 부위 절삭 후 라인 정리",
      "콧대 전체 밸런스 재조정",
      "필요 시 콧대 성형과 동시 진행",
    ],
  },
  {
    slug: "cheekbone",
    category: "facial",
    categoryHref: "/facial",
    categoryEn: "FACIAL CONTOURING",
    title: "광대축소술",
    description:
      "돌출된 광대뼈를 안쪽으로 밀어넣거나 절삭해 갸름한 얼굴 옆선을 만듭니다.",
    image: "/clients/note-clinic/images/treatments/facial-cheekbone.jpg",
    points: [
      "광대 앞·뒤 돌출을 함께 교정",
      "자연스러운 미소 라인 유지",
      "좌우 비대칭 교정 가능",
    ],
  },
  {
    slug: "square-jaw",
    category: "facial",
    categoryHref: "/facial",
    categoryEn: "FACIAL CONTOURING",
    title: "사각턱수술",
    description: "발달된 턱뼈 각을 부드럽게 다듬어 매끄러운 하관 라인을 완성합니다.",
    image: "/clients/note-clinic/images/treatments/facial-square-jaw.jpg",
    points: [
      "턱뼈 두께에 맞춘 절삭량 설계",
      "구강 내 절개로 흉터 없음",
      "씹는 근육(교근) 축소와 병행 가능",
    ],
  },
  {
    slug: "chin",
    category: "facial",
    categoryHref: "/facial",
    categoryEn: "FACIAL CONTOURING",
    title: "턱끝수술",
    description: "턱끝의 길이와 방향을 조정해 부드러운 얼굴 라인의 균형을 맞춥니다.",
    image: "/clients/note-clinic/images/treatments/facial-chin.jpg",
    points: [
      "전진·후퇴·축소 등 방향별 맞춤 교정",
      "옆모습 라인까지 고려한 설계",
      "다른 안면윤곽 수술과 동시 진행 가능",
    ],
  },
  {
    slug: "augmentation",
    category: "breast",
    categoryHref: "/breast",
    categoryEn: "BREAST SURGERY",
    title: "가슴확대술 (보형물)",
    description:
      "체형과 원하는 볼륨에 맞춰 보형물의 크기와 모양을 선택해 자연스러운 확대 효과를 만듭니다.",
    image: "/clients/note-clinic/images/treatments/breast-augmentation.jpg",
    points: [
      "코헤시브 젤 보형물 등 안전성 검증 제품 사용",
      "겨드랑이·유륜 등 흉터 최소화 절개 위치 선택",
      "좌우 비대칭 교정과 동시 진행 가능",
    ],
  },
  {
    slug: "fat-graft",
    category: "breast",
    categoryHref: "/breast",
    categoryEn: "BREAST SURGERY",
    title: "지방이식 가슴성형",
    description:
      "자가 지방을 채취해 이식하는 방법으로, 이물감 없는 자연스러운 볼륨을 만듭니다.",
    image: "/clients/note-clinic/images/treatments/breast-fat-graft.jpg",
    points: [
      "보형물 없이 자가조직만으로 진행",
      "지방흡입 부위 체형 교정 효과 동시 기대",
      "소량 볼륨 보완에 적합",
    ],
  },
  {
    slug: "lifting",
    category: "breast",
    categoryHref: "/breast",
    categoryEn: "BREAST SURGERY",
    title: "가슴 리프팅",
    description:
      "처진 가슴의 처짐을 개선하고 유두·유륜 위치를 재조정해 탄력 있는 라인을 완성합니다.",
    image: "/clients/note-clinic/images/treatments/breast-lifting.jpg",
    points: [
      "처짐 정도에 따른 맞춤 절개 디자인",
      "보형물과 동시 진행으로 볼륨·탄력 동시 개선",
      "수유 후 변화된 가슴 개선에 효과적",
    ],
  },
];

export function getSubTreatment(category: string, slug: string) {
  return subTreatments.find(
    (t) => t.category === category && t.slug === slug
  );
}
