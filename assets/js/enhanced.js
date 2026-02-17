/**
 * Leonardo Mota - Enhanced Portfolio
 * Modern UX Interactions & Animations
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all modules
    initNavigation();
    initScrollAnimations();
    initSmoothScroll();
    initBackToTop();
    initTypingEffect();
    initParallaxBackground();
});

/**
 * Navigation Module
 * Handles navbar scroll effects and mobile menu
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/**
 * Scroll Animations Module
 * Intersection Observer for fade-in animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;

                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);

                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Trigger animations for elements in viewport on load
    setTimeout(() => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isInViewport) {
                const delay = el.dataset.delay || 0;
                setTimeout(() => {
                    el.classList.add('animated');
                }, delay);
            }
        });
    }, 100);
}

/**
 * Smooth Scroll Module
 * Handles anchor link smooth scrolling
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href === '#') return;

            e.preventDefault();

            const targetElement = document.querySelector(href);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Back to Top Module
 * Shows/hides back to top button
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Typing Effect Module
 * Creates a typewriter effect with Pac-Man animation
 */
/**
 * Typing Effect Module
 * Creates a typewriter effect with Pac-Man animation
 */
function initTypingEffect() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;

    // Create structure elements
    const textWrapper = document.createElement('span');
    const pacman = document.createElement('span');
    pacman.className = 'pacman-cursor';

    // Ensure parent is relative for positioning
    typedElement.style.position = 'relative';
    typedElement.style.display = 'inline-block';

    let words = ['Engenharia de Dados', 'MLOps', 'DataOps', 'Automação', 'Agentes de IA'];
    if (window.innerWidth < 768) {
        // Shorter words for mobile if needed, or keeping same
    }

    let wordIndex = 0;
    let timeoutId = null;
    let animationFrameId = null;
    let isAnimating = false;

    function reattachElements() {
        // Start with clean state
        typedElement.innerHTML = '';
        typedElement.appendChild(textWrapper);
        typedElement.appendChild(pacman);
    }

    function type(word) {
        if (!word) return;

        // ensure elements exist
        reattachElements();

        // Reset state
        textWrapper.textContent = '';
        textWrapper.style.clipPath = 'none';
        pacman.style.display = 'none';

        let charIndex = 0;
        isAnimating = true;

        function typeChar() {
            textWrapper.textContent = word.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex < word.length) {
                timeoutId = setTimeout(typeChar, 80); // Typing speed
            } else {
                // Done typing, wait then eat
                timeoutId = setTimeout(eat, 2000);
            }
        }

        typeChar();
    }

    function eat() {
        // Prepare for eating
        pacman.style.display = 'block';
        pacman.classList.add('eating');

        const textWidth = textWrapper.offsetWidth;
        // If textWidth is 0 (hidden or empty), skip
        if (textWidth === 0) {
            wordIndex = (wordIndex + 1) % words.length;
            timeoutId = setTimeout(() => type(words[wordIndex]), 500);
            return;
        }

        const pacmanWidth = 24; // Width of pacman
        // Start from right (end of text)
        const startPos = textWidth;
        // End at left (minus width to fully clear)
        const endPos = -pacmanWidth;

        // Slower speed
        const speed = 0.1; // px per ms (Slower than before)

        let currentPos = startPos;
        let lastTime = performance.now();

        function animate(time) {
            const deltaTime = time - lastTime;
            lastTime = time;

            // Move left (decrement position)
            currentPos -= speed * deltaTime;

            // Move Pac-Man relative to typedElement
            pacman.style.left = `${currentPos}px`;

            // Clip text (eating effect)
            // Pac-Man moves Right -> Left
            // We want to hide everything to the RIGHT of Pac-Man's mouth
            // Mouth is on the left side of the circle (since we flipped scaleX(-1))
            // So roughly at currentPos + 5px (offset for mouth depth)

            // Logic:
            // inset(top right bottom left)
            // To clip from right: inset(0 Xpx 0 0) where X is amount to clip from right edge
            // Total width is textWidth.
            // Point to clip at is roughly currentPos
            // Amount to clip = textWidth - currentPos

            const clipPoint = currentPos + (pacmanWidth * 0.2); // Adjust bite point
            const displayWidth = Math.max(0, clipPoint); // Width of text remaining visible
            const clipFromRight = textWidth - displayWidth;

            if (clipFromRight > 0) {
                textWrapper.style.clipPath = `inset(0 ${Math.max(0, clipFromRight)}px 0 0)`;
            }

            if (currentPos > endPos) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                // Done eating
                pacman.style.display = 'none';
                pacman.classList.remove('eating');
                textWrapper.textContent = '';
                textWrapper.style.clipPath = 'none';

                // Next word
                wordIndex = (wordIndex + 1) % words.length;
                timeoutId = setTimeout(() => type(words[wordIndex]), 500);
            }
        }

        requestAnimationFrame(animate);
    }

    // Expose function to update words dynamically
    window.updateTypingWords = function (newWords) {
        if (!newWords || !Array.isArray(newWords) || newWords.length === 0) return;

        // Clean up current animations
        if (timeoutId) clearTimeout(timeoutId);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);

        words = newWords;
        wordIndex = 0;
        isAnimating = false;

        // Start fresh
        type(words[0]);
    };

    // Start initial typing
    timeoutId = setTimeout(() => type(words[0]), 1500);
}

