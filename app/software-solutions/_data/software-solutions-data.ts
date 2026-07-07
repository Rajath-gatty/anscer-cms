import type { LucideIcon } from "lucide-react";
import {
  CircleUserRound,
  Expand,
  Factory,
  Gauge,
  Layers,
  LayoutGrid,
  Network,
  PlugZap,
  ShieldCheck,
  TrendingUp,
  Workflow,
} from "lucide-react";

export type FleetBenefit = {
  title: string;
  copy: string;
  icon: LucideIcon;
  isActive?: boolean;
  position: string;
};

export type CapabilityItem = {
  title: string;
  copy: string;
  image: string;
};

export const fleetBenefits: FleetBenefit[] = [
  {
    title: "Centralized Fleet Control",
    copy: "Manage multiple robots and workflows from a single unified platform.",
    icon: Network,
    position: "left-[0%] top-[89px]",
  },
  {
    title: "Scalable Automation",
    copy: "Easily expand robot fleets and operational workflows as facility requirements grow.",
    icon: Expand,
    position: "left-[33.08%] top-[179px]",
  },
  {
    title: "Flexible Integration",
    copy: "Supports integration with MES, WMS, ERP, and other industrial software systems.",
    icon: PlugZap,
    position: "left-[64.62%] top-[89px]",
  },
  {
    title: "Enhanced Safety",
    copy: "Controlled robot traffic flow reduces congestion and improves operational safety within shared environments.",
    icon: ShieldCheck,
    position: "left-[0%] top-[370px]",
  },
  {
    title: "User-Friendly Operation",
    copy: "The intuitive web-based interface simplifies fleet management for operators and supervisors without requiring advanced technical expertise.",
    icon: LayoutGrid,
    position: "left-[32.31%] top-[456px]",
  },
  {
    title: "Improved Operational Efficiency",
    copy: "Optimize robot utilization and availability through automated opportunistic charging and intelligent task scheduling.",
    icon: Gauge,
    position: "left-[64.62%] top-[376px]",
  },
];

export const fleetCapabilities: CapabilityItem[] = [
  {
    title: "Multi-Robot Traffic Control",
    copy: "Coordinate and manage the movement of multiple robots operating simultaneously within the same environment. The ANSCER FMS intelligently controls robot traffic, optimizes routing paths, prevents congestion, and ensures safe navigation throughout the facility.",
    image: "software_Multi-Robot_Traffic_Control.png",
  },
  {
    title: "Intelligent Task Allocation",
    copy: "Automatically assign transport missions and operational tasks to available robots based on factors such as robot location, battery status, workload, and task priority. This ensures balanced fleet utilization and optimized operational efficiency.",
    image: "software_intelligent_task_allocations.png",
  },
  {
    title: "Charging Management",
    copy: "Maintain continuous robot availability with automated charging management. The system monitors robot battery levels in real time and autonomously dispatches robots to charging stations when required, minimizing downtime and maximizing operational uptime.",
    image: "software_charging-management.png",
  },
  {
    title: "Mission Scheduling & Execution",
    copy: "Configure, schedule, and monitor robot missions through a centralized management interface. Users can create transport workflows, assign priorities, and track mission execution across the entire fleet.",
    image: "software_mission_scheduling_execution.png",
  },
  {
    title: "Autonomous Fleet Orchestration",
    copy: "Manage robot operations autonomously across production lines, warehouses, staging zones, and logistics areas. The FMS coordinates robot activities to ensure smooth material flow and uninterrupted operations.",
    image: "software_Autonomous_Fleet_Orchestration.png",
  },
  {
    title: "Real-Time Monitoring & Control",
    copy: "Gain complete visibility into fleet performance through live dashboards and operational monitoring tools. Track robot status, mission progress, traffic flow, and system health in real time.",
    image: "software_realtimme_monitoring_control.png",
  },
  {
    title: "Web-Based User Interface",
    copy: "Access the ANSCER FMS through a modern browser-based interface without requiring specialized software installation. The platform is compatible with Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari",
    image: "Frame-1321317428.jpg",
  },
];

