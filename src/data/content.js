export const ABOUT_CONTENT = {
  title: "Securing Strategic Connectivity",

  description:
    "Qbit Labs is an R&D-driven engineering company focused on building advanced communication and computing systems for defence and industrial applications.",

  mission:
    "Our mission is to build reliable, high-performance communication and computing systems for critical environments. We focus on solving real-world challenges in defence, networking, and industrial systems where performance, security, and determinism are non-negotiable.",

  vision:
    "We aim to enable technological self-reliance by developing indigenous solutions in advanced computing, networking, and secure communication systems. Our vision is to bridge the gap between cutting-edge research and deployable real-world systems.",

  team:
    "Qbit Labs is built by engineers and researchers focused on solving complex system-level challenges. Our team works across domains including FPGA design, networking systems, AI/ML, and embedded technologies. We believe in deep engineering, practical innovation, and long-term system reliability.",

  work: [
    "High-speed networking systems",
    "Time-sensitive networking (TSN) solutions",
    "SmartNIC and FPGA-based acceleration systems",
    "Satellite communication systems",
    "Quantum-safe and AI-enabled computing solutions"
  ],

  highlights: [
    "Quantum Technologies",
    "Artificial Intelligence & Machine Learning",
    "Industrial IoT",
    "Networking & Telecom",
    "Defence & Aerospace"
  ]
};

export const FOUNDERS = [
  {
    name: "Pradeep Kumar",
    role: "Founder & CEO",
    desc: "Leads vision and system architecture with focus on defence-grade communication and computing systems.",
    image: "/founders/pk.JPG"
  },
  {
    name: "Pradeep Aggarwal",
    role: "Co-Founder & CTO",
    desc: "Drives engineering, FPGA systems, and high-performance networking solutions.",
    image: "/founders/pa.JPG"
  },
  {
    name: "Vivek Mani Tiwari",
    role: "VP",
    desc: "Drives engineering, FPGA systems, and high-performance networking solutions.",
    image: "/founders/vm.JPG"
  },
  {
    name: "Kapil Gupta",
    role: "R&D director",
    desc: "Drives engineering, FPGA systems, and high-performance networking solutions.",
    image: "/founders/kp.JPG"
  }
];

export const HERO_CONTENT = {
  heading: "Engineering the Future of Secure Systems",
  subheading:
    "Advanced Networking · Defence Systems · AI/ML · Quantum Technologies",
  tagline:
    "Building high-performance, mission-critical systems for real-world deployment."
};

export const VALUE_PROPS = [
  {
    title: "Smart Solutions",
    desc: "We identify and solve complex challenges proactively."
  },
  {
    title: "Certified Experts",
    desc: "Highly experienced engineers with deep domain expertise."
  },
  {
    title: "Innovation & Adaptability",
    desc: "Constantly evolving with cutting-edge technologies."
  }
];

export const HERO_ASSETS = {
  visual: "/hero/defence-tech.jpg"
};

export const SOLUTIONS_DATA = [
  {
    id: "quantum",
    title: "Quantum Computing",
    problem:
      "Traditional encryption systems are vulnerable to future quantum attacks.",
    solution:
      "We provide post-quantum cryptography solutions using lattice-based algorithms for long-term security."
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    problem:
      "Organizations struggle to process large-scale data efficiently and make intelligent decisions.",
    solution:
      "Our AI/ML systems leverage deep learning and NLP to automate workflows and enable predictive insights."
  },
  {
    id: "network",
    title: "Networking & Telecom",
    problem:
      "Modern networks require ultra-fast, secure, and scalable communication systems.",
    solution:
      "We develop high-speed networking solutions including smart NICs and secure protocol systems."
  },
  {
    id: "defence",
    title: "Defence & Aerospace",
    problem:
      "Mission-critical systems demand real-time processing and absolute reliability.",
    solution:
      "Our FPGA-based solutions ensure deterministic performance for defence-grade applications."
  },
  {
    id: "iot",
    title: "IoT Systems",
    problem:
      "Industries lack real-time data monitoring and automation capabilities.",
    solution:
      "We build smart IoT ecosystems that collect, process, and analyze real-time data efficiently."
  }
];

export const PARTNERS = [
  { name: "BHEL", logo: "/partners/BHEL.png" },
  { name: "Intel", logo: "/partners/intel.png" },
  { name: "AMD", logo: "/partners/amd.png" },
  { name: "IDRA", logo: "/partners/idra.png" },
  { name: "IAF", logo: "/partners/Indian_Air_Force.png" },
  { name: "INF", logo: "/partners/Indian_Navy.png" },
  { name: "ARMY", logo: "/partners/Indian-army.png" },
  { name: "LATTICE", logo: "/partners/lattice_logo.png" },
  { name: "SAC", logo: "/partners/sac.png" }
];

// ─────────────────────────────────────────────
//  PRODUCT CATEGORIES
//  id values here MUST match PRODUCT_DETAILS keys
// ─────────────────────────────────────────────
export const PRODUCT_CATEGORIES = [

  {
    name: "IP Core",
    products: [
      { id: "ip1", name: "TCP IP Offload Engine", brochure: "/brochures/ip-core/1G10G TCP IP Offload Engine (1).pdf" },
      { id: "ip2", name: "LDPC Codec", brochure: "/brochures/ip-core/LDPC CODEC.pdf" },
      { id: "ip3", name: "Redundant Ethernet", brochure: "/brochures/ip-core/Redundant Ethernet.pdf" }
    ]
  },

  {
    name: "TSN",
    products: [
      { id: "tsn1", name: "Determinism in TSN White Paper", brochure: "/brochures/tsn/Determinism in TSN White Paper.pdf" },
      { id: "din-switch", name: "DIN Mounted Industrial Switch", brochure: "/brochures/tsn/DIN Mounted Industrial Switch.pdf" },
      { id: "tsn3", name: "TSN ATE Tester Proposal", brochure: "/brochures/tsn/QBit_TSN_ATE_Tester_Proposal_for_NI_compliance updated.pdf" },
      { id: "tsn4", name: "TSN Conformance Tester Proposal", brochure: "/brochures/tsn/QBitTSNConformance Tester Proposal for NI compliance.pdf" },
      { id: "qbl-net", name: "QBL-NET-X1000 Compact TSN Network", brochure: "/brochures/tsn/QBL-NET-X1000 Compact TSN Network Tester.pdf" },
      { id: "tsn-ep-nic", name: "TSN End Point PCIe NIC", brochure: "/brochures/tsn/TSN END POINT PCIe NIC.pdf" },
      { id: "tsn7", name: "TSN End Point System", brochure: "/brochures/tsn/TSN End Point System.pdf" },
      { id: "qsxg24", name: "TSN Ethernet Switch QSXG24-Mil", brochure: "/brochures/tsn/TSN ETHERNET SWITCH (QSXG24)-Mil.pdf" },
      { id: "qsxg4", name: "TSN Ethernet Switch QSXG4-I", brochure: "/brochures/tsn/TSN ETHERNET SWITCH QSXG4-I.pdf" },
      { id: "qsxg12", name: "TSN Ethernet Switch QSXG12", brochure: "/brochures/tsn/TSN ETHERNET SWITCH QSXG12.pdf" },
      // { id: "qsxg20-mil", name: "TSN Ethernet Switch QSXG20-MIL", brochure: "/brochures/tsn/TSN ETHERNET SWITCH QSXG20-MIL.pdf" },
      { id: "tsn12", name: "TSN IP", brochure: "/brochures/tsn/TSN IP.pdf" }
    ]
  },

  {
    name: "SmartNic",
    products: [
      { id: "qpae", name: "QBIT PQC Accelerator Endpoint (QPAE)", brochure: "/brochures/smartnic/QBIT PQC Accelerator Endpoint (QPAE).pdf" },
      { id: "smartnic", name: "Qbit ULL SmartNic", brochure: "/brochures/smartnic/Qbit ULL SmartNic.pdf" }
    ]
  },

  {
    name: "Satcom",
    products: [
      { id: "hdr", name: "High Data Rate Receiver with Inbuilt Modem", brochure: "/brochures/satcom/High Data Rate Receiver with Inbuilt Modulator.pdf" },
      { id: "ldr", name: "Low Data Rate Receiver with Inbuilt Modem", brochure: "/brochures/satcom/Low Data Rate Receiver with Inbuilt Modulator.pdf" },
      { id: "sat-modem", name: "Qbit Advanced Satellite Modem (QASM)", brochure: "/brochures/satcom/Qbit Advanced Satellite Modem (QASM-01).pdf" },
      { id: "telemetry", name: "Qbit Integrated Telemetry Receiver (QITR)", brochure: "/brochures/satcom/Qbit Integrated Telemetry Receiver (QITR01).pdf" }
    ]
  },

  {
    name: "Video Processing",
    products: [
      { id: "dvr", name: "Dual Video Recorder", brochure: "/brochures/videoProcessing/Dual Video Recorder (DVR).pdf" }
    ]
  },

  {
    name: " Time and Frequency",
    products: [
      { id: "Time Synchronization", name: "Time Synchronization", brochure: "/brochures/wr/Time Synchronization.pdf" },
      { id: "Time Sync Solutions (QWR-HW-SX-02R)", name: "Time Sync Solutions (QWR-HW-SX-02R)", brochure: "/brochures/wr/QbitLabs Time Sync Solution (QWR-HW-SX-02R).pdf" },
      { id: "Time Sync IP with Daisy Chain Support (QWR-IP-SX-02)", name: "Time Sync IP with Daisy Chain Support (QWR-IP-SX-02)", brochure: "/brochures/wr/QbitLabs Time Sync IP with Daisy Chain Support (QWR-IP-SX-02).pdf" },
      { id: "Time Sync IP (QWR-IP-EP-02)", name: "Time Sync IP (QWR-IP-EP-02)", brochure: "/brochures/wr/Qbit Labs Time Sync IP (QWR-IP-EP-02).pdf" }
    ]
  }

];

