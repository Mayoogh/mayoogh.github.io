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
    title: '3D PRINTABLE PROSTHETICS',
    date: 'JAN 2022',
    label: 'PERSONAL',
    color: '#00e5a8',
    motif: 'arm',
    photo: 'assets/img/prosthetics-bench.jpg',
    video: 'PLUnw17LlUI',
    description: 'EMG-controlled 3D-printable prosthetic hand with 5 independent finger servos, BioAmp-EXG-Pill bio-amplifier, and ATmega328p MCU. Started as a weekend robotics experiment — ended up as something that could actually matter.',
    pills: ['EMG', '5x SERVOS', 'ATMEGA328P', 'BIOAMP-EXG-PILL', '3D PRINT'],
    story: [
      {
        title: '// HOW IT STARTED',
        content: `<p>This wasn't supposed to be a "prosthetics project".</p>
<p>I was just building an <strong>InMoov robotic arm</strong> by French designer Gaël Langevin. Mostly for fun.</p>
<p>I had just finished building a custom Prusa-style 3D printer, so naturally I went all in — printed the entire arm in PLA, assembled everything, got the mechanics working.</p>
<p>Then… like most side projects, it paused. Got busy with other work, and the arm just sat there.</p>`
      },
      {
        title: '// THE TRIGGER',
        content: `<p>Around that time, <strong>Deepak Khatri</strong> (founder of Upside Down Labs) reached out.</p>
<p>He had just launched a new bio-signal sensor — <strong>BioAmp EXG Pill</strong></p>
<p>He sent me a couple of units and said: <em>"Try something interesting with this."</em></p>`
      },
      {
        title: '// UNEXPECTED PROBLEM',
        content: `<p>When I went back to pick up the old InMoov arm… it had basically <strong>fallen apart</strong>.</p>
<p>The parts had become extremely brittle and were cracking into dust. Turns out the generic PLA I used earlier didn't age well.</p>
<p>So before doing anything else — I had to <strong>reprint the entire arm from scratch</strong>.</p>
<p>Not planned, but a good reminder: material choice actually matters.</p>`
      },
      {
        title: '// THE IDEA',
        content: `<p>The BioAmp sensors can read <strong>biopotential signals from the human body</strong>.</p>
<p>So instead of controlling the arm with buttons…</p>
<p><strong>What if I could control it using my own muscle signals?</strong></p>`
      },
      {
        title: '// GETTING EMG TO WORK (NOT EASY)',
        content: `<p>This part was surprisingly tricky.</p>
<p>The biggest challenge wasn't coding — it was <strong>finding the correct electrode placement</strong> on the forearm.</p>
<ul>
  <li>wrong placement → no signal</li>
  <li>slight shift → noisy signal</li>
  <li>muscle overlap → unpredictable output</li>
</ul>
<p>Took a lot of trial and error. Deepak helped quite a bit in identifying the "sweet spots".</p>`
      },
      {
        title: '// SIGNAL CLEANUP',
        content: `<p>Raw EMG signals are messy.</p>
<p>I had to:</p>
<ul>
  <li>tweak amplification</li>
  <li>filter noise</li>
  <li>stabilize readings</li>
  <li>define thresholds for actuation</li>
</ul>
<p>After a lot of tuning, I finally got a <strong>decent, usable signal</strong>.</p>`
      },
      {
        title: '// MAKING THE ARM MOVE',
        content: `<p>Once the signal was stable, the rest was straightforward (relatively):</p>
<ul>
  <li>BioAmp EXG Pill → signal acquisition</li>
  <li>ATmega328p (Arduino Nano) → processing</li>
  <li>5 servo motors → individual finger actuation</li>
</ul>
<p>Each finger was controlled independently based on muscle activation.</p>
<img class="proj-photo" src="assets/img/prosthetics-bench.jpg" alt="3D Printable Prosthetics — bench build">
<p>And that was the moment it clicked: <strong>I was moving a robotic hand using my own muscle signals.</strong></p>`
      },
      {
        title: '// WHAT THIS ACTUALLY IS',
        content: `<p>At this point, it still wasn't a "prosthetic".</p>
<p>It was just: a hacked InMoov arm controlled by EMG signals.</p>
<p>Later, I had to present projects for college — so I reframed this into a <strong>low-cost prosthetic concept</strong>.</p>
<p>And honestly, it fit pretty well.</p>`
      },
      {
        title: '// WHY IT MAKES SENSE AS A PROSTHETIC',
        content: `<ul>
  <li>Fully <strong>3D printable</strong> → easy to reproduce</li>
  <li>Easily <strong>scalable</strong> → can resize for different users</li>
  <li>Uses <strong>off-the-shelf components</strong> → low cost</li>
  <li>EMG-based control → intuitive interaction</li>
</ul>
<p>Especially useful for growing children (can reprint at larger scale) and low-cost accessibility scenarios.</p>`
      },
      {
        title: '// LIMITATIONS (VERY REAL ONES)',
        content: `<p>This is still a prototype, and it shows:</p>
<ul>
  <li>Not wearable (external power + bulky setup)</li>
  <li>Limited grip strength</li>
  <li>Signal stability depends heavily on electrode placement</li>
  <li>No closed-loop feedback</li>
</ul>`
      },
      {
        title: '// WHAT I WOULD DO NEXT',
        content: `<p>If I were to take this further:</p>
<ul>
  <li>integrate actuators inside the palm (compact design)</li>
  <li>improve grip strength (better transmission / motors)</li>
  <li>refine EMG signal processing</li>
  <li>make it fully wearable</li>
  <li>add feedback (force / haptics)</li>
</ul>`
      },
      {
        title: '// FINAL THOUGHT',
        content: `<p>This started as a <strong>weekend robotics experiment</strong>.</p>
<p>Turned into a full reprint, a lot of debugging, and eventually something that <em>could</em> be meaningful.</p>
<p>That's probably my favorite kind of project.</p>`
      }
    ]
  },
  {
    id: '00000010',
    title: 'UV UPPER-AIR DISINFECTION',
    date: 'JUN 2021',
    label: 'FREELANCE',
    color: '#b15cff',
    motif: 'chip',
    description: 'Ozone-free UV-C LED disinfection system for HVAC &amp; indoor air — 99.9% efficiency. Designed the control-board PCB, custom aluminum-core UV-C LED strips for thermal management, plus the embedded firmware.',
    pills: ['UV-C LED', 'ALU-CORE PCB', 'FIRMWARE'],
    story: [
      {
        title: '// THE BRIEF',
        content: `<p>A client needed to disinfect air passing through HVAC ducting — passively, safely, with no ozone.</p>
<p>Existing UV-C lamp solutions ran hot and needed bulky external heatsinks that simply didn't fit inside compact duct cross-sections.</p>
<p><strong>The ask: design something that actually fits inside the duct.</strong></p>`
      },
      {
        title: '// WHY UV-C LEDS (AND WHY THEY\'RE HARD)',
        content: `<p>UV-C LEDs at 265–280nm are lethal to airborne pathogens without producing ozone — unlike traditional UV-C lamps which emit at 185nm and require ozone filtering downstream.</p>
<p>The hard part: UV-C LEDs are thermally inefficient. Most input power becomes heat, and heat kills the LED junction fast. Standard FR4 PCB has too high a thermal resistance — you need metal.</p>
<p><strong>Thermal management was the core engineering problem to solve.</strong></p>`
      },
      {
        title: '// WHAT WAS BUILT',
        content: `<ul>
  <li><strong>Custom aluminium-core LED strips</strong> — metal-core PCB layer conducts heat directly away from the LED junctions, eliminating any external heatsink</li>
  <li><strong>Control PCB</strong> — manages power delivery, LED current regulation, and safety interlocks</li>
  <li><strong>Embedded firmware</strong> — duty cycle control, fault detection, and operational logic</li>
</ul>
<p>The alu-core strip was the key insight: thermal management solved in-board. The strip itself <em>is</em> the heatsink.</p>`
      },
      {
        title: '// THE RESULT',
        content: `<p>Production-ready system validated at <strong>99.9% disinfection efficiency</strong> with <strong>zero ozone output</strong>.</p>
<p>Compact enough for direct integration into standard HVAC ducting — no external hardware, no bulky heatsinks.</p>`
      },
      {
        title: '// FULL CASE STUDY',
        content: `<div class="wip-block">
  <div class="wip-dots"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  <div class="wip-msg">// SCHEMATICS &amp; TEST DATA: LOADING<span class="wip-cursor">_</span></div>
  <div class="wip-sub">THERMAL ANALYSIS · PCB STACK-UP · VALIDATION RESULTS · COMING SOON<br>DEVELOPER IS DEFINITELY NOT PROCRASTINATING</div>
</div>`
      }
    ]
  },
  {
    id: '00000011',
    title: 'SPLIT-PARALLEL HYBRID EV',
    date: 'JAN 2020',
    label: 'UNIVERSITY',
    color: '#ffcb05',
    motif: 'car',
    description: 'Working prototype combining an IC engine + electric motor. Uses geo-mapping of route &amp; terrain to auto-switch between power sources for optimal efficiency, lower emissions, and a smooth drive.',
    pills: ['HYBRID', 'GEO-MAP', 'CONTROL ALGO'],
    story: [
      {
        title: '// THE STARTING POINT',
        content: `<p>This started as a university project with a simple brief: build something in the EV space.</p>
<p>But pure EVs and pure ICE vehicles both have obvious weaknesses — and hybrids already existed. So the interesting question wasn't <em>"what if we combine them?"</em></p>
<p><strong>It was: how do you decide when to switch?</strong></p>`
      },
      {
        title: '// THE PROBLEM WITH EXISTING HYBRIDS',
        content: `<p>Most hybrid systems react to what's happening right now — current speed, throttle position, battery charge.</p>
<p>That works. But it's not optimal.</p>
<p>If you're about to climb a long gradient, you should be on the electric motor <em>before</em> you hit the hill — not after the ICE has already kicked in and burned fuel getting there. The system needs to look ahead, not just react.</p>
<p><strong>No low-cost prototype existed to test this idea.</strong> Commercial hybrid control systems are black boxes. We wanted to build one from scratch and validate the concept.</p>`
      },
      {
        title: '// WHAT IS SPLIT-PARALLEL?',
        content: `<p>A split-parallel hybrid uses both an <strong>IC engine</strong> and an <strong>electric motor</strong> — either independently or together — depending on the driving condition.</p>
<ul>
  <li>Low speed / flat terrain → electric motor only (efficient, silent)</li>
  <li>High load / steep gradient → IC engine or both together</li>
  <li>Deceleration → regenerative braking back to battery</li>
</ul>
<p>The key is the <strong>control algorithm</strong> that decides which mode to use — and when.</p>`
      },
      {
        title: '// THE GEO-MAPPING IDEA',
        content: `<p>Instead of reacting to current conditions, our control algorithm <strong>pre-loads the route</strong>.</p>
<p>Using GPS coordinates and terrain elevation data, the system maps the upcoming gradient profile of the journey before the vehicle starts moving.</p>
<p>It then plans the power source switching in advance:</p>
<ul>
  <li>Flat sections → electric</li>
  <li>Upcoming climb detected → pre-charge / switch to ICE early</li>
  <li>Downhill → recover energy</li>
</ul>
<p>The result: <strong>smoother transitions, lower fuel consumption, fewer reactive switches</strong> that wear the drivetrain.</p>`
      },
      {
        title: '// BUILDING THE PROTOTYPE',
        content: `<p>We built a working scaled prototype — not a simulation.</p>
<p>The drivetrain combined a small IC engine and an electric motor in a split-parallel arrangement, with a custom control board managing mode switching based on live GPS input and the pre-loaded terrain profile.</p>
<p>The control algorithm ran on an embedded MCU, reading GPS data in real time and comparing it against the mapped route to trigger power source transitions at the right moment.</p>`
      },
      {
        title: '// KPIT SPARKLE',
        content: `<p><strong>KPIT Sparkle</strong> is one of India's largest student engineering competitions focused on mobility and automotive innovation — over <strong>3,000+ teams</strong> entered that year.</p>
<img class="proj-photo" src="assets/img/KPIT_1.jpg" alt="KPIT Sparkle — team presentation">
<p>We submitted the geo-map-based hybrid switching concept and prototype, and made it through multiple rounds of evaluation by industry engineers from the automotive sector.</p>`
      },
      {
        title: '// THE RESULT',
        content: `<p>We reached the <strong>national finals — top 30 out of 3,000+ entries</strong>.</p>
<img class="proj-photo" src="assets/img/KPIT_2.jpg" alt="KPIT Sparkle — national finals">
<p>For a university team with a low-budget prototype, making it to the final stage against dedicated engineering teams was the real validation that the core idea held up under scrutiny.</p>`
      },
      {
        title: '// WHAT I WOULD DO NEXT',
        content: `<p>The prototype proved the concept, but there's a lot of room to go further:</p>
<ul>
  <li>Real-time traffic data integration (not just terrain)</li>
  <li>Machine learning to refine switching thresholds over repeated routes</li>
  <li>Regenerative braking tuned to the predicted downhill profile</li>
  <li>Full-scale vehicle implementation with CAN bus integration</li>
</ul>
<p>The geo-mapping approach is still underexplored in production vehicles. Most OEM hybrids don't use predictive route data yet — though some newer high-end cars are starting to.</p>`
      }
    ]
  },
  {
    id: '00000100',
    title: 'AUTOMATED BELL SCHEDULER',
    date: 'JAN 2017',
    label: 'UNIVERSITY',
    color: '#4d7cff',
    motif: 'rocket',
    description: 'Designed &amp; built an automated bell-scheduling system for a university, streamlining scheduling and operations — about 50% cheaper than the existing system it replaced.',
    pills: ['AUTOMATION', 'SCHEDULER', '-50% COST'],
    story: [
      {
        title: '// THE PROBLEM',
        content: `<p>Christ University ran on a fully manual bell system — every schedule change meant someone physically adjusting timers or flipping switches. Error-prone, inflexible, and entirely dependent on staff being in the right place at the right time.</p>
<p>A commercial solution existed but was expensive to license, expensive to maintain, and still inflexible for custom timetable needs.</p>
<p><strong>There had to be a better way to ring a bell.</strong></p>`
      },
      {
        title: '// WHAT WAS BUILT',
        content: `<p>A fully custom automated bell scheduling system — designed, built, and deployed from scratch.</p>
<p>The system handles the complete timetable: regular periods, breaks, special schedules, and manual overrides — all configurable without any staff intervention during normal operation.</p>`
      },
      {
        title: '// DEPLOYED & RUNNING',
        content: `<p>The system was installed at Christ University and replaced the previous solution entirely.</p>
<ul>
  <li>Zero manual operation for routine scheduling</li>
  <li>Cut system cost by ~<strong>50%</strong> versus the commercial alternative</li>
  <li>Fully automated — staff no longer needed to manage the bell</li>
</ul>`
      },
      {
        title: '// FULL CASE STUDY',
        content: `<div class="wip-block">
  <div class="wip-dots"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  <div class="wip-msg">// SYSTEM ARCHITECTURE: LOADING<span class="wip-cursor">_</span></div>
  <div class="wip-sub">HARDWARE DESIGN · CIRCUIT DIAGRAMS · DEPLOYMENT STORY · COMING SOON<br>YES, A BELL SYSTEM HAS A STORY. TRUST THE PROCESS.</div>
</div>`
      }
    ]
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
