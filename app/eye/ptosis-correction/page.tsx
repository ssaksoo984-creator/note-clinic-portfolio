import type { Metadata } from "next";
import SubTreatmentTemplate from "../../_components/sub/SubTreatmentTemplate";
import { subTreatments } from "../../_data/subTreatments";

const data = subTreatments.find(
  (t) => t.category === "eye" && t.slug === "ptosis-correction"
)!;

export const metadata: Metadata = {
  title: `${data.title} | ARTE 성형외과`,
  description: data.description,
};

export default function Page() {
  return <SubTreatmentTemplate {...data} />;
}
