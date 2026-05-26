// ─────────────────────────────────────────────────────────────────
//  PROJECTS DATA  —  edit this file to add or update build cards
// ─────────────────────────────────────────────────────────────────
//
//  Fields:
//    id          binary index shown on the card  (e.g. '00000101')
//    title       card heading
//    date        e.g. 'MAR 2025'
//    label       badge top-right: 'FREELANCE' | 'PERSONAL' | 'UNIVERSITY' | 'WORK'
//    color       hex accent shown on hover       (e.g. '#ff2e63')
//    motif       pixel illustration key — see MOTIFS in js/main.js
//                built-in keys: 'chip' | 'arm' | 'car' | 'rocket'
//    photo       (optional) path to real image, e.g. 'assets/img/my-project.jpg'
//    description short summary shown on card
//    problem     (optional) what problem were you solving?
//    outcome     (optional) what was the measurable result?
//    pills       array of tag strings
//    link        (optional) URL — future use for a detail page
// ─────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: '00000001',
    title: 'UV UPPER-AIR DISINFECTION',
    date: 'JUN 2021',
    label: 'FREELANCE',
    color: '#b15cff',
    motif: 'chip',
    description: 'Ozone-free UV-C LED disinfection system for HVAC &amp; indoor air — 99.9% efficiency. Designed the control-board PCB, custom aluminum-core UV-C LED strips for thermal management, plus the embedded firmware.',
    problem: 'Client needed a safe, passive disinfection system for HVAC ducting. Existing UV-C lamp solutions ran hot and required bulky external heat sinks — unsuitable for compact duct integration.',
    outcome: 'Delivered a production-ready system: custom aluminium-core LED strips with thermal management solved in-board, a dedicated control PCB, and embedded firmware. Validated at 99.9% disinfection efficiency with zero ozone output.',
    pills: ['UV-C LED', 'ALU-CORE PCB', 'FIRMWARE']
  },
  {
    id: '00000010',
    title: 'EMG PROSTHETIC HAND',
    date: 'JAN 2022',
    label: 'PERSONAL',
    color: '#00e5a8',
    motif: 'arm',
    photo: 'assets/img/2emg-hand.jpg',
    description: '3D-printable prosthetic hand controlled by EMG muscle signals. A microcontroller amplifies &amp; analyzes the signals to drive servos — low-cost, resizable, and adaptable for growing users.',
    problem: 'Commercial prosthetics are expensive and cannot be resized as children grow. Most open-source DIY options lacked precise muscle-signal decoding — relying on simple threshold switches instead of true EMG analysis.',
    outcome: 'Complete 3D-printable hand with a custom EMG signal-amplification PCB driving 5 independent servos. Parts cost under ₹3,000 — resizable for growing users with no board redesign required.',
    pills: ['EMG', 'SERVOS', '3D PRINT']
  },
  {
    id: '00000011',
    title: 'SPLIT-PARALLEL HYBRID EV',
    date: 'JAN 2020',
    label: 'UNIVERSITY',
    color: '#ffcb05',
    motif: 'car',
    description: 'Working prototype combining an IC engine + electric motor. Uses geo-mapping of route &amp; terrain to auto-switch between power sources for optimal efficiency, lower emissions, and a smooth drive.',
    problem: 'Pure EV and ICE drivetrains each struggle on varied terrain and duty cycles. No low-cost prototype existed to validate real-time geo-map-based power-source switching in a split-parallel configuration.',
    outcome: 'Working prototype that autonomously switches between IC engine and electric motor using live GPS and gradient data. Reached KPIT Sparkle national finals — top 30 out of 3,000+ entries.',
    pills: ['HYBRID', 'GEO-MAP', 'CONTROL ALGO']
  },
  {
    id: '00000100',
    title: 'AUTOMATED BELL SCHEDULER',
    date: 'JAN 2017',
    label: 'UNIVERSITY',
    color: '#4d7cff',
    motif: 'rocket',
    description: 'Designed &amp; built an automated bell-scheduling system for a university, streamlining scheduling and operations — about 50% cheaper than the existing system it replaced.',
    problem: 'Christ University relied on a fully manual bell system — every timetable change needed staff intervention, and the existing commercial solution was expensive to maintain and inflexible.',
    outcome: 'Fully automated scheduler deployed and running at the university. Eliminated manual operation entirely and cut system cost by ~50% versus the previous solution.',
    pills: ['AUTOMATION', 'SCHEDULER', '-50% COST']
  }

  // ── ADD YOUR NEXT PROJECT BELOW ──────────────────────────────
  // ,{
  //   id: '00000101',
  //   title: 'YOUR PROJECT TITLE',
  //   date: 'MON YEAR',
  //   label: 'PERSONAL',
  //   color: '#ff2e63',
  //   motif: 'chip',
  //   description: 'Short description here.',
  //   problem: 'What problem were you solving?',
  //   outcome: 'What was the result?',
  //   pills: ['TAG1', 'TAG2', 'TAG3']
  // }
];
