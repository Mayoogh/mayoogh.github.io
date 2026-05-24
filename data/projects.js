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
//    description HTML string (use &amp; for &, — for em dash)
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
    pills: ['UV-C LED', 'ALU-CORE PCB', 'FIRMWARE']
  },
  {
    id: '00000010',
    title: 'EMG PROSTHETIC HAND',
    date: 'JAN 2022',
    label: 'PERSONAL',
    color: '#00e5a8',
    motif: 'arm',
    photo: 'assets/img/emg-hand.jpg',
    description: '3D-printable prosthetic hand controlled by EMG muscle signals. A microcontroller amplifies &amp; analyzes the signals to drive servos — low-cost, resizable, and adaptable for growing users.',
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
    pills: ['AUTOMATION', 'SCHEDULER', '-50% COST']
  }
  ,
  {
    id: '00000100',
    title: 'TEST PROJECT',
    date: 'JAN 2026',
    label: 'ART',
    color: '#4d7cff',
    motif: 'rocket',
    description: 'Designed &amp; built a test project for art.',
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
  //   pills: ['TAG1', 'TAG2', 'TAG3']
  // }
];
