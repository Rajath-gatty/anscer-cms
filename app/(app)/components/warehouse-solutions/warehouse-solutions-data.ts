import { imagePath } from "../home/assets";

export type WarehouseSolutionImage = {
  src: string;
  alt: string;
};

export type WarehouseSolutionStat = {
  value: string;
  label: string;
};

/** A run of text in a callout; `emphasis` renders it in navy instead of blue. */
export type CalloutSegment = {
  text: string;
  emphasis?: boolean;
};

export type WarehouseSolutionProblem = {
  title: string;
  copy: string;
  image: WarehouseSolutionImage;
};

export type WarehouseSolutionStep = {
  title: string;
  copy: string;
  image: WarehouseSolutionImage;
};

export type WarehouseSolutionData = {
  slug: string;
  hero: {
    title: string;
    copy: string;
    image: WarehouseSolutionImage;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: WarehouseSolutionStat[];
  };
  overview: {
    kicker: string;
    title: string;
    image: WarehouseSolutionImage;
    paragraphs: string[];
    callout: CalloutSegment[];
    closing: string;
  };
  problem: {
    kicker: string;
    title: string;
    intro: string;
    items: WarehouseSolutionProblem[];
  };
  solution: {
    kicker: string;
    title: string;
    intro: string;
    workflowTitle: string;
    steps: WarehouseSolutionStep[];
    closing: string;
  };
  process: {
    kicker: string;
    title: string;
    intro: string;
    image: WarehouseSolutionImage;
    steps: { title: string; copy: string }[];
    cta: { text: string; label: string; href: string };
  };
  portfolio: {
    kicker: string;
    title: string;
    intro: string;
    items: {
      name: string;
      copy: string;
      href: string;
      image: WarehouseSolutionImage;
    }[];
  };
  applications: {
    kicker: string;
    title: string;
    items: { title: string; href: string; image: WarehouseSolutionImage }[];
  };
  impact: {
    kicker: string;
    title: string;
    items: { title: string; copy: string }[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    title: string;
    copy: string;
    label: string;
    href: string;
  };
};

/**
 * Page data as authored: hero and overview are required, every later section is
 * optional so a page can ship before its full design is ready. Missing sections
 * are simply not rendered by `WarehouseSolutionPage`.
 */
export type WarehouseSolutionPageData = Pick<
  WarehouseSolutionData,
  "slug" | "hero" | "overview"
> &
  Partial<Omit<WarehouseSolutionData, "slug" | "hero" | "overview">>;

const casePickingPath = `${imagePath}warehouse-solutions/case-picking/`;
const putAwayPath = `${imagePath}warehouse-solutions/put-away/`;
const crossDockingPath = `${imagePath}warehouse-solutions/cross-docking/`;
const lineSideDeliveryPath = `${imagePath}warehouse-solutions/line-side-delivery/`;
const endOfLinePath = `${imagePath}warehouse-solutions/end-of-line-movement/`;
const pointToPointPath = `${imagePath}warehouse-solutions/point-to-point-movement/`;
const workInProgressPath = `${imagePath}warehouse-solutions/work-in-progress/`;

const sharedStats: WarehouseSolutionStat[] = [
  { value: "50+", label: "Warehouse Deployments" },
  { value: "60+", label: "Manufacturing Deployments" },
  { value: "100+", label: "AMRs Installed" },
];

export const warehouseSolutions = {
  "case-picking": {
    slug: "case-picking",
    hero: {
      title: "Autonomous Case Picking For Faster Material Flow",
      copy: "Automate the movement of cases across picking, staging, replenishment and dispatch with autonomous mobile robots built for dynamic warehouse operations, helping your team streamline material flow and keep goods moving efficiently.",
      image: {
        src: `${casePickingPath}hero-banner.webp`,
        alt: "ANSCER autonomous mobile robot towing a cart of cases through a warehouse aisle",
      },
      primaryCta: { label: "Talk to an expert", href: "/contact-us" },
      secondaryCta: { label: "Explore", href: "#overview" },
      stats: sharedStats,
    },
    overview: {
      kicker: "Overview",
      title: "Turn Case Movement Into An Autonomous Workflow",
      image: {
        src: `${casePickingPath}overview.webp`,
        alt: "ANSCER AR 250 robot carrying a large case through a warehouse aisle",
      },
      paragraphs: [
        "Traditional case-picking operations often require people to coordinate every movement between the point of picking and the point of delivery.",
        "With autonomous transport, the workflow can be reorganized around a simple principle:",
      ],
      callout: [
        { text: "People pick. " },
        { text: "Robots move", emphasis: true },
        { text: ". Software coordinates." },
      ],
      closing:
        "This division of responsibility creates a more connected operating model where human workers remain focused on activities that require judgment, while robots handle repetitive and predictable movement.",
    },
    problem: {
      kicker: "Problem",
      title: "When Case Movement Becomes The Bottleneck",
      intro:
        "Case picking gets harder as order volumes, travel distances, and SKU complexity increase. Operators spend much time moving between pick locations, while forklifts and carts compete for space. This wastes labor on transport instead of productive picking.",
      items: [
        {
          title: "Too Much Travel",
          copy: "Long distances between pick locations and staging consume productive operator time.",
          image: {
            src: `${casePickingPath}problem/problem-1.jpg`,
            alt: "Operator pushing a cart of cases down a long warehouse aisle",
          },
        },
        {
          // TODO(copy): body text for items 2–4 is not visible in the design — confirm with content team.
          title: "Manual Material Movement",
          copy: "Operators push carts and pallet jacks between zones, adding non-value-added handling to every order.",
          image: {
            src: `${casePickingPath}problem/problem-2.jpg`,
            alt: "Worker manually pushing a trolley loaded with cases across the warehouse floor",
          },
        },
        {
          title: "Peak-Time Bottlenecks",
          copy: "Order surges stretch manual transport capacity, slowing replenishment and delaying dispatch.",
          image: {
            src: `${casePickingPath}problem/problem-3.jpg`,
            alt: "Crowded warehouse floor filled with pallets of cases awaiting dispatch",
          },
        },
        {
          title: "Physical Workload",
          copy: "Repeated lifting, pushing and walking increases fatigue and the risk of strain injuries.",
          image: {
            src: `${casePickingPath}problem/problem-4.jpg`,
            alt: "Worker lifting a heavy case from a pallet onto a cart",
          },
        },
      ],
    },
    solution: {
      kicker: "Solution",
      title: "From Manual Case Movement To Autonomous Material Flow",
      intro:
        "Traditional case-picking operations rely on manual transport between picking points, staging areas, and downstream processes—adding travel time and operational dependency.",
      workflowTitle: "Traditional Workflow",
      steps: [
        {
          title: "Pick",
          copy: "Operators scan and pick cases from storage locations. The picked cases are consolidated and queued for transport to staging areas or downstream processes.",
          image: {
            src: `${casePickingPath}solution/solution-1.jpg`,
            alt: "Operator scanning cases at a storage rack beside a picking cart",
          },
        },
        {
          title: "Manual Transport",
          copy: "Workers manually transport cases using carts or pallet jacks across the facility floor—consuming operator time and adding non-value-added travel distance.",
          image: {
            src: `${casePickingPath}solution/solution-2.jpg`,
            alt: "Worker pushing a loaded case trolley across the warehouse floor",
          },
        },
        {
          title: "Stage",
          copy: "Cases are grouped and staged at designated floor locations, awaiting consolidation, quality checks, or loading. Staging accuracy directly impacts downstream throughput.",
          image: {
            src: `${casePickingPath}solution/solution-3.jpg`,
            alt: "Worker stacking cases onto a pallet in a marked staging area",
          },
        },
        {
          title: "Dispatch",
          copy: "Staged cases are loaded onto outbound vehicles or conveyor systems for final dispatch. Delays at this stage impacts overall order fulfilment cycle times.",
          image: {
            src: `${casePickingPath}solution/solution-4.webp`,
            alt: "Worker pulling a pallet jack of wrapped cases toward a truck at the loading dock",
          },
        },
      ],
      closing:
        "ANSCER's autonomous mobile robots automate repetitive case transportation across warehouse and manufacturing environments. From picking and replenishment to staging and dispatch, robots keep material moving while reducing unnecessary manual travelling.",
    },
    process: {
      kicker: "Case Picking Workflow",
      title: "A Connected Workflow From Task Generation To Case Delivery",
      intro:
        "Case-picking automation works best when robotic movement becomes part of the warehouse's existing execution process rather than operating as an isolated transport activity.",
      image: {
        src: `${imagePath}warehouse/section-5.png`,
        alt: "Top-down warehouse floor layout showing an autonomous robot routing between storage racks and staging areas",
      },
      steps: [
        {
          title: "Task Generation",
          copy: "Picking or transport tasks are generated by the warehouse management or control system according to the operational requirement.",
        },
        {
          title: "Case Handover",
          copy: "Once the required case or pallet is ready, the load is transferred to the robot through the defined loading process.",
        },
        {
          title: "Autonomous Movement",
          copy: "The robot receives its task and navigates through the facility while responding to obstacles, traffic and changing operating conditions.",
        },
        {
          title: "Destination Delivery",
          copy: "The load is transported to its designated destination, such as staging, dispatch, another work area or a production point.",
        },
        {
          title: "Task Completion",
          copy: "Task status is communicated back to the WMS, creating visibility and enabling the next task to be assigned.",
        },
        {
          title: "Continuous Operation",
          copy: "The robot becomes part of a repeatable material-flow cycle, allowing case movement to continue without relying on operators for every movement.",
        },
      ],
      cta: {
        text: "Let's identify where automated case picking can increase throughput, accuracy, and operational resilience.",
        label: "Talk to an expert",
        href: "/contact-us",
      },
    },
    applications: {
      kicker: "Application",
      title: "One Technology. Multiple Warehouse Workflows.",
      // TODO(links): only Manufacturing has an industry page so far; point the others at theirs once they exist.
      items: [
        {
          title: "FMCG",
          href: "/contact-us",
          image: {
            src: `${casePickingPath}application/fmcg.webp`,
            alt: "FMCG warehouse with racks of packaged consumer goods and staged pallets",
          },
        },
        {
          title: "Manufacturing",
          href: "/manufacturing",
          image: {
            src: `${casePickingPath}application/manufacturing.jpg`,
            alt: "Technician assembling machined parts at a manufacturing workstation",
          },
        },
        {
          title: "3PL",
          href: "/contact-us",
          image: {
            src: `${casePickingPath}application/3pl.jpg`,
            alt: "Large 3PL distribution centre with high-bay racking and pallets of cases",
          },
        },
        {
          title: "White goods",
          href: "/contact-us",
          image: {
            src: `${casePickingPath}application/white-goods.jpg`,
            alt: "Workers inspecting refrigerators on a white goods production line",
          },
        },
      ],
    },
    impact: {
      kicker: "Operational Impact",
      title: "What Changes When Case Movement Becomes Autonomous?",
      items: [
        {
          title: "Reduce non-value-added travel",
          copy: "Robots handle repetitive transportation so operators can focus on picking and other productive activities.",
        },
        {
          title: "Improve material flow",
          copy: "Continuous autonomous movement helps maintain a consistent flow between operational zones.",
        },
        {
          title: "Improve workplace safety",
          copy: "Reducing repetitive manual transportation and unnecessary vehicle movement can help create safer working environments.",
        },
        {
          title: "Use labor more effectively",
          copy: "Shift people away from repetitive transportation tasks toward activities that require greater human involvement.",
        },
        {
          title: "Increase operational visibility",
          copy: "Connected automation provides greater visibility into robot missions, task status and fleet activity.",
        },
        {
          title: "Scale with demand",
          copy: "Expand robotic capacity as material movement requirements increase.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "What is autonomous case picking?",
          answer:
            "Autonomous case picking uses autonomous mobile robots (AMRs) to transport cases between picking, staging, replenishment, dispatch, storage and other operational areas, reducing the need for manual material movement.",
        },
        {
          question: "How do ANSCER AMRs fit into an existing warehouse workflow?",
          answer:
            "ANSCER AMRs can become part of the existing material-flow process, receiving transport tasks from connected warehouse or control systems and delivering cases to predefined destinations.",
        },
        {
          question: "Can AMRs work alongside warehouse operators?",
          answer:
            "Yes. AMRs are designed to support human workers by taking on repetitive transportation tasks while operators remain focused on picking, handling and other activities that require human involvement.",
        },
        {
          question: "What types of case-picking workflows can be automated?",
          answer:
            "AMRs can support workflows such as picking to staging, storage to replenishment, picking to dispatch, and warehouse-to-production material movement.",
        },
        {
          question: "Can ANSCER robots handle different payload requirements?",
          answer:
            "Yes. ANSCER offers multiple robotic platforms and configurations designed for different payload capacities and material-handling requirements. The appropriate robot depends on factors such as load weight, dimensions, route and workflow.",
        },
        {
          question: "Can AMRs navigate dynamic warehouse environments?",
          answer:
            "AMRs are designed to navigate changing environments and respond to obstacles, traffic and operational conditions while completing assigned transport tasks.",
        },
        {
          question: "How are transport tasks assigned to the robots?",
          answer:
            "Transport tasks can be generated through the warehouse management or control system according to operational requirements. The robot then receives its assigned mission and transports the load to the designated destination.",
        },
      ],
    },
    cta: {
      title: "Let's Build A Smarter Case Picking Workflow",
      copy: "Tell us about your facility, material flow and operational requirements. Our automation team can help identify the right robotic approach for your case movement needs.",
      label: "Book a demo",
      href: "/contact-us",
    },
  },
  "put-away": {
    slug: "put-away",
    hero: {
      title: "Autonomous Put Away For Smarter Warehouse Storage",
      copy: "Automate the movement of inbound inventory from receiving and staging areas to storage locations with autonomous robots built for dynamic warehouse operations, helping streamline putaway workflows and keep inventory moving efficiently.",
      image: {
        src: `${putAwayPath}hero-banner.webp`,
        alt: "ANSCER PSR 2000 autonomous pallet stacker in a warehouse aisle lined with storage racks",
      },
      primaryCta: { label: "Talk to an expert", href: "/contact-us" },
      secondaryCta: { label: "Explore", href: "#overview" },
      stats: sharedStats,
    },
    overview: {
      kicker: "Overview",
      title: "Turn Inbound Movement Into An Autonomous Storage Workflow",
      image: {
        src: `${putAwayPath}overview.webp`,
        alt: "ANSCER AR 250 robot carrying a pallet of wrapped bales across a warehouse floor",
      },
      paragraphs: [
        "Put away is more than moving inventory from receiving to storage. Every inbound load must reach the right spot efficiently with full warehouse visibility.",
        "ANSCER's autonomous robots connect receiving, staging and storage into a coordinated material-flow process.",
      ],
      callout: [
        { text: "Receive. " },
        { text: "Robots move", emphasis: true },
        { text: ". Software tracks." },
      ],
      closing:
        "By automating repetitive transportation, operators can focus on receiving, verification and other higher-value activities while robots handle the movement between operational zones.",
    },
    problem: {
      kicker: "Problem",
      title: "When Inbound Inventory Slows Warehouse Flow",
      intro:
        "As inbound volumes increase, moving inventory from receiving areas to storage can become a major operational challenge. Long travel distances, forklift traffic and manual handling can create congestion while increasing the dependency on warehouse operators.",
      items: [
        {
          title: "Long Travel Distances",
          copy: "Operators and forklifts spend significant time transporting inbound inventory across large warehouse facilities.",
          image: {
            src: `${putAwayPath}problem/problem-1.jpg`,
            alt: "Forklift travelling down a long, empty aisle between loading docks and storage racks",
          },
        },
        {
          // TODO(copy): body text for items 2–4 is not visible in the design — confirm with content team.
          title: "Storage Congestion",
          copy: "Inbound pallets pile up in receiving and staging areas while they wait to be moved, blocking aisles and slowing the next delivery.",
          image: {
            src: `${putAwayPath}problem/problem-2.jpg`,
            alt: "Inbound pallets crowding the warehouse floor while a forklift works around them",
          },
        },
        {
          title: "Manual Handling Dependency",
          copy: "Every put away move relies on an available operator or forklift driver, making storage speed dependent on labour availability.",
          image: {
            src: `${putAwayPath}problem/problem-3.jpg`,
            alt: "Forklift operator carrying a pallet of cases to storage",
          },
        },
        {
          title: "Limited Throughput",
          copy: "Manual transport capacity caps how quickly received goods reach storage, delaying inventory availability during inbound peaks.",
          image: {
            src: `${putAwayPath}problem/problem-4.jpg`,
            alt: "Pallets queued near the loading docks waiting for a forklift to move them",
          },
        },
      ],
    },
    solution: {
      kicker: "Solution",
      title: "From Inbound Staging To Intelligent Storage",
      intro:
        "Traditional put away operations depend on operators and forklifts to transport inbound inventory from receiving areas to storage locations.",
      workflowTitle: "Traditional Workflow",
      steps: [
        {
          title: "Receive",
          copy: "Unload inbound goods and verify quantities, condition, and product details against receiving records. Record receipt and label each pallet or handling unit.",
          image: {
            src: `${putAwayPath}solution/solution-1.jpg`,
            alt: "Worker scanning a wrapped inbound pallet at the loading dock",
          },
        },
        {
          title: "Stage",
          copy: "Place received goods in the putaway staging area. Group by product, storage needs, or destination, and assign suitable storage locations before movement.",
          image: {
            src: `${putAwayPath}solution/solution-2.jpg`,
            alt: "Worker scanning a received pallet in the put away staging area",
          },
        },
        {
          title: "Transport",
          copy: "Move goods from staging to assigned storage locations using suitable handling equipment. Scan the handling unit and destination to verify the putaway task.",
          image: {
            src: `${putAwayPath}solution/solution-3.webp`,
            alt: "Forklift operator transporting a pallet from staging to storage racks",
          },
        },
        {
          title: "Store & Confirm",
          copy: "Place goods in the assigned bin or rack, following capacity and safety rules. Confirm the location and quantity in the warehouse system to complete putaway.",
          image: {
            src: `${putAwayPath}solution/solution-4.jpg`,
            alt: "Worker scanning a pallet at its storage rack location to confirm put away",
          },
        },
      ],
      closing:
        "ANSCER's autonomous robots automate the repetitive movement between these operational points, creating a connected material-flow layer across the warehouse.",
    },
    process: {
      kicker: "Put Away Workflow",
      title: "A Connected Workflow From Receiving To Storage",
      intro:
        "Automated put away becomes more effective when robotic movement is integrated with the warehouse's existing execution systems.",
      image: {
        src: `${imagePath}warehouse/section-5.png`,
        alt: "Top-down warehouse floor layout showing an autonomous robot routing from receiving to storage racks",
      },
      steps: [
        {
          title: "Task Generation",
          copy: "Put away tasks are generated by the WMS or warehouse control system based on inbound inventory and available storage locations.",
        },
        {
          title: "Material Handover",
          copy: "Pallets, bins or other materials are transferred from the receiving or inbound staging area to the robot through the defined loading process.",
        },
        {
          title: "Autonomous Navigation",
          copy: "The robot receives its destination and navigates through the warehouse while responding to obstacles, traffic and changing operating conditions.",
        },
        {
          title: "Storage Delivery",
          copy: "The material is transported to its assigned destination, such as a floor storage position, rack, buffer area or downstream operational zone.",
        },
        {
          title: "Put Away Completion",
          copy: "The robot completes the assigned movement and communicates task status to the WMS.",
        },
        {
          title: "Inventory Visibility",
          copy: "Location and task info is updated, showing where inventory is placed and enabling the next warehouse task assignment.",
        },
      ],
      cta: {
        text: "Let's identify where automated put away can increase throughput, accuracy, and operational resilience.",
        label: "Talk to an expert",
        href: "/contact-us",
      },
    },
    portfolio: {
      kicker: "Product Portfolio",
      title: "Choose The Right Robot For Your Storage Workflow",
      intro:
        "Different put away operations require different payload capacities, handling methods and storage configurations. ANSCER's robotic platforms can support diverse inbound and storage workflows across warehouses and industrial facilities.",
      items: [
        {
          name: "PSR G2G",
          copy: "A heavy-duty pallet handling AMR for automated ground-to-ground transport of open pallets.",
          href: "/products/psr/psrg2g",
          image: {
            src: `${putAwayPath}product-portfolio/product-1.webp`,
            alt: "ANSCER PSR G2G pallet handling autonomous mobile robot",
          },
        },
        {
          name: "PSR 1000R",
          copy: "A pallet stacking AMR with extended fork reach for efficient pallet handling of open and closed pallets.",
          href: "/products/psr/psr1000r",
          image: {
            src: `${putAwayPath}product-portfolio/product-2.webp`,
            alt: "ANSCER PSR 1000R pallet stacking robot with extended reach forks",
          },
        },
        {
          name: "PSR 2000",
          copy: "A heavy-duty pallet stacking AMR built for automated pickup, lifting and placement of open pallets.",
          href: "/products/psr/psr2000",
          image: {
            src: `${putAwayPath}product-portfolio/product-3.webp`,
            alt: "ANSCER PSR 2000 heavy-duty pallet stacking robot",
          },
        },
        {
          name: "PSR 2000R",
          copy: "A pallet stacking AMR with extended fork reach for efficient pallet handling of open and closed pallets.",
          href: "/products/psr/psr2000r",
          image: {
            src: `${putAwayPath}product-portfolio/product-4.webp`,
            alt: "ANSCER PSR 2000R pallet stacking robot with extended reach forks",
          },
        },
        {
          name: "AR 1250 + Pallet Lifter",
          copy: "Designed for efficient and reliable pallet handling of various pallet types in constrained environments.",
          href: "/products/ar/ar1250",
          image: {
            src: `${putAwayPath}product-portfolio/product-5.webp`,
            alt: "ANSCER AR 1250 autonomous mobile robot with pallet lifter",
          },
        },
      ],
    },
    applications: {
      kicker: "Application",
      title: "One Autonomous System. Multiple Storage Workflows.",
      // TODO(links): only Manufacturing has an industry page so far; point the others at theirs once they exist.
      items: [
        {
          title: "FMCG",
          href: "/contact-us",
          image: {
            src: `${putAwayPath}application/fmcg.webp`,
            alt: "FMCG warehouse with racks of packaged consumer goods and staged pallets",
          },
        },
        {
          title: "Manufacturing",
          href: "/manufacturing",
          image: {
            src: `${putAwayPath}application/manufacturing.jpg`,
            alt: "Technician assembling machined parts at a manufacturing workstation",
          },
        },
        {
          title: "3PL",
          href: "/contact-us",
          image: {
            src: `${putAwayPath}application/3pl.jpg`,
            alt: "Large 3PL distribution centre with high-bay racking and pallets of goods",
          },
        },
      ],
    },
    impact: {
      kicker: "Operational Impact",
      // TODO(copy): only the cards were supplied; the title is adapted from case picking — confirm with content team.
      title: "What Changes When Put Away Becomes Autonomous?",
      items: [
        {
          title: "Reduce Travel Time",
          copy: "Robots handle repetitive transportation between receiving and storage, reducing operator travel across the warehouse.",
        },
        {
          title: "Improve Throughput",
          copy: "Continuous autonomous movement helps process inbound inventory faster and maintain consistent put away capacity.",
        },
        {
          title: "Improve Inventory Accuracy",
          copy: "Connected task execution and location tracking provide greater visibility into where inventory has been moved and stored.",
        },
        {
          title: "Improve Storage Utilization",
          copy: "Automated workflows can support more consistent storage placement and better use of available warehouse space.",
        },
        {
          title: "Reduce Forklift Dependency",
          copy: "Autonomous transport can take over repetitive material movement, reducing the need for forklifts across selected workflows.",
        },
        {
          title: "Improve Workplace",
          copy: "Reducing repetitive manual transportation and unnecessary vehicle movement can help create safer warehouse environments.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "What is warehouse put away?",
          answer:
            "Put away is the process of moving inbound inventory from receiving or staging areas to its assigned storage location.",
        },
        {
          question: "How can robots automate put away?",
          answer:
            "Autonomous robots can transport pallets, bins and other materials from inbound areas to designated storage, buffer or operational locations.",
        },
        {
          question: "Can ANSCER robots work with WMS systems?",
          answer:
            "ANSCER's put away workflow can be integrated with warehouse execution systems so that tasks and material movement can be coordinated through the existing operational process.",
        },
        {
          question: "Can robots handle palletized materials?",
          answer:
            "Yes. ANSCER's PSR portfolio is designed for autonomous material movement and can support pallet-handling workflows depending on the robot configuration and application requirements.",
        },
        {
          question: "Can put away automation reduce forklift usage?",
          answer:
            "Autonomous robots can take over selected repetitive material transportation workflows, potentially reducing forklift dependency in those operations.",
        },
        {
          question: "Can autonomous robots work in dynamic warehouses?",
          answer:
            "Yes. The robots are designed to navigate dynamic operating environments where people, vehicles and other warehouse activities are continuously changing.",
        },
        {
          question: "What types of warehouses can use automated put away?",
          answer:
            "Automated put away can be applied across retail distribution, FMCG, manufacturing, 3PL and industrial warehouse environments, depending on the workflow and material-handling requirements.",
        },
      ],
    },
    cta: {
      // TODO(copy): only the case-picking banner was designed; this is adapted from it — confirm with content team.
      title: "Let's Build A Smarter Put Away Workflow",
      copy: "Tell us about your facility, material flow and operational requirements. Our automation team can help identify the right robotic approach for your put away needs.",
      label: "Book a demo",
      href: "/contact-us",
    },
  },
  "cross-docking": {
    slug: "cross-docking",
    hero: {
      title: "Autonomous Pallet Movement For Faster Cross Docking",
      copy: "Automate pallet movement from receiving to outbound staging with autonomous robots designed to keep time-sensitive warehouse operations moving smoothly, helping teams maintain a steady flow of goods throughout the day.",
      image: {
        src: `${crossDockingPath}hero-banner.webp`,
        alt: "ANSCER PSR G2G autonomous pallet robot carrying a wrapped pallet between the receiving and dispatch docks",
      },
      primaryCta: { label: "Talk to an expert", href: "/contact-us" },
      secondaryCta: { label: "Explore", href: "#overview" },
      stats: sharedStats,
    },
    overview: {
      kicker: "Overview",
      title: "Move Goods From Inbound To Outbound Without Extra Storage",
      image: {
        src: `${crossDockingPath}overview.webp`,
        alt: "ANSCER PSR 2000 autonomous robot beside a conveyor in a cross docking area",
      },
      paragraphs: [
        "Cross docking focuses on speed, moving goods quickly from receiving to dispatch with little or no storage. Traditional methods rely heavily on operators and forklifts to manage pallet movements.",
        "With autonomous transport, the workflow can be reorganized around a simple principle:",
      ],
      callout: [
        { text: "Receive. " },
        { text: "Robots move", emphasis: true },
        { text: ". Stage. Dispatch." },
      ],
      closing:
        "ANSCER's autonomous robotic solution helps connect inbound and outbound operations by automating repetitive pallet movement between defined operational zones.",
    },
    problem: {
      kicker: "Problem",
      title: "When Every Minute Matters At The Dock",
      intro:
        "Cross docking is time-sensitive, requiring quick pallet movement from inbound to outbound amid multiple shipments and operators. As volumes grow, manual transport causes bottlenecks, delays, and reliance on operators and forklifts.",
      items: [
        {
          title: "Forklift Dependency",
          copy: "Continuous pallet movement between receiving, staging and dispatch areas requires frequent forklift and operator involvement.",
          image: {
            src: `${crossDockingPath}problem/problem-1.jpg`,
            alt: "Forklift operator carrying a pallet of cases across the warehouse floor",
          },
        },
        {
          // TODO(copy): body text for items 2–4 is not visible in the design — confirm with content team.
          title: "Time-Sensitive Movement",
          copy: "Inbound goods must reach outbound docks within tight windows, so any delay in moving pallets puts departure schedules at risk.",
          image: {
            src: `${crossDockingPath}problem/problem-2.jpg`,
            alt: "Rows of inbound pallets waiting on a warehouse floor to be moved to dispatch",
          },
        },
        {
          title: "Dock Congestion",
          copy: "Pallets waiting to be moved build up around receiving and dispatch doors, crowding forklifts and operators into the same space.",
          image: {
            src: `${crossDockingPath}problem/problem-3.jpg`,
            alt: "Forklifts and workers moving pallets in a congested loading dock area",
          },
        },
        {
          title: "Manual Coordination",
          copy: "Matching inbound pallets to outbound shipments relies on operators coordinating every move, making flow dependent on people being available.",
          image: {
            src: `${crossDockingPath}problem/problem-4.jpg`,
            alt: "Warehouse worker scanning cases while sorting them for outbound shipments",
          },
        },
      ],
    },
    solution: {
      kicker: "Solution",
      title: "From Manual Pallet Movement To Autonomous Cross Docking",
      intro:
        "Traditional cross docking relies on operators and forklifts to move pallets between receiving, staging and dispatch areas.",
      workflowTitle: "Traditional Workflow",
      steps: [
        {
          title: "Receive",
          copy: "Unload inbound goods and carefully verify quantities, condition, and product details against the corresponding receiving records. Report any discrepancies.",
          image: {
            src: `${crossDockingPath}solution/solution-1.jpg`,
            alt: "Worker scanning inbound cases unloaded from a truck at the receiving dock",
          },
        },
        {
          title: "Manual Transport",
          copy: "Workers manually move received goods from receiving to staging using suitable handling equipment, keeping items secure and pathways clear during transfer.",
          image: {
            src: `${crossDockingPath}solution/solution-2.jpg`,
            alt: "Worker pulling a pallet jack of cases from receiving to staging",
          },
        },
        {
          title: "Stage",
          copy: "Temporarily sort and group goods by outbound destination or route without storing them for long-term putaway, keeping each shipment ready for dispatch.",
          image: {
            src: `${crossDockingPath}solution/solution-3.jpg`,
            alt: "Worker scanning cases grouped by destination in the staging area",
          },
        },
        {
          title: "Load & Dispatch",
          copy: "Manually move staged goods to outbound docks, load vehicles, and confirm dispatch, checking shipment details and securing goods for safe transport to their destination.",
          image: {
            src: `${crossDockingPath}solution/solution-4.jpg`,
            alt: "Worker moving a pallet jack of staged cases toward an outbound truck",
          },
        },
      ],
      closing:
        "ANSCER's autonomous robotic solution uses the PSR G2G to automate pallet movement across defined warehouse and manufacturing workflows. The robot transports pallets between inbound and outbound operational zones while connected systems coordinate tasks.",
    },
    process: {
      kicker: "Cross Docking Workflow",
      title: "A Connected Workflow From Receiving To Dispatch",
      intro:
        "Cross docking automation excels when robotic pallet movement integrates with warehouse execution. ANSCER links inbound and outbound operations via autonomous tasks and system coordination.",
      image: {
        src: `${imagePath}warehouse/section-5.png`,
        alt: "Top-down warehouse floor layout showing an autonomous robot routing pallets from receiving to dispatch",
      },
      // TODO(copy): only step 1 is expanded in the design; body text for steps 2–6 is adapted — confirm with content team.
      steps: [
        {
          title: "Task Generation",
          copy: "Transport tasks are generated by the WMS or warehouse control system based on inbound and outbound requirements.",
        },
        {
          title: "Pallet Receiving",
          copy: "Inbound pallets are unloaded, verified and placed at a defined pickup point in the receiving area, ready for robotic transport.",
        },
        {
          title: "Autonomous Pickup",
          copy: "The robot travels to the pickup point and collects the pallet through the defined loading process.",
        },
        {
          title: "Autonomous Movement",
          copy: "The robot navigates through the facility while responding to obstacles, traffic and changing operating conditions.",
        },
        {
          title: "Outbound Delivery",
          copy: "The pallet is delivered to its designated outbound staging lane or dispatch dock, ready for loading.",
        },
        {
          title: "Task Completion & Continuous Operation",
          copy: "Task status is communicated back to the WMS and the robot is assigned its next move, keeping pallets flowing from inbound to outbound.",
        },
      ],
      cta: {
        text: "Let's identify where automated cross docking can increase throughput, accuracy, and operational resilience.",
        label: "Talk to an expert",
        href: "/contact-us",
      },
    },
    portfolio: {
      kicker: "Product Portfolio",
      title: "The Right Robot For Continuous Pallet Movement",
      intro:
        "Cross docking requires reliable pallet transportation between receiving, staging and dispatch areas. ANSCER's robotic platforms can be configured around different material-flow requirements and payload needs.",
      items: [
        {
          name: "PSR G2G",
          copy: "A heavy-duty pallet handling AMR for automated ground-to-ground transport of open pallets.",
          href: "/products/psr/psrg2g",
          image: {
            src: `${crossDockingPath}product-portfolio/product-1.webp`,
            alt: "ANSCER PSR G2G pallet handling autonomous mobile robot",
          },
        },
        {
          name: "PSR 1000R",
          copy: "A pallet stacking AMR with extended fork reach for efficient pallet handling of open and closed pallets.",
          href: "/products/psr/psr1000r",
          image: {
            src: `${crossDockingPath}product-portfolio/product-2.webp`,
            alt: "ANSCER PSR 1000R pallet stacking robot with extended reach forks",
          },
        },
        {
          name: "PSR 2000",
          copy: "A heavy-duty pallet stacking AMR built for automated pickup, lifting and placement of open pallets.",
          href: "/products/psr/psr2000",
          image: {
            src: `${crossDockingPath}product-portfolio/product-3.webp`,
            alt: "ANSCER PSR 2000 heavy-duty pallet stacking robot",
          },
        },
        {
          name: "PSR 2000R",
          copy: "A pallet stacking AMR with extended fork reach for efficient pallet handling of open and closed pallets.",
          href: "/products/psr/psr2000r",
          image: {
            src: `${crossDockingPath}product-portfolio/product-4.webp`,
            alt: "ANSCER PSR 2000R pallet stacking robot with extended reach forks",
          },
        },
      ],
    },
    applications: {
      kicker: "Application",
      title: "One Autonomous Workflow. Multiple Cross Docking Environments.",
      // TODO(links): only Manufacturing has an industry page so far; point the others at theirs once they exist.
      items: [
        {
          title: "FMCG",
          href: "/contact-us",
          image: {
            src: `${crossDockingPath}application/fmcg.webp`,
            alt: "FMCG warehouse with racks of packaged consumer goods and staged pallets",
          },
        },
        {
          title: "Manufacturing",
          href: "/manufacturing",
          image: {
            src: `${crossDockingPath}application/manufacturing.jpg`,
            alt: "Technician assembling machined parts at a manufacturing workstation",
          },
        },
        {
          title: "3PL",
          href: "/contact-us",
          image: {
            src: `${crossDockingPath}application/3pl.jpg`,
            alt: "Large 3PL distribution centre with high-bay racking and pallets of goods",
          },
        },
      ],
    },
    impact: {
      kicker: "Operational Impact",
      title: "What Changes When Cross Docking Becomes Autonomous?",
      // Card copy is as designed; several cards are carried over from put away.
      items: [
        {
          title: "Reduce Travel Time",
          copy: "Robots handle repetitive transportation between receiving and storage, reducing operator travel across the warehouse.",
        },
        {
          title: "Improve Throughput",
          copy: "Continuous robotic operation supports higher pallet movement volumes without requiring operators to manually perform every transport.",
        },
        {
          title: "Improve Storage Utilization",
          copy: "Automated workflows can support more consistent storage placement and better use of available warehouse space.",
        },
        {
          title: "Reduce Forklift Dependency",
          copy: "Autonomous transport can take over repetitive material movement, reducing the need for forklifts across selected workflows.",
        },
        {
          title: "Improve Workplace",
          copy: "Reducing repetitive manual transportation and unnecessary vehicle movement can help create safer warehouse environments.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      // TODO(copy): only the questions are in the design; answers are drafted — confirm with content team.
      items: [
        {
          question: "What is cross docking?",
          answer:
            "Cross docking is a warehouse process where inbound goods are moved from receiving directly to outbound staging or dispatch, with little or no time spent in storage.",
        },
        {
          question: "How can robots support cross docking?",
          answer:
            "Autonomous robots can take over the repetitive pallet movement between receiving, staging and dispatch areas, keeping goods flowing while operators focus on verification, sorting and loading.",
        },
        {
          question: "Which ANSCER robot is suitable for cross docking?",
          answer:
            "The PSR G2G is designed for ground-to-ground pallet transport, making it well suited to cross docking. Other PSR models can support workflows that also need pallet lifting or stacking. The right robot depends on load weight, pallet type, route and workflow.",
        },
        {
          question: "Can ANSCER robots integrate with WMS?",
          answer:
            "Yes. ANSCER's cross docking workflow can be integrated with warehouse management or control systems so that transport tasks are generated and tracked through the existing operational process.",
        },
        {
          question: "Can autonomous robots operate in busy warehouse environments?",
          answer:
            "Yes. The robots are designed to navigate dynamic environments where people, forklifts and other warehouse activities are continuously changing, responding to obstacles and traffic as they move.",
        },
        {
          question: "Can cross docking automation scale with shipment volumes?",
          answer:
            "Yes. Robotic capacity can be expanded by adding robots to the fleet as inbound and outbound volumes grow.",
        },
        {
          question: "What types of industries can use cross docking automation?",
          answer:
            "Cross docking automation can be applied across FMCG, retail distribution, manufacturing, 3PL and other industrial warehouse environments, depending on the workflow and material-handling requirements.",
        },
      ],
    },
    cta: {
      // TODO(copy): the design's banner is still placeholder text; this is adapted from case picking — confirm with content team.
      title: "Let's Build A Smarter Cross Docking Workflow",
      copy: "Tell us about your facility, material flow and operational requirements. Our automation team can help identify the right robotic approach for your cross docking needs.",
      label: "Book a demo",
      href: "/contact-us",
    },
  },
  "line-side-delivery": {
    slug: "line-side-delivery",
    hero: {
      title: "Autonomous Line-Side Delivery For Uninterrupted Production",
      copy: "Automate the movement of bins, totes, shelves, pallets, racks and material carriers from storage and staging areas directly to production lines with autonomous mobile robots built for dynamic manufacturing environments.",
      image: {
        src: `${lineSideDeliveryPath}hero-banner.webp`,
        alt: "ANSCER ATR 1000 autonomous robot carrying a crate of parts to a production line",
      },
      primaryCta: { label: "Talk to an expert", href: "/contact-us" },
      secondaryCta: { label: "Explore", href: "#overview" },
      stats: sharedStats,
    },
    overview: {
      kicker: "Overview",
      title: "Keep Production Supplied With Autonomous Material Delivery",
      image: {
        src: `${lineSideDeliveryPath}overview.webp`,
        alt: "ANSCER LBR 500 robot towing a trolley of components beside a production line",
      },
      paragraphs: [
        "Production lines depend on a continuous supply of the right materials at the right location and at the right time.",
        "Traditional delivery often involves operators and forklifts moving materials repeatedly between storage and assembly areas. ANSCER transforms this movement into an autonomous workflow where:",
      ],
      callout: [
        { text: "Material needs. " },
        { text: "Robots deliver", emphasis: true },
        { text: ". Software coordinates." },
      ],
      closing:
        "By connecting material movement with production and inventory systems, autonomous robots can support repeatable replenishment cycles while allowing production teams to remain focused on manufacturing activities.",
    },
    problem: {
      kicker: "Problem",
      title: "When Material Delivery Becomes A Production Bottleneck",
      intro:
        "As production volumes increase, keeping every workstation supplied becomes increasingly complex. Repetitive transport, changing production requirements and high shop-floor traffic can make manual line-side delivery difficult to manage consistently.",
      items: [
        {
          title: "High Manual Movement",
          copy: "Operators, forklifts and carts spend valuable time repeatedly transporting materials between storage and production areas.",
          image: {
            src: `${lineSideDeliveryPath}problem/problem-1.jpg`,
            alt: "Operator pushing a cart of bins from storage racks toward the production floor",
          },
        },
        {
          // TODO(copy): body text for items 2–4 is not visible in the design — confirm with content team.
          title: "Production Delays",
          copy: "When materials arrive late or in the wrong quantity, workstations sit idle and production schedules slip.",
          image: {
            src: `${lineSideDeliveryPath}problem/problem-2.jpg`,
            alt: "Operator waiting at a workstation beside an empty material trolley",
          },
        },
        {
          title: "Shop-Floor Congestion",
          copy: "Forklifts, carts and people share the same aisles, creating traffic around production lines and increasing safety risk.",
          image: {
            src: `${lineSideDeliveryPath}problem/problem-3.jpg`,
            alt: "Forklift and carts crowding a busy aisle beside a production line",
          },
        },
        {
          title: "Limited Visibility",
          copy: "Without connected tracking, it is hard to know where materials are and when each workstation will next be replenished.",
          image: {
            src: `${lineSideDeliveryPath}problem/problem-4.jpg`,
            alt: "Large production warehouse with materials staged across many zones",
          },
        },
      ],
    },
    solution: {
      kicker: "Solution",
      title: "From Manual Replenishment To Autonomous Line-Side Flow",
      intro:
        "Traditional line-side delivery depends on operators and transport equipment to repeatedly move materials from storage and staging areas to production stations.",
      workflowTitle: "Traditional Workflow",
      steps: [
        {
          title: "Storage",
          copy: "Store production materials and supplies in designated inventory locations, keeping items organized and ready for line-side replenishment.",
          image: {
            src: `${lineSideDeliveryPath}solution/solution-1.jpg`,
            alt: "Worker scanning bins of components on a storage rack",
          },
        },
        {
          title: "Manual Transport",
          copy: "Manually transport materials from storage to the buffer area using carts, dollies, or other handling equipment, keeping items secure and aisles clear. Check loads before moving.",
          image: {
            src: `${lineSideDeliveryPath}solution/solution-2.jpg`,
            alt: "Worker pulling a cart of material bins away from the storage racks",
          },
        },
        {
          title: "Buffer",
          copy: "Hold materials temporarily in a buffer area near the production line, sorting and grouping them by line-side delivery route before final replenishment.",
          image: {
            src: `${lineSideDeliveryPath}solution/solution-3.jpg`,
            alt: "Worker sorting bins on a trolley in a buffer area near the production line",
          },
        },
        {
          title: "Production Line",
          copy: "Deliver materials from the buffer directly to the production line, restocking workstations with the right items at the right time to support continuous production.",
          image: {
            src: `${lineSideDeliveryPath}solution/solution-4.jpg`,
            alt: "Long production line with workstations stocked with materials",
          },
        },
      ],
      closing:
        "ANSCER's autonomous robots transform this repetitive movement into a connected material-flow. Robots can transport bins, totes, shelves, racks and other material carriers between operational zones and deliver them directly to designated line-side locations.",
    },
    process: {
      kicker: "Line-Side Delivery Workflow",
      title: "A Connected Workflow From Production Requirement To Line-Side Delivery",
      intro:
        "Line-side automation becomes more effective when robotic transport is connected to the systems and processes already managing production and inventory.",
      image: {
        src: `${imagePath}warehouse/section-5.png`,
        alt: "Top-down facility layout showing an autonomous robot routing materials from storage to production lines",
      },
      // TODO(copy): only step 1 is expanded in the design; body text for steps 2–6 is drafted — confirm with content team.
      steps: [
        {
          title: "Task Generation",
          copy: "Material delivery tasks are generated through MES, WMS or production control systems based on production requirements and replenishment needs.",
        },
        {
          title: "Material Assignment",
          copy: "The required bins, totes, racks or pallets are identified and assigned to a robot along with their pickup point and line-side destination.",
        },
        {
          title: "Autonomous Pickup",
          copy: "The robot travels to the storage or staging location and collects the material carrier through the defined loading process.",
        },
        {
          title: "Autonomous Movement",
          copy: "The robot navigates the shop floor while responding to obstacles, traffic and changing operating conditions.",
        },
        {
          title: "Line-Side Delivery",
          copy: "Materials are delivered to the designated workstation or line-side location, ready for production use.",
        },
        {
          title: "Return & Continuous Operation",
          copy: "The robot can collect empty carriers for return, report task status back to the system and move on to its next delivery.",
        },
      ],
      cta: {
        text: "Let's identify where automated line-side delivery can increase throughput, accuracy, and operational resilience.",
        label: "Talk to an expert",
        href: "/contact-us",
      },
    },
    portfolio: {
      kicker: "Product Portfolio",
      title: "Choose The Right Robot For Your Production Flow",
      intro:
        "Different manufacturing environments require different payload capacities, handling methods and material configurations. ANSCER's robotic platforms can be configured to support diverse line-side delivery requirements.",
      items: [
        {
          name: "LBR 500",
          copy: "A compact, free-lift AMR designed for handling diverse trolleys in low-clearance environments.",
          href: "/products/psr/lbr500",
          image: {
            src: `${lineSideDeliveryPath}product-portfolio/product-1.webp`,
            alt: "ANSCER LBR 500 compact free-lift autonomous mobile robot",
          },
        },
        {
          name: "AR Series + Shelf Lifter",
          copy: "Designed for lifting and transporting a variety of payloads in dense layouts with dynamic material flows.",
          href: "/products/ar",
          image: {
            src: `${lineSideDeliveryPath}product-portfolio/product-2.webp`,
            alt: "ANSCER AR Series robot with shelf lifter module",
          },
        },
        {
          name: "AR Series + CLT",
          copy: "Designed to lift standard loads and tunnel payloads up to twice the standard load using a single module.",
          href: "/products/ar",
          image: {
            src: `${lineSideDeliveryPath}product-portfolio/product-3.webp`,
            alt: "ANSCER AR Series robot with CLT lifting module",
          },
        },
        {
          name: "PSR G2G",
          copy: "A heavy-duty pallet handling AMR for automated ground-to-ground transport of open pallets.",
          href: "/products/psr/psrg2g",
          image: {
            src: `${lineSideDeliveryPath}product-portfolio/product-4.webp`,
            alt: "ANSCER PSR G2G pallet handling autonomous mobile robot",
          },
        },
        {
          name: "PLR 1000 e",
          copy: "Designed for efficient ground-to-ground pallet movement through electric-actuated lifting.",
          // TODO(links): PLR 1000 e has no product page yet — point it there once it exists.
          href: "/products",
          image: {
            src: `${lineSideDeliveryPath}product-portfolio/product-5.webp`,
            alt: "ANSCER PLR 1000 e electric pallet lifting robot",
          },
        },
        {
          name: "ATR 1000",
          copy: "Designed for optimization of material flow with 360° on-the-spot rotation for precise load orientation.",
          href: "/products/ar/atr1000",
          image: {
            src: `${lineSideDeliveryPath}product-portfolio/product-6.webp`,
            alt: "ANSCER ATR 1000 autonomous transport robot with rotating top",
          },
        },
        {
          name: "GPR 1000",
          copy: "Designed for handling open and closed pallets in space constrained, high-throughput warehouses.",
          href: "/products/psr/gpr1000",
          image: {
            src: `${lineSideDeliveryPath}product-portfolio/product-7.webp`,
            alt: "ANSCER GPR 1000 pallet handling autonomous mobile robot",
          },
        },
      ],
    },
    applications: {
      kicker: "Application",
      title: "One Autonomous Workflow. Multiple Warehouse Environments.",
      // TODO(links): only Manufacturing has an industry page so far; point the others at theirs once they exist.
      items: [
        {
          title: "Automotive",
          href: "/contact-us",
          image: {
            src: `${lineSideDeliveryPath}application/application-1.jpg`,
            alt: "Automotive body shop with robotic welding on a vehicle assembly line",
          },
        },
        {
          title: "Electronics",
          href: "/contact-us",
          image: {
            src: `${lineSideDeliveryPath}application/application-2.jpg`,
            alt: "Electronics production line with circuit boards on an automated conveyor",
          },
        },
        {
          title: "Manufacturing",
          href: "/manufacturing",
          image: {
            src: `${lineSideDeliveryPath}application/application-3.jpg`,
            alt: "Technician assembling components at a manufacturing workstation",
          },
        },
      ],
    },
    impact: {
      kicker: "Operational Impact",
      title: "What Changes When Line-Side Delivery Becomes Autonomous?",
      items: [
        {
          title: "Reduce material transport time",
          copy: "Autonomous robots continuously move materials between storage, staging and production areas, reducing unnecessary manual transport journeys.",
        },
        {
          title: "Improve production continuity",
          copy: "Timely and consistent material replenishment keeps production stations supplied and reduces interruptions caused by material shortages.",
        },
        {
          title: "Improve workplace safety",
          copy: "Reducing forklift dependency and repetitive manual transport can help create a safer and more controlled production environment.",
        },
        {
          title: "Use labor more effectively",
          copy: "Operators can spend more time on production and value-added activities instead of repetitive material transportation.",
        },
        {
          title: "Increase workflow visibility",
          copy: "Connected automation provides greater visibility into delivery tasks, robot missions, material movement and replenishment status.",
        },
        {
          title: "Standardize material flow",
          copy: "Automated task execution and routing help create more consistent and repeatable delivery processes across production areas.",
        },
        {
          title: "Scale across production lines",
          copy: "Additional robotic capacity can be introduced as production volumes, lines or material-flow requirements increase.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      // TODO(copy): only the questions are in the design; answers are drafted — confirm with content team.
      items: [
        {
          question: "What is line-side delivery?",
          answer:
            "Line-side delivery is the process of moving materials, components and subassemblies from storage or staging areas to the production line or workstation where they are used.",
        },
        {
          question: "How does autonomous line-side delivery work?",
          answer:
            "Delivery tasks are generated by MES, WMS or production control systems. An autonomous mobile robot collects the required material from storage or staging, navigates the shop floor and delivers it to the designated line-side location, then reports task completion.",
        },
        {
          question: "Which materials can robots transport to production lines?",
          answer:
            "Depending on the robot configuration, ANSCER robots can transport bins, totes, shelves, trolleys, racks, pallets and other material carriers.",
        },
        {
          question: "Can ANSCER robots work with MES and WMS systems?",
          answer:
            "Yes. ANSCER's line-side delivery workflow can be integrated with MES, WMS and production control systems so that delivery tasks are generated and tracked through the existing operational process.",
        },
        {
          question: "Can robots collect empty bins and totes from production lines?",
          answer:
            "Yes. Robots can be assigned return tasks to collect empty bins, totes or carriers from line-side locations and bring them back to storage or replenishment areas.",
        },
        {
          question: "Can line-side delivery robots operate alongside workers?",
          answer:
            "Yes. The robots are designed to navigate dynamic shop floors where people, forklifts and other equipment are moving, responding to obstacles and traffic as they travel.",
        },
        {
          question: "Which ANSCER robot is suitable for line-side delivery?",
          answer:
            "The right robot depends on the load type, weight, route and workflow. Options include the LBR 500 for trolleys, AR Series robots with shelf lifter or CLT modules, and pallet robots such as the PSR G2G, PLR 1000 e and GPR 1000.",
        },
        {
          question: "Can the solution scale across multiple production lines?",
          answer:
            "Yes. Robotic capacity can be expanded by adding robots to the fleet as production volumes, lines or material-flow requirements grow.",
        },
      ],
    },
    cta: {
      title: "Keep Your Production Lines Moving",
      copy: "Tell us about your production environment, material flow and replenishment requirements. Our automation team can help identify the right robotic approach for your line-side delivery workflow.",
      label: "Book a demo",
      href: "/contact-us",
    },
  },
  "end-of-line-movement": {
    slug: "end-of-line-movement",
    hero: {
      title: "Autonomous End-of-Line Movement For Continuous Production",
      copy: "Automate the movement of finished goods, pallets and packaged products from production lines to inspection, staging, storage and dispatch with autonomous mobile robots.",
      image: {
        src: `${endOfLinePath}hero-banner.webp`,
        alt: "ANSCER PSR G2G autonomous pallet robot moving a pallet of finished cartons toward a loading dock",
      },
      primaryCta: { label: "Talk to an expert", href: "/contact-us" },
      secondaryCta: { label: "Explore", href: "#overview" },
      stats: sharedStats,
    },
    overview: {
      kicker: "Overview",
      title: "Keep Finished Goods Moving Beyond The Production Line",
      image: {
        src: `${endOfLinePath}overview.webp`,
        alt: "ANSCER autonomous pallet robot carrying finished cartons away from a packaging line",
      },
      paragraphs: [
        "End-of-line operations connect production with the next stage of the material flow. When this movement depends on manual transport or forklifts, finished goods can accumulate around production lines and create unnecessary congestion. ANSCER automates this repetitive movement so that:",
      ],
      callout: [
        { text: "Production finishes. " },
        { text: "Robots move", emphasis: true },
        { text: ". Systems coordinate." },
      ],
      closing:
        "This allows production teams to stay focused on manufacturing while autonomous robots continuously transport finished goods to their next destination.",
    },
    problem: {
      kicker: "Problem",
      title: "When Finished Goods Become A Production Bottleneck",
      intro:
        "As production volumes increase, moving finished goods away from the line becomes just as important as producing them. Manual transport, forklift traffic and inconsistent movement can create congestion and interrupt downstream operations.",
      items: [
        {
          title: "Production Bottlenecks",
          copy: "Finished goods can accumulate near production lines when transport cannot keep pace with output.",
          image: {
            src: `${endOfLinePath}problem/problem-1.jpg`,
            alt: "Pallets of finished cartons piling up at the end of a production line",
          },
        },
        {
          // TODO(copy): body text for items 2–4 is not in the design (hidden layers hold another page's copy) — drafted, confirm with content team.
          title: "Forklift Congestion",
          copy: "Forklifts moving finished goods share busy aisles with people and equipment, creating traffic and safety risk around the line.",
          image: {
            src: `${endOfLinePath}problem/problem-2.jpg`,
            alt: "Forklifts carrying pallets through a congested aisle beside a packaging line",
          },
        },
        {
          title: "Labour Dependency",
          copy: "Operators are repeatedly pulled away from production and packaging to transport finished goods to downstream areas.",
          image: {
            src: `${endOfLinePath}problem/problem-3.jpg`,
            alt: "Operator pushing a cart of bins across the production floor",
          },
        },
        {
          title: "Inconsistent Material Flow",
          copy: "Irregular transport makes it hard to keep staging, storage and dispatch areas supplied at a steady, predictable rate.",
          image: {
            src: `${endOfLinePath}problem/problem-4.jpg`,
            alt: "Operator standing beside idle conveyor lines in a production facility",
          },
        },
      ],
    },
    solution: {
      kicker: "Solution",
      title: "From Production Completion To Autonomous Material Flow",
      intro:
        "Traditional end-of-line operations often depend on operators or forklifts to move finished goods between production and downstream areas.",
      workflowTitle: "Traditional Workflow",
      steps: [
        {
          title: "Production",
          copy: "Complete manufacturing and pack finished goods at the end of the line. Prepare cartons or pallets for manual transfer to the designated staging area.",
          image: {
            src: `${endOfLinePath}solution/solution-1.webp`,
            alt: "Worker stacking packed cartons onto a pallet at the end of a conveyor line",
          },
        },
        {
          title: "Manual Transport",
          copy: "Move finished goods from the production line to staging using pallet jacks, carts, or forklifts. Operators handle each transfer and keep transport routes clear.",
          image: {
            src: `${endOfLinePath}solution/solution-2.webp`,
            alt: "Worker pulling a pallet of cartons with a manual pallet jack",
          },
        },
        {
          title: "Staging",
          copy: "Hold finished goods in a staging area before storage or dispatch. Group loads by order or route, check labels, and prepare them for the next handling step.",
          image: {
            src: `${endOfLinePath}solution/solution-3.webp`,
            alt: "Worker checking wrapped pallets of cartons in a staging area",
          },
        },
        {
          title: "Storage / Dispatch",
          copy: "Move staged goods to warehouse storage or the dispatch area. Store pallets in assigned locations or load them onto vehicles for delivery to the customer.",
          image: {
            src: `${endOfLinePath}solution/solution-4.jpg`,
            alt: "Warehouse aisle with forklifts moving pallets toward storage racks and dispatch",
          },
        },
      ],
      closing:
        "ANSCER's autonomous mobile robots create a continuous transport layer between production and downstream operations. Finished goods can be moved automatically to packaging, staging, storage or dispatch while reducing manual transport dependency.",
    },
    process: {
      kicker: "End-of-Line Workflow",
      title: "A Connected Workflow From Production To Final Destination",
      intro:
        "End-of-line automation works best when robotic transport is connected directly to the systems managing production and warehouse operations.",
      image: {
        src: `${imagePath}warehouse/section-5.png`,
        alt: "Top-down facility layout showing an autonomous robot routing finished goods from production to storage and dispatch",
      },
      // TODO(copy): only step 1 is expanded in the design; body text for steps 2–6 is drafted — confirm with content team.
      steps: [
        {
          title: "Task Generation",
          copy: "Transport tasks are generated through the MES, WMS or production control system according to production and material-flow requirements.",
        },
        {
          title: "Load Handover",
          copy: "Finished pallets, bins or packaged goods are presented at the end-of-line pickup point and assigned to an available robot.",
        },
        {
          title: "Autonomous Movement",
          copy: "The robot collects the load and navigates the facility while responding to obstacles, traffic and changing operating conditions.",
        },
        {
          title: "Destination Delivery",
          copy: "Finished goods are delivered to the designated inspection, staging, storage or dispatch location.",
        },
        {
          title: "Return Movement",
          copy: "The robot can bring empty pallets or carriers back to the production line, ready for the next load.",
        },
        {
          title: "Task Completion & Continuous Operation",
          copy: "Task status is reported back to the system and the robot moves on to its next mission, keeping finished goods flowing continuously.",
        },
      ],
      cta: {
        text: "Let's identify where automated end-of-line can increase throughput, accuracy, and operational resilience.",
        label: "Talk to an expert",
        href: "/contact-us",
      },
    },
    portfolio: {
      kicker: "Product Portfolio",
      title: "Choose The Right Robot For Your End-of-Line Flow",
      intro:
        "End-of-line applications can involve different load types, payload requirements and transport distances. ANSCER's robotic platforms can be configured around the specific requirements of your production and downstream material flow.",
      items: [
        {
          name: "PSR G2G",
          copy: "A heavy-duty pallet handling AMR for automated ground-to-ground transport of open pallets.",
          href: "/products/psr/psrg2g",
          image: {
            src: `${endOfLinePath}product-portfolio/product-1.webp`,
            alt: "ANSCER PSR G2G pallet handling autonomous mobile robot",
          },
        },
        {
          name: "PSR 1000R",
          copy: "A pallet stacking AMR with extended fork reach for efficient pallet handling of open and closed pallets.",
          href: "/products/psr/psr1000r",
          image: {
            src: `${endOfLinePath}product-portfolio/product-2.webp`,
            alt: "ANSCER PSR 1000R pallet stacking autonomous mobile robot",
          },
        },
        {
          name: "AR Series + Pallet Lifter",
          copy: "Designed for efficient and reliable pallet handling of various pallet types in constrained environments.",
          href: "/products/ar",
          image: {
            src: `${endOfLinePath}product-portfolio/product-3.webp`,
            alt: "ANSCER AR Series robot with pallet lifter module",
          },
        },
        {
          name: "PSR 2000",
          copy: "A heavy-duty pallet stacking AMR for built automated pickup, lifting and placement of open pallets.",
          href: "/products/psr/psr2000",
          image: {
            src: `${endOfLinePath}product-portfolio/product-4.webp`,
            alt: "ANSCER PSR 2000 heavy-duty pallet stacking autonomous mobile robot",
          },
        },
        {
          name: "PSR 2000R",
          copy: "A pallet stacking AMR with extended fork reach for efficient pallet handling of open and closed pallets.",
          href: "/products/psr/psr2000r",
          image: {
            src: `${endOfLinePath}product-portfolio/product-5.webp`,
            alt: "ANSCER PSR 2000R pallet stacking autonomous mobile robot",
          },
        },
        {
          name: "GPR 1000",
          copy: "Designed for handling open and closed pallets in space constrained, high-throughput warehouses.",
          href: "/products/psr/gpr1000",
          image: {
            src: `${endOfLinePath}product-portfolio/product-6.webp`,
            alt: "ANSCER GPR 1000 pallet handling autonomous mobile robot",
          },
        },
      ],
    },
    applications: {
      kicker: "Application",
      title: "One Technology. Multiple End-of-Line Workflows.",
      // TODO(links): only Manufacturing has an industry page so far; point the others at theirs once they exist.
      items: [
        {
          title: "Automotive",
          href: "/contact-us",
          image: {
            src: `${endOfLinePath}application/automotive.jpg`,
            alt: "Automotive body shop with robotic welding on a vehicle assembly line",
          },
        },
        {
          title: "FMCG",
          href: "/contact-us",
          image: {
            src: `${endOfLinePath}application/fmcg.webp`,
            alt: "FMCG warehouse with shelves of packaged consumer goods",
          },
        },
        {
          title: "Manufacturing",
          href: "/manufacturing",
          image: {
            src: `${endOfLinePath}application/manufacturing.jpg`,
            alt: "Technician working at a manufacturing workstation",
          },
        },
        {
          title: "3PL",
          href: "/contact-us",
          image: {
            src: `${endOfLinePath}application/3pl.jpg`,
            alt: "Large third-party logistics warehouse with tall storage racks",
          },
        },
        {
          title: "Electronics",
          href: "/contact-us",
          image: {
            src: `${endOfLinePath}application/electronics.jpg`,
            alt: "Electronics production line with circuit boards on an automated conveyor",
          },
        },
      ],
    },
    impact: {
      kicker: "Operational Impact",
      title: "What Changes When End-of-Line Movement Becomes Autonomous?",
      items: [
        {
          title: "Reduce production bottlenecks",
          copy: "Autonomous transport continuously moves finished goods away from production lines, reducing accumulation around end-of-line areas.",
        },
        {
          title: "Maintain production continuity",
          copy: "Consistent material movement helps keep downstream operations supplied without relying on manual transport availability.",
        },
        {
          title: "Improve workplace safety",
          copy: "Reducing repetitive manual handling and unnecessary forklift movement can help create safer production and material-flow environments.",
        },
        {
          title: "Move finished goods faster",
          copy: "Autonomous robots transport pallets, bins and packaged products efficiently between production and downstream destinations.",
        },
        {
          title: "Use labour more effectively",
          copy: "Operators can focus on production, packaging and quality-related activities instead of repetitive transportation tasks.",
        },
        {
          title: "Increase operational visibility",
          copy: "Connected systems provide visibility into robot missions, task status and finished-goods movement.",
        },
        {
          title: "Optimize material flow",
          copy: "Coordinated autonomous movement reduces congestion and creates a smoother connection between production and warehouse operations.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      // TODO(copy): only the questions are in the design; answers are drafted — confirm with content team.
      items: [
        {
          question: "What is end-of-line movement?",
          answer:
            "End-of-line movement is the transport of finished goods, pallets and packaged products from the end of a production or packaging line to their next destination, such as inspection, staging, storage or dispatch.",
        },
        {
          question: "How does ANSCER automate end-of-line movement?",
          answer:
            "Transport tasks are generated by MES, WMS or production control systems. An autonomous mobile robot collects finished goods at the end of the line, navigates the facility and delivers them to the designated destination, then reports task completion.",
        },
        {
          question: "Which ANSCER robot is suitable for end-of-line movement?",
          answer:
            "The right robot depends on the load type, weight, route and workflow. Options include the PSR G2G for ground-to-ground pallet transport, the PSR 1000R, PSR 2000 and PSR 2000R for pallet stacking, AR Series robots with a pallet lifter, and the GPR 1000.",
        },
        {
          question: "Can end-of-line robots integrate with MES and WMS?",
          answer:
            "Yes. ANSCER's end-of-line workflow can be integrated with MES, WMS and production control systems so that transport tasks are generated and tracked through the existing operational process.",
        },
        {
          question: "Can robots transport empty pallets?",
          answer:
            "Yes. Robots can be assigned return tasks to bring empty pallets and carriers back to the production line so that the next load is ready for pickup.",
        },
        {
          question: "Where can finished goods be delivered?",
          answer:
            "Finished goods can be delivered to inspection points, packaging areas, staging zones, warehouse storage locations or dispatch areas, depending on how the workflow is configured.",
        },
      ],
    },
    cta: {
      title: "Keep Production Moving Beyond The Line",
      copy: "Tell us about your production process, material flow and end-of-line requirements. Our automation team can help identify the right robotic approach for moving finished goods efficiently from production to their next destination.",
      label: "Book a demo",
      href: "/contact-us",
    },
  },
  "point-to-point-movement": {
    slug: "point-to-point-movement",
    hero: {
      title: "Autonomous Point-to-Point Material Flow Movement",
      copy: "Move materials seamlessly between production lines, storage zones, conveyors and workstations with autonomous mobile robots designed for continuous internal transport.",
      image: {
        src: `${pointToPointPath}hero-banner.webp`,
        alt: "ANSCER PSR G2G autonomous pallet robot carrying a pallet of cartons across a facility",
      },
      primaryCta: { label: "Talk to an expert", href: "/contact-us" },
      secondaryCta: { label: "Explore", href: "#overview" },
      stats: sharedStats,
    },
    overview: {
      kicker: "Overview",
      title: "Connect Every Movement In Your Material Flow",
      image: {
        src: `${pointToPointPath}overview.webp`,
        alt: "ANSCER AR Series robot with belt conveyor carrying a carton between workstations",
      },
      paragraphs: [
        "Point-to-point movement connects the different stages of warehouse and manufacturing operations—from storage and production to assembly, inspection, packaging and dispatch. Instead of relying on forklifts, carts or operators for every transport journey, autonomous robots can take over repetitive movement between defined operational points.",
      ],
      callout: [
        { text: "People focus. " },
        { text: "Robots move", emphasis: true },
        { text: ". Systems coordinate." },
      ],
      closing:
        "ANSCER connects robotic transport with your existing warehouse, production and automation systems to create a more consistent and connected material flow.",
    },
    problem: {
      kicker: "Problem",
      title: "When Internal Transport Slows Down Production",
      intro:
        "Frequent movement between workstations, storage areas and production lines can become a hidden source of delays. Manual transport creates dependencies on operators and vehicles, while increasing traffic and making material flow harder to coordinate.",
      items: [
        {
          title: "Manual Transport Dependency",
          copy: "Forklifts, carts and operators are repeatedly required to move materials between fixed locations.",
          image: {
            src: `${pointToPointPath}problem/problem-1.jpg`,
            alt: "Operator pushing a loaded cart down a warehouse aisle while a forklift moves pallets behind",
          },
        },
        {
          // TODO(copy): body text for items 2–4 is not in the design (hidden layers hold another page's copy) — drafted, confirm with content team.
          title: "Production Delays",
          copy: "Workstations wait for materials when transport is not available at the right moment, interrupting production schedules.",
          image: {
            src: `${pointToPointPath}problem/problem-2.jpg`,
            alt: "Operator waiting beside empty workstations and an unused material table",
          },
        },
        {
          title: "High Traffic & Congestion",
          copy: "Forklifts, carts and people share the same aisles, creating traffic and safety risk between operational points.",
          image: {
            src: `${pointToPointPath}problem/problem-3.jpg`,
            alt: "Forklift carrying a pallet through a busy aisle beside carts and storage racks",
          },
        },
        {
          title: "Inconsistent Material Flow",
          copy: "Irregular, manually scheduled transport makes it difficult to keep materials moving at a steady, predictable rate.",
          image: {
            src: `${pointToPointPath}problem/problem-4.jpg`,
            alt: "Idle conveyor and empty pallet in a quiet production area",
          },
        },
      ],
    },
    solution: {
      kicker: "Solution",
      title: "From Manual Transport To Connected Material Flow",
      intro:
        "Traditional point-to-point movement depends on operators or vehicles to repeatedly transport materials between predefined locations.",
      workflowTitle: "Traditional Workflow",
      steps: [
        {
          title: "Pick",
          copy: "Pick the required materials from storage, check quantities against the work order, and load them onto a cart for delivery to the workstation.",
          image: {
            src: `${pointToPointPath}solution/solution-1.jpg`,
            alt: "Worker picking materials from storage shelves onto a cart",
          },
        },
        {
          title: "Manual Transport",
          copy: "An operator manually moves the loaded cart from storage to the workstation, making a separate point-to-point trip for each material delivery.",
          image: {
            src: `${pointToPointPath}solution/solution-2.jpg`,
            alt: "Worker pushing a cart of material crates across the warehouse floor",
          },
        },
        {
          title: "Workstation",
          copy: "Unload the materials at the workstation for production. Once the task is complete, collect empty containers and any unused items for return.",
          image: {
            src: `${pointToPointPath}solution/solution-3.jpg`,
            alt: "Worker unloading crates from a cart at a production workstation",
          },
        },
        {
          title: "Manual Return",
          copy: "The operator manually returns the cart, empty containers, and unused materials to storage, then repeats the trip for the next delivery.",
          image: {
            src: `${pointToPointPath}solution/solution-4.jpg`,
            alt: "Worker pulling a cart of empty crates back toward storage",
          },
        },
      ],
      closing:
        "ANSCER's autonomous mobile robots automate material movement between connected operational points, creating a repeatable transport cycle with minimal operator involvement.",
    },
    process: {
      kicker: "Point-to-Point Workflow",
      title: "A Connected Workflow From Task Generation To Material Delivery",
      intro:
        "Point-to-point automation becomes more effective when robotic transport is integrated into the existing production and warehouse execution system.",
      image: {
        src: `${imagePath}warehouse/section-5.png`,
        alt: "Top-down facility layout showing an autonomous robot moving materials between connected operational points",
      },
      // TODO(copy): only step 1 is expanded in the design; body text for steps 2–6 is drafted — confirm with content team.
      steps: [
        {
          title: "Task Generation",
          copy: "Transport tasks are generated through the WMS, MES, PLC or production control system based on the operational requirement.",
        },
        {
          title: "Material Loading",
          copy: "Materials are loaded onto the robot at the pickup point manually, by conveyor transfer or through an automated lifting module.",
        },
        {
          title: "Autonomous Movement",
          copy: "The robot navigates to its destination while responding to obstacles, traffic and changing operating conditions.",
        },
        {
          title: "Destination Transfer",
          copy: "Materials are transferred to the destination workstation, conveyor, storage location or production point.",
        },
        {
          title: "Task Completion",
          copy: "Task status is reported back to the connected system, keeping material movement visible and traceable.",
        },
        {
          title: "Continuous Operation",
          copy: "The robot moves on to its next mission or returns empty containers, creating a repeatable transport cycle.",
        },
      ],
      cta: {
        text: "Let's identify where automated point-to-point can increase throughput, accuracy, and operational resilience.",
        label: "Talk to an expert",
        href: "/contact-us",
      },
    },
    portfolio: {
      kicker: "Product Portfolio",
      title: "The Right Robot For Connected Material Movement",
      intro:
        "Different point-to-point applications require different payload capacities, configurations and material-handling approaches. ANSCER robotic platforms can be configured around the requirements of your facility.",
      items: [
        {
          name: "AGV 100",
          copy: "A compact, QR-guided AGV designed for fast and reliable point-to-point material transport for high throughput operations.",
          href: "/products/agv/agv100",
          image: {
            src: `${pointToPointPath}product-portfolio/product-1.webp`,
            alt: "ANSCER AGV 100 compact QR-guided automated guided vehicle",
          },
        },
        {
          name: "AR Series + Belt Conveyor",
          copy: "Designed for flexible load transfer to and from workstations, enabling seamless integration with production.",
          href: "/products/ar",
          image: {
            src: `${pointToPointPath}product-portfolio/product-2.webp`,
            alt: "ANSCER AR Series robot with belt conveyor top module",
          },
        },
        {
          name: "PSR G2G",
          copy: "A heavy-duty pallet handling AMR for automated ground-to-ground transport of open pallets.",
          href: "/products/psr/psrg2g",
          image: {
            src: `${pointToPointPath}product-portfolio/product-3.webp`,
            alt: "ANSCER PSR G2G pallet handling autonomous mobile robot",
          },
        },
        {
          name: "ATR 1000",
          copy: "Designed for optimization of material flow with 360° on-the-spot rotation for precise load orientation.",
          href: "/products/ar/atr1000",
          image: {
            src: `${pointToPointPath}product-portfolio/product-4.webp`,
            alt: "ANSCER ATR 1000 autonomous transport robot with rotating top",
          },
        },
      ],
    },
    applications: {
      kicker: "Application",
      title: "One Technology. Multiple Point-to-Point Workflows.",
      // TODO(links): only Manufacturing has an industry page so far; point the others at theirs once they exist.
      items: [
        {
          title: "Automotive",
          href: "/contact-us",
          image: {
            src: `${pointToPointPath}application/automotive.jpg`,
            alt: "Automotive body shop with robotic welding on a vehicle assembly line",
          },
        },
        {
          title: "3PL",
          href: "/contact-us",
          image: {
            src: `${pointToPointPath}application/3pl.jpg`,
            alt: "Large third-party logistics warehouse with tall storage racks",
          },
        },
        {
          title: "Manufacturing",
          href: "/manufacturing",
          image: {
            src: `${pointToPointPath}application/manufacturing.jpg`,
            alt: "Technician working at a manufacturing workstation",
          },
        },
      ],
    },
    impact: {
      kicker: "Operational Impact",
      title: "What Changes When Point-to-Point Movement Becomes Autonomous?",
      items: [
        {
          title: "Reduce manual transport",
          copy: "Robots handle repetitive movement between workstations, storage areas and production points.",
        },
        {
          title: "Maintain continuous material flow",
          copy: "Automated transport helps keep materials moving consistently between connected operations.",
        },
        {
          title: "Reduce production interruptions",
          copy: "Reliable transport helps minimize delays caused by waiting for materials or manual transport availability.",
        },
        {
          title: "Improve workplace safety",
          copy: "Reducing repetitive manual handling and unnecessary forklift traffic can support safer operating environments.",
        },
        {
          title: "Improve material-flow visibility",
          copy: "Connected systems provide visibility into robot missions, task status and material movement.",
        },
        {
          title: "Use labour more effectively",
          copy: "Operators can focus on production, assembly and quality activities instead of repetitive transport.",
        },
        {
          title: "Scale with demand",
          copy: "Additional robotic capacity can be introduced as transport volumes and operational requirements increase.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      // TODO(copy): only the questions are in the design; answers are drafted — confirm with content team.
      items: [
        {
          question: "What is point-to-point material movement?",
          answer:
            "Point-to-point material movement is the transport of materials between defined operational locations—such as storage areas, production lines, conveyors, workstations, inspection and dispatch points.",
        },
        {
          question: "What materials can ANSCER robots transport?",
          answer:
            "Depending on the robot configuration, ANSCER robots can transport bins, totes, cartons, trolleys, racks, pallets and other material carriers.",
        },
        {
          question: "Can ANSCER AMRs connect with conveyors?",
          answer:
            "Yes. AR Series robots fitted with a roller or belt conveyor module can transfer loads directly to and from fixed conveyors and workstations.",
        },
        {
          question: "Can the robots integrate with WMS or MES?",
          answer:
            "Yes. Transport tasks can be generated and tracked through WMS, MES, PLC or production control systems so that robotic movement fits into the existing operational process.",
        },
        {
          question: "Can empty containers be transported automatically?",
          answer:
            "Yes. Robots can be assigned return tasks to collect empty bins, totes, pallets or carriers and bring them back to storage or replenishment areas.",
        },
        {
          question: "Can point-to-point automation work in dynamic environments?",
          answer:
            "Yes. ANSCER robots are designed to navigate facilities where people, forklifts and other equipment are moving, responding to obstacles and traffic as they travel.",
        },
      ],
    },
    cta: {
      title: "Connect Every Point In Your Material Flow",
      copy: "Tell us about your production lines, workstations, conveyors and transport requirements. Our automation team can help design the right autonomous point-to-point movement workflow for your facility.",
      label: "Book a demo",
      href: "/contact-us",
    },
  },
  "work-in-progress": {
    slug: "work-in-progress",
    hero: {
      title: "Autonomous WIP Movement For Continuous Production",
      copy: "Automate the movement of work-in-progress materials between production, assembly, inspection, staging and storage with autonomous mobile robots to keep materials flowing efficiently across your facility.",
      image: {
        src: `${workInProgressPath}hero-banner.webp`,
        alt: "ANSCER AR Series robot with tugger attachment towing a trolley of work-in-progress materials across a production floor",
      },
      primaryCta: { label: "Talk to an expert", href: "/contact-us" },
      secondaryCta: { label: "Explore", href: "#overview" },
      stats: sharedStats,
    },
    overview: {
      kicker: "Overview",
      title: "Keep Work-in-Progress Moving Between Every Stage",
      image: {
        src: `${workInProgressPath}overview.webp`,
        alt: "ANSCER ATR 1000 robot carrying a carton past production conveyors",
      },
      paragraphs: [
        "Work-in-progress materials frequently move between production lines, assembly, inspection, staging, and storage. When operators, carts, or forklifts handle these moves, valuable production time is lost. ANSCER automates repetitive WIP transportation so materials can move between workstations with less manual intervention.",
      ],
      callout: [
        { text: "People focus. " },
        { text: "Robots move", emphasis: true },
        { text: ". Software coordinates." },
      ],
      closing:
        "From bins and totes to cartons, components and trolleys, the LBR 500 helps maintain a continuous flow of materials throughout the facility.",
    },
    problem: {
      kicker: "Problem",
      title: "When WIP Movement Slows Production",
      intro:
        "As production processes become more complex, materials must move continuously between multiple workstations and operational zones. Manual transportation can introduce delays, congestion and unnecessary labor dependency.",
      items: [
        {
          title: "Manual Material Transport",
          copy: "Operators spend valuable time moving WIP between production and operational areas.",
          image: {
            src: `${workInProgressPath}problem/problem-1.jpg`,
            alt: "Operator pushing a cart of stacked bins across an empty production floor",
          },
        },
        {
          // TODO(copy): body text for items 2–4 is not in the design — drafted, confirm with content team.
          title: "Production Delays",
          copy: "Workstations sit idle waiting for materials when WIP is not moved to the next stage on time.",
          image: {
            src: `${workInProgressPath}problem/problem-2.jpg`,
            alt: "Operator waiting at a workstation beside an empty roller conveyor",
          },
        },
        {
          title: "Forklift Traffic",
          copy: "Forklifts moving WIP through shared aisles add congestion and safety risk around people and production areas.",
          image: {
            src: `${workInProgressPath}problem/problem-3.jpg`,
            alt: "Forklifts carrying loads through busy production aisles alongside workers",
          },
        },
        {
          title: "Inconsistent Material Flow",
          copy: "Irregular, manually scheduled moves make it difficult to keep WIP flowing at a steady, predictable rate between stages.",
          image: {
            src: `${workInProgressPath}problem/problem-4.jpg`,
            alt: "Carts of bins scattered between workstations on a busy production floor",
          },
        },
      ],
    },
    solution: {
      kicker: "Solution",
      title: "From Manual WIP Transport To Continuous Material Flow",
      intro:
        "Traditional WIP movement often depends on operators manually transporting materials between production stages, creating unnecessary travel and interruptions.",
      workflowTitle: "Traditional Workflow",
      steps: [
        {
          title: "Initial Production",
          copy: "Complete the first production stage. Collect work-in-progress items in containers, ready for transfer to the next workstation.",
          image: {
            src: `${workInProgressPath}solution/solution-1.jpg`,
            alt: "Operator collecting machined parts into a bin at a CNC machine",
          },
        },
        {
          title: "Transport & Staging",
          copy: "An operator manually moves WIP to the staging area, where it waits until the next production stage is ready to begin.",
          image: {
            src: `${workInProgressPath}solution/solution-2.jpg`,
            alt: "Operator pulling a cart of stacked bins toward a staging area",
          },
        },
        {
          title: "Production",
          copy: "Move staged WIP to the next workstation for further production.",
          image: {
            src: `${workInProgressPath}solution/solution-3.jpg`,
            alt: "Operator working on parts at the next production workstation",
          },
        },
        {
          title: "Storage",
          copy: "Transfer inspected items to storage. Keep them organized and ready for the next process or dispatch, completing the WIP cycle.",
          image: {
            src: `${workInProgressPath}solution/solution-4.jpg`,
            alt: "Operator placing a bin of finished parts onto a storage rack",
          },
        },
      ],
      closing:
        "ANSCER's robots automate repetitive work-in-progress (WIP) transportation, moving materials between workstations across warehouse and manufacturing environments.",
    },
    process: {
      kicker: "Work-in-Progress Workflow",
      title: "A Connected Workflow From Task Generation To WIP Delivery",
      intro:
        "WIP automation becomes more effective when robotic transport is connected directly with production and warehouse execution systems.",
      image: {
        src: `${imagePath}warehouse/section-5.png`,
        alt: "Top-down facility layout showing an autonomous robot moving work-in-progress between production stages",
      },
      // TODO(copy): only step 1 is expanded in the design; body text for steps 2–6 is drafted — confirm with content team.
      steps: [
        {
          title: "Task Generation",
          copy: "Transport tasks are generated through the MES, WMS or production control system based on production requirements.",
        },
        {
          title: "Material Handover",
          copy: "WIP is handed over to the robot at the source workstation in bins, totes, cartons or trolleys.",
        },
        {
          title: "Autonomous Movement",
          copy: "The robot navigates to the next production stage while responding to people, forklifts and changing floor conditions.",
        },
        {
          title: "Workstation Delivery",
          copy: "Materials are delivered to the destination workstation, inspection area or staging point when they are needed.",
        },
        {
          title: "Return Movement",
          copy: "Empty containers and trolleys are collected and returned to their source, ready for the next cycle.",
        },
        {
          title: "Task Completion & Continuous Operation",
          copy: "Task status is reported back to the connected system and the robot moves on to its next mission, keeping WIP flowing.",
        },
      ],
      cta: {
        text: "Let's identify where automated WIP movement can increase throughput, accuracy, and operational resilience.",
        label: "Talk to an expert",
        href: "/contact-us",
      },
    },
    portfolio: {
      kicker: "Product Portfolio",
      title: "Built For Flexible Work-in-Progress Movement",
      intro:
        "The LBR 500 is designed to automate repetitive WIP movement across warehouse environments, helping teams streamline the movement of work in progress between production stages.",
      items: [
        {
          name: "LBR 500",
          copy: "A compact, free-lift AMR designed for handling diverse trolleys in low-clearance environments.",
          href: "/products/psr/lbr500",
          image: {
            src: `${workInProgressPath}product-portfolio/product-1.webp`,
            alt: "ANSCER LBR 500 compact free-lift autonomous mobile robot",
          },
        },
        {
          name: "AR Series + Manual Tugger",
          copy: "Designed for operator-assisted multi-trolley transport across production and warehouse environments.",
          href: "/products/ar",
          image: {
            src: `${workInProgressPath}product-portfolio/product-2.webp`,
            alt: "ANSCER AR Series robot with manual tugger attachment",
          },
        },
        {
          name: "AR Series + Auto Tugger",
          copy: "Designed for automated trolley handling across production and warehouse environments.",
          href: "/products/ar",
          image: {
            src: `${workInProgressPath}product-portfolio/product-3.webp`,
            alt: "ANSCER AR Series robot with automatic tugger attachment",
          },
        },
        {
          name: "AR Series + Shelf Lifter",
          copy: "Designed for lifting and transporting a variety of payloads in dense layouts with dynamic material flows.",
          href: "/products/ar",
          image: {
            src: `${workInProgressPath}product-portfolio/product-4.webp`,
            alt: "ANSCER AR Series robot with shelf lifter top module",
          },
        },
        {
          name: "ATR 1000",
          copy: "Designed for optimization of material flow with 360° on-the-spot rotation for precise load orientation.",
          href: "/products/ar/atr1000",
          image: {
            src: `${workInProgressPath}product-portfolio/product-5.webp`,
            alt: "ANSCER ATR 1000 autonomous transport robot with rotating top",
          },
        },
        {
          name: "AR Series + Roller Conveyor",
          copy: "Designed for precise transfer of loads to and from workstations, enabling seamless integration with production.",
          href: "/products/ar",
          image: {
            src: `${workInProgressPath}product-portfolio/product-6.webp`,
            alt: "ANSCER AR Series robot with roller conveyor top module",
          },
        },
        {
          name: "AR Series + Belt Conveyor",
          copy: "Designed for flexible load transfer to and from workstations, enabling seamless integration with production.",
          href: "/products/ar",
          image: {
            src: `${workInProgressPath}product-portfolio/product-7.webp`,
            alt: "ANSCER AR Series robot with belt conveyor top module",
          },
        },
        {
          name: "AR Series + Cobot",
          copy: "Designed for collaborative automation workflows through seamless cobot integration.",
          href: "/products/ar",
          image: {
            src: `${workInProgressPath}product-portfolio/product-8.webp`,
            alt: "ANSCER AR Series robot with a collaborative robot arm mounted on top",
          },
        },
      ],
    },
    applications: {
      kicker: "Application",
      title: "One Solution. Multiple Production Workflows.",
      // TODO(links): only Manufacturing has an industry page so far; point 3PL at its page once it exists.
      items: [
        {
          title: "3PL",
          href: "/contact-us",
          image: {
            src: `${workInProgressPath}application/3pl.jpg`,
            alt: "Large third-party logistics warehouse with tall storage racks",
          },
        },
        {
          title: "Manufacturing",
          href: "/manufacturing",
          image: {
            src: `${workInProgressPath}application/manufacturing.jpg`,
            alt: "Technician working at a manufacturing workstation",
          },
        },
      ],
    },
    impact: {
      kicker: "Operational Impact",
      title: "What Changes When WIP Movement Becomes Autonomous?",
      items: [
        {
          title: "Reduce material handling delays",
          copy: "Automate repetitive transportation between production, inspection, staging and storage areas to keep materials moving.",
        },
        {
          title: "Maintain continuous WIP flow",
          copy: "Support uninterrupted movement of bins, totes, cartons, components and assemblies between production stages.",
        },
        {
          title: "Improve production coordination",
          copy: "Deliver materials to the right workstation at the required time, helping production and inspection processes stay connected.",
        },
        {
          title: "Reduce manual transport dependency",
          copy: "Move repetitive WIP transportation tasks from operators to autonomous robots.",
        },
        {
          title: "Improve operational visibility",
          copy: "Connected software provides visibility into WIP movement, task status and material-flow activity.",
        },
        {
          title: "Reduce vehicle traffic",
          copy: "Automated WIP transport can reduce unnecessary forklift and manual vehicle movement around production areas.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      // TODO(copy): only the questions are in the design; answers are drafted — confirm with content team.
      items: [
        {
          question: "What is work-in-progress movement?",
          answer:
            "Work-in-progress (WIP) movement is the transport of semi-finished goods, components and materials between production stages—such as production lines, assembly, inspection, staging and storage areas.",
        },
        {
          question: "What materials can the LBR 500 transport?",
          answer:
            "The LBR 500 can transport trolleys carrying bins, totes, cartons, components and assemblies, making it suited to a wide range of WIP materials.",
        },
        {
          question: "Can LBR 500 work with existing trolleys?",
          answer:
            "Yes. The LBR 500 is a free-lift AMR designed to handle diverse trolleys, so it can typically work with your existing trolleys with minimal modification. Our team assesses your trolley dimensions and loads during planning.",
        },
        {
          question: "Where can LBR 500 be used?",
          answer:
            "The LBR 500 is designed for manufacturing and warehouse environments, including low-clearance areas, where WIP needs to move between production, assembly, inspection, staging and storage.",
        },
        {
          question: "Can WIP tasks be integrated with MES or WMS?",
          answer:
            "Yes. Transport tasks can be generated and tracked through MES, WMS or production control systems so robotic WIP movement fits into your existing production process.",
        },
        {
          question: "Can the robot handle return materials?",
          answer:
            "Yes. Robots can be assigned return tasks to bring empty containers, trolleys and unused materials back to their source or storage area.",
        },
      ],
    },
    cta: {
      title: "Keep Your Production Flow Moving",
      copy: "Tell us about your production process, material flow and WIP transportation requirements. Our automation team can help identify the right approach for automating repetitive material movement.",
      label: "Book a demo",
      href: "/contact-us",
    },
  },
} satisfies Record<string, WarehouseSolutionPageData>;

export type WarehouseSolutionSlug = keyof typeof warehouseSolutions;
