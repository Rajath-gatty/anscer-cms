import { imagePath } from "../../components/home/assets";

export const materialFlowImage = `${imagePath}warehouse/section-2.png`;

export const challengesImage = `${imagePath}warehouse/section-3.jpg`;

export const materialChallenges = [
  {
    title: "Repetitive Material Movement",
    copy: "Employees spend significant time transporting pallets, cartons, containers and other materials between predefined locations instead of focusing on higher-value operational activities.",
  },
  {
    title: "Increasing Operational Demands",
    copy: "Growing order volumes and material movement requirements put additional pressure on existing processes and workforce capacity.",
  },
  {
    title: "Inconsistent Material Flow",
    copy: "Manual transportation makes it difficult to maintain predictable movement between warehouse zones, particularly when activity levels fluctuate.",
  },
  {
    title: "Resource Utilization",
    copy: "When skilled warehouse personnel are continuously occupied with repetitive transportation, the workforce is not deployed where it delivers the greatest operational value.",
  },
  {
    title: "Scaling Operations",
    copy: "As warehouse requirements change, businesses need automation that adapts to new workflows, volumes and operational conditions rather than relying on rigid systems.",
  },
];

export const robotTypes = [
  {
    title: "AMR",
    copy: "Autonomous mobile robot that navigates with onboard sensors and maps, rerouting around people and obstacles.",
  },
  {
    title: "AGV",
    copy: "Automated guided vehicle that follows defined paths or markers on fixed, repeatable routes.",
  },
  {
    title: "Pallet stacker",
    copy: "Autonomous forklift-type robot that lifts, moves and stacks pallets between floor, racks and docks.",
  },
];

export const autonomousWorkflowsImage = `${imagePath}warehouse/section-4.png`;

export const workflowCapabilities = [
  {
    title: "Autonomous Material Movement",
    copy: "ANSCER robotic solutions can automate repetitive transportation between defined operational locations, reducing the need for manual movement.",
  },
  {
    title: "Workflow Orchestration",
    copy: "Operational processes can be translated into executable workflows that coordinate how materials should move through different stages of an operation.",
  },
  {
    title: "Intelligent Fleet Management",
    copy: "Fleet management capabilities coordinate robotic missions, task allocation, traffic and movement across the facility.",
  },
  {
    title: "Integration With Existing Systems",
    copy: "Automation can work alongside warehouse and enterprise systems such as WMS, ERP and MES, helping connect robotic execution with existing operational processes.",
  },
  {
    title: "Flexible & Scalable Automation",
    copy: "Businesses can begin with specific high-value workflows and expand automation as their operational requirements evolve.",
  },
];

export const facilityFeatures = [
  {
    title: "No infrastructure change",
    copy: "No floor tape, magnetic strips or reflectors. Robots work within your existing layout.",
  },
  {
    title: "SLAM navigation",
    copy: "Natural-feature SLAM navigation with QR-assisted docking for precise pick-up and drop-off.",
  },
  {
    title: "REST APIs",
    copy: "Connect robot missions to ERP, MES and WMS through REST APIs.",
  },
  {
    title: "MQTT to PLCs",
    copy: "MQTT links robots to PLCs and equipment on the floor.",
  },
  {
    title: "VDA 5050",
    copy: "VDA 5050 support for interoperability with other fleets and fleet managers.",
  },
];

export const manufacturingWorkflowMapImage = `${imagePath}warehouse/section-5.png`;

export type ManufacturingWorkflow = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  copy: string;
  steps: string[];
  robots: { name: string; href: string }[];
  href: string;
};

const arSeries = "/products/ar";
const psr2000 = { name: "PSR 2000", href: "/products/psr/psr2000" };
const lbr500 = { name: "LBR 500", href: "/products/psr/lbr500" };
const arRollerConveyor = { name: "AR Series + Roller Conveyor", href: arSeries };
const arBeltConveyor = { name: "AR Series + Belt Conveyor", href: arSeries };

