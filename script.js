/* ═══════════════════════════════════════════════════════════════
   DUNE PORTFOLIO  ·  ARRAKIS EFFECT ENGINE
   ═══════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────
   SAND PARTICLE SYSTEM
────────────────────────────────────────── */
(function initSandCanvas() {
  const canvas = document.getElementById('sandCanvas');
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = [
    [220, 160,  60],
    [180, 120,  40],
    [200, 140,  50],
    [240, 190,  90],
    [160, 100,  30],
  ];

  class Grain {
    constructor() { this.spawn(); }

    spawn() {
      this.x    = Math.random() * canvas.width;
      this.y    = canvas.height * (.4 + Math.random() * .6);
      this.size = Math.random() * 1.2 + .2;
      this.vx   = (Math.random() - .4) * .35;
      this.vy   = -(Math.random() * .55 + .08);
      this.life = 1;
      this.dec  = Math.random() * .004 + .0015;
      this.alpha= Math.random() * .45 + .08;
      const c   = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.r    = c[0]; this.g = c[1]; this.b = c[2];
    }

    update() {
      this.x   += this.vx;
      this.y   += this.vy;
      this.life -= this.dec;
      if (this.life <= 0 || this.y < -10) this.spawn();
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.life * this.alpha;
      ctx.fillStyle   = `rgb(${this.r},${this.g},${this.b})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const grains = Array.from({ length: 140 }, () => {
    const g = new Grain();
    g.y = Math.random() * canvas.height; // scatter on load
    return g;
  });

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    grains.forEach(g => { g.update(); g.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();


/* ──────────────────────────────────────────
   STAR FIELD
────────────────────────────────────────── */
(function initStars() {
  const field = document.getElementById('starfield');
  if (!field) return;

  const N = 120;
  for (let i = 0; i < N; i++) {
    const s = document.createElement('div');
    const size    = Math.random() * 1.8 + .4;
    const opacity = Math.random() * .7 + .15;
    const dur     = (Math.random() * 4 + 2).toFixed(1);
    const delay   = (Math.random() * 6).toFixed(1);

    Object.assign(s.style, {
      position:     'absolute',
      width:        size + 'px',
      height:       size + 'px',
      borderRadius: '50%',
      left:         (Math.random() * 100) + '%',
      top:          (Math.random() * 80)  + '%',
      background:   `rgba(232,200,120,${opacity})`,
      animation:    `starPulse ${dur}s ease-in-out ${delay}s infinite`,
    });
    field.appendChild(s);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes starPulse {
      0%,100% { opacity: 1; transform: scale(1); }
      50%      { opacity: .2; transform: scale(.6); }
    }
  `;
  document.head.appendChild(style);
})();


/* ──────────────────────────────────────────
   TYPEWRITER  (cycling roles)
────────────────────────────────────────── */
(function initTypewriter() {
  const el    = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'Software Engineering Student',
    'Full-Stack Web Developer',
    'STEM & Cybersecurity Instructor',
    'Bilingual · English / French',
  ];

  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const word = roles[ri];

    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 55 : 90);
  }
  setTimeout(tick, 1000);
})();


/* ──────────────────────────────────────────
   SCROLL PROGRESS BAR
────────────────────────────────────────── */
(function initProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
})();


/* ──────────────────────────────────────────
   NAV  (scroll effects + active link)
────────────────────────────────────────── */
(function initNav() {
  const nav   = document.getElementById('mainNav');
  const links = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const sections = document.querySelectorAll('[id]');
  const navObs   = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: .35 });

  sections.forEach(s => navObs.observe(s));
})();


/* ──────────────────────────────────────────
   HAMBURGER  (mobile menu)
────────────────────────────────────────── */
(function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const menu  = document.getElementById('mobileMenu');
  const mobs  = document.querySelectorAll('.mob-link');
  if (!btn || !menu) return;

  let open = false;
  function toggle() {
    open = !open;
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    const spans = btn.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(6px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  }
  btn.addEventListener('click', toggle);
  mobs.forEach(m => m.addEventListener('click', () => open && toggle()));
})();


/* ──────────────────────────────────────────
   HERO PARALLAX
────────────────────────────────────────── */
(function initParallax() {
  const inner = document.querySelector('.hero-inner');
  if (!inner) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    inner.style.transform = `translateY(${y * .25}px)`;
    inner.style.opacity   = Math.max(0, 1 - y / 550);
  }, { passive: true });
})();


/* ──────────────────────────────────────────
   FADE-IN  (scroll reveal)
────────────────────────────────────────── */
(function initFadeIn() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
})();


/* ──────────────────────────────────────────
   SKILL BARS
────────────────────────────────────────── */
(function initSkillBars() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  let fired = false;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !fired) {
      fired = true;
      grid.querySelectorAll('.sk-bar').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.w + '%';
        }, i * 60);
      });
    }
  }, { threshold: .25 });

  obs.observe(grid);
})();


/* ──────────────────────────────────────────
   CURSOR GLOW
────────────────────────────────────────── */
(function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(hover: none)').matches) return;
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
})();


/* ──────────────────────────────────────────
   SAND RIPPLE  (on click)
────────────────────────────────────────── */
(function initRipple() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes sandRipple {
      to { width:70px; height:70px; opacity:0; border-width:.5px; }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('click', e => {
    const r = document.createElement('div');
    Object.assign(r.style, {
      position:     'fixed',
      left:         e.clientX + 'px',
      top:          e.clientY + 'px',
      width:        '4px',
      height:       '4px',
      border:       '1px solid rgba(196,150,60,.55)',
      borderRadius: '50%',
      transform:    'translate(-50%,-50%)',
      animation:    'sandRipple .8s ease-out forwards',
      pointerEvents:'none',
      zIndex:       '9999',
    });
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 850);
  });
})();


/* ──────────────────────────────────────────
   CONTACT FORM  (opens the visitor's email app)
────────────────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const btn  = document.getElementById('sendBtn');
  if (!form || !btn) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = document.getElementById('cfName').value;
    const email = document.getElementById('cfEmail').value;
    const msg   = document.getElementById('cfMsg').value;
    window.location.href = 'mailto:xmala086@uottawa.ca'
      + '?subject=' + encodeURIComponent('Portfolio message from ' + name)
      + '&body=' + encodeURIComponent(msg + '

— ' + name + ' (' + email + ')');
    const txt = btn.querySelector('.sb-text');
    txt.textContent = '[ OPENING EMAIL  ◈ ]';
    btn.classList.add('sent');
    btn.disabled = true;
    setTimeout(() => {
      txt.textContent = 'SEND MESSAGE';
      btn.classList.remove('sent');
      btn.disabled = false;
      form.reset();
    }, 3500);
  });
})();


/* ──────────────────────────────────────────
   PROJECT CARD  (corner accent on hover)
────────────────────────────────────────── */
(function initCardAccents() {
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.setProperty('--hov', '1');
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--hov', '0');
    });
  });
})();