/**
 * Parallax Background Module
 * Subtle parallax effect for floating elements
 */
function initParallaxBackground() {
    const floatingBadges = document.querySelectorAll('.floating-badge');
    const orbs = document.querySelectorAll('.gradient-orb');

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.pageYOffset;

                // Parallax for floating badges
                floatingBadges.forEach((badge, index) => {
                    const speed = (index + 1) * 0.02;
                    badge.style.transform = `translateY(${scrollY * speed}px)`;
                });

                // Subtle movement for orbs
                orbs.forEach((orb, index) => {
                    const speed = (index + 1) * 0.01;
                    orb.style.transform = `translateY(${scrollY * speed}px)`;
                });

                ticking = false;
            });

            ticking = true;
        }
    });

    // Mouse move parallax for hero section
    const heroSection = document.querySelector('.hero');
    const imageFrame = document.querySelector('.image-frame');

    if (heroSection && imageFrame) {
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;

            // Subtle tilt effect on image
            imageFrame.style.transform = `
                perspective(1000px)
                rotateY(${xPercent * 3}deg)
                rotateX(${-yPercent * 3}deg)
            `;
        });

        heroSection.addEventListener('mouseleave', () => {
            imageFrame.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        });
    }
}

/**
 * Service Card Hover Effects
 * Add interactive hover states
 */
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function (e) {
        const icon = this.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(-5deg)';
        }
    });

    card.addEventListener('mouseleave', function (e) {
        const icon = this.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

/**
 * Project Card Tilt Effect
 * Subtle 3D tilt on hover
 */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width - 0.5) * 2;
        const yPercent = (y / rect.height - 0.5) * 2;

        this.style.transform = `
            perspective(1000px)
            rotateY(${xPercent * 2}deg)
            rotateX(${-yPercent * 2}deg)
            translateY(-8px)
        `;
    });

    card.addEventListener('mouseleave', function (e) {
        this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)';
    });
});

/**
 * Stats Counter Animation
 * Animate numbers when they come into view
 */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const suffix = element.textContent.replace(/[0-9]/g, '');

    function updateCounter() {
        start += increment;

        if (start < target) {
            element.textContent = Math.floor(start) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    }

    updateCounter();
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');

            statNumbers.forEach(stat => {
                const value = parseInt(stat.textContent);
                if (!isNaN(value)) {
                    stat.textContent = '0' + stat.textContent.replace(/[0-9]/g, '');
                    animateCounter(stat, value);
                }
            });

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

/**
 * Magnetic Button Effect
 * Buttons follow cursor slightly on hover
 */
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', function (e) {
        this.style.transform = 'translate(0, 0)';
    });
});

console.log('🚀 Leonardo Mota Portfolio - Enhanced UX Loaded');
