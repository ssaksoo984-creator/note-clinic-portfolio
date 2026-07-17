import type { Metadata } from "next";
import PageHero from "../_components/ui/PageHero";
import ConsultCTA from "../_components/ui/ConsultCTA";
import BeforeAfterGallery from "../_components/sub/BeforeAfterGallery";

export const metadata: Metadata = {
  title: "전후사진 | 아르떼성형외과",
  description: "아르떼성형외과 시술 부위별 전후사진을 확인해 보세요",
};

const IMG = "/clients/note-clinic/images/before-after";

const items = [
  {
    category: "eye",
    categoryLabel: "눈성형",
    label: "쌍꺼풀 매몰법",
    desc: "자연스러운 앞트임 라인 동시 진행",
    before: `${IMG}/eye-before.jpg`,
    after: `${IMG}/eye-after.jpg`,
  },
  {
    category: "eye",
    categoryLabel: "눈성형",
    label: "쌍꺼풀 절개법",
    desc: "또렷한 눈매를 위한 절개 라인 디자인",
    before: `${IMG}/eye-before-2.jpg`,
    after: `${IMG}/eye-after-2.jpg`,
  },
  {
    category: "eye",
    categoryLabel: "눈성형",
    label: "눈매교정",
    desc: "짝눈 교정 및 눈매 힘 개선",
    before: `${IMG}/eye-before-3.jpg`,
    after: `${IMG}/eye-after-3.jpg`,
  },
  {
    category: "nose",
    categoryLabel: "코성형",
    label: "융비술",
    desc: "낮은 콧대를 세운 자연스러운 라인",
    before: `${IMG}/nose-before.jpg`,
    after: `${IMG}/nose-after.jpg`,
  },
  {
    category: "nose",
    categoryLabel: "코성형",
    label: "코끝 성형",
    desc: "뭉툭한 코끝을 세운 케이스",
    before: `${IMG}/nose-before-2.jpg`,
    after: `${IMG}/nose-after-2.jpg`,
  },
  {
    category: "nose",
    categoryLabel: "코성형",
    label: "매부리코 교정",
    desc: "돌출된 비골을 정리한 케이스",
    before: `${IMG}/nose-before-3.jpg`,
    after: `${IMG}/nose-after-3.jpg`,
  },
  {
    category: "facial",
    categoryLabel: "안면윤곽",
    label: "광대축소술",
    desc: "돌출 광대를 정리한 옆선 개선",
    before: `${IMG}/facial-before.jpg`,
    after: `${IMG}/facial-after.jpg`,
  },
  {
    category: "facial",
    categoryLabel: "안면윤곽",
    label: "사각턱수술",
    desc: "매끄러운 하관 라인 완성",
    before: `${IMG}/facial-before-2.jpg`,
    after: `${IMG}/facial-after-2.jpg`,
  },
  {
    category: "facial",
    categoryLabel: "안면윤곽",
    label: "턱끝수술",
    desc: "부드러운 얼굴 균형 개선",
    before: `${IMG}/facial-before-3.jpg`,
    after: `${IMG}/facial-after-3.jpg`,
  },
  {
    category: "breast",
    categoryLabel: "가슴성형",
    label: "가슴확대술",
    desc: "자연스러운 볼륨 개선 케이스",
    before: `${IMG}/breast-before.jpg`,
    after: `${IMG}/breast-after.jpg`,
  },
  {
    category: "breast",
    categoryLabel: "가슴성형",
    label: "가슴 리프팅",
    desc: "처짐 개선 및 탄력 라인 완성",
    before: `${IMG}/breast-before-2.jpg`,
    after: `${IMG}/breast-after-2.jpg`,
  },
  {
    category: "breast",
    categoryLabel: "가슴성형",
    label: "지방이식 가슴성형",
    desc: "자가지방을 활용한 자연스러운 볼륨",
    before: `${IMG}/breast-before-3.jpg`,
    after: `${IMG}/breast-after-3.jpg`,
  },
];

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero
        en="BEFORE & AFTER"
        title="전후사진"
        description="아르떼성형외과와 함께한 변화를 시술 부위별로 확인해 보세요."
      />

      <section className="py-20 md:py-32 px-6 bg-canvas">
        <div className="max-w-6xl mx-auto">
          <BeforeAfterGallery items={items} />
        </div>
      </section>

      <ConsultCTA />
    </>
  );
}
