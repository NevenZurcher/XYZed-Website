// Load Spline runtime dynamically in the browser (avoids bare specifier errors
// when serving files without a bundler). Uses the same runtime version as the
// spline-viewer included in index.html.
let spline = null;
let homeSplineLoaded = false;
let _resolveHomeLoaded = null;
const homeLoadedPromise = new Promise((res) => { _resolveHomeLoaded = res; });
(async function initSpline() {
  try {
    const mod = await import('https://unpkg.com/@splinetool/runtime@1.10.74/build/runtime.js');
    const { Application } = mod;
    const canvas = document.getElementById('spline-canvas');
    if (!canvas) return; // nothing to mount to
    spline = new Application(canvas);
    // expose for debugging
    window.spline = spline;

    await spline.load('https://prod.spline.design/x7N9HO870izAFCqK/scene.splinecode');
    // mark home spline loaded for preloader logic
    homeSplineLoaded = true;
    if (typeof _resolveHomeLoaded === 'function') _resolveHomeLoaded();
    spline.addEventListener('mouseDown', (e) => {
      if (e.target && e.target.name === 'MyButton') {
        const demoTest = document.getElementById('demo-test');
        const video = document.querySelector('.video video');
        if (demoTest && video) {
          video.classList.add('fade-out');
          setTimeout(() => {
            setTimeout(() => {
              demoTest.style.display = 'block';
              const vid = demoTest.querySelector('video');
              if (vid) vid.play();
              video.style.display = 'none';
            }, 250);
          }, 500);
        }
      }
    });
  } catch (err) {
    console.error('Failed to load Spline runtime or scene', err);
  }
})();


// Prevent reload and show demo video when Demo Reel is clicked
document.addEventListener('DOMContentLoaded', function () {
  // Ensure background video is allowed to autoplay in restrictive browsers
  try {
    const bgVideo = document.querySelector('.video video');
    if (bgVideo) {
      // Some browsers require the muted property to be set programmatically
      // before a play() attempt — set it defensively and try to play.
      bgVideo.muted = true;
      bgVideo.playsInline = true;
      bgVideo.setAttribute('muted', '');
      bgVideo.setAttribute('playsinline', '');
      // Attempt to play (may return a promise)
      const p = bgVideo.play();
      if (p && typeof p.then === 'function') p.catch(() => { });
    }
  } catch (e) { /* ignore */ }

  const demoReelLink = document.querySelector('.navbar-menu a[href="#splineAction"]');
  if (demoReelLink) {
    demoReelLink.addEventListener('click', function (e) {
      e.preventDefault();
      // Show demo video overlay
      document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
      const demoTest = document.getElementById('demo-test');
      const video = document.querySelector('.video video');
      if (demoTest && video) {
        video.classList.add('fade-out');
        setTimeout(() => {
          setTimeout(() => {
            demoTest.style.display = 'block';
            const vid = demoTest.querySelector('video');
            if (vid) vid.play();
            video.style.display = 'none';
          }, 250);
        }, 500);
      }
    });
  }
});

