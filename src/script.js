import './styles.css'

document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js with optimized config
    particlesJS('particles-js', {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: "#00b4d8" },
            shape: { type: "circle" },
            opacity: { value: 0.2, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1 } },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#4361ee", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, random: true, out_mode: "out", attract: { enable: true, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 3 }
            }
        },
        retina_detect: true
    });

    // Tweet interactions
    const tweetActions = {
        like: (el) => {
            el.classList.toggle('fa-regular');
            el.classList.toggle('fa-solid');
            el.classList.toggle('liked');
            const count = el.nextElementSibling;
            count.textContent = parseInt(count.textContent) + (el.classList.contains('fa-solid') ? 1 : -1);
            el.parentElement.classList.toggle('text-pink-500', el.classList.contains('fa-solid'));
        },
        retweet: (el) => {
            el.classList.toggle('retweeted');
            const count = el.nextElementSibling;
            count.textContent = parseInt(count.textContent) + (el.classList.contains('retweeted') ? 1 : -1);
            el.parentElement.classList.toggle('text-green-500', el.classList.contains('retweeted'));
        }
    };

    // Add event listeners for tweet actions
    document.querySelector('.tweet-action i.fa-heart')?.addEventListener('click', e => tweetActions.like(e.target));
    document.querySelector('.tweet-action i.fa-retweet')?.addEventListener('click', e => tweetActions.retweet(e.target));

    // Tab functionality
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`${btn.dataset.tab}-tab`).classList.add('active');
        });
    });
});
