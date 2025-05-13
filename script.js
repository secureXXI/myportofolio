// Page Loader
window.addEventListener('load', function() {
  const loader = document.querySelector('.page-loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1000);
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-dark');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save user preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark');
      toggle.textContent = 'Light Mode';
    } else {
      localStorage.setItem('mode', 'light');
      toggle.textContent = 'Dark Mode';
    }
  });

  // Check user preference on page load
  if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = 'Light Mode';
  }
});

// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
});

// Dynamic Text Effect
const texts = ["HI!", "Hola!", "Halo!", "Connect With Me!"];
let textIndex = 0;
const dynamicTextElement = document.querySelector(".typewriter-text");

function changeText() {
  dynamicTextElement.innerHTML = `<h3 class="dynamic-item">${texts[textIndex]}</h3>`;
  textIndex = (textIndex + 1) % texts.length;
}

// Change text every 2 seconds
setInterval(changeText, 2000);
changeText();

// Progress Bar Animation
window.addEventListener('load', function () {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(function (bar) {
    const width = bar.getAttribute('data-width');
    bar.style.width = '0%';

    setTimeout(function () {
      bar.style.width = width;
    }, 700);
  });
});

// Enhanced Cursor Effect
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.classList.add('cursor-follower');
document.body.appendChild(cursorFollower);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

document.querySelectorAll('a, button, .card, .nav-link').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorFollower.classList.add('active');
  });
  el.addEventListener('mouseleave', () => {
    cursorFollower.classList.remove('active');
  });
});

// Scroll Progress Indicator
window.addEventListener('scroll', function() {
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Here you can add your logic to send the data to your server or email service
  // For demonstration, we will just show a notification

  // Display notification
  const notification = document.getElementById('notification');
  notification.style.display = 'block';
  notification.className = 'alert alert-success'; // Bootstrap success alert
  notification.innerHTML = `Thank you for sending a message, ${name}! but there is a problem at the moment, I will fix it as soon as possible! <>  `;

  // Clear the form
  document.getElementById('contactForm').reset();
});