// Hide navbar on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector('.header');
window.addEventListener('scroll', function () {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (navbar) {
    if (st > lastScrollTop && st > 50) {
      // Scroll down
      navbar.style.transform = 'translateY(-160px)'; // Move further up to hide logo and divider
      navbar.style.transition = 'transform 0.3s';
    } else {
      // Scroll up
      navbar.style.transform = 'translateY(0)';
      navbar.style.transition = 'transform 0.3s';
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }
});
window.addEventListener('scroll', function () {
  const tagline = document.querySelector('.tagline');
  const aboutSection = document.getElementById('about');
  const splineContainer = document.getElementById('spline-container');

  // Original tagline visibility logic - appears after scrolling down 100px
  if (window.scrollY > 100) {
    tagline.classList.add('visible');
  } else {
    tagline.classList.remove('visible');
  }

  // Separate logic for spline and tagline when scrolling past about section
  if (aboutSection && splineContainer && tagline) {
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if we've scrolled past about section
    const pastAbout = aboutTop < windowHeight * 0.5;

    // SPLINE: Only hide when scrolling past about section
    if (pastAbout) {
      splineContainer.style.opacity = '0';
      splineContainer.style.pointerEvents = 'none';
    } else {
      splineContainer.style.opacity = '1';
      splineContainer.style.pointerEvents = 'auto';
    }

    // TAGLINE: Hide when at top (scrollY < 100) OR when past about section
    if (window.scrollY < 100 || pastAbout) {
      tagline.style.opacity = '0';
      tagline.style.pointerEvents = 'none';
    } else {
      tagline.style.opacity = '1';
      tagline.style.pointerEvents = 'auto';
    }
  }

  const blurAmount = Math.min(window.scrollY / 100, 1) * 8;
  const dimAmount = Math.min(window.scrollY / 300, 0.5);
  const splineCanvas = document.getElementById('spline-canvas');
  if (splineCanvas) {
    splineCanvas.style.filter = `blur(${blurAmount}px)`;
    splineCanvas.style.opacity = '';
  }
  const videoSection = document.querySelector('.video');
  videoSection.style.filter = `blur(${blurAmount}px)`;
  videoSection.style.opacity = `${1 - dimAmount}`;
  // Blur effect for demo video overlay
  const demoTest = document.getElementById('demo-test');
  if (demoTest && demoTest.style.display === 'block') {
    const demoVid = demoTest.querySelector('video');
    if (demoVid) {
      demoVid.style.filter = `blur(${blurAmount}px)`;
      demoVid.style.opacity = `${1 - dimAmount}`;
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoTest = document.getElementById('demo-test');
  const hideBtn = document.getElementById('hideDemoTest');
  if (hideBtn && demoTest) {
    hideBtn.addEventListener('click', function () {
      demoTest.style.display = 'none';
      const vid = demoTest.querySelector('video');
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
      }
      // Restore background video
      const video = document.querySelector('.video video');
      if (video) {
        video.style.display = '';
        video.classList.remove('fade-out');
      }
    });
  }
});

window.addEventListener('hashchange', function () {
  if (location.hash === '#splineAction') {
    const video = document.querySelector('.video video');
    const demoTest = document.getElementById('demo-test');
    if (video && demoTest) {
      video.classList.add('fade-out');
      setTimeout(() => {
        setTimeout(() => {
          demoTest.style.display = 'block';
          // Optionally play the video
          const vid = demoTest.querySelector('video');
          if (vid) vid.play();
          video.style.display = 'none';
        }, 250); // Extra delay for smoother transition
      }, 500);
    }
  }
});

// Home link resets video/image state
const homeLink = document.querySelector('.navbar-menu a[href="#home"]');
if (homeLink) {
  homeLink.addEventListener('click', function (e) {
    e.preventDefault();
    // Reset hash
    history.replaceState(null, '', ' ');
    // Hide demo test overlay and restore video
    const video = document.querySelector('.video video');
    const demoTest = document.getElementById('demo-test');
    if (video && demoTest) {
      demoTest.style.display = 'none';
      const vid = demoTest.querySelector('video');
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
      }
      video.style.display = '';
      video.classList.remove('fade-out');
    }
    // Optionally scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Ensure clicking the site logo behaves like the Home link (SPA behavior).
// This covers cases where the logo is not an anchor with href="#home".
(function attachLogoHomeHandler() {
  function addLogoListeners() {
    const selectors = ['.header .logo', '.navbar .logo', '.logo', '.navbar-brand', 'a.logo', '.header a.logo', '.brand'];
    const nodes = [];
    selectors.forEach(sel => {
      try {
        document.querySelectorAll(sel).forEach(n => nodes.push(n));
      } catch (e) { /* ignore invalid selectors */ }
    });
    // dedupe
    const unique = Array.from(new Set(nodes));
    if (!unique.length) return;

    function handleLogoClick(e) {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      // Match the Home link behavior: reset hash, hide demo overlay, restore bg video, scroll top
      try { history.replaceState(null, '', ' '); } catch (err) { /* ignore */ }
      const demoTest = document.getElementById('demo-test');
      if (demoTest) {
        demoTest.style.display = 'none';
        const demoVid = demoTest.querySelector('video');
        if (demoVid) { demoVid.pause(); demoVid.currentTime = 0; }
      }
      const bgVideo = document.querySelector('.video video');
      if (bgVideo) { bgVideo.style.display = ''; bgVideo.classList.remove('fade-out'); }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    unique.forEach(el => {
      // Avoid double-binding
      if (el.__homeHandlerAttached) return;
      el.addEventListener('click', handleLogoClick);
      try { el.__homeHandlerAttached = true; } catch (e) { /* ignore */ }
    });
  }

  // Try attaching now and also once DOM is ready (covers timing differences)
  try { addLogoListeners(); } catch (e) { /* ignore */ }
  document.addEventListener('DOMContentLoaded', addLogoListeners);
})();

// Smooth scroll to contact and account for fixed header height
document.addEventListener('click', function (e) {
  const el = e.target.closest && e.target.closest('a[href="#contact"]');
  if (!el) return;
  e.preventDefault();
  const contact = document.querySelector('#contact');
  if (!contact) return;
  // header height (fallback to 80px)
  const header = document.querySelector('.header');
  const headerHeight = header ? header.getBoundingClientRect().height : 80;
  // extra gap so the contact content sits further down (in px)
  const extraGap = 60;
  // Prefer scrolling to the Contact heading so its margin doesn't create
  // an apparent gap. Fallback to the section offsetTop when heading is
  // missing.
  const heading = contact.querySelector('h2') || contact.querySelector('h3') || contact;
  // Use getBoundingClientRect + pageYOffset for a document-accurate position
  const baseTop = heading.getBoundingClientRect().top + window.pageYOffset;
  // Subtract header height and add an extraGap so the section is scrolled
  // a little further down the page (gives breathing room above the content).
  const top = Math.max(0, Math.round(baseTop - headerHeight + extraGap));

  // Delay the scroll a short moment to allow earlier click handlers to run
  // and then override with our precise position. Two retries increase
  // reliability across browsers and other site scripts.
  setTimeout(() => { window.scrollTo({ top, behavior: 'smooth' }); }, 60);
  setTimeout(() => { window.scrollTo({ top, behavior: 'smooth' }); }, 260);
});

// FAQ accordion behavior
document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = Array.from(document.querySelectorAll('.faq-question'));
  if (!faqButtons.length) return;
  faqButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      // collapse all siblings for single-open behavior
      faqButtons.forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const ans = b.nextElementSibling;
        if (ans && ans.classList.contains('faq-answer')) ans.hidden = true;
      });
      // toggle this one
      this.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      const answer = this.nextElementSibling;
      if (answer && answer.classList.contains('faq-answer')) answer.hidden = expanded;
    });
    // keyboard activation
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
});