export const businessCapabilities: CapabilityItem[] = [
  {
    title: "Workflow Orchestration",
    copy: "Configure and manage operational workflows with ease. The platform translates business processes into structured robotic task sequences",
    image: "Rectangle-18010.png",
  },
  {
    title: "Industry-Specific Customization",
    copy: "Adapt workflows to meet the operational requirements of industries including Electrical & Electronics, Automotive, Textile, Warehousing & 3PL, and Pharmaceuticals.",
    image: "Rectangle-18007-1.png",
  },
  {
    title: "Intuitive User Experience",
    copy: "Simplify automation for operators with user-friendly interfaces, calling stations, dashboards, and APIs that enable single-click task execution without requiring technical expertise.",
    image: "Rectangle-18008.png",
  },
  {
    title: "Task Abstraction",
    copy: "Convert high-level operational commands into executable robotic actions, including navigation, routing, material handling, load transfers, and workflow-driven task execution.",
    image: "Rectangle-18009.png",
  },
];

export const fleetHighlights = [
  {
    title: "Centralized Visibility and Control:",
    copy: "Monitor and manage robot fleets through a unified platform that optimizes traffic flow, task execution, and robot availability.",
    icon: Network,
  },
  {
    title: "Synchronized Fleet Operations:",
    copy: "Coordinate individual robot actions into facility-wide operations that enhance efficiency, safety, and productivity.",
    icon: TrendingUp,
  },
] as const;

export const processBenefitCards = [
  {
    title: "Flexible Workflow Configuration",
    copy: "Create and modify process flows quickly to adapt to changing operational requirements.",
    icon: Layers,
  },
  {
    title: "Industry-Specific Adaptability",
    copy: "Support diverse material handling workflows across manufacturing, warehousing, and logistics environments.",
    icon: Factory,
  },
  {
    title: "Simplified Automation",
    copy: "Transform complex operational activities into easy-to-manage robotic workflows.",
    icon: Workflow,
  },
  {
    title: "Scalable Operations",
    copy: "Standardize and replicate workflows across multiple plants, production lines, or facilities.",
    icon: Network,
  },
  {
    title: "Reduced Operational Dependency",
    copy: "Minimize manual coordination and improve process consistency through automated task execution.",
    icon: CircleUserRound,
  },
] as const;

export const businessApplicationModule = {
  id: "business-application",
  index: "02",
  title: "Business Application",
  intro:
    "Transform business logic into structured automated workflows that seamlessly integrate with robotic operations.",
  image: "Frame-1321317433.png",
  body: "The ANSCER Business Application Layer bridges operational requirements and robotic execution, translating business processes into executable robotic workflows. Built on a library of configurable, industry-specific applications, it enables operators to interact through familiar business actions while automatically managing workflow execution and robot coordination. Organizations can automate material movement without complex software development or extensive engineering effort.",
  chipsTitle: "Supported Industries",
  chips: [
    "Electrical & Electronics",
    "Automotive",
    "Textile",
    "Warehousing & 3PL",
    "Pharmaceuticals",
  ],
} as const;

export const processFlowManagerModule = {
  id: "process-flow-manager",
  index: "03",
  title: "Process Flow Manager",
  intro:
    "Build, configure, and modify robot workflows using a visual drag-and-drop interface without writing code.",
  image: "Frame-1321317565.png",
  body: "The Process Flow Manager enables users to create, configure, and modify operational workflows for different business use cases within a facility. Designed for industries such as electrical & electronics, textiles, industrial automation, warehousing, and 3PL, the platform helps standardize and automate repetitive material handling operations across facilities.",
  chipsTitle: "Key Features",
  chips: [
    "Drag & Drop Configuration",
    "No-Code Logic Design",
    "Visual Workflow Builder",
    "Multi-Robot Coordination",
  ],
} as const;
