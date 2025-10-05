import { Application } from '@splinetool/runtime';

// Get canvas
const canvas = document.getElementById('spline-canvas');

// Create Spline app
const spline = new Application(canvas);

// Load your exported Spline scene
spline
      .load('https://prod.spline.design/x7N9HO870izAFCqK/scene.splinecode')
      .then(() => {
          spline.addEventListener('mouseDown', (e) => {
                  if (e.target.name === 'MyButton') {
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
        });


// Prevent reload and show demo video when Demo Reel is clicked
document.addEventListener('DOMContentLoaded', function() {
  const demoReelLink = document.querySelector('.navbar-menu a[href="#splineAction"]');
  if (demoReelLink) {
    demoReelLink.addEventListener('click', function(e) {
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
window.addEventListener('scroll', function() {
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
window.addEventListener('scroll', function() {
    const tagline = document.querySelector('.tagline');
    if (window.scrollY > 100) {
        tagline.classList.add('visible');
    } else {
        tagline.classList.remove('visible');
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

document.addEventListener('DOMContentLoaded', function() {
  const demoTest = document.getElementById('demo-test');
  const hideBtn = document.getElementById('hideDemoTest');
  if (hideBtn && demoTest) {
    hideBtn.addEventListener('click', function() {
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

window.addEventListener('hashchange', function() {
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
  homeLink.addEventListener('click', function(e) {
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

// Smooth scroll to contact and account for fixed header height
document.addEventListener('click', function(e) {
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
  const top = Math.max(0, Math.round(baseTop - headerHeight - 8));

  // Delay the scroll a short moment to allow earlier click handlers to run
  // and then override with our precise position. Two retries increase
  // reliability across browsers and other site scripts.
  setTimeout(() => { window.scrollTo({ top, behavior: 'smooth' }); }, 60);
  setTimeout(() => { window.scrollTo({ top, behavior: 'smooth' }); }, 260);
});

window.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const progress = document.getElementById('preloader-progress');
    document.body.style.overflow = 'hidden';
    // Start loading the About spline during the preloader so it finishes
    // loading while the preloader is visible.
    try {
      initAboutSpline();
    } catch (e) {
      // initAboutSpline may not be defined yet if the function hasn't been
      // parsed; wrap defensively.
      console.warn('initAboutSpline not available yet, will load later');
    }
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
            .catch(() => {});
        }
      }
    } catch (err) {
      console.warn('Error while preloading contact spline', err);
    }
    if (progress) {
        progress.style.width = '0%';
        progress.style.width = '100%';
    }
    setTimeout(function() {
        if (preloader) {
            preloader.classList.add('hide');
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.style.overflow = '';
            }, 600);
        } else {
            document.body.style.overflow = '';
        }
    }, 3000);
});

// Image carousel for services section
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  const visibleSlides = 2;
  const totalSlides = slides.length;

  // Clone first & last slides for seamless looping
  slides.slice(0, visibleSlides).forEach(slide => {
    track.appendChild(slide.cloneNode(true));
  });
  slides.slice(-visibleSlides).forEach(slide => {
    track.insertBefore(slide.cloneNode(true), track.firstChild);
  });

  const allSlides = Array.from(track.children);
  let currentIndex = visibleSlides; // start at first real slide
  let isTransitioning = false;

  function updateCarousel(animate = true) {
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
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

// Hamburger toggle
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
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
            const target = document.querySelector(hash);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// -------------------------
// About section runtime (lazy-init)
// -------------------------
let aboutSplineApp = null;
let aboutSplineLoaded = false;

/**
 * Initialize the About spline app. If `force` is true, a new Application
 * instance will be created (useful for recovering event handlers).
 */
function initAboutSpline(force = false) {
  const aboutCanvas = document.getElementById('about-spline-canvas');
  if (!aboutCanvas) return;
  if (aboutSplineLoaded && !force) return;

  // If forcing, clear the previous reference so we create a fresh app.
  if (force && aboutSplineApp) {
    try { safeCall(aboutSplineApp, ['destroy','dispose','unload']); } catch (e) {}
    aboutSplineApp = null;
    aboutSplineLoaded = false;
  }

  aboutSplineApp = new Application(aboutCanvas);
  aboutSplineApp
    .load('https://prod.spline.design/XI5yOy0rpm1ZVC1H/scene.splinecode')
    .then(() => {
      aboutSplineLoaded = true;
      // Add any about-scene-specific interactivity here
      // e.g. aboutSplineApp.addEventListener('mouseDown', (e) => { ... })
    })
    .catch((err) => {
      console.error('Failed to load about spline scene:', err);
    });
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
    if (!safeCall(app, ['pause','stop'])) {
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
    return safeCall(app, ['play','resume']);
  } catch (e) { /* ignore */ }
  return false;
}

function pauseViewer(viewer) {
  try {
    if (!safeCall(viewer, ['pause','stop'])) {
      if (viewer) viewer.style.visibility = 'hidden';
    }
  } catch (e) { /* ignore */ }
}

function resumeViewer(viewer) {
  try {
    if (viewer) viewer.style.visibility = 'visible';
    safeCall(viewer, ['play','resume']);
  } catch (e) { /* ignore */ }
}

document.addEventListener('DOMContentLoaded', function() {
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
      const candidates = ['home','about','contact'];
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
        if (!aboutSplineLoaded) initAboutSpline();
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
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  function showError(inputEl, msg) {
    const el = contactForm.querySelector(`.error-msg[data-for="${inputEl.id}"]`);
    if (el) el.textContent = msg || '';
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  contactForm.addEventListener('submit', function(e) {
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