window.addEventListener('DOMContentLoaded', function () {
  const preloader = document.getElementById('preloader');
  const progress = document.getElementById('preloader-progress');
  document.body.style.overflow = 'hidden';
  // Start loading the About spline during the preloader so it finishes
  // loading while the preloader is visible.
  // try {
  //   initAboutSpline();
  // } catch (e) {
  //   // initAboutSpline may not be defined yet if the function hasn't been
  //   // parsed; wrap defensively.
  //   console.warn('initAboutSpline not available yet, will load later');
  // }
  // Also eagerly trigger load/prefetch for the Contact spline-viewer so
  // its scene downloads while the preloader is visible.
  try {
    const contactViewer = document.querySelector('.contact-container spline-viewer');
    if (contactViewer) {
      const url = contactViewer.getAttribute('url');
      // If the web-component exposes a load() method, call it. Otherwise
      // reassign the attribute and do a fetch to warm the cache.
      if (typeof contactViewer.load === 'function') {
        try { contactViewer.load(url); } catch (err) { console.warn('contactViewer.load failed', err); }
      } else if (url) {
        // Re-assign attribute to nudge the component to load
        contactViewer.setAttribute('url', url);
        // Try a lightweight fetch to warm cache (best-effort)
        fetch(url, { method: 'GET', mode: 'cors', cache: 'force-cache' })
          .then(() => console.log('Prefetched contact spline'))
          .catch(() => { });
      }
    }
  } catch (err) {
    console.warn('Error while preloading contact spline', err);
  }
  if (progress) {
    progress.style.width = '0%';
    progress.style.width = '100%';
  }

  // Wait for spline assets (home + about + contact prefetch) to finish
  // before hiding the preloader. Fallback to a timeout to avoid stalling.
  let contactPromise = Promise.resolve();
  try {
    const contactViewer = document.querySelector('.contact-container spline-viewer');
    if (contactViewer) {
      const url = contactViewer.getAttribute('url');
      if (typeof contactViewer.load === 'function') {
        try {
          const maybe = contactViewer.load(url);
          contactPromise = (maybe && typeof maybe.then === 'function') ? maybe : Promise.resolve();
        } catch (e) { contactPromise = Promise.resolve(); }
      } else if (url) {
        // Re-assign attribute to nudge the component to load and warm cache.
        contactViewer.setAttribute('url', url);
        contactPromise = fetch(url, { method: 'GET', mode: 'cors', cache: 'force-cache' }).catch(() => { });
      }
    }
  } catch (err) {
    contactPromise = Promise.resolve();
  }

  const allLoads = Promise.allSettled([homeLoadedPromise, contactPromise]);
  const fallback = new Promise((res) => setTimeout(res, 6000));
  Promise.race([allLoads, fallback]).then(() => {
    if (preloader) {
      preloader.classList.add('hide');
      setTimeout(() => {
        preloader.style.display = 'none';
        document.body.style.overflow = '';
      }, 600);
    } else {
      document.body.style.overflow = '';
    }
  }).catch(() => {
    // ensure the UI is restored even if something goes wrong
    if (preloader) preloader.style.display = 'none';
    document.body.style.overflow = '';
  });
});

