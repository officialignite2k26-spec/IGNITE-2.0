// Tabs (Schedule)
const tabBtns = document.querySelectorAll(".tab-btn");
const schedules = document.querySelectorAll(".schedule-container");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    schedules.forEach(s => s.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.day).classList.add("active");
  });
});

/* ===========================
   EVENT DETAILS DATA
=========================== */
const eventDetails = {
  icebreaker: {
    title: "🎤 Icebreaker (Online Submission)",
    info: `
      <p><strong>Participants:</strong> 1 per class</p>
      <p><strong>Venue:</strong> Online</p>
      <p><strong>Duration:</strong> 1–2 minutes</p>

      <h4>Rules</h4>
      <ul>
        <li>Participants must submit a creative video introducing their class.</li>
        <li>Video should clearly highlight class spirit and teamwork.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Offensive, inappropriate, or plagiarized content is strictly prohibited.</li>
        <li>Exceeding the time limit may lead to point deductions.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Creativity & Concept – 40%</li>
        <li>Communication & Clarity – 30%</li>
        <li>Class Representation – 30%</li>
      </ul>
    `
  },

  hackathon: {
    title: "💻 Hackathon",
    info: `
      <p><strong>Teams:</strong> 2 teams per class</p>
      <p><strong>Participants:</strong> 2 per team</p>
      <p><strong>Venue:</strong> Room 10</p>
      <p><strong>Time:</strong> 10:30 AM – 2:30 PM</p>

      <h4>Rules</h4>
      <ul>
        <li>Theme will be provided on the spot.</li>
        <li>Teams must develop a working prototype.</li>
        <li>Presentation is mandatory.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Pre-built, copied, or online projects not allowed.</li>
        <li>Internet usage limited to what organizers permit.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Innovation – 30%</li>
        <li>Technical Implementation – 30%</li>
        <li>Theme Relevance – 20%</li>
        <li>Presentation & Demo – 20%</li>
      </ul>
    `
  },

  pattern: {
    title: "🧩 Pattern Programming",
    info: `
      <p><strong>Participants:</strong> Individual</p>
      <p><strong>Venue:</strong> Lab 2 (Room 5)</p>
      <p><strong>Time:</strong> 12:00 PM – 1:00 PM</p>

      <h4>Rules</h4>
      <ul>
        <li>Program patterns using C language only.</li>
        <li>Logic must be written manually.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Other languages not allowed.</li>
        <li>Copy-paste prohibited.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Logic – 40%</li>
        <li>Output Accuracy – 40%</li>
        <li>Code Structure – 20%</li>
      </ul>
    `
  },

  treasure: {
    title: "🕵️ Treasure Hunt",
    info: `
      <p><strong>Teams:</strong> 2 teams per class</p>
      <p><strong>Participants:</strong> 3 per team</p>
      <p><strong>Venue:</strong> College Campus</p>
      <p><strong>Time:</strong> 10:30 AM – 11:30 AM</p>

      <h4>Rules</h4>
      <ul>
        <li>Clues must be solved in sequence.</li>
        <li>Entire team must move together.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Limited strictly to college campus.</li>
        <li>Mobile phones and external help prohibited.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Clues Completed – 50%</li>
        <li>Accuracy – 30%</li>
        <li>Time Taken – 20%</li>
      </ul>
    `
  },

  debug: {
    title: "🐞 De-Bug",
    info: `
      <p><strong>Teams:</strong> 2 teams per class</p>
      <p><strong>Participants:</strong> 2 per team</p>
      <p><strong>Venue:</strong> Lab 2 (Room 5)</p>
      <p><strong>Time:</strong> 10:30 AM – 12:00 PM</p>

      <h4>Rules</h4>
      <ul>
        <li>20 debugging questions based on Python.</li>
        <li>Code must be corrected within time.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Internet, notes, and external help prohibited.</li>
        <li>Unnecessary logic change not allowed.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Errors Corrected – 60%</li>
        <li>Code Logic & Accuracy – 30%</li>
        <li>Time Taken – 10%</li>
      </ul>
    `
  },

  bgmi: {
    title: "🎮 BGMI (TDM)",
    info: `
      <p><strong>Teams:</strong> 2 teams per class</p>
      <p><strong>Participants:</strong> 4 per team</p>
      <p><strong>Venue:</strong> Hall</p>
      <p><strong>Time:</strong> 11:30 AM – 12:30 PM</p>

      <h4>Rules</h4>
      <ul>
        <li>Mode: Team Death Match.</li>
        <li>Allowed weapons: M416 / AK47 only.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>No melee weapons.</li>
        <li>No sliding.</li>
        <li>No other guns allowed.</li>
      </ul>
    `
  },

  nfs: {
    title: "🏎️ NFS Most Wanted (2005)",
    info: `
      <p><strong>Participants:</strong> 2 per class</p>
      <p><strong>Venue:</strong> Hall</p>
      <p><strong>Time:</strong> 11:30 AM – 12:00 PM</p>

      <h4>Rules</h4>
      <ul>
        <li>Mode: Time Rush.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Track and car will be fixed.</li>
        <li>Any modification is prohibited.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Lowest Completion Time – 100%</li>
      </ul>
    `
  },

  canva: {
    title: "🎨 Canva Designing",
    info: `
      <p><strong>Teams:</strong> 2 teams per class</p>
      <p><strong>Participants:</strong> 2 per team</p>
      <p><strong>Venue:</strong> Lab 2 (Room 5)</p>
      <p><strong>Time:</strong> 10:30 AM – 11:30 AM</p>

      <h4>Rules</h4>
      <ul>
        <li>Theme will be given on the spot.</li>
        <li>Design must be completed within time.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>No AI-generated images or AI tools.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Creativity & Design – 40%</li>
        <li>Theme Relevance – 30%</li>
        <li>Layout & Clarity – 20%</li>
        <li>Overall Presentation – 10%</li>
      </ul>
    `
  },

  adcraft: {
    title: "📢 AdCraft",
    info: `
      <p><strong>Teams:</strong> 2 teams per class</p>
      <p><strong>Participants:</strong> 2 per team</p>
      <p><strong>Venue:</strong> Lab 2 (Room 5)</p>
      <p><strong>Time:</strong> 9:00 AM – 10:30 AM</p>

      <h4>Rules</h4>
      <ul>
        <li>Video must be generated using Grok AI only.</li>
        <li>Editing must be done using OpenShot only.</li>
        <li>Final output must be submitted within time.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>No external assets (images, videos, music).</li>
        <li>No internet access beyond Grok AI.</li>
        <li>Pre-created or reused content prohibited.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Creativity & Concept – 30%</li>
        <li>Relevance to Theme – 25%</li>
        <li>Video Quality & Editing – 25%</li>
        <li>Overall Impact – 20%</li>
      </ul>
    `
  },

  fashion: {
    title: "🎭 Fashion Show (Robotics & AI Theme)",
    info: `
      <p><strong>Participants:</strong> Individual</p>
      <p><strong>Venue:</strong> Hall</p>
      <p><strong>Time:</strong> 11:00 AM – 11:30 AM</p>

      <h4>Rules</h4>
      <ul>
        <li>Entry and exit must be unique.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Offensive costumes or actions prohibited.</li>
        <li>Dangerous props not allowed.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Costume & Concept</li>
        <li>Theme Relevance</li>
        <li>Confidence & Walk</li>
        <li>Entry & Exit</li>
      </ul>
    `
  },

  dance: {
    title: "💃 Dance Competition (Robotics & AI Theme)",
    info: `
      <p><strong>Teams:</strong> 1 team per class</p>
      <p><strong>Participants:</strong> 4 per team</p>
      <p><strong>Venue:</strong> Hall</p>
      <p><strong>Time:</strong> 10:00 AM – 11:00 AM</p>

      <h4>Rules</h4>
      <ul>
        <li>Performance must reflect Robotics & AI.</li>
        <li>Time limit: 2 minutes.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Vulgar moves or inappropriate costumes prohibited.</li>
        <li>Exceeding time limit may reduce marks.</li>
      </ul>

      <h4>Note</h4>
      <ul>
        <li>Max limit is 4 participants there is no
            minimum limit you can perform solo
            also but it will count as a 1 team..</li>
      </ul>   
      
      <h4>Judging Criteria</h4>
      <ul>
        <li>Theme Representation – 30%</li>
        <li>Choreography – 30%</li>
        <li>Energy & Synchronization – 20%</li>
        <li>Overall Impact – 20%</li>
      </ul>
    `
  },

  meme: {
    title: "😂 Meme Making (Online)",
    info: `
      <p><strong>Participants:</strong> 1 per class</p>
      <p><strong>Theme:</strong> AI & Technology</p>
      <p><strong>Deadline:</strong> Before 10:00 AM</p>

      <h4>Rules</h4>
      <ul>
        <li>Meme must be original and creative.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Offensive, political, religious, vulgar content prohibited.</li>
        <li>Plagiarized memes disqualified.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Creativity & Humor – 40%</li>
        <li>Theme Relevance – 40%</li>
        <li>Originality – 20%</li>
      </ul>
    `
  },

  reel: {
    title: "🎥 Reel Making (Online)",
    info: `
      <p><strong>Participants:</strong> 1 per class</p>
      <p><strong>Task:</strong> Capture Day 1 moments of IGNITE 2.0</p>
      <p><strong>Deadline:</strong> Before 10:00 AM</p>

      <h4>Rules</h4>
      <ul>
        <li>Format: MP4 (1080p preferred).</li>
        <li>Can use VFX and effects.</li>
        <li>Collaborate with @ignite2.0.</li>
        <li>Use #gmfcignite2.0 in caption.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Copyright music prohibited.</li>
        <li>Pre-recorded videos not allowed.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Creativity & Flow – 40%</li>
        <li>Video Quality & Editing – 30%</li>
        <li>Event Coverage – 30%</li>
      </ul>
    `
  },

  cube: {
    title: "🧊 Cube Solving",
    info: `
      <p><strong>Participants:</strong> 2 per class</p>
      <p><strong>Venue:</strong> Hall</p>
      <p><strong>Time:</strong> 9:30 AM – 10:00 AM</p>

      <h4>Rules</h4>
      <ul>
        <li>Events include 3×3 and 2×2 cube solving.</li>
        <li>Start and stop only on organizer’s signal.</li>
      </ul>

      <h4>Restrictions</h4>
      <ul>
        <li>Personal cubes not allowed (provided by coordinator).</li>
        <li>Cube modification prohibited.</li>
      </ul>

      <h4>Judging Criteria</h4>
      <ul>
        <li>Speed – 70%</li>
        <li>Correct Completion – 30%</li>
      </ul>
    `
  },

  inaugural: {
    title: "🎉 Inaugural Function",
    info: `<p>Opening ceremony of IGNITE 2.0.</p>`
  },

  quiz: {
  title: "🧠 Quiz",
  info: `
    <p><strong>Participants:</strong> 2 students per team from the same class (Max 20 teams – First Come First Serve)</p>
    <p><strong>Venue:</strong> Hall</p>
    <p><strong>Time:</strong> 10:30 AM – 11:30 AM</p>

    <h4>Rules</h4>
    <ul>
      <li>Conducted using Kahoot.</li>
      <li>Three rounds: IT, GK, (Surprise).</li>
    </ul>

    <h4>Restrictions</h4>
    <ul>
      <li>Use of mobile phones outside Kahoot is not allowed.</li>
      <li>Any form of cheating leads to disqualification.</li>
    </ul>

    <h4>Description</h4>
    <ul>
      <li>This quiz will be conducted on the Kahoot platform,
        offering an interactive and fast-paced experience.
        Participants compete by answering questions in real
        time, with rankings based on correct answers and
        response speed.</li>
    </ul>

    <h4>Judging Criteria</h4>
    <ul>
      <li>Accuracy – 60%</li>
      <li>Speed of Response – 40%</li>
    </ul>
  `
},
  valedictory: {
    title: "🏁 Valedictory Function",
    info: `<p>Closing ceremony and prize distribution.</p>`
  }
};

