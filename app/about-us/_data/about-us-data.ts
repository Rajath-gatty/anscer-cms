import { Compass, HeartHandshake, Lightbulb, Medal, Smile } from "lucide-react";

export const values = [
  {
    title: "Honesty & Integrity",
    copy: "We act with transparency, own our actions, and stay true to our word.",
    Icon: Medal,
    textPosition:
      "lg:left-1/2 lg:top-[16px] lg:w-[300px] lg:-translate-x-1/2 lg:text-center",
    iconPosition:
      "lg:left-1/2 lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Wonder & Discovery",
    copy: "Curiosity fuels us - driving breakthroughs, fresh thinking, and relentless exploration.",
    Icon: Compass,
    textPosition:
      "lg:left-[12px] lg:top-[250px] lg:w-[300px] lg:-translate-y-1/2 lg:text-right",
    iconPosition:
      "lg:left-0 lg:top-[36%] lg:-translate-x-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Innovation & Authenticity",
    copy: "Bold ideas meet real-world relevance to deliver meaningful, future-ready solutions.",
    Icon: Lightbulb,
    textPosition:
      "lg:right-[-28px] lg:top-[250px] lg:w-[330px] lg:-translate-y-1/2",
    iconPosition:
      "lg:right-0 lg:top-[36%] lg:translate-x-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Compassion & Empathy",
    copy: "We build with care for people, partners, and the world we automate.",
    Icon: HeartHandshake,
    textPosition: "lg:bottom-[28px] lg:left-[92px] lg:w-[310px] lg:text-right",
    iconPosition:
      "lg:bottom-[9%] lg:left-[21%] lg:-translate-x-1/2 lg:translate-y-1/2",
  },
  {
    title: "Positivity & Delight",
    copy: "We lead with optimism and craft experiences that spark confidence and joy.",
    Icon: Smile,
    textPosition: "lg:bottom-[18px] lg:right-[84px] lg:w-[310px]",
    iconPosition:
      "lg:bottom-[9%] lg:right-[21%] lg:translate-x-1/2 lg:translate-y-1/2",
  },
] as const;

export const testimonials = [
  {
    quote:
      "â€œANSCER consistently demonstrated exceptional customer service, meticulous attention to detail, and outstanding accountability throughout our project. Their deployment teamâ€™s perseverance and enthusiasm were instrumental to a successful implementation. We greatly value their professionalism and collaborative approach.â€",
    name: "Sarath",
    role: "Automation Head",
    avatar: "Ellipse-369.jpg",
  },
  {
    quote:
      "â€œANSCERâ€™s robots have become an integral part ofour team, working tirelessly and reliably. In the first three months, we saw a clear drop in manual errors and our through put went up. The safety features are excellent, and our staff quickly grew comfortable working alongside the robots.â€",
    name: "Ganesh P",
    role: "Sr.Manager",
    avatar: "Ellipse-369.jpg",
  },
  {
    quote:
      '"They\'ve helped us scale and expand  across multiple APAC international plants with satisfactory support and timely issue resolution. What started as FG movement has evolved into multiple use cases for our smart factroy  and warehouses. One standout deplomyent is Kanban material repenishment in our Chennai Plant"',
    name: "Vishnu",
    role: "Regional Lead - Automation and AI",
    avatar: "Ellipse-369.jpg",
  },
] as const;

export const stats = [
  {
    value: "85+",
    label: "Projects Delivered",
    copy: "Successfully deployed automation solutions across 4+ continents, helping customers in diverse industries achieve operational excellence.",
  },
  {
    value: "800,000+",
    label: "Autonomous Trips Completed",
    copy: "Proven reliability across real-world manufacturing and warehouse environments.",
  },
  {
    value: "100+",
    label: "Robots Deployed Worldwide",
    copy: "Delivering reliable automation across multiple industries and geographies",
  },
] as const;

export const teamSlides = [
  {
    image: "about-team-ribin.jpg",
    name: "Ribin Mathew",
    role: "Global CEO, Co-founder",
    alt: "Ribin Mathew portrait",
    linkedIn: "https://www.linkedin.com/in/ribin-mathew-a4133ab5",
  },
  {
    image: "about-team-mark.jpg",
    name: "Mark Messina",
    role: "MD & CEO ANSCER AMERICAS",
    alt: "Mark Messina portrait",
    linkedIn: "https://www.linkedin.com/in/worldteam/",
  },
  {
    image: "about-team-ebin.jpg",
    name: "Ebin Sunny",
    role: "COO, Co-founder",
    alt: "Ebin Sunny portrait",
    linkedIn: "https://www.linkedin.com/in/ebin-sunny/",
  },
  {
    image: "about-team-raghu.jpg",
    name: "Raghu Venkatesh",
    role: "CBO, Co-founder",
    alt: "Raghu Venkatesh portrait",
    linkedIn: "https://www.linkedin.com/in/raghuvenkatesh/",
  },
  {
    image: "about-team-raj.jpg",
    name: "Raj Mohan",
    role: "CTO & Co-founder",
    alt: "Raj Mohan portrait",
    linkedIn: "https://www.linkedin.com/in/rajmohan747/",
  },
] as const;

export const investorLogos = [
  { image: "Frame-1321317158.png", className: "lg:col-start-1 lg:row-start-1" },
  { image: "Frame-1321317160.png", className: "lg:col-start-2 lg:row-start-2" },
  { image: "IKP-Eden-Logo-1.png", className: "lg:col-start-3 lg:row-start-1" },
] as const;
