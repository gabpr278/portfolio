document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const icon = themeToggle; // In this simple case, the button text is the icon

    // Check localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute('data-theme', 'dark');
        updateIcon('dark');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // --- Project Carousel Logic Removed (Switched to Grid) ---

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const inputs = contactForm.querySelectorAll('input, textarea');

    if (contactForm) {
        // Initial check
        checkFormValidity();

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                validateInput(input);
                checkFormValidity();
            });

            input.addEventListener('blur', () => {
                validateInput(input);
                checkFormValidity();
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            console.log('Formulaire soumis !');
            alert('Merci pour votre message ! (Simulation)');
            contactForm.reset();
            inputs.forEach(input => {
                input.classList.remove('error');
                input.nextElementSibling.textContent = '';
            });
            checkFormValidity();
        });
    }

    function validateInput(input) {
        const errorSpan = input.nextElementSibling;
        let isValid = true;
        let errorMessage = '';

        if (input.hasAttribute('required') && input.value.trim() === '') {
            isValid = false;
            errorMessage = 'Ce champ est requis.';
        } else if (input.type === 'email' && input.value.trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                isValid = false;
                errorMessage = 'Email invalide.';
            }
        }

        if (!isValid) {
            input.classList.add('error');
            errorSpan.textContent = errorMessage;
        } else {
            input.classList.remove('error');
            errorSpan.textContent = '';
        }
        return isValid;
    }

    function checkFormValidity() {
        let isFormValid = true;
        inputs.forEach(input => {
            if (input.hasAttribute('required') && input.value.trim() === '') {
                isFormValid = false;
            } else if (input.classList.contains('error')) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'true');
        }
    }

    // --- Entry Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // --- Project Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- Visit Counter ---
    const visitCounter = document.getElementById('visit-count');
    if (visitCounter) {
        let count = localStorage.getItem('visitCount');
        if (!count) {
            count = 0;
        }
        count++;
        localStorage.setItem('visitCount', count);
        visitCounter.textContent = count;
    }

    // --- Responsive Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // --- 3D Tilt Effect ---
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // --- Staggered Animation for Skills ---
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        const skillCards = skillsGrid.querySelectorAll('.skill-card');

        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 100); // 100ms delay between each card
                    });
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        skillObserver.observe(skillsGrid);
    }

    // --- Starfield Background ---
    const canvas = document.getElementById('starfield');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let stars = [];
        const numStars = 100; // Adjust for density
        let shootingStars = [];
        let jupiter;

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
            // Re-init Jupiter position on resize to keep it visible
            jupiter = new Planet();
        }

        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random();
                this.fadeSpeed = (Math.random() * 0.02) + 0.005;
                this.fadingIn = Math.random() > 0.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around screen
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                // Twinkle effect
                if (this.fadingIn) {
                    this.opacity += this.fadeSpeed;
                    if (this.opacity >= 1) {
                        this.opacity = 1;
                        this.fadingIn = false;
                    }
                } else {
                    this.opacity -= this.fadeSpeed;
                    if (this.opacity <= 0.2) {
                        this.opacity = 0.2;
                        this.fadingIn = true;
                    }
                }
            }

            draw() {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                // In light mode, stars are dark gray. In dark mode, they are white.
                const color = isDark ? `rgba(255, 255, 255, ${this.opacity})` : `rgba(50, 50, 50, ${this.opacity * 0.5})`;

                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height / 2; // Start in top half
                this.length = Math.random() * 80 + 10;
                this.speed = Math.random() * 10 + 6;
                this.size = Math.random() * 2 + 2; // Bigger: 2px to 4px
                this.dirX = -1; // Move left
                this.dirY = 1;  // Move down
                this.opacity = 0;
                this.active = false;
                this.wait = Math.random() * 500; // Random wait before starting
            }

            update() {
                if (this.wait > 0) {
                    this.wait--;
                    return;
                }

                if (!this.active) {
                    this.active = true;
                    this.opacity = 1;
                }

                this.x += this.speed * this.dirX;
                this.y += this.speed * this.dirY;
                this.opacity -= 0.01;

                if (this.opacity <= 0 || this.x < 0 || this.y > height) {
                    this.reset();
                }
            }

            draw() {
                if (!this.active || this.wait > 0) return;

                const endX = this.x - this.length * this.dirX;
                const endY = this.y - this.length * this.dirY;

                // Create gradient for burning effect: Blue (Hot) -> Red (Cool)
                const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
                gradient.addColorStop(0, `rgba(100, 200, 255, ${this.opacity})`); // Blue/White hot head
                gradient.addColorStop(0.4, `rgba(255, 255, 0, ${this.opacity})`); // Yellow transition
                gradient.addColorStop(1, `rgba(255, 50, 0, 0)`); // Red/Transparent tail

                ctx.strokeStyle = gradient;
                ctx.lineWidth = this.size;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(endX, endY); // Trail behind
                ctx.stroke();

                // Glowing head
                ctx.fillStyle = `rgba(200, 240, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class Planet {
            constructor(x, y, radius, colors) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.colors = colors;
                this.angle = Math.random() * Math.PI * 2;
                this.speed = Math.random() * 0.002 + 0.001;
            }

            update() {
                // Subtle floating movement
                this.angle += this.speed;
                this.y += Math.sin(this.angle) * 0.1;
            }

            draw() {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

                // Colors
                const baseColor = isDark ? this.colors.baseDark : this.colors.baseLight;
                const bandColor1 = isDark ? this.colors.band1Dark : this.colors.band1Light;
                const bandColor2 = isDark ? this.colors.band2Dark : this.colors.band2Light;

                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(-0.3); // Tilt axis

                // 1. Base Sphere with Radial Gradient (3D effect)
                const gradient = ctx.createRadialGradient(-this.radius * 0.3, -this.radius * 0.3, this.radius * 0.1, 0, 0, this.radius);
                gradient.addColorStop(0, isDark ? this.colors.highlightDark : this.colors.highlightLight); // Highlight
                gradient.addColorStop(0.5, baseColor);
                gradient.addColorStop(1, isDark ? this.colors.shadowDark : this.colors.shadowLight); // Shadow side

                ctx.beginPath();
                ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Clip to sphere for bands
                ctx.save();
                ctx.beginPath();
                ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
                ctx.clip();

                // 2. Gas Bands (Curved & Soft)
                ctx.globalAlpha = 0.7;

                // Band 1
                ctx.fillStyle = bandColor1;
                ctx.beginPath();
                ctx.ellipse(0, -this.radius * 0.4, this.radius, this.radius * 0.2, 0, 0, Math.PI * 2);
                ctx.fill();

                // Band 2 (Thicker)
                ctx.fillStyle = bandColor2;
                ctx.beginPath();
                ctx.ellipse(0, this.radius * 0.1, this.radius, this.radius * 0.3, 0, 0, Math.PI * 2);
                ctx.fill();

                // Band 3
                ctx.fillStyle = bandColor1;
                ctx.beginPath();
                ctx.ellipse(0, this.radius * 0.6, this.radius, this.radius * 0.15, 0, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore(); // Remove clip

                // 4. Atmosphere Glow (Outer rim)
                ctx.shadowBlur = 15;
                ctx.shadowColor = isDark ? this.colors.glowDark : this.colors.glowLight;
                ctx.beginPath();
                ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255,255,255,0.1)';
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.shadowBlur = 0;

                // 5. Shadow Overlay (Crescent for depth)
                ctx.globalAlpha = 0.4;
                ctx.fillStyle = '#000';
                ctx.beginPath();
                ctx.arc(this.radius * 0.15, this.radius * 0.15, this.radius, 0, Math.PI * 2); // Offset shadow
                ctx.globalCompositeOperation = 'source-atop';
                ctx.fill();
                ctx.globalCompositeOperation = 'source-over';

                ctx.restore();
            }
        }

        function initStars() {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }

            shootingStars = [];
            for (let i = 0; i < 2; i++) { // 2 shooting stars at a time max
                shootingStars.push(new ShootingStar());
            }

            planets = [];

            // Jupiter-like (Top Right)
            planets.push(new Planet(width * 0.8, height * 0.2, 40, {
                baseDark: '#d97706', baseLight: '#b45309',
                band1Dark: '#92400e', band1Light: '#78350f',
                band2Dark: '#7c2d12', band2Light: '#451a03',
                highlightDark: '#fcd34d', highlightLight: '#d97706',
                shadowDark: '#78350f', shadowLight: '#451a03',
                glowDark: 'rgba(251, 191, 36, 0.3)', glowLight: 'rgba(180, 83, 9, 0.3)'
            }));

            // Ice Giant (Bottom Left)
            planets.push(new Planet(width * 0.15, height * 0.75, 25, {
                baseDark: '#0ea5e9', baseLight: '#0284c7',
                band1Dark: '#0369a1', band1Light: '#075985',
                band2Dark: '#0c4a6e', band2Light: '#082f49',
                highlightDark: '#7dd3fc', highlightLight: '#38bdf8',
                shadowDark: '#0c4a6e', shadowLight: '#082f49',
                glowDark: 'rgba(56, 189, 248, 0.3)', glowLight: 'rgba(2, 132, 199, 0.3)'
            }));

            // Red Planet (Top Left - distant)
            planets.push(new Planet(width * 0.2, height * 0.15, 15, {
                baseDark: '#ef4444', baseLight: '#dc2626',
                band1Dark: '#b91c1c', band1Light: '#991b1b',
                band2Dark: '#7f1d1d', band2Light: '#450a0a',
                highlightDark: '#fca5a5', highlightLight: '#f87171',
                shadowDark: '#7f1d1d', shadowLight: '#450a0a',
                glowDark: 'rgba(248, 113, 113, 0.3)', glowLight: 'rgba(220, 38, 38, 0.3)'
            }));
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Draw Planets (Background layer)
            planets.forEach(planet => {
                planet.update();
                planet.draw();
            });

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            shootingStars.forEach(star => {
                star.update();
                star.draw();
            });

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        resize();
        animate();
    }

    // --- Edge Glow Effect ---
    const glowContainer = document.createElement('div');
    glowContainer.classList.add('edge-glow-container');
    glowContainer.innerHTML = `
        <div class="edge-glow top"></div>
        <div class="edge-glow bottom"></div>
        <div class="edge-glow left"></div>
        <div class="edge-glow right"></div>
    `;
    document.body.appendChild(glowContainer);

    const edges = {
        top: glowContainer.querySelector('.top'),
        bottom: glowContainer.querySelector('.bottom'),
        left: glowContainer.querySelector('.left'),
        right: glowContainer.querySelector('.right')
    };

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const threshold = 100; // Distance in px to trigger glow

        // Update CSS vars for gradient position
        document.body.style.setProperty('--mouse-x', `${x}px`);
        document.body.style.setProperty('--mouse-y', `${y}px`);

        // Calculate Opacity based on distance
        const distTop = y;
        const distBottom = height - y;
        const distLeft = x;
        const distRight = width - x;

        // Apply opacity with smooth transition
        edges.top.style.opacity = Math.max(0, 1 - distTop / threshold);
        edges.bottom.style.opacity = Math.max(0, 1 - distBottom / threshold);
        edges.left.style.opacity = Math.max(0, 1 - distLeft / threshold);
        edges.right.style.opacity = Math.max(0, 1 - distRight / threshold);
    });
});
