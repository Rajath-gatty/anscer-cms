import { TeamSlider } from "../TeamSlider";
import { teamSlides } from "../_data/about-us-data";

export function TeamSection() {
  return (
    <section id="team-section" className="bg-[#fafafa] py-7 md:py-20">
      <TeamSlider
        slides={teamSlides}
        eyebrow="The Team Behind the Tech"
        title="Built by"
        highlightedTitle="Believers"
        copy="All the Answers You Need About ANSCER Robotics right at your Fingertips. From how our autonomous robots transform industries to what makes our tech stand out your journey into the future of smart automation starts here."
      />
    </section>
  );
}
