export type SeriesProduct = {
  name: string;
  description: string;
  image: string;
  bgText?: string;
  href: string;
  tags: string[];
  specs: {
    label: string;
    value: string;
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
  features: {
    title: string;
    copy: string;
    icon?: string;
  }[];
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
    title: "Robots Ready for",
    titleAccent: "Everything",
    description:
      "Explore ANSCER's cutting-edge lineup: powerful, smart automation solutions engineered to transform your operations.",
    heroImage: "914d5f91ebf180d91cdbcbf3b9c23835_ar-series-hero-img-p-1600.png",
    heroRobot: "ar-series-robot-hero-img.png",
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
    applications: [
      {
        title: "Trolley Movement",
        copy: "Efficient autonomous transport of trolleys across facilities.",
        image: "Frame-1321317285.jpg",
      },
      {
        title: "Pallet Handling",
        copy: "Supports safe and reliable pallet movement operations.",
        image: "Frame-1321317283-1.jpg",
      },
      {
        title: "Carton Transfer",
        copy: "Optimized for smooth carton and package transportation.",
        image: "Frame-1321317235.jpg",
      },
      {
        title: "Conveyor Transfer",
        copy: "Integration with your conveyor to transfer the goods automatically.",
        image: "Frame-1321317284.jpg",
      },
      {
        title: "Small Unit Loads",
        copy: "Designed for transporting compact and irregular light loads.",
        image: "Frame-427322843.jpg",
      },
      {
        title: "Robotic Manipulation",
        copy: "Enables robotic handling applications with mobile robotic arm integration.",
        image: "Frame-1321317279.jpg",
      },
    ],
    products: [
      {
        name: "AR 250",
        description: "Compact AMR supporting diverse top modules for flexible material movement.",
        image: "ar250-new.png",
        bgText: "AR-250.svg",
        href: "/ar-series/ar-250",
        tags: ["Tugging", "Lifting", "Tunneling"],
        specs: [
          { label: "Dimensions", value: "900 x 580 x 275 mm" },
          { label: "Max speed", value: "1.2 m/s" },
          { label: "Payload capacity", value: "Up to 250 kg" },
          { label: "Ground clearance", value: "30 mm" },
        ],
      },
      {
        name: "AR 500",
        description: "Compact AMR supporting diverse top modules for flexible material movement.",
        image: "ar-500-new.png",
        bgText: "AR-500.png",
        href: "/ar-series/ar-500",
        tags: ["Cobot", "Tugging"],
        specs: [
          { label: "Dimensions", value: "900 x 580 x 295 mm" },
          { label: "Max speed", value: "1.5 m/s" },
          { label: "Payload capacity", value: "Up to 500 kg" },
          { label: "Ground clearance", value: "50 mm" },
        ],
      },
      {
        name: "AR 650",
        description: "Versatile AMR enabling safe, adaptable automation across dynamic intralogistics operations.",
        image: "8bd91d97b16b7e651fea93831080b0147cd48299.png",
        bgText: "AR-650.svg",
        href: "/ar-series/ar-650",
        tags: ["Tugging", "Lifting", "Tunneling"],
        specs: [
          { label: "Dimensions", value: "1400 x 950 x 300 mm" },
          { label: "Max speed", value: "1.5 m/s" },
          { label: "Payload capacity", value: "Up to 650 kg" },
          { label: "Ground clearance", value: "30 mm" },
        ],
      },
      {
        name: "AR 1250",
        description: "Heavy-duty AMR delivering flexible automation for demanding material handling applications.",
        image: "f1b8ed9565fccfe339d89768a81a1b6389b1b778.png",
        bgText: "AR-1250.svg",
        href: "/ar-series/ar-1250",
        tags: ["Tugging", "Lifting", "Tunneling"],
        specs: [
          { label: "Dimensions", value: "1400 x 950 x 300 mm" },
          { label: "Max speed", value: "1.7 m/s" },
          { label: "Payload capacity", value: "Up to 1250 kg" },
          { label: "Ground clearance", value: "30 mm" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to modify my facility to deploy AR series robots?",
        answer:
          "No. AR series robots use SLAM-based navigation and require no magnetic strips, QR codes on the floor, fixed rails, or major floor changes.",
      },
      {
        question: "Can the same robot handle different applications if requirements change?",
        answer:
          "Yes. The AR platform supports interchangeable top modules, so you can adapt the same base robot for different workflows as operations evolve.",
      },
      {
        question: "How do AR series robots work safely alongside people?",
        answer:
          "The robots are built for collaborative environments with LiDAR-based obstacle detection, controlled speeds, and autonomous navigation behavior.",
      },
    ],
  },
  "psr-series": {
    slug: "psr-series",
    eyebrow: "PSR Series",
    title: "Robots Ready for Every",
    titleAccent: "Pallet Movement",
    description:
      "Discover ANSCER's PSR Series: autonomous robots designed to automate pallet and trolley handling, boosting warehouse efficiency.",
    heroImage: "914d5f91ebf180d91cdbcbf3b9c23835_ar-series-hero-img-p-1600.png",
    heroRobot: "psr-main-product.png",
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
    applications: [
      {
        title: "Heavy Payload Pallet Transport",
        copy: "Transports pallets carrying heavy loads across the facility for bulk operations.",
        image: "psr-1000r-applications.jpg",
      },
      {
        title: "Small Load & Cart Transport",
        copy: "Moves lightweight individual loads or small carts for frequent internal transport.",
        image: "Frame-427322841.jpg",
      },
      {
        title: "Low-Clearance Trolley Handling",
        copy: "Tows trolleys through spaces with limited overhead or structural clearance access.",
        image: "updated-image.jpg",
      },
      {
        title: "Dock/Inbound to Storage",
        copy: "Moves received goods from the dock directly into designated storage locations.",
        image: "Frame-427322848.jpg",
      },
      {
        title: "Storage/Rack to Outbound",
        copy: "Retrieves stored or racked goods and transports them to outbound dispatch staging.",
        image: "Frame-427322851.jpg",
      },
      {
        title: "Staging/Buffer Holding",
        copy: "Temporarily holds palletized or finished goods before the next movement stage.",
        image: "Frame-427322852.jpg",
      },
    ],
    products: [
      {
        name: "PSR 2000",
        description: "Autonomous pallet stacking robot for precise high-reach pallet handling operations.",
        image: "psr-2000_2.png",
        bgText: "psr-2000.svg",
        href: "/psr-series/psr-2000",
        tags: ["Open Pallet", "Stacking"],
        specs: [
          { label: "Dimensions", value: "2050 x 1000 x 1500 mm" },
          { label: "Max speed", value: "1.2 m/s" },
          { label: "Payload capacity", value: "Up to 2000 kg" },
          { label: "Ground clearance", value: "30 mm" },
        ],
      },
      {
        name: "PSR 2000R",
        description: "Extended-reach heavy-duty pallet stacking robot capable of handling open and closed pallets.",
        image: "psr-2000r_1.png",
        bgText: "Group-1321315869.svg",
        href: "/psr-series/psr-2000r",
        tags: ["Open/Closed Pallet", "Lifting"],
        specs: [
          { label: "Dimensions", value: "2700 x 1700 x 2100 mm" },
          { label: "Max speed", value: "1.2 m/s" },
          { label: "Payload capacity", value: "Up to 2000 kg" },
          { label: "Ground clearance", value: "30 mm" },
        ],
      },
      {
        name: "PSR 1000R",
        description: "Extended-reach pallet stacking robot capable of handling open and closed pallets.",
        image: "PSR-1000R.png",
        bgText: "1000r-bg-text.png",
        href: "/psr-series/psr-1000r",
        tags: ["Open/Closed Pallet", "Lifting"],
        specs: [
          { label: "Dimensions", value: "2750 x 1350 x 1500 mm" },
          { label: "Max speed", value: "1.2 m/s" },
          { label: "Payload capacity", value: "Up to 1000 kg" },
          { label: "Ground clearance", value: "30 mm" },
        ],
      },
      {
        name: "PSR G2G",
        description: "Autonomous pallet handling robot enabling efficient ground-to-ground material movement.",
        image: "psr-g2g.png",
        bgText: "psr-g2g.svg",
        href: "/psr-series/psr-g2g",
        tags: ["Open Pallet", "Stacking"],
        specs: [
          { label: "Dimensions", value: "2050 x 1000 x 1500 mm" },
          { label: "Max speed", value: "1.2 m/s" },
          { label: "Payload capacity", value: "Up to 2000 kg" },
          { label: "Ground clearance", value: "40 mm" },
        ],
      },
      {
        name: "LBR 500",
        description: "Compact trolley transport AMR for low-clearance environments and seamless integration.",
        image: "lbr-500_1.png",
        bgText: "LBR-501.svg",
        href: "/psr-series/lbr-500",
        tags: ["Trolley", "Lifting"],
        specs: [
          { label: "Dimensions", value: "1260 x 655 x 1270 mm" },
          { label: "Max speed", value: "1.2 m/s" },
          { label: "Payload capacity", value: "Up to 500 kg" },
          { label: "Ground clearance", value: "30 mm" },
        ],
      },
    ],
    faqs: [
      {
        question: "What types of pallets can the robot handle?",
        answer:
          "PSR robots support workflows for open pallets, closed pallets, and high-reach pallet handling depending on the selected model.",
      },
      {
        question: "Can PSR robots support warehouse process automation?",
        answer:
          "Yes. PSR robots automate pallet transport, storage, staging, inbound movement, outbound movement, and trolley handling workflows.",
      },
      {
        question: "Which PSR model should I choose?",
        answer:
          "The best fit depends on payload, pallet type, lift height, and movement flow. The PSR 2000, 2000R, 1000R, G2G, and LBR 500 cover different operational needs.",
      },
    ],
  },
  "agv-series": {
    slug: "agv-series",
    eyebrow: "AGV Series",
    title: "Robots Ready for",
    titleAccent: "Continuous Material Flow",
    description:
      "Discover ANSCER's AGV Series: smart vehicles for fast material transport and inventory handling in warehouses and factories.",
    heroImage: "914d5f91ebf180d91cdbcbf3b9c23835_ar-series-hero-img-p-1600.png",
    heroRobot: "agv-updated-and-compressed.png",
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
    applications: [
      {
        title: "Bin Transfer",
        copy: "Enable easy bin movement between storage, workstations, and processing to maintain workflow.",
        image: "9fb92fd488b484f5f7cafac3fb0bc76fe3040c5b.jpg",
      },
      {
        title: "Tote & Bin Replenishment",
        copy: "Automate replenishment by delivering totes and bins to picking zones, assembly lines, and fulfillment stations.",
        image: "Frame-1321317267.jpg",
      },
      {
        title: "Sort & Order Consolidation",
        copy: "Move materials between sortation and consolidation zones, reducing manual handling and processing time.",
        image: "Frame-1321317268.jpg",
      },
    ],
    products: [
      {
        name: "AGV 100",
        description: "QR-guided vehicle delivering reliable point-to-point transport for efficient material flow.",
        image: "agv-100-new.png",
        bgText: "agv-background-text.png",
        href: "/agv-series/agv-100",
        tags: ["Lifting", "Sorting"],
        specs: [
          { label: "Dimensions", value: "680 x 600 x 235 mm" },
          { label: "Max speed", value: "2 m/s" },
          { label: "Payload capacity", value: "Up to 100 kg" },
          { label: "Ground clearance", value: "40 mm" },
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
