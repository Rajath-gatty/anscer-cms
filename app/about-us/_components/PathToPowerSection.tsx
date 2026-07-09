import { PathToPowerInteractive } from "../PathToPowerInteractive";
import { SectionHeading } from "./SectionPrimitives";

export function PathToPowerSection() {
  return (
    <section hidden className="bg-white py-7 md:py-20">
      <div className="site-container">
        <SectionHeading>
          Path to <span className="text-[#005ead]">Power</span>
        </SectionHeading>
        <PathToPowerInteractive />
      </div>
    </section>
  );
}
