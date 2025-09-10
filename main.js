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
