export type SeriesProduct = {
  name: string;
  description: string;
  image: string;
  bgText?: string;
  href: string;
  tags: string[];
  tabDescription: string;
  specs: {
    label: string;
    value: string;
    imperial?: string;
  }[];
};

export type SeriesPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  heroImage: string;
  heroRobot: string;
  tags: string[];
  featureIntro: string;
  featureImage: string;
  features: {
    title: string;
    copy: string;
    icon?: string;
  }[];
  applicationsHeading: string;
  applicationsIntro: string;
  applications: {
    title: string;
    copy: string;
    image?: string;
  }[];
  products: SeriesProduct[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const seriesPages: Record<string, SeriesPageData> = {
  "ar-series": {
    slug: "ar-series",
    eyebrow: "AR Series",
    title: "Ready for",
    titleAccent: "Everything",
    description:
      "Explore ANSCER's cutting-edge lineup: powerful, smart automation solutions engineered to transform your operations.",
    heroImage: "series/ar/hero-bg.png",
    heroRobot: "series/ar-series-hero-foreground.png",
    tags: ["Tugging", "Tunneling", "Lifting"],
    featureIntro:
      "Never worry about maintenance. ANSCER Robotics ensures seamless software updates, reliable hardware, and ongoing support to keep your robots operating at peak performance.",
    features: [
      {
        title: "Flexible Module Design",
        copy: "Supports multiple top modules for changing operational requirements.",
        icon: "card-img-3.svg",
      },
      {
        title: "Versatile Application Support",
        copy: "Handles pallet, trolley, shelf, conveyor, and tugging operations.",
        icon: "card-img-2.svg",
      },
      {
        title: "One Platform Strategy",
        copy: "Simplifies deployment, accelerates scaling, and maximizes facility efficiency.",
        icon: "card-img-1.svg",
      },
    ],
    applicationsIntro:
      "Designed to automate internal transport across warehouses, production floors, and distribution environments with safe and efficient autonomous navigation.",
    featureImage: "Frame-1321317285.jpg",
    applicationsHeading: "Built For Smart Material Movement",
    applications: [
      {
        title: "Trolley Movement",
        copy: "Efficient autonomous transport of trolleys across facilities.",
        image: "Frame-1321317283-1.jpg",
      },
      {
        title: "Pallet Handling",
        copy: "Supports safe and reliable pallet movement operations.",
        image: "Frame-1321317235.jpg",
      },
      {
        title: "Carton Transfer",
        copy: "Optimized for smooth carton and package transportation.",
        image: "Frame-1321317284.jpg",
      },
      {
        title: "Conveyor Transfer",
        copy: "Integration with your conveyor to transfer the goods automatically.",
        image: "Frame-427322843.jpg",
      },
      {
        title: "Small Unit Loads",
        copy: "Designed for transporting compact and irregular light loads.",
        image: "Frame-1321317279.jpg",
      },
      {
        title: "Robotic Manipulation",
        copy: "Enables robotic handling applications with mobile robotic arm integration.",
        image: "Frame-427322845.jpg",
      },
    ],
    products: [
      {
        name: "AR 250",
        description:
          "Compact AMR supporting diverse top modules for flexible material movement.",
        image: "series/ar/AR250.png",
        bgText: "AR-250.svg",
        href: "/ar-series/ar-250",
        tags: ["Tugging", "Lifting", "Tunneling"],
        tabDescription: "Carries loads up to 250kg.",
        specs: [
          {
            label: "Dimensions",
            value: "900 * 580 * 275 mm",
            imperial: "35.43 x 22.83 x 10.83 in",
          },
          { label: "Max speed", value: "1.2 m/s", imperial: "2.68 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 250 kg",
            imperial: "Up to 551 lbs",
          },
          { label: "Ground clearance", value: "30 mm", imperial: "1.18 in" },
        ],
      },
      {
        name: "AR 500",
        description:
          "Compact AMR supporting diverse top modules for flexible material movement.",
        image: "series/ar/AR500.png",
        bgText: "AR-500.png",
        href: "/ar-series/ar-500",
        tags: ["Cobot", "Tugging"],
        tabDescription: "Carries loads up to 500kg.",
        specs: [
          {
            label: "Dimensions",
            value: "900 * 580 * 295 mm",
            imperial: "35.43 x 22.83 x 11.61 in",
          },
          { label: "Max speed", value: "1.5 m/s", imperial: "3.35 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 500 kg",
            imperial: "Up to 1,102.31 lbs",
          },
          { label: "Ground clearance", value: "50 mm", imperial: "1.97 in" },
        ],
      },
      {
        name: "AR 650",
        description:
          "Versatile AMR enabling safe, adaptable automation across dynamic intralogistics operations.",
        image: "series/ar/AR650.png",
        bgText: "AR-650.svg",
        href: "/ar-series/ar-650",
        tags: ["Tugging", "Lifting", "Tunneling"],
        tabDescription: "Carries loads up to 650kg.",
        specs: [
          {
            label: "Dimensions",
            value: "1400 * 950 * 300 mm",
            imperial: "55.12 x 37.40 x 11.81 in",
          },
          { label: "Max speed", value: "1.5 m/s", imperial: "3.35 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 650 kg",
            imperial: "Up to 1433.01 lbs",
          },
          { label: "Ground clearance", value: "30 mm", imperial: "1.18 in" },
        ],
      },
      {
        name: "AR 1250",
        description:
          "Heavy-duty AMR delivering flexible automation for demanding material handling applications.",
        image: "series/ar/AR1250.png",
        bgText: "AR-1250.svg",
        href: "/ar-series/ar-1250",
        tags: ["Tugging", "Lifting", "Tunneling"],
        tabDescription: "Carries loads up to 1250kg.",
        specs: [
          {
            label: "Dimensions",
            value: "1400 * 950 * 300 mm",
            imperial: "55.12 x 37.40 x 11.81 in",
          },
          { label: "Max speed", value: "1.7 m/s", imperial: "3.80 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 1250 kg",
            imperial: "Up to 2755.78 lbs",
          },
          { label: "Ground clearance", value: "30 mm", imperial: "1.18 in" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to modify my facility to deploy AR series robots?",
        answer:
          "No. The AR series uses SLAM-based navigation and requires no changes to your existing floor, racks, or infrastructure, no magnetic strips, QR codes on the floor, or fixed rails. The robots map your facility during commissioning and adapt in real time to layout changes, traffic, and obstacles. You can be up and running without touching your existing setup.",
      },
      {
        question:
          "Can the same robot handle different applications if my requirements change?",
        answer:
          "Yes, that's the core advantage of the AR series. The base robot stays the same; you replace the top module from ANSCER certified engineer to change the application. If you start with a Shelf Lifter for trolley transport and later need a Belt Conveyor for carton transfer or a Cobot Integration Module for machine tending, you change the module, not the robot. Your hardware investment is protected as your operations evolve.",
      },
      {
        question:
          "How do AR series robots work safely alongside people on the floor?",
        answer:
          "The AR series is built for collaborative environments. The robots use LiDAR-based 360 degree obstacle detection, slow down in high-traffic zones, and stop immediately if something enters their safety perimeter. They are designed to comply with international AMR safety standards, making them suitable for shared factory and warehouse floors without segregating robot and human zones.",
      },
      {
        question: "How does the AR series connect with our WMS or ERP?",
        answer:
          "ANSCER's fleet management platform integrates with your WMS or ERP via API. Task triggers can be automated from your existing system or initiated manually; the fleet handles route optimization, task dispatch, and real-time reporting without requiring you to replace your current software stack.",
      },
    ],
  },
  "psr-series": {
    slug: "psr-series",
    eyebrow: "PSR Series",
    title: "Ready for Every",
    titleAccent: "Pallet Movement",
    description:
      "Discover ANSCER's PSR Series: autonomous robots designed to automate pallet and trolley handling, boosting warehouse efficiency.",
    heroImage: "series/ar/hero-bg.png",
    heroRobot: "series/psr-series-hero-foreground.png",
    tags: ["Stacking", "Open/Closed Pallet"],
    featureIntro:
      "Our PSR Series automates critical warehouse transportation and storage workflows through pallet stackers and trolley handling robots.",
    features: [
      {
        title: "Automated Pallet Stacking",
        copy: "Enable precise, driverless pallet stacking and retrieval with less manual work and more safety.",
        icon: "key-feature-img-1.svg",
      },
      {
        title: "Warehouse Process Automation",
        copy: "Streamline inventory, pallet transport, storage, and material flow across centers and plants.",
        icon: "key-feature-img-2.svg",
      },
      {
        title: "Automated Trolley Handling",
        copy: "Advanced LBR robots ensure reliable movement of various trolley types, including low-clearance transport.",
        icon: "key-feature-img-3.svg",
      },
    ],
    applicationsIntro:
      "Designed to automate pallet transport, storage handling, trolley movement, and warehouse workflows with precision, safety, and operational efficiency.",
    featureImage: "psr-1000r-applications.jpg",
    applicationsHeading: "Built For Intelligent Warehouse Automation",
    applications: [
      {
        title: "Heavy Payload Pallet Transport",
        copy: "Transports pallets carrying heavy loads across the facility for bulk operations.",
        image: "Frame-427322841.jpg",
      },
      {
        title: "Low-Clearance Trolley Handling",
        copy: "Tows trolleys through spaces with limited overhead or structural clearance access.",
        image: "low-clearance-trolley-latest.png",
      },
      {
        title: "Raw Material/Inbound Handling",
        copy: "Moves raw materials from receiving to storage or production areas.",
        image: "Frame-427322849_1.jpg",
      },
      {
        title: "Small Load & Cart Transport",
        copy: "Moves lightweight individual loads or small carts for frequent internal transport.",
        image: "carton-transfer-latest.jpg",
      },
      {
        title: "Dock/Inbound to Storage",
        copy: "Moves received goods from the dock directly into designated storage locations.",
        image: "Frame-427322851.jpg",
      },
      {
        title: "Staging/Buffer Holding",
        copy: "Temporarily holds palletized or finished goods before the next movement stage.",
        image: "Frame-427322855.jpg",
      },
      {
        title: "Storage to Outbound",
        copy: "Retrieves stored or racked goods and transports them to outbound dispatch staging.",
        image: "Frame-427322852.jpg",
      },
    ],
    products: [
      {
        name: "PSR 2000",
        description:
          "Autonomous pallet stacking robot for precise high-reach pallet handling operations.",
        image: "series/psr/PSR2000.png",
        bgText: "psr-2000.svg",
        href: "/psr-series/psr-2000",
        tags: ["Open Pallet", "Stacking"],
        tabDescription: "Carries loads up to 2000 kg.",
        specs: [
          {
            label: "Dimensions",
            value: "2050 x 1000 x 1500 mm",
            imperial: "80.71 x 41.34 x 59.06 in",
          },
          { label: "Max speed", value: "1.2 m/s", imperial: "2.68 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 2000 kg",
            imperial: "Up to 4,409 lbs",
          },
          { label: "Ground clearance", value: "30 mm", imperial: "1.18 in" },
        ],
      },
      {
        name: "PSR 2000R",
        description:
          "Extended-reach heavy-duty pallet stacking robot capable of handling open and closed pallets.",
        image: "series/psr/PSR2000R.png",
        bgText: "Group-1321315869.svg",
        href: "/psr-series/psr-2000r",
        tags: ["Open/Closed Pallet", "Lifting"],
        tabDescription: "Carries loads up to 2000 kg.",
        specs: [
          {
            label: "Dimensions",
            value: "2700 * 1700 * 2100 mm",
            imperial: "106.3 x 66.9 x 82.7 in",
          },
          { label: "Max speed", value: "1.2 m/s", imperial: "2.68 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 2000 kg",
            imperial: "Up to 4,409 lbs",
          },
          { label: "Ground clearance", value: "30 mm", imperial: "1.18 in" },
        ],
      },
      {
        name: "PSR 1000R",
        description:
          "Extended-reach pallet stacking robot capable of handling open and closed pallets.",
        image: "series/psr/PSR1000R.png",
        bgText: "1000r-bg-text.png",
        href: "/psr-series/psr-1000r",
        tags: ["Open/Closed Pallet", "Lifting"],
        tabDescription: "Carries loads up to 1000 kg.",
        specs: [
          {
            label: "Dimensions",
            value: "2750 * 1350 * 1500 mm",
            imperial: "108.27 x 53.15 x 59.06 in",
          },
          { label: "Max speed", value: "1.2 m/s", imperial: "2.68 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 1000 kg",
            imperial: "Up to 2,204 lb",
          },
          { label: "Ground clearance", value: "30 mm", imperial: "1.18 in" },
          { label: "Lift Height", value: "1600 mm", imperial: "62.99 in" },
          { label: "Horizontal Reach", value: "600 mm", imperial: "23.62 in" },
        ],
      },
      {
        name: "PSR G2G",
        description:
          "Autonomous pallet handling robot enabling efficient ground-to-ground material movement.",
        image: "series/psr/G2G.png",
        bgText: "psr-g2g.svg",
        href: "/psr-series/psr-g2g",
        tags: ["Open Pallet", "Stacking"],
        tabDescription: "Carries loads up to 2000 kg.",
        specs: [
          {
            label: "Dimensions",
            value: "2050 x 1000 x 1500 mm",
            imperial: "80.71 x 39.37 x 59.06 in",
          },
          { label: "Max speed", value: "1.2 m/s", imperial: "2.68 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 2000 kg",
            imperial: "Up to 4,409 lbs",
          },
        { label: "Ground clearance", value: "40 mm", imperial: "1.57 in" },
        { label: "Lift Height", value: "400 mm", imperial: "15.74 in" },
        { label: "Horizontal Reach", value: "NA" },
        ],
      },
      {
        name: "LBR 500",
        description:
          "Compact trolley transport AMR for low-clearance environments and seamless integration.",
        image: "series/psr/LBR500.png",
        bgText: "LBR-501.svg",
        href: "/psr-series/lbr-500",
        tags: ["Trolley", "Lifting"],
        tabDescription: "Carries loads up to 500 kg.",
        specs: [
          {
            label: "Dimensions",
            value: "1260 x 655 x 1270 mm",
            imperial: "49.61 x 25.79 x 50 in",
          },
          { label: "Max speed", value: "1.2 m/s", imperial: "2.68 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 500 kg",
            imperial: "Up to 1,102 lbs",
          },
          { label: "Ground clearance", value: "30 mm", imperial: "1.18 in" },
          { label: "Lift Height", value: "100 mm", imperial: "3.93 in" },
          { label: "Horizontal Reach", value: "NA", imperial: "NA" },
        ],
      },
    ],
    faqs: [
      {
        question: "What types of pallets can the robot handle?",
        answer:
          "Our pallet stacking robot is designed to handle a wide range of pallet types commonly used in warehouses and manufacturing facilities, including standard wooden, plastic, and Euro pallets. Compatibility depends on pallet dimensions, weight, and condition.",
      },
      {
        question:
          "Can the robot work in an existing warehouse without infrastructure changes?",
        answer:
          "Yes. The robot is designed for rapid deployment in existing facilities and can navigate dynamic warehouse environments without requiring major infrastructure modifications. This helps reduce deployment time and operational disruption.",
      },
      {
        question:
          "How does the robot ensure safe operation around people and equipment?",
        answer:
          "The robot uses advanced safety sensors, obstacle detection, and intelligent navigation to monitor its surroundings in real time. It can detect obstacles, avoid collisions, and operate safely in environments where people and machines work together.",
      },
      {
        question: "What is the difference between the LBR and PSR series?",
        answer:
          "The LBR (Low Bed Robot) series is designed for transporting trolleys, carts, and custom load carriers in factories and production environments, especially in narrow aisles and low-clearance areas. The PSR (Pallet Stacking Robot) series is designed specifically for pallet handling, including pallet transport, storage, retrieval, and stacking of open and closed pallets from floor and rack locations. If your application involves trolleys, choose LBR; if it involves pallets, choose PSR.",
      },
    ],
  },
  "agv-series": {
    slug: "agv-series",
    eyebrow: "AGV Series",
    title: "Automated Guided Vehicles for",
    titleAccent: "Reliable Material Transport",
    description:
      "ANSCER’s AGV Series automates repetitive material movement across production lines, factories and warehouses, enabling consistent and predictable internal transport.",
    heroImage: "series/ar/hero-bg.png",
    heroRobot: "series/agv-series-hero-foreground.png",
    tags: ["Lifting", "Sorting"],
    featureIntro:
      "Enhance operational efficiency with intelligent AGV solutions that streamline transport workflows, improve productivity, and support scalable warehouse automation.",
    features: [
      {
        title: "Point-to-Point Transport",
        copy: "The AGV Series efficiently transports materials with minimal human effort.",
        icon: "slider-img-1.svg",
      },
      {
        title: "QR-Guided Navigation",
        copy: "Advanced QR navigation delivers precise routes and smooth material flow.",
        icon: "slider-img-2.svg",
      },
      {
        title: "High-Throughput Performance",
        copy: "Supports nonstop operation to boost throughput and steady material flow in key processes.",
        icon: "slider-img-3.svg",
      },
    ],
    applicationsIntro:
      "Designed to automate repetitive material movement tasks across warehouses, distribution centers, and manufacturing facilities with speed, accuracy, and reliability.",
    featureImage: "9fb92fd488b484f5f7cafac3fb0bc76fe3040c5b.jpg",
    applicationsHeading: "Built For Efficient Material Transport",
    applications: [
      {
        title: "Bin Transfer",
        copy: "Enable easy bin movement between storage, workstations, and processing to maintain workflow.",
        image: "Frame-1321317267.jpg",
      },
      {
        title: "Tote & Bin Replenishment",
        copy: "Automate replenishment by timely delivering totes and bins to picking zones, assembly lines, and fulfillment stations.",
        image: "Frame-1321317268.jpg",
      },
      {
        title: "Sort & Order Consolidation",
        copy: "Streamline order fulfillment by moving materials between sortation and consolidation zones, cutting manual handling and processing time.",
        image: "Frame-1321317269.jpg",
      },
    ],
    products: [
      {
        name: "AGV 100",
        description:
          "QR-guided vehicle delivering reliable point-to-point transport for efficient material flow.",
        image: "series/agv/agv-100.png",
        bgText: "agv-background-text.png",
        href: "/agv-series/agv-100",
        tags: ["Lifting", "Sorting"],
        tabDescription: "Carries loads up to 100kg.",
        specs: [
          {
            label: "Dimensions",
            value: "680 * 600 * 235 mm",
            imperial: "26.8 x 23.6 x 9.3 inches",
          },
          { label: "Max speed", value: "2 m/s", imperial: "4.47 mph" },
          {
            label: "Pay-load capacity",
            value: "Up to 100 kg",
            imperial: "Up to 220 lbs",
          },
          { label: "Ground clearance", value: "40 mm", imperial: "1.57 in" },
        ],
      },
    ],
    faqs: [
      {
        question: "What navigation does the AGV 100 use?",
        answer:
          "The AGV 100 uses QR-guided navigation for repeatable point-to-point movement across defined routes.",
      },
      {
        question: "What operations can the AGV Series automate?",
        answer:
          "It supports bin transfer, tote replenishment, sorting, order consolidation, and other repetitive material flow tasks.",
      },
      {
        question: "Where is AGV automation best suited?",
        answer:
          "AGV workflows work well in warehouses, manufacturing facilities, distribution centers, and fulfillment operations with structured material movement paths.",
      },
    ],
  },
};
