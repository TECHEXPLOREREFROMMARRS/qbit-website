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
  { name: "BHEL",    logo: "/partners/BHEL.png" },
  { name: "Intel",   logo: "/partners/intel.png" },
  { name: "AMD",     logo: "/partners/amd.png" },
  { name: "IDRA",    logo: "/partners/idra.png" },
  { name: "IAF",     logo: "/partners/Indian_Air_Force.png" },
  { name: "INF",     logo: "/partners/Indian_Navy.png" },
  { name: "ARMY",    logo: "/partners/Indian-army.png" },
  { name: "LATTICE", logo: "/partners/lattice_logo.png" },
  { name: "SAC",     logo: "/partners/sac.png" }
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
      { id: "ip2", name: "LDPC Codec",            brochure: "/brochures/ip-core/LDPC CODEC.pdf" },
      { id: "ip3", name: "Redundant Ethernet",    brochure: "/brochures/ip-core/Redundant Ethernet.pdf" }
    ]
  },

  {
    name: "TSN",
    products: [
      { id: "tsn1",       name: "Determinism in TSN White Paper",    brochure: "/brochures/tsn/Determinism in TSN White Paper.pdf" },
      { id: "din-switch", name: "DIN Mounted Industrial Switch",      brochure: "/brochures/tsn/DIN Mounted Industrial Switch.pdf" },
      { id: "tsn3",       name: "TSN ATE Tester Proposal",           brochure: "/brochures/tsn/QBit_TSN_ATE_Tester_Proposal_for_NI_compliance updated.pdf" },
      { id: "tsn4",       name: "TSN Conformance Tester Proposal",   brochure: "/brochures/tsn/QBitTSNConformance Tester Proposal for NI compliance.pdf" },
      { id: "qbl-net",    name: "QBL-NET-X1000 Compact TSN Network", brochure: "/brochures/tsn/QBL-NET-X1000 Compact TSN Network Tester.pdf" },
      { id: "tsn-ep-nic", name: "TSN End Point PCIe NIC",            brochure: "/brochures/tsn/TSN END POINT PCIe NIC.pdf" },
      { id: "tsn7",       name: "TSN End Point System",              brochure: "/brochures/tsn/TSN End Point System.pdf" },
      { id: "qsxg24",     name: "TSN Ethernet Switch QSXG24-Mil",    brochure: "/brochures/tsn/TSN ETHERNET SWITCH (QSXG24)-Mil.pdf" },
      { id: "qsxg4",      name: "TSN Ethernet Switch QSXG4-I",       brochure: "/brochures/tsn/TSN ETHERNET SWITCH QSXG4-I.pdf" },
      { id: "qsxg12",     name: "TSN Ethernet Switch QSXG12",        brochure: "/brochures/tsn/TSN ETHERNET SWITCH QSXG12.pdf" },
      { id: "qsxg20-mil", name: "TSN Ethernet Switch QSXG20-MIL",    brochure: "/brochures/tsn/TSN ETHERNET SWITCH QSXG20-MIL.pdf" },
      { id: "tsn12",      name: "TSN IP",                            brochure: "/brochures/tsn/TSN IP.pdf" }
    ]
  },

  {
    name: "SmartNic",
    products: [
      { id: "qpae",     name: "QBIT PQC Accelerator Endpoint (QPAE)", brochure: "/brochures/smartnic/QBIT PQC Accelerator Endpoint (QPAE).pdf" },
      { id: "smartnic", name: "Qbit ULL SmartNic",                    brochure: "/brochures/smartnic/Qbit ULL SmartNic.pdf" }
    ]
  },

  {
    name: "Satcom",
    products: [
      { id: "hdr",       name: "High Data Rate Receiver with Inbuilt Modem", brochure: "/brochures/satcom/High Data Rate Receiver with Inbuilt Modulator.pdf" },
      { id: "ldr",       name: "Low Data Rate Receiver with Inbuilt Modem",  brochure: "/brochures/satcom/Low Data Rate Receiver with Inbuilt Modulator.pdf" },
      { id: "sat-modem", name: "Qbit Advanced Satellite Modem (QASM)",       brochure: "/brochures/satcom/Qbit Advanced Satellite Modem (QASM-01).pdf" },
      { id: "telemetry", name: "Qbit Integrated Telemetry Receiver (QITR)",  brochure: "/brochures/satcom/Qbit Integrated Telemetry Receiver (QITR01).pdf" }
    ]
  },

  {
    name: "Video Processing",
    products: [
      { id: "dvr", name: "Dual Video Recorder", brochure: "/brochures/videoProcessing/Dual Video Recorder (DVR).pdf" }
    ]
  },

  {
    name: "WR",
    products: [
      { id: "wr-switch", name: "White Rabbit Switch", brochure: "/brochures/wr/White Rabbit Switch (WRSv4).pdf" }
    ]
  }

];

