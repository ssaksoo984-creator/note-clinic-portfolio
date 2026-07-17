import PageHero from "../ui/PageHero";
import TreatmentIntro from "./TreatmentIntro";
import ProcessSection from "./ProcessSection";
import ConsultCTA from "../ui/ConsultCTA";
import { processSteps } from "../../_data/process";
import type { SubTreatment } from "../../_data/subTreatments";

export default function SubTreatmentTemplate({
  categoryEn,
  title,
  description,
  image,
  points,
}: SubTreatment) {
  return (
    <>
      <PageHero en={categoryEn} title={title} description={description} />

      <TreatmentIntro
        title={title}
        description={description}
        image={image}
        imageAlt={title}
        points={points}
      />

      <ProcessSection
        title="진행 과정"
        subtitle="PROCESS"
        steps={processSteps}
      />

      <ConsultCTA
        title={`${title}, 지금 상담하세요`}
        subtitle={"전문의와의 1:1 상담을 통해\n당신에게 꼭 맞는 방법을 설계해 드립니다."}
      />
    </>
  );
}
