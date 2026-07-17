import type { Metadata } from "next";
import SubTreatmentTemplate from "../../_components/sub/SubTreatmentTemplate";
import { subTreatments } from "../../_data/subTreatments";

const data = subTreatments.find(
  (t) => t.category === "breast" && t.slug === "fat-graft"
)!;

export const metadata: Metadata = {
  title: `${data.title} | 아르떼성형외과`,
  description: data.description,
};

export default function Page() {
  return <SubTreatmentTemplate {...data} />;
}
