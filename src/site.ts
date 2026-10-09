// Personal details used across the site. Edit here, not in the pages.
export const profile = {
  name: 'Xiyuan (Amy) Liu',
  shortName: 'Amy Liu',
  role: 'Electrical & Embedded Systems Engineer',
  tagline:
    'I design, bring up and verify hardware: mixed-signal PCBs, avionics display electronics, FPGA logic and the embedded firmware that ties it together.',
  location: 'San Jose, CA',
  school: 'Harvey Mudd College, B.S. Engineering (ECE), expected May 2027',
  email: 'amyliu01@g.hmc.edu',
  linkedin: 'https://www.linkedin.com/in/xiyuan-liu-amy/',
  github: 'https://github.com/Amigoyith',
  // Drop a PDF at public/resume.pdf and set this to '/resume.pdf' to show a download button.
  resumePdf: null as string | null,
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Hardware',
    items: [
      'PCB schematic & layout',
      'Mixed-signal & RF circuits',
      'SI / EMI debugging',
      'Board bring-up & integration',
      'DO-160G / MIL-STD qualification',
    ],
  },
  {
    group: 'Digital & Embedded',
    items: [
      'SystemVerilog',
      'FPGA',
      'Embedded C',
      'ARM Cortex-M',
      'RISC-V',
      'UVM & formal verification',
      'Boundary-scan (JTAG)',
      'Python',
    ],
  },
  {
    group: 'Tools',
    items: [
      'Altium',
      'Xpedition',
      'KiCad',
      'LTspice',
      'Questa',
      'Verilator',
      'SymbiYosys',
      'MATLAB / Simulink',
      'ANSYS',
      'DOORS',
    ],
  },
  {
    group: 'Lab',
    items: ['Oscilloscope', 'Logic analyzer', 'DMM'],
  },
];

export const awards = [
  { title: 'RTX Display Department Outstanding Employee, Certificate of Excellence', year: '2026' },
  { title: 'Passed FE Electrical & Computer Engineering (EIT)', year: '2026' },
  { title: '1st, 3rd and 5th places, Friends of Amateur Rocketry Unlimited contests', year: '2024 – 2026' },
  { title: '3rd place, HMC Competitive Programming Qualifier for ICPC', year: '2022, 2023' },
];

// href links a course to the project page that shows work from it.
export const coursework: { name: string; href?: string }[] = [
  { name: 'Radio Frequency Circuit Design', href: '/projects/rf-circuit-design/' },
  { name: 'Electronic & Magnetic Circuits and Devices' },
  { name: 'Microprocessor Systems: Design & Applications', href: '/projects/microprocessor-systems/' },
  { name: 'Digital Electronics & Computer Engineering', href: '/projects/multicycle-cpu/' },
  { name: 'Advanced Systems Engineering', href: '/projects/signal-processing/' },
  { name: 'Data Structures & Program Development' },
];