export const manufacturingWorkflows: ManufacturingWorkflow[] = [
  {
    id: "case-picking",
    label: "Case Picking",
    title: "Case Picking",
    subtitle: "Automate the movement of full cases and cartons",
    copy: "Move picked cases between picking, staging, replenishment and shipping areas without relying entirely on manual transportation.",
    steps: ["Pick", "Transport", "Staging / Shipping / Replenishment"],
    robots: [arRollerConveyor, arBeltConveyor],
    href: "/contact-us",
  },
  {
    id: "put-away",
    label: "Put Away",
    title: "Put Away",
    subtitle: "Automate the movement of received goods into storage",
    copy: "Move received goods from inbound areas to designated storage locations while supporting a more consistent put-away process.",
    steps: ["Receiving", "Storage Assignment", "Transport", "Storage"],
    robots: [psr2000],
    href: "/contact-us",
  },
  {
    id: "cross-docking",
    label: "Cross Docking",
    title: "Cross Docking",
    subtitle: "Move incoming goods directly toward outbound shipments",
    copy: "Automate the movement of goods from inbound areas toward outbound shipments with minimal or no long-term storage.",
    steps: ["Inbound", "Transfer", "Outbound"],
    robots: [{ name: "PSR G2G", href: "/products/psr/psrg2g" }],
    href: "/contact-us",
  },
  {
    id: "line-side-delivery",
    label: "Line-Side Delivery",
    title: "Line-Side Delivery",
    subtitle: "Deliver the right materials to production at the right time",
    copy: "Automate the movement of materials, components and subassemblies from warehouse or storage areas directly to production lines or workstations.",
    steps: ["Storage", "Transport", "Production Line / Workstation"],
    robots: [
      lbr500,
      { name: "AR Series + Shelf Lifter", href: arSeries },
      { name: "AR 250 + CLT", href: "/products/ar/ar250" },
    ],
    href: "/contact-us",
  },
  {
    id: "end-of-line",
    label: "End-of-Line Movement",
    title: "End-of-Line Movement",
    subtitle: "Move finished goods from production toward their next destination",
    copy: "Automate the movement of finished goods from production or packaging lines toward staging, inspection, storage, shipping or cross-docking areas.",
    steps: ["Production / Packaging", "Staging / Inspection", "Storage / Shipping"],
    robots: [psr2000],
    href: "/contact-us",
  },
  {
    id: "work-in-progress",
    label: "Work-in-Progress Movement",
    title: "Work-in-Progress Movement",
    subtitle: "Keep materials moving between production stages",
    copy: "Automate the transportation of semi-finished goods, components and materials between production stages, workstations, assembly areas and processing locations.",
    steps: ["Production Stage", "Autonomous Transfer", "Next Stage"],
    robots: [lbr500],
    href: "/contact-us",
  },
  {
    id: "point-to-point",
    label: "Point-to-Point Transfer",
    title: "Point-to-Point Transfer",
    subtitle: "Automate repetitive movement between defined locations",
    copy: "Move materials, components, pallets, carts or finished goods directly between defined locations such as storage, staging, inspection, packaging and shipping areas.",
    steps: ["Source", "Autonomous Transport", "Destination"],
    robots: [arRollerConveyor, arBeltConveyor],
    href: "/contact-us",
  },
];

export const operationalValueImage = `${imagePath}warehouse/section-6.png`;

export const operationalValueItems = [
  {
    title: "Improve Material Flow",
    copy: "Automate repetitive movements between operational areas to support a more continuous and coordinated flow of materials.",
  },
  {
    title: "Reduce Repetitive Manual Work",
    copy: "Move routine transportation activities to autonomous systems, allowing warehouse teams to focus on activities that require greater human focus.",
  },
  {
    title: "Improve Operational Consistency",
    copy: "Create predictable workflows for recurring material movements across defined warehouse processes.",
  },
  {
    title: "Support Higher Operational Demands",
    copy: "Automation can help operations handle changing movement requirements without relying solely on additional manual transportation resources.",
  },
  {
    title: "Scale With Your Operation",
    copy: "Expand automation from individual workflows to broader material movement as warehouse requirements grow.",
  },
];

const industriesPath = `${imagePath}warehouse/section-7/`;

