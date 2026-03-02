document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for hero tagline
    const typedTextElement = document.getElementById('typed-text');
    const cursorElement = document.getElementById('cursor');

    if (typedTextElement && cursorElement) {
        const textToType = "Junior Full-Stack Web Developer";
        let charIndex = 0;

        function type() {
            if (charIndex < textToType.length) {
                typedTextElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                cursorElement.style.display = 'none';
            }
        }

        setTimeout(type, 500);
    }

    // Project Model
    const projects = [
        {
            title: "Vaccination Management System",
            desc: "A powerful and secure web application streamlines the immunization process, providing separate dashboards for admins, hospitals, and parents. The system manages vaccine inventory, schedules appointments, and maintains digital records. Real-time updates ensure accurate tracking and efficient management.",
            image: "img/VMS.png",
            tags: ["Frontend Stack Tech", "PHP", "MySQL"],
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL", "PHP"],
            live: "#",
            repo: "https://github.com/MuhammadAsim2009/Vaccination-Management-System.git"
        },
        {
            title: "Emergency Response Management System",
            desc: "Emergency Response Management System is a web application to manage emergency requests and response records with a secure backend and responsive user interface. The system implements secure backend logic, designs accessible and responsive interfaces, and focuses on performance and reliability.",
            image: "img/ERMS.png",
            tags: ["Frontend Stack Tech", "PHP", "MySQL"],
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL", "PHP"],
            live: "#",
            repo: "#"
        },
        {
            title: "Smart Shop",
            desc: "SmartShop is a web-based app simulating real-world shopping. Users can browse products, manage a cart, and place orders, while admins efficiently handle products and categories. The project emphasizes backend logic, database management, and smooth frontend interaction for a realistic store experience.",
            image: "img/E-commerce.png",
            tags: ["Frontend Stack Tech", "PHP", "MySQL"],
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL", "PHP"],
            live: "#",
            repo: "#"
        },
        {
            title: "FoodieHub",
            desc: "A modern restaurant landing page designed to attract food lovers. It showcases interactive menus, integrated reservation systems, and customer reviews with a clean, appetizing UI. Mobile-first design ensures a seamless experience across all devices. The page emphasizes intuitive navigation, visuals, and a polished user experience for all visitors.",
            image: "img/FoodieHub.png", 
            tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
            tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript ES6", "Local Storage"],
            live: "https://muhammadasim2009.github.io/FoodieHub/",
            repo: "https://github.com/MuhammadAsim2009/FoodieHub.git"
        }
    ];

    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');
    const overlay = document.getElementById('modal-overlay');

    function openModal(index) {
        const project = projects[index];
        document.getElementById('modal-image').style.backgroundImage = `url('${project.image}')`;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-desc').textContent = project.desc;
        document.getElementById('modal-live-link').href = project.live;
        document.getElementById('modal-repo-link').href = project.repo;

        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = project.tags.map(tag => `<span class="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase">${tag}</span>`).join('');

        const techContainer = document.getElementById('modal-tech');
        techContainer.innerHTML = project.tech.map(t => `<div class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300">${t}</div>`).join('');

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }

    document.querySelectorAll('.project-card-trigger').forEach((card, index) => {
        card.addEventListener('click', () => openModal(index));
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
});