// ─────────────────────────────────────────────
//  PRODUCT DETAILS
//  Keys here MUST match id values in PRODUCT_CATEGORIES
// ─────────────────────────────────────────────
export const PRODUCT_DETAILS = {

  "din-switch": {
    image: "/products/DIN Mounted Industrial Switch.png",
    desc: "Rugged DIN-rail mounted industrial Ethernet switch for harsh environment deployments.",
    features: [
      "DIN-rail form factor",
      "Wide temperature range operation",
      "Industrial-grade reliability",
      "Plug-and-play deployment"
    ],
    specs: [
      ["Form Factor", "DIN Rail"],
      ["Protocol", "Ethernet"],
      ["Use Case", "Industrial Automation"],
      ["Grade", "Industrial"]
    ]
  },

  "dvr": {
    image: "/products/DVR.png",
    desc: "High-fidelity digital video recorder engineered for defence and surveillance applications.",
    features: [
      "High-resolution recording",
      "Secure data storage",
      "Multi-channel support",
      "Rugged enclosure"
    ],
    specs: [
      ["Channels", "Multi-channel"],
      ["Storage", "Secure"],
      ["Use Case", "Surveillance / Defence"],
      ["Grade", "Military"]
    ]
  },

  "hdr": {
    image: "/products/HDR with Inbuilt Modulator.png",
    desc: "High data rate receiver with inbuilt modulator for satellite and RF communication links.",
    features: [
      "Inbuilt modulator",
      "High data rate support",
      "Wide frequency range",
      "Compact form factor"
    ],
    specs: [
      ["Type", "HDR Receiver"],
      ["Modulator", "Inbuilt"],
      ["Use Case", "Satellite / RF"],
      ["Interface", "RF"]
    ]
  },

  "ldr": {
    image: "/products/LDR with Inbuilt Modulator.png",
    desc: "Low data rate receiver with inbuilt modulator for reliable long-range communication.",
    features: [
      "Inbuilt modulator",
      "Long-range reliability",
      "Low power consumption",
      "Defence-grade build"
    ],
    specs: [
      ["Type", "LDR Receiver"],
      ["Modulator", "Inbuilt"],
      ["Use Case", "Long-range Comms"],
      ["Power", "Low"]
    ]
  },

  "qpae": {
    image: "/products/PQC Accelerator Endpoint (QPAE).png",
    desc: "Post-quantum cryptography accelerator endpoint for next-generation secure communications.",
    features: [
      "Post-quantum encryption",
      "Hardware-accelerated PQC",
      "PCIe interface",
      "Defence & enterprise ready"
    ],
    specs: [
      ["Encryption", "Post-Quantum (PQC)"],
      ["Interface", "PCIe"],
      ["Latency", "Ultra Low"],
      ["Use Case", "Secure Comms / Defence"]
    ]
  },

  "smartnic": {
    image: "/products/Qbit ULL SmartNic.png",
    desc: "Ultra-low latency SmartNIC with FPGA acceleration for high-performance AI and defence workloads.",
    features: [
      "FPGA-accelerated processing",
      "100 Gbps throughput",
      "Sub-microsecond latency",
      "PCIe Gen4 interface"
    ],
    specs: [
      ["Latency", "<1 µs"],
      ["Throughput", "100 Gbps"],
      ["Interface", "PCIe Gen4"],
      ["Use Case", "AI / Defence"]
    ]
  },

  "qbl-net": {
    image: "/products/QBL-NET-X1000 COMPACT TSN NETWORK TESTER.png",
    desc: "Compact TSN network switch delivering deterministic Ethernet for time-sensitive applications.",
    features: [
      "IEEE 802.1 TSN compliant",
      "Deterministic packet delivery",
      "Compact ruggedised form factor",
      "Industrial & defence grade"
    ],
    specs: [
      ["Standard", "IEEE 802.1 TSN"],
      ["Form Factor", "Compact"],
      ["Latency", "Deterministic"],
      ["Use Case", "Industrial / Defence"]
    ]
  },

  "sat-modem": {
    image: "/products/Satellite Modem (QASM-01).png",
    desc: "High-speed satellite modem for secure and reliable broadband communication links.",
    features: [
      "Wideband operation",
      "Secure data transmission",
      "Low latency decoding",
      "Rugged design"
    ],
    specs: [
      ["Model", "QASM-01"],
      ["Frequency", "Wideband"],
      ["Use Case", "Satellite Systems"],
      ["Grade", "Defence"]
    ]
  },

  "telemetry": {
    image: "/products/Telemetry Receiver (QITR01).png",
    desc: "Precision telemetry receiver for real-time data acquisition in defence and aerospace systems.",
    features: [
      "Real-time data acquisition",
      "High sensitivity receiver",
      "Wide frequency coverage",
      "MIL-grade enclosure"
    ],
    specs: [
      ["Model", "QITR01"],
      ["Type", "Telemetry Receiver"],
      ["Use Case", "Aerospace / Defence"],
      ["Grade", "Military"]
    ]
  },

  "tsn-ep-nic": {
    image: "/products/TSN END POINT PCIe NIC.png",
    desc: "TSN endpoint PCIe NIC for high-precision time-aware networking in industrial environments.",
    features: [
      "TSN endpoint support",
      "PCIe interface",
      "Deterministic Ethernet",
      "Industrial grade"
    ],
    specs: [
      ["Interface", "PCIe"],
      ["Standard", "IEEE 802.1 TSN"],
      ["Use Case", "Industrial Networking"],
      ["Grade", "Industrial"]
    ]
  },

  "qsxg4": {
    image: "/products/TSN ETHERNET SWITCH QSXG4-I.png",
    desc: "4-port TSN Ethernet switch with industrial-grade reliability for time-sensitive networks.",
    features: [
      "4-port TSN switch",
      "IEEE 802.1 TSN compliant",
      "Industrial temperature range",
      "Deterministic forwarding"
    ],
    specs: [
      ["Model", "QSXG4-I"],
      ["Ports", "4"],
      ["Standard", "IEEE 802.1 TSN"],
      ["Grade", "Industrial"]
    ]
  },

  "qsxg12": {
    image: "/products/TSN ETHERNET SWITCH QSXG12.png",
    desc: "12-port TSN Ethernet switch for scalable deterministic networking in defence systems.",
    features: [
      "12-port configuration",
      "TSN compliant",
      "Scalable architecture",
      "Low latency switching"
    ],
    specs: [
      ["Model", "QSXG12"],
      ["Ports", "12"],
      ["Standard", "IEEE 802.1 TSN"],
      ["Use Case", "Defence / Industrial"]
    ]
  },

  "qsxg20-mil": {
    image: "/products/TSN ETHERNET SWITCH QSXG20-MIL.png",
    desc: "20-port MIL-grade TSN Ethernet switch built for mission-critical defence deployments.",
    features: [
      "20-port MIL-grade switch",
      "TSN compliant",
      "MIL-STD-810 rated",
      "Mission-critical reliability"
    ],
    specs: [
      ["Model", "QSXG20-MIL"],
      ["Ports", "20"],
      ["Standard", "IEEE 802.1 TSN"],
      ["Grade", "MIL-STD-810"]
    ]
  },

  "qsxg24": {
    image: "/products/TSN ETHERNET SWITCH QSXG24.png",
    desc: "24-port TSN Ethernet switch for large-scale time-sensitive network deployments.",
    features: [
      "24-port high-density switch",
      "TSN compliant",
      "High throughput",
      "Rack-mountable"
    ],
    specs: [
      ["Model", "QSXG24"],
      ["Ports", "24"],
      ["Standard", "IEEE 802.1 TSN"],
      ["Use Case", "Enterprise / Defence"]
    ]
  },

  "wr-switch": {
    image: "/products/WR Switch (WRSv4).png",
    desc: "White Rabbit switch delivering sub-nanosecond synchronisation for precision timing networks.",
    features: [
      "Sub-nanosecond synchronisation",
      "White Rabbit protocol",
      "Deterministic timing",
      "Industrial grade"
    ],
    specs: [
      ["Model", "WRSv4"],
      ["Accuracy", "<1 ns"],
      ["Protocol", "White Rabbit"],
      ["Use Case", "Precision Timing"]
    ]
  }

};