// ─────────────────────────────────────────────
//  PRODUCT DETAILS
//  Keys here MUST match id values in PRODUCT_CATEGORIES
// ─────────────────────────────────────────────
export const PRODUCT_DETAILS = {


  "tsn1": {
  image: "/products/Determinism in TSN White Paper.png",
  desc: "Technical white paper covering deterministic communication principles and TSN standards for real-time Ethernet networks.",
  
  Overview: "Time-Sensitive Networking (TSN) is an enhancement of standard Ethernet that enables deterministic communication with bounded latency, low jitter, and guaranteed delivery for real-time applications. Unlike traditional Ethernet, TSN supports the convergence of time-critical and best-effort traffic on the same network infrastructure. Built on IEEE 802.1 standards and evolved from Audio/Video Bridging (AVB), TSN introduces mechanisms that ensure predictable packet delivery even under heavy network load. It addresses the limitations of standard Ethernet, which operates on a best-effort basis and is prone to variable delays and congestion. TSN is widely used in industrial automation, automotive systems, aerospace, and telecommunications, where precise timing and reliable real-time communication are essential.",

  features: [
    "Network convergence — time-critical, real-time, and best-effort traffic share one network, reducing cabling and costs",
    "Scalability and interoperability based on open IEEE standards, avoiding proprietary lock-in",
    "Future-proof architecture supporting Industry 4.0, IIoT, autonomous vehicles, and 5G integration",
    "Reliable bounded performance guaranteed even under high network load"
  ],

  specs: [
    ["Type",       "White Paper"],
    ["Standard",   "IEEE 802.1 TSN"],
    ["Evolved From", "Audio/Video Bridging (AVB)"],
    ["Topic",      "Deterministic Networking"],
    ["Format",     "PDF"]
  ],

  applications: [
    "Industrial automation — precise control in robotics and PLCs (IEC/IEEE 60802 profile)",
    "Automotive — in-vehicle networks for ADAS and infotainment (IEEE P802.1DG profile)",
    "Aerospace — onboard Ethernet with fault tolerance (IEEE 802.1DP profile)",
    "Telecommunications — fronthaul for 5G base stations",
    "Professional audio/video — low-latency streaming"
  ]
},

  "din-switch": {
  image: "/products/DIN Mounted Industrial Switch.png",
  desc: "DIN-Rail mounted industrial Layer-3 managed Ethernet switch with TSN support for reliable, real-time industrial networking.",

  Overview: "TSN-6325-8T4S4X is a DIN-rail mounted industrial Layer-3 managed Ethernet switch with TSN support, designed for reliable industrial networking and real-time communication applications. It offers 8 × Gigabit RJ45 ports, 4 × 1G/2.5G SFP slots, and 4 × 10G SFP+ uplinks, combining high-speed connectivity with IEEE 1588v2 PTP and TSN capabilities. With Layer-3 routing, ERPS ring redundancy, and an IP30-rated aluminum enclosure, it delivers dependable performance across industrial automation, manufacturing, power utilities, transportation, and smart infrastructure.",

  features: [
    "High-density port configuration — 8 × Gigabit RJ45, 4 × 1G/2.5G SFP, and 4 × 10G SFP+ uplink ports for flexible, scalable connectivity",
    "IEEE 1588v2 PTP & TSN support (802.1AS, 802.1Qbv, 802.1Qci) for precise time synchronization and deterministic real-time communication",
    "Layer-3 routing with RIPv2, OSPFv2, and OSPFv3 for advanced network segmentation and inter-VLAN routing",
    "ERPS ring redundancy for fast network recovery and high availability in critical industrial topologies",
    "Industrial IP30 aluminum enclosure with wide operating temperature range of -40°C to 75°C and ESD 6KV DC protection",
    "Dual redundant power input (DC 9–48V / AC 24V) with Web, CLI, and SNMP management support"
  ],

  specs: [
    ["Type",           "Industrial Layer-3 Managed Switch"],
    ["Ports",          "8 × RJ45 + 4 × SFP + 4 × SFP+"],
    ["Switch Fabric",  "116 Gbps"],
    ["Routing",        "RIPv2, OSPFv2, OSPFv3"],
    ["TSN Support",    "802.1AS, 802.1Qbv, 802.1Qci"],
    ["Power Input",    "DC 9–48V / AC 24V"],
    ["Protection",     "ESD 6KV DC"],
    ["Mounting",       "DIN-Rail / Wall Mount"],
    ["Operating Temp", "-40°C to 75°C"],
    ["Enclosure",      "IP30 Aluminum"]
  ],

  applications: [
    "Industrial automation — real-time control and communication between PLCs, sensors, HMIs, and controllers",
    "Factory monitoring systems — high-speed, reliable data exchange across production floors",
    "Transportation networks — ruggedized connectivity for trackside, rail, and traffic management infrastructure",
    "Power utility communication — dependable networking for substations and smart grid systems",
    "5G base stations — time-sensitive fronthaul networking with TSN and PTP synchronization",
    "Time-critical industrial networks — deterministic Ethernet for Industry 4.0 and IIoT deployments"
  ]
},

"tsn3": {
  image: "/products/TSN_ATE_Tester.png",

  desc: "Automated TSN compliance and validation tester built on NI PXI architecture for IEEE 802.1 TSN device and network testing.",

  Overview: "The TSN ATE/Compliance Tester is a high-performance automated validation platform built on the NI PXI modular architecture, designed for testing and compliance verification of Time-Sensitive Networking devices and networks. It enables deterministic traffic generation, synchronized packet capture, timing analysis, and automated reporting against IEEE 802.1 TSN standards. The platform supports real-time validation of scheduling, synchronization, redundancy, preemption, policing, and traffic shaping across industrial Ethernet and next-generation deterministic communication systems.",

  features: [
    "4 × 1G TSN Ethernet test ports with multi-stream concurrent traffic generation and capture for comprehensive load testing",
    "IEEE 802.1 TSN compliance testing covering 802.1AS, Qbv, Qbu, Qci, Qav, and 802.1CB standards",
    "gPTP synchronization analysis with real-time latency, jitter, and packet loss measurement for deterministic performance validation",
    "Frame preemption (Qbu) and FRER (802.1CB) validation for redundancy and fault-tolerance verification",
    "Automated pass/fail reporting with PCAP capture and Wireshark integration for deep packet-level analysis",
    "NI PXI modular architecture (PXI-1095 chassis, PXIe-8881 controller, PXIe-6592 traffic engine, PXIe-6674T timing module) for scalable, high-precision test configuration"
  ],

  specs: [
    ["Platform",            "NI PXI"],
    ["Chassis",             "NI PXI-1095"],
    ["Controller",          "NI PXIe-8881"],
    ["Traffic Engine",      "NI PXIe-6592"],
    ["Timing Module",       "NI PXIe-6674T"],
    ["Ports",               "4 × 1G TSN Ethernet"],
    ["Supported Standards", "802.1AS, Qbv, Qbu, Qci, Qav, 802.1CB"],
    ["Traffic Analysis",    "Latency, Jitter, Loss, Misorder"],
    ["Reporting",           "PCAP, CSV, Pass/Fail Reports"],
    ["Operation Mode",      "Compliance & Regression Testing"]
  ],

  applications: [
    "TSN switch validation — compliance and regression testing of TSN-capable switches and endpoints",
    "Industrial Ethernet — automated conformance testing for factory and process automation networks",
    "Automotive TSN — in-vehicle network validation for ADAS, infotainment, and time-critical systems",
    "5G & edge networking — fronthaul and edge node validation with deterministic Ethernet verification",
    "Protocol interoperability — multi-vendor TSN device testing for cross-platform compatibility assurance",
    "Factory automation — real-time network performance analysis for IIoT and Industry 4.0 deployments"
  ]
},
"tsn4": {
  image: "/products/TSN_Conformance_Tester.png",

  desc: "Automated TSN conformance tester built on NI PXI architecture for IEEE 802.1 TSN protocol validation and real-time Ethernet performance testing.",

  Overview: "The TSN Conformance Tester is an advanced automated validation platform built on the NI PXI modular architecture, designed for compliance testing of Time-Sensitive Networking devices and networks. It enables deterministic traffic generation, synchronized packet capture, protocol validation, and automated reporting against IEEE 802.1 TSN standards. The platform ensures accurate verification of synchronization, scheduling, redundancy, traffic shaping, and real-time Ethernet performance for industrial and next-generation networking applications.",

  features: [
    "4 × 1G TSN Ethernet ports with multi-stream concurrent traffic generation and capture for thorough conformance coverage",
    "IEEE 802.1 TSN conformance testing across 802.1AS, Qbv, Qbu, Qci, Qav, and 802.1CB standards",
    "gPTP synchronization validation with real-time latency, jitter, and packet loss measurement for deterministic performance assurance",
    "Frame preemption (Qbu) and FRER (802.1CB) testing for redundancy and traffic shaping verification",
    "Automated compliance reporting with PCAP and CSV export for detailed audit trails and pass/fail analysis",
    "NI PXI modular architecture (PXI-1095 chassis, PXIe-8881 controller, PXIe-6592 traffic engine, PXIe-6674T timing module) for scalable and precise test configuration"
  ],

  specs: [
    ["Platform",            "NI PXI"],
    ["Chassis",             "NI PXI-1095"],
    ["Controller",          "NI PXIe-8881"],
    ["Traffic Engine",      "NI PXIe-6592"],
    ["Timing Module",       "NI PXIe-6674T"],
    ["Ports",               "4 × 1G TSN Ethernet"],
    ["Supported Standards", "802.1AS, Qbv, Qbu, Qci, Qav, 802.1CB"],
    ["Analysis",            "Latency, Jitter, Packet Loss"],
    ["Reports",             "PCAP, CSV, Pass/Fail Reports"],
    ["Modes",               "Compliance & Regression Testing"]
  ],

  applications: [
    "TSN device conformance testing — automated validation of TSN-capable switches, endpoints, and controllers",
    "Industrial Ethernet — conformance and regression testing for factory and process automation networks",
    "Automotive TSN — verification of in-vehicle TSN networks for ADAS, infotainment, and safety-critical systems",
    "5G & edge networking — deterministic Ethernet validation for fronthaul and edge node deployments",
    "Protocol interoperability — multi-vendor TSN device testing to ensure cross-platform compatibility",
    "Factory automation — real-time communication analysis for IIoT and Industry 4.0 network deployments"
  ]
},

"tsn7": {
  image: "/products/TSN End Point System.png",
  desc: "PCIe-based TSN endpoint system enabling deterministic Ethernet communication with advanced IEEE 802.1 TSN capabilities for industrial and embedded applications.",
  Overview: "The QBIT TSN End Point System (QEP-T001) is a Time-Sensitive Networking endpoint solution designed for deterministic Ethernet deployments. It integrates dual 100/1000BASE-T TSN Ethernet ports, copper SFP modules, and a PCIe host interface, enabling industrial PCs and embedded systems to participate in converged TSN networks with precise synchronization, low latency, and fault-tolerant communication.",
  features: [
    "2x 10/100/1000BASE-T TSN Ethernet ports",
    "1x PCIe host interface for host computer attachment",
    "2x copper SFP modules with tri-speed RJ45 support",
    "IEEE 802.1AS gPTP timing synchronization",
    "IEEE 802.1Qav Credit Based Shaper (CBS)",
    "IEEE 802.1Qbv Time Aware Shaper (TAS)",
    "IEEE 802.1Qci per-stream filtering and policing",
    "IEEE 802.1CB Frame Replication and Elimination for Reliability (FRER)",
    "IEEE 802.1Q VLAN tagging support up to 4K VLAN groups",
    "IEEE 802.1p QoS / CoS support",
    "LLDP support with multicast filtering and IGMP snooping",
    "STP, RSTP, and MSTP spanning tree support",
    "Secure management via HTTPS, SSHv2, and Netconf/YANG",
    "Encrypted and digitally signed firmware upgrades",
    "Windows and Linux driver support",
    "IEEE 802.1X, RADIUS, and RBAC security support"
  ],
  specs: [
    ["Type", "TSN Endpoint System"],
    ["Model", "QEP-T001"],
    ["Protocol", "Ethernet (IEEE 802.3-2008)"],
    ["Ports", "2x 100/1000BASE-T TSN Ethernet ports"],
    ["SFP Support", "2x copper SFP modules (10/100/1000)"],
    ["Host Interface", "1x PCIe interface"],
    ["PHY Interface", "SGMII"],
    ["Duplex Support", "Full duplex"],
    ["MAC Functions", "Automatic MAC learning and aging; Static MAC table"],
    ["VLAN Support", "IEEE 802.1Q VLAN tagging up to 4K VLAN groups"],
    ["QoS / CoS", "IEEE 802.1p support"],
    ["Discovery", "IEEE 802.1AB LLDP"],
    ["Traffic Control", "Port rate limiting and storm control"],
    ["Spanning Tree", "STP, RSTP, MSTP"],
    ["TSN Standards", "802.1AS, 802.1Qav, 802.1Qbv, 802.1Qci, 802.1CB, 802.1Qcc"],
    ["Management", "HTTPS, SSHv2, Netconf/YANG, Syslog"],
    ["Driver Support", "Windows / Linux"],
    ["Security", "802.1X, RADIUS, RBAC, secure firmware upgrade"],
    ["Dimensions", "229mm x 102mm x 40mm"],
    ["Deliverables", "Ethernet cables, SFP modules, SMA to BNC cable"]
  ],
  applications: [
    "Industrial automation",
    "Real-time Ethernet communication",
    "Automotive networking",
    "Audio Video Bridging (AVB)",
    "Mission-critical TSN networks",
    "Embedded computing systems",
    "Factory automation",
    "Smart manufacturing",
    "Edge networking applications"
  ]
},

"qsxg4": {
  image: "/products/TSN ETHERNET SWITCH QSXG4-I.png",
  desc: "Compact managed TSN Ethernet switch with 4x Gigabit TSN ports for deterministic low-latency industrial networking applications.",
  Overview: "The QBIT TSN Ethernet Switch (QSXG4-I) is a managed Time-Sensitive Networking switch designed for deterministic Ethernet communication in industrial and mission-critical environments. It provides 4x 10/100/1000BASE-T(X) TSN ports with advanced IEEE 802.1 TSN capabilities, secure management, and high-performance switching for converged real-time networking.",
  features: [
    "4x 10/100/1000BASE-T(X) TSN Ethernet ports",
    "1x Management Port and 1x UART Port",
    "10 Gbps switching capacity with wire-speed forwarding",
    "IEEE 802.1AS gPTP timing synchronization",
    "IEEE 802.1Qbv Time Aware Shaper (TAS)",
    "IEEE 802.1Qci per-stream filtering and policing",
    "IEEE 802.1CB Frame Replication and Elimination for Reliability (FRER)",
    "Jumbo frame support up to 9216 bytes",
    "IEEE 802.1Q VLAN tagging support up to 4K VLAN groups",
    "IEEE 802.1p QoS / CoS and Layer-3/4 QoS classification",
    "IGMP and MLD snooping with multicast filtering",
    "HTTPS, SSHv2, SNMPv3, Syslog, and DHCP management",
    "IEEE 802.1X and MACsec security support",
    "TPM 2.0 based authentication support",
    "Encrypted and digitally signed firmware upgrades"
  ],
  specs: [
    ["Type", "Managed TSN Ethernet Switch"],
    ["Model", "QSXG4-I"],
    ["Ports", "4x 10/100/1000BASE-T(X) TSN Ethernet ports"],
    ["Management Port", "1x 10/100/1000BASE-T"],
    ["UART Port", "1x Type2 USB UART"],
    ["Switching Capacity", "10 Gbps"],
    ["Frame Support", "64-9216 byte frames with jumbo frame support"],
    ["Synchronization", "IEEE 802.1AS gPTP"],
    ["TSN Standards", "802.1AS, 802.1Qbv, 802.1Qci, 802.1CB"],
    ["QoS Support", "IEEE 802.1p CoS/QoS, Layer-3/4 QoS"],
    ["VLAN Support", "IEEE 802.1Q VLAN tagging up to 4K VLAN groups"],
    ["Multicast Support", "IGMP v1/v2/v3, MLD snooping"],
    ["Security", "802.1X, MACsec, SSHv2, TPM 2.0"],
    ["Management", "HTTPS, SSHv2, SNMPv3, DHCP, Syslog"],
    ["Operating Temperature", "-40°C to +70°C"],
    ["Storage Temperature", "-55°C to +105°C"],
    ["Humidity", "10% to 90% non-condensing"],
    ["Dimensions", "110mm x 180mm x 70mm"],
    ["Weight", "1 kg"],
    ["Power Supply", "28V DC"],
    ["Power Consumption", "10W"]
  ],
  applications: [
    "Industrial automation",
    "Real-time Ethernet networking",
    "Factory automation",
    "Mission-critical communication",
    "Smart manufacturing",
    "Embedded TSN networks",
    "Transportation networking",
    "Converged industrial Ethernet",
    "Edge networking systems"
  ]
},
"tsn12": {
  image: "/products/TSN IP.png",

  desc: "FPGA/ASIC TSN IP core delivering deterministic, low-latency Ethernet with full IEEE TSN compliance for industrial applications.",
  Overview: "Qbit Labs’ TSN Solution is a configurable TSN IP core designed for FPGA and ASIC platforms. It enables deterministic Ethernet communication with advanced TSN features including time-aware shaping, frame preemption, PSFP, FRER, and gPTP synchronization. The solution supports up to 24 ports with speeds ranging from 10 Mbps to 10 Gbps, making it suitable for industrial automation, automotive networking, aerospace, and real-time control systems.",

  features: [
    "Supports up to 24 configurable Ethernet ports",
    "Supports 10 Mbps, 100 Mbps, 1G and 10G Ethernet",
    "IEEE 802.1Qbv Time-Aware Shaping (TAS)",
    "IEEE 802.1Qbu / 802.3br Frame Preemption",
    "IEEE 802.1Qci Per-Stream Filtering and Policing (PSFP)",
    "IEEE 802.1CB Frame Replication and Elimination for Reliability (FRER)",
    "IEEE 802.1AS-2020 gPTP synchronization with sub-µs precision",
    "1PPS input/output synchronization support",
    "8 QoS priority classes with ingress/egress filtering",
    "Broadcast policing and port rate limiting",
    "Configurable packet buffers, VLAN tables and MAC tables",
    "AXI-Lite and AXI DMA interfaces",
    "Linux and Windows driver support",
    "Management support via HTTPS, SNMPv3, NETCONF and SSH"
  ],

  specs: [
    ["Type", "TSN IP Core"],
    ["Platform", "FPGA / ASIC"],
    ["Max Data Ports", "24 configurable"],
    ["Max 10/100 Mbps Ports", "24"],
    ["Max 1G Ports", "24"],
    ["Max 10G Ports", "4"],
    ["CPU Port", "1"],
    ["Packet Buffer", "8 Mb configurable"],
    ["MAC Learning Table", "Up to 4096 entries"],
    ["Static MAC Table", "Up to 256 entries"],
    ["VLAN Table", "Up to 4096 entries"],
    ["Multicast Port Mask", "Up to 1024"],
    ["QoS Queues", "8 egress queues per port"],
    ["Ingress ACL Rules", "2048"],
    ["Egress ACL Rules", "512"],
    ["PSFP Streams", "256"],
    ["FRER Streams", "256"],
    ["TAS Gate Control Lists", "64"],
    ["TAS Entries per List", "256"],
    ["Synchronization", "gPTP with sub-µs precision"],
    ["Interfaces", "AXI Lite, AXI MM2S, AXI S2MM"],
    ["Management", "HTTPS Web GUI, SNMPv3, NETCONF, SSH"],
    ["Driver Support", "Linux / Windows"],
    ["Compliance", "IEEE 802.1Qbv, 802.1Qci, 802.1AS, 802.1Qcc, 802.1Qbu, 802.1X"]
  ],

  applications: [
    "Industrial automation and robotics",
    "Automotive networking and ADAS",
    "Aerospace and defense systems",
    "Mission-critical control networks",
    "Audio Video Bridging (AVB)",
    "Real-time Ethernet communication",
    "Factory automation",
    "Deterministic FPGA networking solutions"
  ]
},

  "dvr": {
    image: "/products/DVR.png",
    desc: "High-fidelity digital video recorder engineered for defence and surveillance applications.",
    Overview: "The Indigenous Digital Video Recorder (DVR) is a rugged, high-reliability recording solution designed for mission-critical defense applications. Built with a military-grade enclosure, it operates efficiently under extreme temperatures, vibration, dust, and electromagnetic interference conditions encountered in field deployments. The DVR is used to capture and store real-time video feeds from electro-optical sensors for surveillance, target tracking, and engagement monitoring. It supports secure time-stamped recording, dependable data storage, and fast retrieval for post-mission analysis and diagnostics. Designed for seamless integration with defense control systems, the DVR is widely deployed in modern indigenous air-defense platforms and other critical surveillance applications.",

    features: [
  "High-quality video recording, playback, and live monitoring",
  "Real-time low-latency video capture from surveillance systems",
  "Rugged military-grade design for harsh environments",
  "Secure high-capacity storage with time-stamped recording",
  "Seamless integration with command and control systems",
  "Simultaneous streaming and recording support",
  "Web-based control interface with live video preview",
  "Support for SRT streaming modes and KLV metadata integration"
],
    specs: [
      ["Channels", "Multi-channel"],
      ["Storage", "Secure"],
      ["Use Case", "Surveillance / Defence"],
      ["Grade", "Military"]
    ],
  applications: [
  "Air-defense and battlefield surveillance systems",
  "Electro-optical target tracking and monitoring",
  "Mission recording and post-operation analysis",
  "Command and control center integration",
  "Border security and critical infrastructure monitoring",
  "Aerospace and defense video data recording applications"
],
  },

  "hdr": {
    image: "/products/HDR with Inbuilt Modulator.png",
    desc: "High data rate receiver with inbuilt modulator for satellite and RF communication links.",
    Overview: "The High Data Rate Receiver (HDR) with Inbuilt Modulator is a next-generation communication solution designed for high-speed satellite and airborne data reception, processing, and transmission. Engineered for satellite ground stations, the system supports reliable data acquisition from both LEO and GEO satellites while offering flexible configuration for multiple demodulation and decoding schemes. Built on a fully digital FPGA-based architecture, the HDR enables high symbol-rate operation with dual-channel independent processing and efficient baseband signal handling. Advanced synchronization, forward error correction, and real-time processing capabilities ensure accurate and dependable data recovery even in challenging signal environments. The integrated inbuilt modulator with channel emulation, high-speed Ethernet and LVDS interfaces, built-in storage, and real-time monitoring features make the HDR an ideal solution for demanding high-data-rate applications, including remote sensing, scientific missions, telemetry processing, and telecommunications.",
    features: [
  "Fully digital, tunable transmitter and receiver",
  "720MHz with 320MHz Symbol Rate, 2.4GHz IF with 1000MHz Symbol Rate",
  "2 IF Channels (independent)",
  "8 channels of LVDS line / ECL for I/O",
  "Receives signals of power level -10 dBm to -50 dBm",
  "BPSK, QPSK, UQPSK, OQPSK, 8PSK selectable demodulators",
  "Viterbi decoding, differential decoding, 4D-TCM, Reed Solomon decoder, LDPC Decoding, SCCC Decoding",
  "Optional Frame Synchronization, CADU, VCDU Decoding & Bit error measurement",
  "Ethernet and LVDS data output provided with inbuilt Storage",
  "Inbuilt Modulator with Channel Emulation Capability",
  "High end FPGA with entire base-band processing ported in it",
  "Supports multiple data formats for display",
  "Built-in support for real time debugging",
  "Compliant with CCSDS recommendations"
],
specs: [
  ["Type", "HDR Receiver"],
  ["Modulator", "Inbuilt"],
  ["Use Case", "Satellite / RF"],
  ["Interface", "RF"]
],
 applications: [
    "Defense communication systems for secure and reliable data transmission",
    "Satellite networks for high-speed signal reception and processing",
    "Industrial automation for real-time monitoring and control applications",
    "Secure high-speed data environments for mission-critical communication systems"
  ]
},

"ldr": {
  image: "/products/LDR with Inbuilt Modulator.png",
    desc: "Low data rate receiver with inbuilt modulator for reliable long-range communication.",
    Overview: "The Low Data Rate Receiver (LDR) with Inbuilt Modulator is a high-performance communication solution designed for reliable reception and processing of satellite and airborne data signals. Developed for satellite ground stations, the system supports data acquisition from both LEO and GEO satellites while offering flexible configuration for multiple demodulation schemes, decoding algorithms, and data formats.Built on an advanced FPGA- based architecture, the LDR integrates complete baseband signal processing with an inbuilt modulator and channel emulation capability.Its fully digital and tunable receiver- transmitter design ensures efficient low data rate signal handling, dependable performance, and seamless adaptability across varying operational environments.With support for modern monitoring, control, and interface options, the LDR is an ideal solution for applications such as remote sensing, scientific missions, telecommunications, and satellite communication systems.",
     features: [
  "Fully digital, FPGA-based architecture with complete baseband processing integrated into a single platform",
  "Supports reception and processing of satellite and aircraft signals from LEO and GEO systems",
  "Configurable demodulation schemes including BPSK and QPSK",
  "Supports advanced decoding techniques such as Viterbi decoding and differential decoding",
  "Operates at 70 MHz IF with symbol rates from 20 KSps to 20 MSps",
  "Handles wide input signal power range from -5 dBm to -50 dBm",
  "Provides 1 or 2 IF channels with flexible configuration options",
  "Includes an inbuilt modulator with channel emulation capabilities such as noise, Doppler, and path loss simulation",
  "Supports multiple data formats and output interfaces including LVDS, ECL, and Ethernet",
  "Offers real-time monitoring of parameters like RSSI, SNR, BER, and constellation display",
  "Enables local and remote configuration through front panel GUI and TCP/IP-based control.", 
  "Compliant with CCSDS recommendations for satellite communication systems"
],
        specs: [
          ["Type", "LDR Receiver"],
          ["Modulator", "Inbuilt"],
          ["Use Case", "Long-range Comms"],
          ["Power", "Low"]
        ],
    applications: [
    "Defense communication systems for secure and reliable data transmission",
    "Satellite networks for high-speed signal reception and processing",
    "Industrial automation for real-time monitoring and control applications",
    "Secure high-speed data environments for mission-critical communication systems"
  ]
},

"qpae": {
  image: "/products/PQC Accelerator Endpoint (QPAE).png",
    desc: "Post-quantum cryptography accelerator endpoint for next-generation secure communications.",
    Overview: "The QBIT PQC Accelerator Endpoint (QPAE) is a high-performance hardware acceleration solution designed to offload computationally intensive post-quantum cryptography (PQC) operations from the CPU. By enabling hardware-based cryptographic acceleration, the QPAE enhances system performance, reduces CPU workload, and ensures long-term security against emerging quantum computing threats. The solution supports advanced PQC algorithms such as ML-KEM and ML-DSA, delivering flexible and scalable cryptographic processing for modern secure communication systems. Unlike traditional accelerator technologies tied to specific CPU vendors, the QPAE is designed for seamless compatibility across Intel, AMD, and ARM platforms. Built to support evolving PQC standards, the QPAE provides a future-ready, vendor-independent architecture that enables secure, efficient, and high-speed cryptographic processing for large-scale and mission-critical applications.",

      features: [
  "Advanced cryptography support — hardware acceleration for Post-Quantum algorithms (ML-KEM, ML-DSA), RSA, ECC, and hybrid security protocols",
  "Seamless integration — compatible with OpenSSL 3.x, NGINX, Apache, and TLS 1.3 for easy deployment without application changes",
  "Hardware-based security — integrated TRNG, secure key management, and side-channel attack protection for enhanced data security",
  "Future-ready architecture — FPGA-based design enables in-field updates for emerging PQC standards without hardware replacement",
  "High performance and efficiency — offloads intensive cryptographic processing from CPUs to reduce latency and improve throughput"
],
        specs: [
          ["Encryption", "Post-Quantum (PQC)"],
          ["Interface", "PCIe"],
          ["Latency", "Ultra Low"],
          ["Use Case", "Secure Comms / Defence"]
        ],
    applications: [
  "Secure data centers and cloud infrastructure",
  "Defense and government communication systems",
  "Banking and financial transaction security",
  "Telecom and 5G network encryption",
  "Enterprise VPN and secure web servers",
  "Quantum-resistant cybersecurity applications"
],
},

"smartnic": {
  image: "/products/Qbit ULL SmartNic.png",
    desc: "Ultra-low latency SmartNIC with FPGA acceleration for high-performance AI and defence workloads.",
    Overview: "The Qbit NextGen SmartNIC is a high-performance FPGA-based network interface solution designed for ultra-low latency and high-speed Ethernet connectivity in demanding, latency-sensitive environments. Engineered with advanced hardware optimization techniques, it delivers deterministic performance, efficient data-path processing, and scalable acceleration capabilities. The SmartNIC supports full line-rate throughput across both standard and jumbo packet sizes, ensuring reliable and loss-free data handling under mixed traffic conditions. Its flexible FPGA architecture enables custom hardware acceleration, intelligent packet processing, classification, filtering, and flow steering for enhanced network efficiency. With integrated hardware timestamping and synchronization support, the Qbit NextGen SmartNIC is ideal for applications such as high-frequency trading, high-performance computing, AI/ML infrastructure, and real-time data processing systems.",

    features: [
  "Ultra-low latency performance with FPGA-accelerated data paths",
  "Full line-rate processing for standard and jumbo Ethernet frames",
  "Support for 10G/25G Ethernet with high-speed PCIe Gen4 interface",
  "Precision hardware timestamping with IEEE-1588 PTP synchronization",
  "Advanced packet classification, flow steering, and traffic monitoring",
  "FPGA-based architecture with support for custom logic integration",
  "Zero-copy data transfer with checksum and segmentation offload",
  "Support for IPv4/IPv6, VLAN tagging, multicast, and RSS features",
  "Reliable operation in demanding real-time networking environments"
],
        specs: [
          ["Latency", "<1 µs"],
          ["Throughput", "100 Gbps"],
          ["Interface", "PCIe Gen4"],
          ["Use Case", "AI / Defence"]
        ],
    applications: [
  "High-frequency trading and financial networks",
  "High-performance computing (HPC) environments",
  "AI/ML data processing infrastructure",
  "Telecom and 5G networking systems",
  "Data centers and cloud networking platforms",
  "Real-time analytics and low-latency communication systems"
],
},

"qbl-net": {
  image: "/products/QBL_NET_X1000.png",

  desc: "Portable lab-grade TSN network tester with 4-port GbE, hardware timestamping, and Layer 2/3 performance validation for industrial and automotive Ethernet.",

  Overview: "A compact 4-port TSN network tester for Layer 2/Layer 3 traffic generation, TSN conformance testing, latency analysis, and deterministic Ethernet validation.",

  features: [
    "4 × Gigabit Ethernet test ports",
    "Layer 2 & Layer 3 traffic generation",
    "TSN compliance and conformance testing",
    "Hardware timestamping with ns accuracy",
    "Latency, jitter & packet-loss analysis",
    "gPTP and IEEE 1588 synchronization",
    "RFC 2544 & Y.1564 benchmarking",
    "Real-time stream statistics",
    "Portable rugged fanless design",
    "Industrial & automotive Ethernet testing"
  ],

  specs: [
    ["Ports", "4 × 10/100/1000BASE-T RJ45"],
    ["Traffic Rate", "Up to 1Gbps per port"],
    ["Timestamp Accuracy", "±3.2ns"],
    ["Synchronization", "Sub-microsecond precision"],
    ["Frame Size", "64B to 9500B Jumbo Frames"],
    ["Protocols", "IEEE 802.1AS, Qbv, Qci, Qcb"],
    ["Benchmarking", "RFC 2544, RFC 6349, ITU-T Y.1564"],
    ["Management", "Ethernet & USB"],
    ["Enclosure", "Compact Rugged Fanless"],
    ["Operating Temp.", "-10°C to +55°C"]
  ],

  applications: [
    "TSN switch validation",
    "Industrial Ethernet testing",
    "Automotive Ethernet validation",
    "Deterministic network verification",
    "Enterprise network benchmarking",
    "Field acceptance testing",
    "Traffic generation & analysis",
    "Protocol conformance testing"
  ]
},

"sat-modem": {
  image: "/products/Satellite Modem (QASM-01).png",
    desc: "High-speed satellite modem for secure and reliable broadband communication links.",
    Overview: "The Satellite Modem is a high-performance communication solution designed for reliable and efficient data transmission over satellite links. Built for telecom, enterprise, and mission-critical applications, it enables secure and real-time connectivity through advanced RF interfacing, flexible modulation schemes, and powerful forward error correction technologies. The system integrates advanced baseband processing, adaptive coding and modulation, and bandwidth optimization techniques to maximize spectral efficiency, improve link availability, and support a wide range of data rates and interfaces. With integrated packet processing, quality-of-service control, encryption, and remote management capabilities, the modem seamlessly integrates into modern IP-based satellite networks. Designed with a scalable and modular architecture, the Satellite Modem supports dual-band operation, carrier-in-carrier optimization, and comprehensive monitoring and control features. Its advanced Carrier-in-Carrier capability enables simultaneous transmission and reception over the same carrier frequency, making it ideal for both power-limited and bandwidth-limited communication environments.",

     features: [
  "Supports wide data rates and symbol rates for flexible satellite link operation",
  "Multiple modulation schemes including BPSK, QPSK, OQPSK, 8PSK/8-QAM, and 16-QAM",
  "Advanced Forward Error Correction (FEC) including Viterbi, RS Decoder, LDPC, and Turbo Product Codes",
  "Adaptive Coding & Modulation (ACM) and Constant Coding and Modulation (CCM) support",
  "Advanced equalization scheme with MMSE equalization",
  "Carrier-in-Carrier bandwidth optimization to improve spectral efficiency and reduce operating costs",
  "Dual-band capability supporting standard IF and extended L-Band operation in a single unit",
  "Integrated packet processor with header and payload compression for efficient IP transmission",
  "Built-in multi-port managed Ethernet switch with VLAN and Quality of Service (QoS) support",
  "AES-based data encryption for secure satellite communications",
  "Automatic uplink power control and adaptive equalization for reliable link performance",
  "Multiple data interfaces including Ethernet, serial, and G.703 telecom interfaces",
  "Comprehensive monitoring, control, and remote management via SNMP, HTTP, and serial interfaces",
  "Support for synchronization features such as precision time protocol and reference clock inputs",
  "Modular and scalable architecture enabling redundancy options and field-upgradeable features"
],
        specs: [
          ["Model", "QASM-01"],
          ["Frequency", "Wideband"],
          ["Use Case", "Satellite Systems"],
          ["Grade", "Defence"]
        ],
     applications: [
    "Defense communication systems for secure and reliable data transmission",
    "Satellite networks for high-speed signal reception and processing",
    "Industrial automation for real-time monitoring and control applications",
    "Secure high-speed data environments for mission-critical communication systems"
  ]
},

"telemetry": {
  image: "/products/Telemetry Receiver (QITR01).png",
    desc: "Precision telemetry receiver for real-time data acquisition in defence and aerospace systems.",
    Overview: "The Qbit Integrated Telemetry Receiver (QITR01) is a high-performance real-time telemetry reception system designed for advanced aerospace and defense applications. It delivers simultaneous dual-channel operation for reliable reception, demodulation, and processing of telemetry signals, even under dynamic link and interference conditions. The system integrates advanced RF front-end technology, high-speed digitization, and FPGA/SoC-based baseband processing to ensure accurate data recovery with low latency and high sensitivity. Built on a modular and scalable architecture, the QITR01 supports multiple modulation schemes, robust synchronization, forward error correction, and flexible data output interfaces for seamless integration into telemetry ground stations and mission monitoring systems. With comprehensive control and monitoring capabilities, the QITR01 enables efficient configuration, real-time status tracking, and dependable performance in critical telemetry environments.",

      features: [
  "Wide RF input frequency range with flexible tuning",
  "High dynamic range RF front-end with programmable gain control",
  "Automatic Gain Control (AGC) for stable reception",
  "Support for PCM/FM, BPSK, QPSK, and SOQPSK modulation schemes",
  "Configurable symbol rates and channel bandwidths",
  "High-speed ADC with precision clocking",
  "FPGA/SoC-based real-time demodulation and baseband processing",
  "Carrier, clock, and frame synchronization",
  "Advanced FEC decoding (Viterbi and Reed-Solomon)",
  "Bit Error Rate (BER) measurement and signal quality monitoring (SNR, RSSI)",
  "Telemetry frame decommutation and packet extraction",
  "Low-latency, deterministic processing architecture",
  "Ethernet interface for host communication",
  "Built-In Test (BIT) and health diagnostics",
  "Modular and scalable system design for aerospace and defense use"
],
        specs: [
          ["Model", "QITR01"],
          ["Type", "Telemetry Receiver"],
          ["Use Case", "Aerospace / Defence"],
          ["Grade", "Military"]
        ],
      applications: [
    "Defense communication systems for secure and reliable data transmission",
    "Satellite networks for high-speed signal reception and processing",
    "Industrial automation for real-time monitoring and control applications",
    "Secure high-speed data environments for mission-critical communication systems"
  ]
},

"tsn-ep-nic": {
  image: "/products/TSN END POINT PCIe NIC.png",
  desc: "PCIe-based TSN endpoint NIC providing deterministic Ethernet communication with IEEE 802.1 TSN support for industrial and embedded host systems.",
  Overview: "The QBIT TSN End Point PCIe NIC (QSXG2-P) is a Time-Sensitive Networking endpoint interface designed for deterministic Ethernet deployments. It integrates dual 100/1000BASE-T TSN Ethernet ports with a PCIe host interface, enabling industrial PCs and embedded systems to participate in converged TSN networks with precise synchronization, low latency, and bounded jitter.",
  features: [
    "2x 10/100/1000BASE-T TSN Ethernet ports",
    "PCIe host interface for host computer connectivity",
    "IEEE 802.1AS gPTP timing synchronization",
    "IEEE 802.1Qav Credit Based Shaper (CBS)",
    "IEEE 802.1Qbv Time Aware Shaper (TAS)",
    "IEEE 802.1Qci per-stream filtering and policing",
    "IEEE 802.1CB Frame Replication and Elimination for Reliability (FRER)",
    "IEEE 802.1Q VLAN tagging support up to 4K VLAN groups",
    "IEEE 802.1p QoS / CoS support",
    "LLDP support with multicast filtering and IGMP snooping",
    "STP, RSTP, and MSTP spanning tree support",
    "Secure management via HTTPS, SSHv2, Netconf/YANG",
    "Encrypted and digitally signed firmware upgrades",
    "RADIUS, RBAC, and IEEE 802.1X security support"
  ],
  specs: [
    ["Type", "TSN Endpoint PCIe NIC"],
    ["Model", "QSXG2-P"],
    ["Protocol", "Ethernet (IEEE 802.3-2008)"],
    ["Ports", "2x 100/1000BASE-T TSN Ethernet ports"],
    ["Host Interface", "1x PCIe interface"],
    ["PHY Interface", "SGMII"],
    ["Duplex Support", "Full duplex"],
    ["VLAN Support", "IEEE 802.1Q VLAN tagging up to 4K VLAN groups"],
    ["QoS / CoS", "IEEE 802.1p support"],
    ["Discovery", "IEEE 802.1AB LLDP"],
    ["Traffic Control", "Port rate limiting and storm control"],
    ["Spanning Tree", "STP, RSTP, MSTP"],
    ["TSN Standards", "802.1AS, 802.1Qav, 802.1Qbv, 802.1Qci, 802.1CB, 802.1Qcc"],
    ["Management", "HTTPS, SSHv2, Netconf/YANG, Syslog"],
    ["Security", "802.1X, RADIUS, RBAC, secure firmware upgrade"],
    ["Dimensions", "130 mm x 180 mm x 30 mm"],
    ["Power Supply", "12V DC"]
  ],
  applications: [
    "Industrial automation",
    "Real-time embedded systems",
    "Deterministic Ethernet communication",
    "Automotive networking",
    "Audio Video Bridging (AVB)",
    "Mission-critical TSN deployments",
    "Smart manufacturing",
    "Edge computing systems"
  ]
},

"qsxg12": {
  image: "/products/TSN ETHERNET SWITCH QSXG12.png",
  desc: "Managed TSN Ethernet switch with 8x Gigabit and 4x 10G ports for deterministic real-time industrial and mission-critical networking.",
  Overview: "The QBIT TSN Ethernet Switch (QSXG12) is a managed Time-Sensitive Networking switch designed for deterministic Ethernet communication in converged industrial and mission-critical networks. It integrates 8x 10/100/1000BASE-T(X) TSN ports and 4x 10GBASE-SFP ports with advanced IEEE 802.1 TSN capabilities, Layer-2/Layer-3 networking, and secure management for high-performance real-time networking.",
  features: [
    "4x 10GBASE-SFP TSN Ethernet ports",
    "8x 10/100/1000BASE-T(X) TSN Ethernet ports",
    "100 Gbps switching capacity with wire-speed forwarding",
    "IEEE 802.1AS gPTP timing synchronization",
    "IEEE 802.1Qbv Time Aware Shaper (TAS)",
    "IEEE 802.1Qci per-stream filtering and policing",
    "IEEE 802.1CB Frame Replication and Elimination for Reliability (FRER)",
    "Support for jumbo frames up to 9216 bytes",
    "IEEE 802.1Q VLAN tagging support up to 4K VLAN groups",
    "IEEE 802.1p QoS / CoS and Layer-3/4 QoS classification",
    "Layer-3 routing support with OSPF, RIP, and inter-VLAN routing",
    "IGMP and MLD snooping with multicast filtering",
    "IEEE 802.3ad Link Aggregation (LACP) and VRRP support",
    "HTTPS, SSHv2, SNMPv3, Syslog, and DHCP management",
    "Encrypted and digitally signed firmware upgrades",
    "1U rack-mountable form factor"
  ],
  specs: [
    ["Type", "Managed TSN Ethernet Switch"],
    ["Model", "QSXG12"],
    ["10G Ports", "4x 10GBASE-SFP TSN Ethernet ports"],
    ["1G Ports", "8x 10/100/1000BASE-T(X) TSN Ethernet ports"],
    ["Console Port", "1x Console Port"],
    ["Switching Capacity", "100 Gbps"],
    ["Frame Support", "64-9216 byte frames with jumbo frame support"],
    ["Power Supply", "100-240V AC"],
    ["Synchronization", "IEEE 802.1AS gPTP"],
    ["TSN Standards", "802.1AS, 802.1Qbv, 802.1Qci, 802.1CB"],
    ["QoS Support", "IEEE 802.1p CoS/QoS, Layer-3/4 QoS"],
    ["VLAN Support", "IEEE 802.1Q VLAN tagging up to 4K VLAN groups"],
    ["Layer-3 Features", "Static IPv4/IPv6 routes, OSPF, RIP, SVIs, inter-VLAN routing"],
    ["Multicast Support", "IGMP v1/v2/v3, MLD snooping"],
    ["High Availability", "LACP, VRRP, MTBF >100,000 hours"],
    ["Management", "HTTPS, SSHv2, SNMPv3, DHCP, Syslog"],
    ["Operating Temperature", "-35°C to +45°C"],
    ["Storage Temperature", "-40°C to +85°C"],
    ["Humidity", "10% to 90% non-condensing"],
    ["Form Factor", "19-inch 1U rack-mountable"],
    ["Dimensions", "44.45mm x 482.6mm x 310mm"]
  ],
  applications: [
    "Industrial automation",
    "Mission-critical communication",
    "Factory automation",
    "Deterministic Ethernet backbone",
    "Smart manufacturing",
    "Transportation networking",
    "Audio Video Bridging (AVB)",
    "Real-time control systems",
    "Enterprise TSN deployments",
    "Converged industrial Ethernet"
  ]
},


"qsxg24": {
  image: "/products/TSN Ethernet Switch QSXG24.png",
  desc: "Managed Time-Sensitive Networking (TSN) Ethernet switch designed for deterministic, low-latency industrial and mission-critical networks with integrated Layer-2/Layer-3 capabilities.",
  
  Overview: "The QBIT TSN Ethernet Switch (QSXG24) provides deterministic Ethernet communication with advanced IEEE 802.1 TSN compliance. It supports precise time synchronization, scheduled traffic, frame replication and elimination for reliability (FRER), and high-bandwidth aggregation using 4 x 10G SFP+ ports and 20 x Gigabit TSN Ethernet ports. The switch integrates secure management, multicast handling, redundancy protocols, and Layer-3 routing for converged TSN and non-TSN deployments.",

  features: [
    "4 x 10GBASE-SFP TSN Ethernet ports",
    "20 x 10/100/1000BASE-T(X) TSN Ethernet ports",
    "IEEE 802.1AS gPTP timing and synchronization",
    "IEEE 802.1Qbv Time Aware Shaper (TAS)",
    "IEEE 802.1Qci per-stream filtering and policing",
    "IEEE 802.1CB Frame Replication and Elimination for Reliability (FRER)",
    "100 Gbps switching capacity with wire-speed forwarding",
    "Jumbo frame support up to 9216 bytes",
    "Layer-2 and Layer-3 switching and routing",
    "QoS support with IEEE 802.1p and DSCP classification",
    "Support for OSPF, RIP, VLANs, IGMP and MLD snooping",
    "Secure management via HTTPS, SSHv2, SNMPv3 and Syslog",
    "IEEE 802.3ad LACP and VRRP redundancy support",
    "19-inch 1U rack-mountable form factor"
  ],

  specs: [
    ["Type", "Managed TSN Ethernet Switch"],
    ["Model", "QSXG24"],
    ["TSN Standards", "IEEE 802.1AS, 802.1Qbv, 802.1Qci, 802.1CB"],
    ["Ports", "4 x 10GBASE-SFP + 20 x 10/100/1000BASE-T(X)"],
    ["Console", "1 x Console Port"],
    ["Switching Capacity", "100 Gbps minimum"],
    ["Frame Size", "64-9216 bytes"],
    ["QoS", "IEEE 802.1p, Layer-3/4 DSCP QoS"],
    ["Routing", "IPv4/IPv6 Static Routing, OSPF, RIP"],
    ["Multicast", "IGMP v1/v2/v3, MLD Snooping"],
    ["Redundancy", "LACP, VRRP, FRER"],
    ["VLAN Support", "Up to 4K VLAN groups"],
    ["Management", "HTTPS, SSHv2, SNMPv3, Syslog, DHCP"],
    ["Operating Temperature", "0°C to +45°C"],
    ["Storage Temperature", "-25°C to +60°C"],
    ["Humidity", "10% to 90% non-condensing"],
    ["Form Factor", "19-inch 1U Rack Mount"],
    ["Dimensions", "44.45 mm × 482.6 mm × 310 mm"],
    ["Power Input", "100-240VAC"],
    ["MTBF", "100,000+ hours"]
  ],

  applications: [
    "Industrial automation networks",
    "Mission-critical communication systems",
    "Deterministic Ethernet infrastructure",
    "Smart manufacturing",
    "Automotive TSN backbones",
    "Defense and aerospace networking",
    "Real-time control systems",
    "Converged TSN and enterprise networks"
  ]
},

"Time Sync Solutions (QWR-HW-SX-02R)": {
  image: "/products/WR Switch (WRSv4).png",
    desc: "White Rabbit switch delivering sub-nanosecond synchronisation for precision timing networks.",
    Overview: "The Qbit White Rabbit Switch v4 (WRSv4) is a high-precision Ethernet switch designed to deliver deterministic data transfer with sub-nanosecond time synchronization over standard optical fiber networks. Developed as part of the CERN-led White Rabbit collaboration, it combines advanced timing technology with reliable Layer-2 switching capabilities. The WRSv4 features a 24-port Gigabit Ethernet switching fabric with an enhanced boundary clock that extends IEEE 1588-2008 (PTP) for highly accurate phase, frequency, and time distribution. Using Synchronous Ethernet, hardware timestamping, and precise clock alignment techniques, the system ensures stable, low-latency, and highly synchronized network performance. Built on open-source hardware and software architecture, the switch supports QoS control, VLAN processing, monitoring tools, and robust management interfaces. It is ideally suited for mission-critical applications such as scientific research facilities, telecommunications, smart grids, finance, and defense systems requiring ultra-precise timing and reliable network operation.",

     features: [
  "24-Port Layer-2 Switching — supports flexible SFP-based fiber connectivity with deterministic low-latency packet forwarding",
  "Ultra-precise time synchronization delivering sub-nanosecond accuracy using White Rabbit PTP, Synchronous Ethernet, and hardware timestamping",
  "Grandmaster and Boundary Clock support — operates as a GNSS-disciplined Grandmaster or Boundary Clock for precise network timing distribution",
  "High reliability and availability with redundant power supply support and stable holdover operation for continuous 24×7 performance",
  "Advanced management and control including SSH, SNMP, web-based monitoring, diagnostics, and field-upgradable firmware support"
],
        specs: [
          ["Model", "WRSv4"],
          ["Accuracy", "<1 ns"],
          ["Protocol", "White Rabbit"],
          ["Use Case", "Precision Timing"]
        ],
    applications: [
  "Large scientific research facilities and particle accelerators",
  "Telecommunications and synchronized network infrastructure",
  "Smart grid and power distribution systems",
  "Financial trading networks requiring precise timing",
  "Aerospace and defense communication systems",
  "Industrial automation and mission-critical monitoring networks"
],
},

"Time Synchronization": {
  image: "/products/QbitLabs Time Sync IP.png",
  desc: "High-precision FPGA soft IP core delivering sub-nanosecond synchronization over 1 Gbps optical fiber networks using White Rabbit technology.",
  Overview: "The QbitLabs Time Sync IP is a high-precision FPGA soft IP core built on White Rabbit technology, delivering sub-nanosecond synchronization accuracy over 1 Gbps optical fiber networks with boundary clock functionality, SyncE, hardware timestamping, and dynamic phase and frequency correction — eliminating the need for external dedicated timing hardware.",

  features: [
    "4-port AMD MPSoC-based hardware with redundant link support",
    "2-port node configurable independently in Master or Slave mode",
    "Sub-nanosecond synchronization over 1 Gbps optical fiber using White Rabbit protocol",
    "High-accuracy timing over Ethernet based on IEEE 1588-2019 High Accuracy profile",
    "Plug-and-play deployment over 10 km optical fiber links without calibration, extendable up to 100 km using daisy-chain topology",
    "Dynamic compensation for environmental variations such as temperature-induced asymmetry",
    "Deterministic timing integration directly within the FPGA",
    "No requirement for expensive external oscillators, VCXOs, or dedicated timing hardware",
    "Optimized FPGA resource utilization for efficient implementation"
  ],
  specs: [
    ["Type", "FPGA Soft IP Core"],
    ["Accuracy", "Sub-nanosecond"],
    ["Protocol", "White Rabbit / IEEE 1588-2019 / SyncE"],
    ["Connectivity", "4-Port Optical Ethernet with Redundant Link"],
    ["Range", "Up to 10 km Plug-and-Play, 100 km via Daisy Chain"],
    ["Platform", "AMD MPSoC"]
  ],
  applications: [
    "Telecom and 5G synchronization networks",
    "Scientific and research laboratories",
    "Smart grid and power distribution systems",
    "Aerospace and defense timing systems",
    "Industrial automation and control networks",
    "Broadcasting and media synchronization",
    "High-speed data acquisition systems",
    "Financial trading and time-sensitive infrastructure"
  ],
},

"Time Sync IP with Daisy Chain Support (QWR-IP-SX-02)": {
  image: "/products/QbitLabs Time Sync IP Daisy Chain.png",
  desc: "High-precision FPGA soft IP core with daisy chain support for scalable sub-nanosecond synchronization over 1 Gbps optical fiber networks using White Rabbit technology.",
  Overview: "The QbitLabs Time Sync IP with Daisy Chain Support is a high-precision FPGA soft IP core built on White Rabbit technology, delivering sub-nanosecond synchronization over 1 Gbps optical fiber with scalable multi-node daisy chain topology, SyncE, hardware timestamping, and dynamic phase and frequency correction — all without the need for external dedicated timing hardware.",

  features: [
    "2-port node configurable independently in Master (Daisy Chain) or Slave mode",
    "Configurable 1-port or 2-port architecture at compile time",
    "Sub-nanosecond synchronization over 1 Gbps optical fiber using White Rabbit protocol",
    "High-accuracy timing based on IEEE 1588-2019 High Accuracy profile",
    "Plug-and-play deployment over 10 km optical fiber links without calibration, extendable up to 100 km using daisy chain topology",
    "Dynamic compensation for environmental asymmetries such as temperature variations",
    "Deterministic timing integration directly within the FPGA",
    "No requirement for external oscillators, clocks, VCXOs, or dedicated timing hardware",
    "Optimized FPGA resource utilization for efficient implementation"
  ],
  specs: [
    ["Type", "FPGA Soft IP Core"],
    ["Accuracy", "Sub-nanosecond"],
    ["Protocol", "White Rabbit / IEEE 1588-2019 / SyncE"],
    ["Port Config", "1-Port or 2-Port Configurable with Daisy Chain Support"],
    ["Range", "Up to 10 km Plug-and-Play, 100 km via Daisy Chain"]
  ],
  applications: [
    "Telecom and 5G timing networks",
    "Distributed scientific experiments",
    "Smart grid synchronization",
    "Industrial automation systems",
    "Aerospace and defense networks",
    "Broadcasting and media synchronization",
    "High-speed data acquisition",
    "Large-scale distributed timing infrastructure"
  ],
},

"Time Sync IP (QWR-IP-EP-02)": {
  image: "/products/QbitLabs Time Sync IP Core.png",
  desc: "FPGA soft IP core delivering sub-nanosecond White Rabbit synchronization over 1 Gbps optical fiber, with no external timing hardware required.",
  Overview: "The QbitLabs Time Sync IP is an FPGA soft IP core implementing White Rabbit boundary clock functionality with SyncE, hardware timestamping, and dynamic phase and frequency correction to deliver sub-nanosecond synchronization accuracy over 1 Gbps optical fiber — entirely using standard FPGA resources, with no external dedicated timing hardware needed.",

  features: [
    "2-port node configurable independently in Master (daisy-chain) or Slave mode",
    "Configurable 1-port or 2-port implementation at compile time",
    "Sub-nanosecond synchronization over 1 Gbps optical fiber using White Rabbit protocol",
    "High-accuracy timing based on IEEE 1588-2019 High Accuracy profile",
    "Plug-and-play deployment over 10 km optical fiber links, extendable up to 100 km using daisy-chain topology",
    "Dynamic compensation for environmental variations such as temperature-induced asymmetry",
    "Deterministic timing integration directly within the FPGA",
    "No requirement for external oscillators, VCXOs, or dedicated timing hardware",
    "Optimized FPGA resource utilization for efficient implementation"
  ],
  specs: [
    ["Type", "FPGA Soft IP Core"],
    ["Accuracy", "Sub-nanosecond"],
    ["Protocol", "White Rabbit / IEEE 1588-2019 / SyncE"],
    ["Port Config", "1-Port or 2-Port Configurable"],
    ["Range", "Up to 10 km Plug-and-Play, 100 km via Daisy Chain"]
  ],
  applications: [
    "Telecom and 5G network synchronization",
    "Scientific research and particle accelerators",
    "Smart grid and power utility networks",
    "Industrial automation and control systems",
    "Aerospace and defense timing applications",
    "Broadcasting and media synchronization",
    "High-speed data acquisition systems",
    "Time-sensitive Ethernet networks"
  ],
},
//
"ip1": {
  image: "/products/TCP IP Offload Engine.png",
  desc: "High-performance TCP/IP offload engine for 1G and 10G Ethernet, reducing CPU overhead in demanding network applications.",
  Overview: "The 1G/10G TCP Offload Engine (TCP IP Offload Core) is a hardware acceleration solution designed to improve network throughput, reduce CPU load, and enable deterministic packet processing in high-speed Ethernet systems. It offloads critical TCP/IP protocol functions into hardware for efficient real-time data handling. The IP core supports line-rate TCP processing at 1G and 10G Ethernet speeds, including header generation, checksum calculation, fragmentation handling, and traffic classification. With hardware-optimized packet processing and validated performance, it ensures low-latency and high-reliability operation. Designed for seamless integration with high-speed Ethernet MACs and host interfaces, the solution is ideal for mission-critical networking systems requiring deterministic performance and efficient data processing.",

  features: [
  "Hardware-accelerated 10G TCP/UDP Offload Engine for FPGA-based networking systems",
  "Supports up to 32 concurrent TCP/UDP sessions with configurable on-chip memory allocation",
  "Flexible per-session buffer sizes (8K / 16K / 64K) for performance optimization",
  "Delivers line-rate 10 Gbps bi-directional throughput with deterministic low latency",
  "Full Layer-1 to Layer-4 protocol support with optional Layer-3 functionality",
  "Compatible with Xilinx (AXI Stream) and Intel/Altera (Avalon) FPGA interfaces",
  "Integrated Ethernet features including flow control, jumbo frames, VLAN, and QinQ support",
  "Hardware-accelerated ARP handling with table management support",
  "IPv4/IPv6 support with checksum generation and packet fragmentation and reassembly",
  "Advanced TCP features including session management, flow control, and out-of-order handling"
],
  specs: [
    ["Type", "IP Core"],
    ["Interface", "1G / 10G Ethernet"],
    ["Use Case", "TCP/IP Offload"],
    ["Platform", "FPGA"]
  ],
  applications: [
  "Data centers and cloud networking infrastructure",
  "High-performance computing (HPC) systems",
  "AI/ML data pipelines and accelerators",
  "Financial trading and low-latency market systems",
  "Telecom networks and 5G/edge computing platforms",
  "Defense and aerospace communication systems",
  "Real-time analytics and packet processing systems"
],
},

"ip2": {
  image: "/products/LDPC Codec.png",
  desc: "High-throughput LDPC encoder and decoder IP core for forward error correction in communication and storage systems.",
  Overview: "The LDPC Codec IP is a high-performance error correction core designed to improve data integrity in digital communication systems affected by noise and interference. It uses an efficient iterative decoding technique to detect and correct errors, ensuring reliable and high-quality data transmission. The core features a flexible and configurable architecture, supporting adjustable code rates, decoding iterations, and multiple input data formats to meet diverse system requirements. Built on a fully synchronous and FPGA-friendly design, it enables smooth data flow with simple control interfaces and internal buffering for continuous processing. With optimized decoding performance, high throughput, and reduced latency through early termination techniques, the LDPC Codec IP is well suited for modern high-speed communication and data transmission applications.",

  features: [
  "Fully synchronous design using a single clock",
  "Code rate support for 1/2 and 3/4",
  "Block length of 672",
  "Number of iterations set to 4 with support for user-defined iteration",
  "Configurable soft input bit width",
  "Clock enable support at input and output",
  "Early termination for reduced decoding latency",
  "Easy-to-use interface with handshaking signals",
  "Supports all FPGA devices",
  "Maximum synthesizable frequency of 100MHz to 200MHz depending on target FPGA",
  "More than 300 Mbps throughput at block size of 672 at 250MHz clock",
  "Decoding algorithm: Offset Min-Sum",
  "Message scheduling algorithm: Layered Belief Propagation (LBP)",
  "On-demand support for different code rates and block sizes",
  "On-demand support for communication standards including 802.11n, 802.11ac, and 802.16e",
  "System-Generator model and test-bench availability on demand"
],
  specs: [
    ["Type", "IP Core"],
    ["Function", "LDPC Encode / Decode"],
    ["Use Case", "Forward Error Correction"],
    ["Platform", "FPGA"]
  ],
  applications: [
  "Industrial automation and control systems",
  "Aerospace and defense communication networks",
  "Railway signaling and transportation systems",
  "Power grid and smart grid infrastructure",
  "Mission-critical real-time Ethernet networks",
  "Data centers requiring high availability and failover protection"
],
},

"ip3": {
  image: "/products/Redundant Ethernet.png",
  desc: "Hardware-based redundant Ethernet IP core ensuring zero packet loss and seamless failover for high-availability networks.",
  Overview: "The Ethernet Redundancy Core is a hardware-based fault-tolerance solution designed to ensure uninterrupted data delivery, zero packet loss, and deterministic communication in high-availability Ethernet networks. It provides redundant data paths and rapid hardware-based failover mechanisms for mission-critical and real-time networking applications. The core supports frame replication, duplicate elimination, path supervision, and automatic recovery during link or node failures, enabling seamless communication without traffic interruption. With hardware-accelerated processing and seamless integration with Ethernet MACs and higher-layer interfaces, it delivers high reliability, low latency, and deterministic performance. The solution is ideal for industrial automation, aerospace systems, defense communication networks, and other safety-critical applications requiring continuous and dependable network operation.",

  features: [
  "Hardware-based Ethernet redundancy IP core for FPGA networking systems",
  "Supports PRP and HSR protocols for seamless failover and zero packet loss",
  "Provides frame replication, duplicate elimination, and automatic recovery mechanisms",
  "Deterministic low-latency performance for real-time and mission-critical applications",
  "Supports 1G and 10G Ethernet with transparent Layer-2 redundancy operation",
  "Compatible with Xilinx and Intel FPGA platforms for easy integration",
  "Includes link supervision, status monitoring, and redundancy performance reporting",
  "Designed for seamless integration with Ethernet MACs, switches, and protocol stacks"
],
  specs: [
    ["Type", "IP Core"],
    ["Function", "Redundancy & Failover"],
    ["Use Case", "High-Availability Networks"],
    ["Platform", "FPGA"]
  ],
  applications: [
  "Industrial automation and control systems",
  "Aerospace and defense communication networks",
  "Railway signaling and transportation systems",
  "Power grid and smart grid infrastructure",
  "Mission-critical real-time Ethernet networks",
  "Data centers requiring high availability and failover protection"
],
},

};