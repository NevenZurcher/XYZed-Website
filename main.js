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

window.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const progress = document.getElementById('preloader-progress');
    document.body.style.overflow = 'hidden';
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