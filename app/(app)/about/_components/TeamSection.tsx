import { TeamSlider } from "../TeamSlider";

export function TeamSection() {
  return (
    <section id="team-section" className="bg-[#fafafa] py-7 md:py-20">
      <TeamSlider
        eyebrow="The Team Behind the Tech"
        title="Built by"
        highlightedTitle="Believers"
        copy="Built on the belief that automation should be practical, scalable, and accessible, our founders created ANSCER Robotics to develop intelligent mobile robots that solve real material handling challenges, bringing world-class, Indian-built innovation to factories and warehouses across the globe."
      />
    </section>
  );
}