// Image carousel for services section
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // Determine visible slides based on viewport width
  let visibleSlides = window.innerWidth <= 1200 ? 1 : 2;
  const totalSlides = slides.length;

  // Clone first & last slides for seamless looping
  function setupClones() {
    // clear any previous clones (if re-run)
    Array.from(track.querySelectorAll('.clone')).forEach(c => c.remove());
    const baseSlides = Array.from(track.children).filter(n => !n.classList.contains('clone'));
    baseSlides.slice(0, visibleSlides).forEach(slide => {
      const clone = slide.cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    });
    baseSlides.slice(-visibleSlides).forEach(slide => {
      const clone = slide.cloneNode(true);
      clone.classList.add('clone');
      track.insertBefore(clone, track.firstChild);
    });
  }
  setupClones();

  let allSlides = Array.from(track.children);
  let currentIndex = visibleSlides; // start at first real slide
  let isTransitioning = false;

  function updateCarousel(animate = true) {
    // recalc in case of resize
    allSlides = Array.from(track.children);
    const slideWidth = allSlides[0].getBoundingClientRect().width;
    track.style.transition = animate ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function handleTransitionEnd() {
    isTransitioning = false;
    if (currentIndex >= totalSlides + visibleSlides) {
      // Jump back to start (real first slide)
      currentIndex = visibleSlides;
      updateCarousel(false);
    } else if (currentIndex < visibleSlides) {
      // Jump to end (real last slide)
      currentIndex = totalSlides + visibleSlides - 1;
      updateCarousel(false);
    }
  }

  nextBtn.addEventListener("click", () => {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex--;
      updateCarousel();
    }
  });

  track.addEventListener("transitionend", handleTransitionEnd);

  // Initialize position
  updateCarousel(false);

  // Update carousel on resize to switch visibleSlides if needed
  window.addEventListener('resize', () => {
    const newVisible = window.innerWidth <= 1200 ? 1 : 2;
    if (newVisible !== visibleSlides) {
      visibleSlides = newVisible;
      // rebuild clones and reset index
      // remove all clones then re-setup
      Array.from(track.querySelectorAll('.clone')).forEach(c => c.remove());
      currentIndex = visibleSlides;
      setupClones();
      updateCarousel(false);
    } else {
      // just recalc sizes
      updateCarousel(false);
    }
  });
});