/* ===========================
   MODAL LOGIC
=========================== */
const modal = document.getElementById("eventModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-btn");

function openModal(key) {
  if (!eventDetails[key]) return;
  modalTitle.innerHTML = eventDetails[key].title;
  modalBody.innerHTML = eventDetails[key].info;
  modal.classList.add("show");
}

document.querySelectorAll(".event-card").forEach(card => {
  card.addEventListener("click", () => {
    openModal(card.dataset.event);
  });
});

document.querySelectorAll(".schedule-card").forEach(card => {
  card.addEventListener("click", () => {
    openModal(card.dataset.event);
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});

/* ===========================
   PREMIUM CANVAS BACKGROUND
=========================== */
// const canvas = document.getElementById("bgCanvas");
// const ctx = canvas.getContext("2d");

// let w, h;
// function resize() {
//   w = canvas.width = window.innerWidth;
//   h = canvas.height = window.innerHeight;
// }
// resize();
// window.addEventListener("resize", resize);

// const dots = [];
// const DOT_COUNT = Math.min(140, Math.floor(window.innerWidth / 6));

// for (let i = 0; i < DOT_COUNT; i++) {
//   dots.push({
//     x: Math.random() * w,
//     y: Math.random() * h,
//     vx: (Math.random() - 0.5) * 0.9,
//     vy: (Math.random() - 0.5) * 0.9,
//     r: Math.random() * 2 + 1,
//   });
// }

// function draw() {
//   ctx.clearRect(0, 0, w, h);

//   for (let i = 0; i < dots.length; i++) {
//     const d = dots[i];

//     d.x += d.vx;
//     d.y += d.vy;

//     if (d.x < 0 || d.x > w) d.vx *= -1;
//     if (d.y < 0 || d.y > h) d.vy *= -1;

//     ctx.beginPath();
//     ctx.fillStyle = "rgba(0,245,255,0.9)";
//     ctx.shadowBlur = 10;
//     ctx.shadowColor = "#00f5ff";
//     ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
//     ctx.fill();

//     for (let j = i + 1; j < dots.length; j++) {
//       const d2 = dots[j];
//       const dist = Math.hypot(d.x - d2.x, d.y - d2.y);
//       if (dist < 120) {
//         ctx.strokeStyle = `rgba(123,92,255,${1 - dist / 120})`;
//         ctx.lineWidth = 1;
//         ctx.beginPath();
//         ctx.moveTo(d.x, d.y);
//         ctx.lineTo(d2.x, d2.y);
//         ctx.stroke();
//       }
//     }
//   }

//   requestAnimationFrame(draw);
// }
// draw();

/* ===========================
   SCROLL ARROW
=========================== */
const scrollArrow = document.getElementById("scrollDown");

window.addEventListener("scroll", () => {
  scrollArrow.style.opacity = window.scrollY > 80 ? "0" : "1";
});

scrollArrow.addEventListener("click", () => {
  document.querySelector("#events").scrollIntoView({ behavior: "smooth" });
});
// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // prevent default jump
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});