export const manufacturingIndustries = [
  {
    title: "Warehousing & 3PL",
    copy: "Automate the repetitive movement associated with storage, picking, staging, cross docking and outbound operations. Case picking, put away, cross docking and point-to-point transfer run as autonomous workflows between defined zones.",
    image: `${industriesPath}3pl.jpg`,
    imageAlt: "High-bay warehouse racking stocked with palletised goods",
    href: "/contact-us",
    featured: true,
  },
  {
    title: "Automotive",
    copy: "Support component movement, line-side delivery, work-in-progress transportation and finished-goods movement. Line-side delivery and work-in-progress workflows keep production stations supplied between stages.",
    image: `${industriesPath}automotive.jpg`,
    imageAlt: "Robotic arms working on an automotive assembly line",
    href: "/contact-us",
  },
  {
    title: "Electrical & Electronics",
    copy: "Automate the movement of components, cartons and finished products across warehouse and production environments. Line-side delivery and end-of-line movement workflows connect storage, production and shipping.",
    image: `${industriesPath}electrical.png`,
    imageAlt: "Circuit boards moving along an electronics production line",
    href: "/contact-us",
  },
  {
    title: "Pharmaceuticals",
    copy: "Support controlled and consistent material movement between relevant operational areas. Put away and point-to-point transfer workflows run on defined routes between zones.",
    image: `${industriesPath}pharma.jpg`,
    imageAlt: "Medicine bottles on a pharmaceutical packaging conveyor",
    href: "/contact-us",
  },
  {
    title: "White Goods",
    copy: "Automate material movement across appliance manufacturing operations, thus reducing production delay and bottlenecks while maintaining a continuous flow across production unit.",
    image: `${industriesPath}white-goods.jpg`,
    imageAlt: "Robotic arm assembling appliance components",
    href: "/contact-us",
  },
];

export const operationFitImage = `${imagePath}warehouse/section-8.png`;

export const operationFitPillars = [
  {
    title: "Solution-Led Approach",
    copy: "Start with the operational challenge and workflow, then identify the appropriate automation strategy.",
  },
  {
    title: "Modular Robotics",
    copy: "Select and configure robotic solutions based on payload, material type and movement requirements.",
  },
  {
    title: "Intelligent Software",
    copy: "Coordinate robots, missions, workflows and fleet operations through an integrated software ecosystem.",
  },
  {
    title: "Integration",
    copy: "Connect automation with existing operational and enterprise systems where required.",
  },
  {
    title: "Scalability",
    copy: "Start with individual workflows and progressively expand automation across the operation.",
  },
  {
    title: "Global Capability",
    copy: "ANSCER develops automation solutions designed for modern industrial and warehouse environments globally.",
  },
];

export const manufacturingFaqs = [
  {
    question: "What warehouse workflows can ANSCER automate?",
    answer:
      "ANSCER automates repetitive material movement across the warehouse, including case picking, put away, cross docking, line-side delivery, end-of-line movement, work-in-progress movement and point-to-point transfer between defined zones.",
  },
  {
    question: "Which robot is suitable for my warehouse?",
    answer:
      "It depends on what you move and how. AMRs suit cases, cartons and trolleys on changing routes, pallet stackers lift and move pallets between floor, racks and docks, and AGVs run fixed, repeatable routes. Our team assesses your materials, layout and workflows to recommend the right configuration.",
  },
  {
    question: "Can ANSCER integrate with our WMS?",
    answer:
      "Yes. Robot missions connect to WMS, ERP and MES platforms through REST APIs, so tasks can be generated by your existing systems and status is reported back. MQTT links robots to PLCs and floor equipment, and VDA 5050 support enables interoperability with other fleets.",
  },
  {
    question: "Can automation work with our existing facility?",
    answer:
      "Yes. ANSCER robots use natural-feature SLAM navigation with QR-assisted docking, so they work within your existing layout without floor tape, magnetic strips or reflectors.",
  },
  {
    question: "Can the solution scale as operations grow?",
    answer:
      "Yes. You can begin with specific high-value workflows and add robots, workflows and zones as requirements evolve. Fleet management coordinates missions, task allocation and traffic as the fleet grows.",
  },
  {
    question: "Which workflows should we automate first?",
    answer:
      "Start with repetitive, high-frequency movements on predictable routes, where manual transport ties up skilled staff. ANSCER's workflow-led assessment identifies where autonomous material movement creates the greatest operational value in your facility.",
  },
];
