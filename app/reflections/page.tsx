import type { Metadata } from "next";
import { reflections, semesterProgress } from "@/content";
import { site } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import ReflectionArchive from "@/components/ReflectionArchive";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Weekly Reflections",
  description: `Every weekly reflection from ${site.course.code}, Weeks 1–${site.totalWeeks}, in chronological order.`,
};

export default function ReflectionsPage() {
  return (
    <div className="container">
      <PageHeader
        eyebrow={`Weeks 1–${site.totalWeeks} · ${semesterProgress.published} published`}
        title="Weekly Reflections"
        lede="One entry for every week of the semester, in order. Published weeks open in full; upcoming weeks are held in place until they are written."
      />

      <Reveal>
        <ReflectionArchive reflections={reflections} />
      </Reveal>
    </div>
  );
}
