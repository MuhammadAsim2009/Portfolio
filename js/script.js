// JavaScript for horizontal portfolio navigation
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for hero tagline
    const typedText = document.getElementById('typed-text');
    const cursor = document.getElementById('cursor');
    const textToType = "Marketing Manager & Web Developer";
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typedText.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            cursor.style.display = 'none';
        }
    }

    setTimeout(typeText, 1000);

    // Horizontal navigation with enhanced transition effects
    const links = document.querySelectorAll("nav a");
    const sections = document.getElementById("sections");
    let currentIndex = 0;

    // Function to animate headings
    function animateHeadings(section) {
        const headings = section.querySelectorAll('h2');
        headings.forEach((heading, index) => {
            heading.classList.add('heading-animate');
            setTimeout(() => {
                heading.classList.add('visible');
            }, 300 + (index * 150));
        });
    }

    // Function to animate content
    function animateContent(section) {
        const contentElements = section.querySelectorAll('.bg-gradient-to-br, .grid, .flex');
        contentElements.forEach((element, index) => {
            element.classList.add('content-animate');
            setTimeout(() => {
                element.classList.add('visible');
            }, 500 + (index * 200));
        });
    }

    // Function to hide headings and content
    function hideHeadings(section) {
        const headings = section.querySelectorAll('h2');
        const contentElements = section.querySelectorAll('.bg-gradient-to-br, .grid, .flex');

        headings.forEach(heading => {
            heading.classList.remove('heading-animate', 'visible');
        });

        contentElements.forEach(element => {
            element.classList.remove('content-animate', 'visible');
        });
    }

    links.forEach((link, index) => {
        link.addEventListener("click", e => {
            e.preventDefault();

            // Add click animation to nav link
            link.style.animation = 'navClick 0.2s ease-in-out';

            // Remove animation after it completes
            setTimeout(() => {
                link.style.animation = '';
            }, 200);

            // Only proceed if clicking a different section
            if (index !== currentIndex) {
                // Hide current section with fade out effect
                const currentSection = sections.children[currentIndex];
                currentSection.classList.add('section-hidden');
                hideHeadings(currentSection);

                // Update transform with smooth transition
                sections.style.transform = `translateX(-${index * 100}vw)`;

                // Show new section with fade in effect after transition
                setTimeout(() => {
                    const newSection = sections.children[index];
                    newSection.classList.remove('section-hidden');
                    newSection.classList.add('section-visible');

                    // Animate headings and content in the new section
                    setTimeout(() => {
                        animateHeadings(newSection);
                        animateContent(newSection);
                    }, 200);
                }, 400);

                currentIndex = index;
            }
        });
    });

    // Initialize first section
    if (sections.children[0]) {
        sections.children[0].classList.add('section-visible');
        setTimeout(() => {
            animateHeadings(sections.children[0]);
            animateContent(sections.children[0]);
        }, 500);
    }

    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Reset errors
            document.querySelectorAll('.text-red-500').forEach(el => el.classList.add('hidden'));

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            let isValid = true;

            // Name validation
            if (!name) {
                document.getElementById('nameError').classList.remove('hidden');
                isValid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                document.getElementById('emailError').classList.remove('hidden');
                isValid = false;
            }

            // Message validation
            if (!message) {
                document.getElementById('messageError').classList.remove('hidden');
                isValid = false;
            }

            if (isValid) {
                // Show success message
                const successMessage = document.getElementById('successMessage');
                successMessage.classList.remove('hidden');

                // Reset form
                contactForm.reset();

                // Hide success message after 3 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 3000);
            }
        });
    }

    console.log('Horizontal portfolio loaded with typing effect and navigation');
});