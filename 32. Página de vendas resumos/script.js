// ===================================
// COUNTDOWN TIMER FOR RACE EVENT
// ===================================

// Race Event: November 29, 2025, 08:00
const raceDate = new Date('2025-11-29T08:00:00').getTime();

function updateRaceCountdown() {
    const now = new Date().getTime();
    const distance = raceDate - now;

    if (distance < 0) {
        // Event has passed
        document.getElementById('countdown').innerHTML = '<div class="countdown-expired">O evento já aconteceu!</div>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown elements if they exist
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// ===================================
// COUNTDOWN TIMER FOR DINNER EVENT
// ===================================

// Dinner Event: November 27, 2025, 19:00
const dinnerDate = new Date('2025-11-27T19:00:00').getTime();

function updateDinnerCountdown() {
    const now = new Date().getTime();
    const distance = dinnerDate - now;

    if (distance < 0) {
        // Event has passed
        const countdownEl = document.getElementById('countdown-dinner');
        if (countdownEl) {
            countdownEl.innerHTML = '<div class="countdown-expired">O evento já aconteceu!</div>';
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown elements if they exist
    const daysEl = document.getElementById('days-dinner');
    const hoursEl = document.getElementById('hours-dinner');
    const minutesEl = document.getElementById('minutes-dinner');
    const secondsEl = document.getElementById('seconds-dinner');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// ===================================
// FAQ ACCORDION FUNCTIONALITY
// ===================================

function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.display === 'block';

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });

            // Remove rotation from all questions
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });

            // Toggle current answer
            if (!isOpen) {
                answer.style.display = 'block';
                this.classList.add('active');
            }
        });
    });

    // Initially hide all answers
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate
    const animatedElements = document.querySelectorAll(
        '.detail-card, .experience-card, .faq-item, .timeline-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===================================
// DINNER RSVP LINK HANDLER
// ===================================

function initializeDinnerRSVP() {
    const dinnerButtons = document.querySelectorAll('#dinnerRSVP, #dinnerRSVPBottom');

    dinnerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // TODO: Replace with actual Google Form link
            const formLink = 'https://forms.gle/YOUR_DINNER_FORM_LINK';

            // Check if link is set
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('⚠️ ATENÇÃO: Configure o link do Google Forms no script.js\n\nProcure por "YOUR_DINNER_FORM_LINK" e substitua pelo link real do formulário do jantar.');
                console.warn('Configure o link do Google Forms para o jantar em script.js');
            }
        });
    });
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================

function initializeScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-red, #EF4D48);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;

    document.body.appendChild(scrollButton);

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// ANALYTICS TRACKING (Optional)
// ===================================

function trackButtonClick(buttonName) {
    // This function can be extended to integrate with Google Analytics
    // or other tracking services
    console.log(`Button clicked: ${buttonName}`);

    // Example for Google Analytics (if installed):
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'click', {
    //         'event_category': 'Button',
    //         'event_label': buttonName
    //     });
    // }
}

// Add tracking to CTA buttons
function initializeTracking() {
    const raceButtons = document.querySelectorAll('.race-cta-btn');
    const dinnerButtons = document.querySelectorAll('.dinner-cta-btn');

    raceButtons.forEach(btn => {
        btn.addEventListener('click', () => trackButtonClick('Race Registration'));
    });

    dinnerButtons.forEach(btn => {
        btn.addEventListener('click', () => trackButtonClick('Dinner RSVP'));
    });
}

// ===================================
// INITIALIZE ALL FUNCTIONALITY
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on and initialize appropriate countdowns
    if (document.querySelector('.race-page')) {
        // Race page
        updateRaceCountdown();
        setInterval(updateRaceCountdown, 1000);
    }

    if (document.querySelector('.dinner-page')) {
        // Dinner page
        updateDinnerCountdown();
        setInterval(updateDinnerCountdown, 1000);
        initializeDinnerRSVP();
    }

    // Initialize common features
    initializeFAQ();
    initializeSmoothScroll();
    initializeScrollAnimations();
    initializeScrollToTop();
    initializeTracking();

    console.log('🎉 Irmãos Polícia Event Pages Initialized!');
    console.log('📅 Race Event: November 29, 2025');
    console.log('🍽️ Dinner Event: November 27, 2025');
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Format date for display
function formatDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(date).toLocaleDateString('pt-BR', options);
}

// Check if event is today
function isEventToday(eventDate) {
    const today = new Date();
    const event = new Date(eventDate);

    return today.getDate() === event.getDate() &&
           today.getMonth() === event.getMonth() &&
           today.getFullYear() === event.getFullYear();
}

// Log event information
if (isEventToday(raceDate)) {
    console.log('🏃 HOJE É DIA DE CORRIDA! Boa sorte a todos!');
}

if (isEventToday(dinnerDate)) {
    console.log('🍽️ HOJE É DIA DO JANTAR! Aproveitem a noite!');
}