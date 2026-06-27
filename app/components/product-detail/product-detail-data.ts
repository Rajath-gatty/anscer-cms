export type ProductDetailData = {
  slug: string;
  seriesSlug: "ar-series" | "psr-series" | "agv-series";
  seriesLabel: string;
  title: string;
  subtitle: string;
  overview: string;
  heroImage: string;
  modelUrl?: string;
  backgroundText?: string;
  overviewImage?: string;
  advantageImage?: string;
  advantageIntro?: string;
  useCaseImage?: string;
  caseStudyImage?: string;
  overviewCtaLabel?: string;
  ctaTitle?: string;
  applications: string[];
  specs: {
    label: string;
    value: string;
    imperial?: string;
  }[];
  advantages: {
    title: string;
    copy: string;
  }[];
  features: {
    title: string;
    copy: string;
  }[];
  useCases: {
    title: string;
    copy: string;
    image: string;
  }[];
  applicationRows?: {
    title: string;
    copy: string;
    image: string;
  }[];
  modulesBaseImage?: string;
  modules?: {
    title: string;
    copy: string;
    image?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const arUseCases = [
  {
    title: "Pallet Lifter",
    copy: "Autonomous pallet movement for repeatable internal transport and flexible material handling.",
    image: "Frame-1321317283-1.jpg",
  },
  {
    title: "Conveyor Transfer",
    copy: "Automated transfer between fixed conveyors and mobile workflows.",
    image: "Frame-1321317284.jpg",
  },
  {
    title: "Cart Tugging",
    copy: "Reliable cart and trolley movement across manufacturing and warehouse floors.",
    image: "Frame-1321317285.jpg",
  },
];

const psrUseCases = [
  {
    title: "Heavy Payload Pallet Transport",
    copy: "Transports heavy palletized goods safely between storage, staging, and dispatch zones.",
    image: "psr-1000r-applications.jpg",
  },
  {
    title: "High-Bay Putaway & Retrieval",
    copy: "Supports accurate pallet handling for dense storage and controlled retrieval workflows.",
    image: "psr-product-application.jpg",
  },
  {
    title: "Storage to Outbound",
    copy: "Moves stored goods to outbound staging with reduced manual intervention.",
    image: "Frame-427322851.jpg",
  },
];

const topModules = [
  { title: "Shelf Lifter", copy: "Autonomous trolley lifting and transport operations.", image: "ar-250-shelf-lifter.png" },
  { title: "Belt Conveyor", copy: "Gentle transfer for small, irregular, and unstable loads.", image: "ar-250-belt-conveyer.png" },
  { title: "Mobile Robotic Arm", copy: "Mobile manipulation for pick, place, and service workflows.", image: "ar-250-pallet-lifter.png" },
  { title: "Combined Lifter & Tunneling", copy: "Combined lifting and under-load movement in one module.", image: "ar-250-belt-conveyer.png" },
  { title: "Pallet Lifter", copy: "Pallet pickup and transfer for flexible intralogistics.", image: "ar-250-pallet-lifter.png" },
  { title: "Auto Tugger", copy: "Autonomous tugging for carts, racks, and trolley trains.", image: "ar-250-belt-conveyer.png" },
  { title: "Roller Conveyor", copy: "Automated handoff between mobile robots and conveyor lines.", image: "ar-250-pallet-lifter.png" },
  { title: "Manual Tugger", copy: "Assisted tugging workflows for mixed manual and autonomous use.", image: "ar-250-belt-conveyer.png" },
  { title: "Custom Unit Load", copy: "Tailored modules for application-specific load handling.", image: "ar-250-pallet-lifter.png" },
];

export const productDetails: Record<string, ProductDetailData> = {
  "ar-250": {
    slug: "ar-250",
    seriesSlug: "ar-series",
    seriesLabel: "AR Series",
    title: "AR 250",
    subtitle: "Smart, Lightweight, and Efficient",
    overview:
      "The AR-250 is a lightweight AMR that carries up to 250kg, perfect for warehouses and factories. It navigates safely with smart routing and obstacle detection, boosting productivity and easing material handling.",
    heroImage: "7607bdee067bdab981550481a16873d8ccccb66e.png",
    modelUrl: "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/ar-250.glb",
    backgroundText: "AR-250.svg",
    overviewImage: "0165993d3d4996b571e9d54c992b729915629ee4.jpg",
    advantageImage: "Frame-1321316064_1.jpg",
    advantageIntro:
      "Choose the AR 250 to standardize automation of lightweight loads with one adaptable platform that reduces complexity, improves throughput, and supports evolving material handling needs.",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    overviewCtaLabel: "Product Details",
    ctaTitle: "Know More About The AR250",
    applications: ["Tugging", "Lifting", "Tunneling"],
    specs: [
      { label: "Dimensions", value: "900 * 580 * 275 mm", imperial: "35.43 x 22.83 x 10.83 in" },
      { label: "Payload Capacity", value: "up to 250 kg", imperial: "up to 551 lbs" },
      { label: "Max Speed", value: "1.2 m/s", imperial: "2.68 mph" },
      { label: "Ground Clearance", value: "30 mm", imperial: "1.18 in" },
      { label: "Navigation", value: "Advanced SLAM Navigation" },
      { label: "Safety Coverage", value: "360 deg LiDAR + 3D Depth Camera" },
      { label: "Battery", value: "48V Lithium-ion, 45Ah" },
      { label: "Charging Time", value: "1.5 hrs (10-90%)" },
    ],
    advantages: [
      { title: "Improved Operational Efficiency", copy: "Automates repetitive material transport tasks to increase throughput, minimize delays, and ensure predictable logistics performance throughout operations." },
      { title: "One Platform, Multiple Applications", copy: "Supports interchangeable top modules that enable diverse workflows without deploying multiple dedicated robotic systems." },
      { title: "Scalable Deployment", copy: "Expand automation progressively across facilities using a standardized platform designed for future operational requirements." },
      { title: "Reduced Manual Intervention", copy: "Eliminates non-value-added material movement, allowing operators to focus on higher-value production activities." },
    ],
    features: [
      { title: "Interchangeable Top Modules", copy: "Supports multiple applications using a single standardized robotic platform." },
      { title: "Compact Footprint", copy: "Navigates efficiently through space-constrained warehouse and manufacturing environments." },
      { title: "Precision Docking", copy: "Enables accurate positioning within tight and space-constrained environments." },
      { title: "Safe Load Handling", copy: "Ensures controlled loading and unloading for secure material transfer." },
    ],
    useCases: [
      { title: "Shelf Lifter", copy: "Autonomous trolley lifting and transport operations.", image: "Frame-1321316064_1.jpg" },
      ...arUseCases,
    ],
    applicationRows: [
      { title: "Trolley Movement", copy: "Efficient autonomous transport of trolleys across facilities.", image: "Group-1321315876.jpg" },
      { title: "Shelf Lifter", copy: "Designed for transporting compact and irregular light loads.", image: "Frame-1321317403.jpg" },
      { title: "Pallet Lifter", copy: "Supports safe and reliable pallet movement operations.", image: "Frame-1321317326.jpg" },
      { title: "Conveyor Transfer", copy: "Autonomous trolley lifting and transport operations.", image: "Frame-1321317330.jpg" },
      { title: "Cart Tugging", copy: "Automated trolley material flow.", image: "Frame-1321317334.jpg" },
      { title: "Cobot Integration Module", copy: "Enables robotic handling applications with cobot integration module.", image: "Frame-1321317332.jpg" },
    ],
    modulesBaseImage: "ar-250-base.png",
    modules: topModules,
    faqs: [
      { question: "What kind of loads can the AR 250 carry?", answer: "The AR 250 carries payloads up to 250 kg. It is suited for light to medium material transport like trolleys, shelves, cartons, totes, and unit load structures in factories and warehouses. If your loads regularly exceed 250 kg, the AR 650 or higher would be the right fit." },
      { question: "What can the AR 250 actually do in my facility?", answer: "Depending on the top module fitted, the AR 250 can lift and transport trolleys and shelves, transfer cartons and totes via belt or roller conveyor, perform mobile manipulation tasks when paired with a third-party cobot, handle multi-trolley transport via tugger modules, or carry custom unit load structures. It covers most light-duty intralogistics workflows in a single platform." },
      { question: "Is the AR 250 safe to operate around workers on the factory floor?", answer: "Yes. The AR 250 uses LiDAR-based 360 deg obstacle detection and will slow down or stop if a person or object enters its safety zone. It is designed for collaborative operation in shared human-robot environments without requiring segregated zones or safety caging." },
      { question: "Do I need to change my facility layout or floor infrastructure to deploy the AR 250?", answer: "No. The AR 250 uses SLAM navigation and requires no magnetic tape, floor markings, or fixed infrastructure. It maps your facility during commissioning and adapts to layout changes over time, making deployment fast with minimal disruption to existing operations." },
    ],
  },
  "ar-500": {
    slug: "ar-500",
    seriesSlug: "ar-series",
    seriesLabel: "AR Series",
    title: "AR 500",
    subtitle: "Smart, Lightweight, and Efficient",
    overview:
      "The AR 500 is a compact, flexible AMR that automates diverse material movement through interchangeable top modules, ensuring scalable, flexible intralogistics automation across facilities.",
    heroImage: "ar-500-main.png",
    modelUrl: "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/TR%20500.glb",
    backgroundText: "AR-500-bg-text.png",
    overviewImage: "0165993d3d4996b571e9d54c992b729915629ee4.jpg",
    advantageImage: "Frame-1321316064_1.jpg",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    applications: ["Tugging", "Lifting", "Tunneling"],
    specs: [
      { label: "Dimensions", value: "900 * 580 * 295 mm" },
      { label: "Payload Capacity", value: "500 kg" },
      { label: "Max Speed", value: "1.5 m/s" },
      { label: "Navigation", value: "SLAM Navigation" },
      { label: "Type of Payload", value: "Pallets, trolleys, carts, and unit loads" },
      { label: "Battery Type", value: "LFP" },
      { label: "Charging Time", value: "1.5 hrs" },
      { label: "Battery Runtime", value: "8 Hrs" },
    ],
    advantages: [
      { title: "Balanced Payload Capacity", copy: "Handles medium payload operations with compact movement and modular application flexibility." },
      { title: "Flexible Top Modules", copy: "Supports multiple attachments so a single AMR platform can serve changing workflows." },
      { title: "Reliable Navigation", copy: "SLAM navigation enables safe movement across live warehouse and factory environments." },
    ],
    features: [
      { title: "Medium Payload Capacity", copy: "Carries up to 500 kg for compact yet capable material movement." },
      { title: "Precision Docking", copy: "Aligns accurately with workstations, conveyors, and handoff points." },
      { title: "Safe Load Handling", copy: "Designed for controlled material transfer in mixed-traffic environments." },
    ],
    useCases: arUseCases,
    faqs: [
      { question: "What types of material handling tasks is the AR 500 built for?", answer: "It is built for pallet movement, cart tugging, conveyor transfer, lifting, and modular intralogistics workflows." },
      { question: "Can the AR 500 work with our existing cobot or robotic arm?", answer: "Yes. The AR platform supports top modules and integrations that can include robotic arms or compatible automation modules." },
      { question: "How does the AR 500 know where to go and what to do?", answer: "It uses SLAM navigation and mission software to move between mapped locations and execute configured workflows." },
      { question: "Will the AR 500 work in a facility that already has forklifts and human traffic?", answer: "Yes. It is designed to operate in mixed environments with appropriate safety planning and traffic workflows." },
    ],
  },
  "ar-650": {
    slug: "ar-650",
    seriesSlug: "ar-series",
    seriesLabel: "AR Series",
    title: "AR 650",
    subtitle: "Powerful, Precise, and Modular",
    overview:
      "The AR 650 is a powerful and precise AMR designed to automate demanding material movement applications with modular flexibility, enabling scalable intralogistics automation across manufacturing and warehouse operations.",
    heroImage: "ar-650.png",
    modelUrl: "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/AR_650%20render.glb",
    backgroundText: "ar-650-bg-text.png",
    overviewImage: "0165993d3d4996b571e9d54c992b729915629ee4.jpg",
    advantageImage: "Frame-1321316064_1.jpg",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    applications: ["Tugging", "Lifting", "Tunneling"],
    specs: [
      { label: "Dimensions", value: "1400 * 950 * 300 mm" },
      { label: "Payload Capacity", value: "650 Kg" },
      { label: "Max Speed", value: "1.5 m/s" },
      { label: "Navigation", value: "SLAM Navigation" },
      { label: "Safety Scanners", value: "Pld cat. 3 Safety Scanners" },
      { label: "Battery Type", value: "LFP" },
      { label: "Charging Time", value: "1.5 hrs" },
      { label: "Battery Runtime", value: "8 Hrs" },
    ],
    advantages: [
      { title: "Demanding Material Movement", copy: "Supports heavier workflows while maintaining modularity across material handling tasks." },
      { title: "Scalable Intralogistics", copy: "Deploys across manufacturing and warehouse operations with standardized automation workflows." },
      { title: "Safe Mixed-Traffic Operation", copy: "Safety scanners and autonomous navigation help manage unexpected obstacles." },
    ],
    features: [
      { title: "Medium Payload Capacity", copy: "Handles up to 650 kg for demanding material transport operations." },
      { title: "Precision Docking", copy: "Supports accurate handoffs and reliable positioning." },
      { title: "Safe Load Handling", copy: "Moves loads predictably through shared industrial environments." },
    ],
    useCases: arUseCases,
    faqs: [
      { question: "What makes the AR 650 different from the AR 500?", answer: "The AR 650 supports higher payload requirements and demanding material movement while retaining modular top-module flexibility." },
      { question: "Can the AR 650 be used for both manufacturing and warehouse operations?", answer: "Yes. It is designed for scalable intralogistics workflows across both environments." },
      { question: "How long can the AR 650 run before it needs to charge?", answer: "The Webflow specification lists an 8-hour runtime with 1.5-hour charging." },
      { question: "What happens if the AR 650 encounters an unexpected obstacle mid-mission?", answer: "Its safety scanners and navigation system detect obstacles and respond according to configured safety behavior." },
    ],
  },
  "ar-1250": {
    slug: "ar-1250",
    seriesSlug: "ar-series",
    seriesLabel: "AR Series",
    title: "AR 1250",
    subtitle: "Heavy-Payload Automation",
    overview:
      "The AR 1250 is a heavy-payload autonomous mobile robot built to automate intensive material movement applications with modular flexibility, enabling scalable, high-throughput intralogistics operations.",
    heroImage: "ar-1250.png",
    modelUrl: "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/AR%201250.glb",
    backgroundText: "ar-1250-bg-text.png",
    overviewImage: "0165993d3d4996b571e9d54c992b729915629ee4.jpg",
    advantageImage: "Frame-1321316064_1.jpg",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    applications: ["Tugging", "Lifting", "Tunneling"],
    specs: [
      { label: "Dimensions", value: "1400 * 950 * 300 mm" },
      { label: "Payload Capacity", value: "1250 kg" },
      { label: "Max Speed", value: "1.7 m/s" },
      { label: "Navigation", value: "SLAM Navigation" },
      { label: "Safety Scanners", value: "Pld cat. 3 Safety Scanners" },
      { label: "Battery Type", value: "LFP" },
      { label: "Charging Time", value: "1.5 hrs" },
      { label: "Runtime", value: "8 Hrs" },
    ],
    advantages: [
      { title: "High-Throughput Movement", copy: "Automates intensive material movement for heavier, faster intralogistics operations." },
      { title: "Reduced Forklift Dependency", copy: "Moves large loads autonomously in areas where manual handling is limited or inefficient." },
      { title: "Fleet-Ready Scalability", copy: "Supports expansion from one robot to larger fleets through consistent workflows." },
    ],
    features: [
      { title: "Higher Payload Capacity", copy: "Carries up to 1250 kg for intensive material movement." },
      { title: "Precision Docking", copy: "Supports accurate positioning and repeatable transfer operations." },
      { title: "Safe Load Handling", copy: "Designed for controlled movement of heavier loads in industrial spaces." },
    ],
    useCases: arUseCases,
    faqs: [
      { question: "What is the AR 1250 designed for and who typically uses it?", answer: "It is designed for heavy-payload material movement in manufacturing, warehousing, and high-throughput intralogistics operations." },
      { question: "What applications can the AR 1250 handle with its top modules?", answer: "It can support tugging, lifting, tunneling, pallet handling, conveyor transfer, and cart movement workflows." },
      { question: "Can the AR 1250 be used in areas where forklifts are not allowed?", answer: "Yes, subject to site safety assessment and workflow design." },
      { question: "How difficult is it to scale from one AR 1250 to a larger fleet?", answer: "The platform is designed for fleet scalability through standardized navigation and mission software." },
    ],
  },
  "psr-2000": {
    slug: "psr-2000",
    seriesSlug: "psr-series",
    seriesLabel: "PSR Series",
    title: "PSR 2000",
    subtitle: "Heavy-Duty Pallet Stacking",
    overview:
      "The PSR 2000 is a heavy-duty pallet stacking AMR designed for automated pickup, lifting, and placement, enabling precise pallet handling and efficient intralogistics operations.",
    heroImage: "PSR-2000_1.png",
    modelUrl: "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/PSR%202000.glb",
    backgroundText: "psr-2000.svg",
    overviewImage: "psr-advantages-image.jpg",
    advantageImage: "psr-advantages-image.jpg",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    applications: ["Open Pallet Stacking"],
    specs: [
      { label: "Dimensions", value: "2050 * 1050 * 1500 mm" },
      { label: "Payload Capacity", value: "2000 kg" },
      { label: "Max Speed", value: "1.2 m/s" },
      { label: "Navigation", value: "SLAM Navigation" },
      { label: "Type of Payload", value: "Open Pallet" },
      { label: "Battery Type", value: "LFP" },
      { label: "Charging Time", value: "1 hr" },
      { label: "Runtime", value: "8 Hrs" },
    ],
    advantages: [
      { title: "Automated Pallet Stacking", copy: "Enables autonomous pickup, lifting, placement, and repeatable pallet handling." },
      { title: "Flexible Pallet Compatibility", copy: "Supports open pallet handling across storage and staging workflows." },
      { title: "Improved Storage Utilization", copy: "Automates stacking to help improve warehouse space usage." },
      { title: "Reduced Manual Dependency", copy: "Reduces repetitive forklift and operator involvement in pallet movement." },
    ],
    features: [
      { title: "Automated Pallet Pickup", copy: "Detects and picks pallets for efficient transport and stacking." },
      { title: "Precision Pallet Placement", copy: "Places pallets accurately in staging, buffer, or storage locations." },
      { title: "Configurable Lift Heights", copy: "Adapts to different pallet workflows and stack heights." },
      { title: "Open Pallet Handling", copy: "Built for reliable movement of open pallet formats." },
    ],
    useCases: psrUseCases,
    faqs: [
      { question: "What types of pallets can the PSR 2000 handle?", answer: "It is designed for open pallet workflows and heavy-duty pallet stacking applications." },
      { question: "Can the PSR 2000 replace our existing forklifts for all pallet movements?", answer: "It can automate many repeatable pallet movements, while the final scope depends on site workflows and pallet types." },
      { question: "How does the PSR 2000 navigate a live warehouse with mixed traffic?", answer: "It uses SLAM navigation and safety scanners designed for controlled mixed-traffic operation." },
      { question: "What WMS or ERP systems does it integrate with?", answer: "ANSCER robots can integrate with warehouse, ERP, and operations systems based on deployment requirements." },
    ],
  },
  "psr-2000r": {
    slug: "psr-2000r",
    seriesSlug: "psr-series",
    seriesLabel: "PSR Series",
    title: "PSR 2000R",
    subtitle: "Extended Fork Reach for Dense Storage",
    overview:
      "The PSR 2000R is a heavy-duty pallet stacking AMR with extended fork reach, designed to optimize high-density storage through precise pallet handling and automated retrieval operations.",
    heroImage: "PSR-2000R.png",
    backgroundText: "Group-1321315869.svg",
    overviewImage: "psr-advantages-image.jpg",
    advantageImage: "psr-advantages-image.jpg",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    applications: ["Open/Closed Pallet Stacking"],
    specs: [
      { label: "Dimensions", value: "2700 * 1700 * 2100 mm" },
      { label: "Payload Capacity", value: "2000 kg" },
      { label: "Max Speed", value: "1.2 m/s" },
      { label: "Type of Payload", value: "Open/Closed Pallet" },
      { label: "Battery Type", value: "LFP/TO" },
      { label: "Charging Time", value: "1 hr" },
      { label: "Runtime", value: "8 Hrs" },
      { label: "Voltage", value: "48 V" },
    ],
    advantages: [
      { title: "High-Density Storage Optimization", copy: "Extended fork reach supports dense storage and retrieval workflows." },
      { title: "Reduced Manual Intervention", copy: "Automates repetitive high-reach pallet handling operations." },
    ],
    features: [
      { title: "Extended Fork Reach", copy: "Reaches pallets in dense storage layouts." },
      { title: "Automated Pallet Pickup", copy: "Automates pickup for open and closed pallet formats." },
      { title: "Diverse Pallet Handling", copy: "Supports open and closed pallet movement." },
      { title: "Precision Pallet Placement", copy: "Places pallets accurately in high-density environments." },
    ],
    useCases: psrUseCases,
    faqs: [
      { question: "When do I need the PSR 2000R instead of the PSR 1000R?", answer: "Choose the PSR 2000R when your workflow requires a 2000 kg payload and extended-reach pallet handling." },
      { question: "Can the PSR 2000R operate in narrow aisles safely?", answer: "It can be configured for site layouts with appropriate safety and traffic assessment." },
      { question: "Can the PSR 2000R operate in cold storage or temperature-controlled environments?", answer: "Deployment depends on environment requirements and should be assessed for the specific facility." },
      { question: "How long does a typical deployment take?", answer: "Deployment depends on application complexity, facility size, integrations, and testing needs." },
    ],
  },
  "psr-1000r": {
    slug: "psr-1000r",
    seriesSlug: "psr-series",
    seriesLabel: "PSR Series",
    title: "PSR 1000R",
    subtitle: "Extended Reach Pallet Stacking",
    overview:
      "The PSR 1000R is a pallet stacking AMR with extended fork reach, designed to optimize high-density storage through precise pallet handling and automated retrieval operations.",
    heroImage: "PSR1000R-final.png",
    modelUrl: "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/PSR%201000_R.glb",
    backgroundText: "1000r-bg-text.png",
    overviewImage: "advantages-psr1000r.jpg",
    advantageImage: "advantages-psr1000r.jpg",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    applications: ["Open/Closed Pallet Stacking"],
    specs: [
      { label: "Dimensions", value: "2750 * 1300 * 1500 mm" },
      { label: "Payload Capacity", value: "1000 kg" },
      { label: "Max Speed", value: "1.2 m/s" },
      { label: "Type of Payload", value: "Open/Closed Pallet" },
      { label: "Battery Type", value: "LFP/TO" },
      { label: "Charging Time", value: "1 hr" },
      { label: "Runtime", value: "8 Hrs" },
      { label: "Voltage", value: "48 V" },
    ],
    advantages: [
      { title: "High-Density Storage Optimization", copy: "Optimizes pallet movement and retrieval in dense storage layouts." },
      { title: "Reduced Manual Intervention", copy: "Automates repetitive pallet handling and retrieval workflows." },
    ],
    features: [
      { title: "Extended Fork Reach", copy: "Reaches pallets efficiently in high-density storage." },
      { title: "Automated Pallet Pickup", copy: "Automates pickup for open and closed pallets." },
      { title: "Diverse Pallet Handling", copy: "Supports flexible pallet formats." },
      { title: "Precision Pallet Placement", copy: "Places pallets accurately at defined storage and handoff points." },
    ],
    useCases: psrUseCases,
    faqs: [
      { question: "What does the R in PSR 1000R stand for, and how is it different from the PSR 2000?", answer: "The R model indicates extended fork reach for high-density pallet handling, while payload and workflow needs determine the best model." },
      { question: "Can this robot work in both manufacturing and warehousing environments?", answer: "Yes. It is designed for pallet movement across manufacturing and warehousing operations." },
      { question: "How does it handle closed pallets from the floor safely?", answer: "It uses extended reach, controlled lift behavior, and safety systems to manage closed pallet workflows." },
      { question: "What is the typical ROI or payback period for deploying the PSR 1000R?", answer: "ROI depends on throughput, labor savings, shift patterns, and facility workflow complexity." },
    ],
  },
  "psr-g2g": {
    slug: "psr-g2g",
    seriesSlug: "psr-series",
    seriesLabel: "PSR Series",
    title: "PSR G2G",
    subtitle: "Ground-to-Ground Pallet Transport",
    overview:
      "The PSR G2G is a heavy-duty autonomous mobile robot designed for automated ground-to-ground pallet transport, enabling precise staging and efficient material flow across warehouses and factories.",
    heroImage: "PSR-G2G-FINAL.png",
    backgroundText: "psr-g2g.svg",
    overviewImage: "psr-product-application.jpg",
    advantageImage: "psr-advantages-image.jpg",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    applications: ["Open Pallet Lifting"],
    specs: [
      { label: "Dimensions", value: "2050 * 1050 * 1500 mm" },
      { label: "Payload Capacity", value: "2000 kg" },
      { label: "Max Speed", value: "1.2 m/s" },
      { label: "Type of Payload", value: "Open Pallet" },
      { label: "Battery Type", value: "LFP" },
      { label: "Charging Time", value: "1 hr" },
      { label: "Runtime", value: "8 Hrs" },
      { label: "Voltage", value: "48 V" },
    ],
    advantages: [
      { title: "Automated Ground-to-Ground Transport", copy: "Moves pallets from floor position to floor position without manual transport." },
      { title: "Improved Material Flow", copy: "Enables precise staging and efficient movement across warehouses and factories." },
      { title: "Reduced Manual Intervention", copy: "Reduces repetitive forklift movement in ground-level pallet workflows." },
    ],
    features: [
      { title: "Ground-to-Ground Pallet Transport", copy: "Automates point-to-point ground pallet movement." },
      { title: "Precise Pallet Staging", copy: "Stages pallets accurately for downstream operations." },
      { title: "Real-Time Pallet Detection", copy: "Supports reliable pallet pickup and transport." },
    ],
    useCases: psrUseCases,
    faqs: [
      { question: "What does ground-to-ground mean, and is this robot right for my operation?", answer: "It means the robot moves pallets between ground-level positions, ideal for staging, dock, dispatch, and line-side workflows." },
      { question: "Can the PSR G2G handle closed pallets?", answer: "The Webflow source lists it for open pallet lifting." },
      { question: "What makes the PSR G2G different from a simple AGV pallet mover?", answer: "It is built for heavy-duty autonomous pallet handling with staging and pallet detection capabilities." },
      { question: "How many PSR G2G units do we need for our facility?", answer: "Fleet size depends on travel distances, throughput targets, shifts, and process timing." },
    ],
  },
  "lbr-500": {
    slug: "lbr-500",
    seriesSlug: "psr-series",
    seriesLabel: "PSR Series",
    title: "LBR 500",
    subtitle: "Compact Free-Lift AMR",
    overview:
      "The LBR 500 is a compact free-lift AMR designed to automate trolley movement in low-clearance environments, delivering flexible, reliable, and efficient material transport across dynamic shop floors.",
    heroImage: "LBR-500.png",
    modelUrl: "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/LBR%20500.glb",
    backgroundText: "LBR-501.svg",
    overviewImage: "updated-image.jpg",
    advantageImage: "updated-image.jpg",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    applications: ["Trolley Lifting"],
    specs: [
      { label: "Dimensions", value: "1260 * 655 * 1270 mm" },
      { label: "Payload Capacity", value: "500 kg" },
      { label: "Max Speed", value: "1.2 m/s" },
      { label: "Type of Payload", value: "Trolley, Carts" },
      { label: "Battery Type", value: "LFP" },
      { label: "Charging Time", value: "1 hr" },
      { label: "Runtime", value: "8 Hrs" },
      { label: "Voltage", value: "48 V" },
    ],
    advantages: [
      { title: "Universal Trolley Compatibility", copy: "Designed to work with trolley movement in low-clearance environments." },
      { title: "Flexible Shop-Floor Transport", copy: "Automates reliable material movement across dynamic production floors." },
    ],
    features: [
      { title: "Integrated Free-Lift Mechanism", copy: "Lifts compatible trolleys for autonomous transport." },
      { title: "Slim Low-Profile Lift Bed", copy: "Works in low-clearance environments." },
      { title: "Precision Docking", copy: "Aligns with trolley and workstation positions." },
    ],
    useCases: [
      { title: "Small Load & Cart Transport", copy: "Moves small loads and carts across shop-floor workflows.", image: "Frame-427322841.jpg" },
      { title: "Low-Clearance Trolley Handling", copy: "Handles trolley transport where clearance is constrained.", image: "updated-image.jpg" },
      { title: "Assembly Line Feeding", copy: "Feeds workstations and assembly lines with predictable material flow.", image: "Frame-427322849_1.jpg" },
    ],
    faqs: [
      { question: "What environments is the LBR 500 built for?", answer: "It is built for low-clearance trolley movement across dynamic shop floors and manufacturing environments." },
      { question: "Does the LBR 500 handle pallets?", answer: "The LBR 500 is focused on trolley and cart movement rather than pallet stacking." },
      { question: "What does routine maintenance look like for the LBR 500?", answer: "Maintenance depends on deployment conditions, but routine checks typically cover lift, safety, wheels, battery, and software status." },
      { question: "Can the LBR 500 work alongside human workers on the factory floor?", answer: "Yes. It is designed for shared industrial spaces with appropriate safety planning." },
    ],
  },
  "agv-100": {
    slug: "agv-100",
    seriesSlug: "agv-series",
    seriesLabel: "AGV Series",
    title: "AGV 100",
    subtitle: "Compact QR-Guided Transport",
    overview:
      "The AGV 100 is a compact QR-guided vehicle designed for efficient point-to-point material transport, delivering reliable, predictable, and high-throughput movement across warehouses and manufacturing facilities.",
    heroImage: "agv-100_1.png",
    backgroundText: "agv-background-text.png",
    overviewImage: "9fb92fd488b484f5f7cafac3fb0bc76fe3040c5b.jpg",
    advantageImage: "9fb92fd488b484f5f7cafac3fb0bc76fe3040c5b.jpg",
    useCaseImage: "c989ee7908ff88713a0b7b9c5a5af83892ea9edc.png",
    caseStudyImage: "case-study-manufacturing.jpg",
    applications: ["Lifting", "Sorting"],
    specs: [
      { label: "Dimensions", value: "680 * 600 * 235 mm" },
      { label: "Payload Capacity", value: "100 kg" },
      { label: "Max Speed", value: "2 m/s" },
      { label: "Navigation", value: "QR Navigation" },
      { label: "Type of Payload", value: "Bins and Totes" },
      { label: "Battery Type", value: "LFP" },
      { label: "Charging Time", value: "1.5 hrs" },
      { label: "Runtime", value: "8 Hrs" },
    ],
    advantages: [
      { title: "Reliable QR-Guided Navigation", copy: "Delivers repeatable point-to-point routes with predictable material movement." },
      { title: "Reduced Manual Handling", copy: "Automates tote, bin, and light-load transfers across facilities." },
    ],
    features: [
      { title: "QR-Guided Navigation", copy: "Uses QR routes for structured material transport." },
      { title: "High Speed", copy: "Moves up to 2 m/s for efficient point-to-point tasks." },
      { title: "Precision Docking", copy: "Aligns with stations and transfer points for reliable handoff." },
    ],
    useCases: [
      { title: "Bin Transfer", copy: "Moves bins between storage, processing, and workstation areas.", image: "9fb92fd488b484f5f7cafac3fb0bc76fe3040c5b.jpg" },
      { title: "Tote & Bin Replenishment", copy: "Automates replenishment to picking zones and assembly stations.", image: "Frame-1321317267.jpg" },
      { title: "Sort & Order Consolidation", copy: "Supports sortation and consolidation movement.", image: "Frame-1321317268.jpg" },
    ],
    faqs: [
      { question: "What is the difference between the AGV and an AMR?", answer: "The AGV 100 uses QR-guided navigation for structured routes, while AMRs typically use more flexible map-based navigation." },
      { question: "How long can the AGV run before it needs to stop for charging?", answer: "The Webflow specification lists an 8-hour runtime with 1.5-hour charging." },
      { question: "Where is the AGV 100 the right choice for my operation?", answer: "It is well suited to predictable, repeatable tote, bin, and light-load point-to-point transport." },
      { question: "How do we maintain the AGV 100's QR system?", answer: "Keep QR markers readable, positioned correctly, and aligned with route updates during routine checks." },
    ],
  },
};