// Hamburger menu - wrapped in DOMContentLoaded to ensure elements exist
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded, setting up hamburger menu');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  console.log('Hamburger element:', hamburger);
  console.log('Mobile menu element:', mobileMenu);

  if (!hamburger || !mobileMenu) {
    console.error('Hamburger or mobile menu not found!');
    return;
  }

  // Hamburger toggle
  hamburger.addEventListener('click', function (e) {
    console.log('Hamburger clicked!');
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
    console.log('Menu active:', mobileMenu.classList.contains('active'));
  });

  // Mobile link clicks
  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');

      // Close mobile menu
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('open');

      // Home link resets demo/video
      if (hash === '#home') {
        e.preventDefault();
        // Reset hash
        history.replaceState(null, '', ' ');
        // Hide demo overlay and restore background video
        const demoTest = document.getElementById('demo-test');
        const demoVid = demoTest?.querySelector('video');
        if (demoTest) demoTest.style.display = 'none';
        if (demoVid) {
          demoVid.pause();
          demoVid.currentTime = 0;
        }
        const bgVideo = document.querySelector('.video video');
        if (bgVideo) {
          bgVideo.style.display = '';
          bgVideo.classList.remove('fade-out');
        }
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return; // stop further handling
      }

      // Handle spline/demo overlay link
      if (hash === '#splineAction') {
        e.preventDefault();
        const demoTest = document.getElementById('demo-test');
        const video = document.querySelector('.video video');

        if (demoTest && video) {
          video.classList.add('fade-out');
          setTimeout(() => {
            setTimeout(() => {
              demoTest.style.display = 'block';
              const vid = demoTest.querySelector('video');
              if (vid) vid.play();
              video.style.display = 'none';
            }, 250);
          }, 500);
        }

        // Optional: scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Smooth scroll for other anchor links
      if (hash && hash.startsWith('#')) {
        e.preventDefault();
        if (hash === '#contact') {
          // Use the same offset behavior as the desktop contact handler
          const contact = document.querySelector('#contact');
          if (contact) {
            const header = document.querySelector('.header');
            const headerHeight = header ? header.getBoundingClientRect().height : 80;
            const extraGap = 60;
            const heading = contact.querySelector('h2') || contact.querySelector('h3') || contact;
            const baseTop = heading.getBoundingClientRect().top + window.pageYOffset;
            const top = Math.max(0, Math.round(baseTop - headerHeight + extraGap));
            setTimeout(() => { window.scrollTo({ top, behavior: 'smooth' }); }, 60);
            setTimeout(() => { window.scrollTo({ top, behavior: 'smooth' }); }, 260);
          }
        } else {
          const target = document.querySelector(hash);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// -------------------------
// About section runtime (lazy-init)
// -------------------------
let aboutSplineApp = null;
let aboutSplineLoaded = false;
let _resolveAboutLoaded = null;

/**
 * Initialize the About spline app. If `force` is true, a new Application
 * instance will be created (useful for recovering event handlers).
 */
async function initAboutSpline(force = false) {
  const aboutCanvas = document.getElementById('about-spline-canvas');
  if (!aboutCanvas) return;
  if (aboutSplineLoaded && !force) return;

  // If forcing, clear the previous reference so we create a fresh app.
  if (force && aboutSplineApp) {
    try { safeCall(aboutSplineApp, ['destroy', 'dispose', 'unload']); } catch (e) { }
    aboutSplineApp = null;
    aboutSplineLoaded = false;
  }

  // Ensure we have an Application constructor available. Prefer a local
  // binding if present; otherwise dynamically import the runtime.
  let ApplicationCtor = (typeof Application !== 'undefined') ? Application : null;
  if (!ApplicationCtor && typeof window !== 'undefined' && window.Application) {
    ApplicationCtor = window.Application;
  }

  if (!ApplicationCtor) {
    try {
      const mod = await import('https://unpkg.com/@splinetool/runtime@1.10.74/build/runtime.js');
      ApplicationCtor = mod.Application;
    } catch (err) {
      console.error('Failed to load spline runtime for About spline:', err);
      return;
    }
  }

  try {
    aboutSplineApp = new ApplicationCtor(aboutCanvas);
    await aboutSplineApp.load('https://prod.spline.design/XI5yOy0rpm1ZVC1H/scene.splinecode');
    aboutSplineLoaded = true;
    if (typeof _resolveAboutLoaded === 'function') _resolveAboutLoaded();
    // Add any about-scene-specific interactivity here
    // e.g. aboutSplineApp.addEventListener('mouseDown', (e) => { ... })
  } catch (err) {
    console.error('Failed to load about spline scene:', err);
  }
}
// Note: We intentionally start loading the About spline during the preloader
// so it downloads while the page shows its loading screen. The init function
// will safely no-op if called multiple times.

// -------------------------
// Performance: pause/resume offscreen spline content
// -------------------------
function safeCall(obj, names) {
  for (const n of names) {
    if (obj && typeof obj[n] === 'function') {
      try { obj[n](); return true; } catch (e) { /* ignore */ }
    }
  }
  return false;
}

function pauseAppAndCanvas(app, canvas) {
  try {
    // Try common pause/stop methods on the runtime
    if (!safeCall(app, ['pause', 'stop'])) {
      // If the runtime doesn't expose a pause API, avoid hiding the
      // canvas because that can break Spline's internal hit-testing
      // and trigger zones. Leave the canvas visible and rely on the
      // browser to reduce work (or consider a future DPR clamp).
      console.debug('pauseAppAndCanvas: no pause API available for app, leaving canvas visible');
    }
  } catch (e) { /* ignore */ }
}

function resumeAppAndCanvas(app, canvas) {
  try {
    // Ensure canvas is visible first
    if (canvas) canvas.style.display = 'block';
    // Try common resume/play methods
    return safeCall(app, ['play', 'resume']);
  } catch (e) { /* ignore */ }
  return false;
}

function pauseViewer(viewer) {
  try {
    if (!safeCall(viewer, ['pause', 'stop'])) {
      if (viewer) viewer.style.visibility = 'hidden';
    }
  } catch (e) { /* ignore */ }
}

function resumeViewer(viewer) {
  try {
    if (viewer) viewer.style.visibility = 'visible';
    safeCall(viewer, ['play', 'resume']);
  } catch (e) { /* ignore */ }
}

document.addEventListener('DOMContentLoaded', function () {
  try {
    const homeEl = document.getElementById('home');
    const aboutEl = document.getElementById('about');
    const contactEl = document.querySelector('.contact');
    const homeCanvas = document.getElementById('spline-canvas');
    const aboutCanvas = document.getElementById('about-spline-canvas');
    const contactViewer = document.querySelector('.contact-container spline-viewer');

    if (!homeEl) return;

    let current = null;
    const observer = new IntersectionObserver((entries) => {
      const vis = {};
      entries.forEach(en => {
        const id = en.target.id || (en.target.classList && en.target.classList.contains('contact') ? 'contact' : null);
        if (id) vis[id] = en.intersectionRatio;
      });

      // choose the most visible section
      const candidates = ['home', 'about', 'contact'];
      let winner = null, best = -1;
      for (const c of candidates) {
        const v = vis[c] || 0;
        if (v > best) { best = v; winner = c; }
      }
      if (!winner || winner === current) return;
      current = winner;

      // Pause others, resume winner
      if (winner === 'home') {
        // Keep About active; only ensure Home is resumed and Contact paused.
        resumeAppAndCanvas(spline, homeCanvas);
        pauseViewer(contactViewer);
      } else if (winner === 'about') {
        // Ensure About is initialized (but do not pause it).
        // if (!aboutSplineLoaded) initAboutSpline();
        // We don't pause About to avoid breaking trigger zones.
        pauseViewer(contactViewer);
        pauseAppAndCanvas(spline, homeCanvas);
      } else if (winner === 'contact') {
        resumeViewer(contactViewer);
        pauseAppAndCanvas(spline, homeCanvas);
        // Do not pause About; leave it running
      }
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

    observer.observe(homeEl);
    if (aboutEl) observer.observe(aboutEl);
    if (contactEl) observer.observe(contactEl);
  } catch (err) {
    console.warn('Failed to initialize spline visibility manager', err);
  }
});

// -------------------------
// Contact form handling
// -------------------------
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  function showError(inputEl, msg) {
    const el = contactForm.querySelector(`.error-msg[data-for="${inputEl.id}"]`);
    if (el) el.textContent = msg || '';
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let ok = true;
    // basic validation (email + message only)
    if (!email.value.trim() || !validateEmail(email.value.trim())) { showError(email, 'Please enter a valid email'); ok = false; } else { showError(email, ''); }
    if (!message.value.trim()) { showError(message, 'Please enter a message'); ok = false; } else { showError(message, ''); }

    if (!ok) return;

    // Simulate submit (replace with real fetch to your backend endpoint)
    const successEl = document.getElementById('contact-success');
    contactForm.querySelector('.btn-submit').disabled = true;
    contactForm.querySelector('.btn-submit').textContent = 'Sending...';

    setTimeout(() => {
      // Clear form and show success
      contactForm.reset();
      contactForm.querySelector('.btn-submit').disabled = false;
      contactForm.querySelector('.btn-submit').textContent = 'Send';
      if (successEl) {
        successEl.hidden = false;
        setTimeout(() => { successEl.hidden = true; }, 5000);
      }
      console.log('Contact form submitted (simulated):', {
        email: email.value,
        message: message.value
      });
    }, 900);
  });
});

// Process steps: swap detail content when step buttons are clicked
document.addEventListener('DOMContentLoaded', function () {
  const steps = Array.from(document.querySelectorAll('.process-steps .step'));
  const detail = document.getElementById('process-detail');
  if (!steps.length || !detail) return;

  const contents = {
    pre: {
      title: 'Pre-Production',
      body: `
        <ul>
          <li><span>Information gathering</span> – We start by getting to know you, your goals and expectations, your audience, and the story you want to tell.</li>
          <li><span>Research</span> – Once we have a clear understanding of your story, we conduct research to ensure it is told in the most accurate and effective way.</li>
          <li><span>Scripting</span> – This foundational stage involves working closely with your team to research and write a script that communicates your story clearly and effectively.</li>
          <li><span>Modeling/texturing and lighting of 3D assets</span> – Once the script is approved, we begin creating the 3D assets needed to visualize your story. At this stage, we provide 3D model sheets for approval of the look and feel of all assets.</li>
          <li><span>Storyboards and Style Frames</span> – With your models ready, we sketch out the “roadmap” for your animation. Storyboards set the scene, while style frames capture the mood, colors, and cinematic style that will make your story stand out.</li>
        </ul>
      `
    },
    prod: {
      title: 'Production',
      body: `
        <ul>
          <li><span>First pass animation</span> – In this phase, your animation begins to take shape. We create a simplified version of the final product to establish timing, pacing, and narrative flow before committing to final rendering.</li>
          <li><span>Second pass animation</span> – This pass is a half-resolution render with all revisions from the first pass applied, providing a more refined preview of the final deliverable.</li>
        </ul>
      `
    },
    post: {
      title: 'Post-Production',
      body: `
        <ul>
          <li><span>Final animation</span> – We refine and complete the details of the animation, adding final textures, lighting, and visual effects.</li>
          <li><span>Rendering</span> – All necessary layers are rendered for final compositing. This process can involve thousands of individual frames, taking anywhere from one minute to an hour per frame depending on complexity.</li>
          <li><span>Compositing</span> – During compositing, we enhance the animation with cinematic elements such as depth of field, highlights and glows, color correction, and text overlays. This stage also includes laying in professional sound design, music, and narration.</li>
          <li><span>Final output</span> – The completed animation is delivered in its final form—typically an HD or 4K master QuickTime ProRes file, along with a compressed H.265 MP4 file for easy distribution.</li>
        </ul>
      `
    }
  };

  function computeDetailMinHeight() {
    try {
      // Create an offscreen measurement container that matches .process-detail
      const meas = document.createElement('div');
      meas.style.position = 'absolute';
      meas.style.visibility = 'hidden';
      meas.style.left = '-9999px';
      meas.style.top = '0';
      // match width so wrapping is measured correctly
      const detailWidth = getComputedStyle(detail).width || detail.clientWidth + 'px';
      meas.style.width = detailWidth;
      // copy classes so font/spacing rules apply
      meas.className = detail.className;
      document.body.appendChild(meas);

      let max = 0;
      for (const k of Object.keys(contents)) {
        const c = contents[k];
        meas.innerHTML = `<h3>${c.title}</h3>${c.body}`;
        // force layout
        const h = meas.offsetHeight;
        if (h > max) max = h;
      }
      // apply a little breathing room
      if (max > 0) detail.style.minHeight = (max + 8) + 'px';
      document.body.removeChild(meas);
    } catch (err) {
      // defensive: don't break the page
      console.warn('computeDetailMinHeight failed', err);
    }
  }

  function setActive(phase) {
    steps.forEach(s => {
      const is = s.getAttribute('data-phase') === phase;
      s.classList.toggle('active', is);
      s.setAttribute('aria-selected', is ? 'true' : 'false');
    });
    const c = contents[phase] || contents.pre;
    // c.body may contain HTML (lists, paragraphs) so insert directly
    detail.innerHTML = `<h3>${c.title}</h3>${c.body}`;
    // show only the image that matches the active phase
    try {
      const imgs = document.querySelectorAll('.process-images img');
      imgs.forEach(img => {
        const match = img.getAttribute('data-phase') === phase;
        img.style.display = match ? 'block' : 'none';
      });
    } catch (e) { /* ignore if images not present */ }
  }

  // default
  // compute min-height before inserting default content so the container
  // doesn't jump when we set the innerHTML.
  computeDetailMinHeight();
  setActive('pre');

  steps.forEach(s => s.addEventListener('click', () => setActive(s.getAttribute('data-phase'))));
  // Recompute if the viewport width changes (content wrapping may change)
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      computeDetailMinHeight();
    }, 120);
  });

  // Recompute after fonts load to get accurate measurements when webfonts are used
  if (document.fonts && typeof document.fonts.ready !== 'undefined') {
    document.fonts.ready.then(() => {
      computeDetailMinHeight();
    }).catch(() => { });
  }
});

// footer year
try {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;
} catch (e) { }

// -------------------------
// Responsive spline scaling (JS-driven interpolation)
// Interpolates --spline-scale and --spline-translate between 1200px and 1750px
// to provide smooth, efficient resizing without lots of media queries.
// -------------------------
// Removed JS-driven CSS variables for spline transform/scale per request.
// Spline sizing now uses static CSS rules and media queries in styles.css.

// -------------------------
// Services tagline cycling
// -------------------------
document.addEventListener('DOMContentLoaded', function () {
  const taglines = Array.from(document.querySelectorAll('.services-tagline .tagline-text'));
  if (taglines.length === 0) return;

  let currentIndex = 0;

  function cycleTagline() {
    // Remove active class from current tagline
    taglines[currentIndex].classList.remove('active');

    // Move to next tagline
    currentIndex = (currentIndex + 1) % taglines.length;

    // Add active class to new tagline
    taglines[currentIndex].classList.add('active');
  }

  // Cycle every 5 seconds
  setInterval(cycleTagline, 5000);
});
