// ── Hamburger ──
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// close menu when a link is clicked on mobile
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});


// ── Navbar scroll background ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ── Typewriter effect ──
const phrases = [
  "Full Stack JavaScript Developer",
  "Building scalable web systems",
  "Node.js · MongoDB · Express",
  "Turning ideas into live products",
];

const heroSub = document.querySelector('.hero-sub');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    heroSub.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;
  } else {
    heroSub.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 80;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    // pause at end before deleting
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();


// ── Modal project data ──
const projectData = {
  pos: {
    title: "POS & Inventory Management System — Gas Plant",
    description: `This is a full stack Point of Sale and inventory management system delivered to a gas plant client and deployed locally across their business operations. While the system's foundation provided core POS functionality, the majority of the business-critical logic — the features that make it actually work for a gas business — were designed and built from scratch.

The most significant addition was a gas unit conversion engine. Gas is sold and measured in multiple units — kilograms, litres, and cubic metres — and prices fluctuate based on weight, volume, and tank capacity. A custom calculation module was built to handle all conversions automatically, ensuring every transaction is computed accurately regardless of the unit used at the point of sale. This eliminated manual calculation errors and significantly sped up the sales process for staff.

Beyond gas conversion, additional features were developed including automated stock deduction based on units dispensed, low stock threshold alerts to notify staff before a tank runs empty, transaction history with detailed breakdowns per sale, and a summary dashboard showing daily revenue, total units sold, and inventory levels at a glance.

The system is built on PHP with a MySQL database — a stack chosen for its reliability in local network environments where internet connectivity cannot be guaranteed. The interface runs entirely within the company's internal network, accessible from any machine on-site without requiring external hosting.

The client uses this system daily to manage sales, track inventory, and generate end-of-day reports — replacing a manual, error-prone process with a reliable, automated one.`,
    tags: ["PHP", "MySQL", "Full Stack", "POS", "Inventory Management", "Gas Conversion Logic", "Local Network Deployment", "CRUD", "Dashboard"],
  },
  church: {
    title: "Church Management System — Dominion City Akwakuma",
    description: `Dominion City Akwakuma is a branch of one of Nigeria's fastest-growing church networks, with over 750 chapters across Africa and beyond. They needed a modern, fully functional web presence — not just a brochure site, but a living platform their congregation could interact with and their admin team could manage independently.

The result is a production-grade church management system that handles everything from sermon publishing to online giving, all secured with enterprise-level authentication and deployed on cloud infrastructure.

On the frontend, visitors can watch or access uploaded sermons, submit prayer requests, share testimonies, and give financially through a secure, frictionless payment flow. The site is fully responsive and served directly through Express, ensuring fast load times and consistent performance across devices.

The backend is built on Node.js and Express with MongoDB as the primary database. Authentication uses JSON Web Tokens stored in HttpOnly cookies — making the session completely inaccessible to JavaScript and protected against XSS attacks. CORS is configured with explicit origin whitelisting, and a rate limiter on the login route prevents brute force attacks, logging every suspicious attempt with IP address and timestamp.

The admin dashboard gives authorised staff full control over the platform — uploading and managing sermons with thumbnail images and YouTube links, approving or removing testimonies, viewing and marking prayer requests as handled, and tracking all donation transactions. The Paystack integration supports three giving categories: Tithes, Offerings, and Special Giving, with every transaction verified server-side before being recorded.

The application is deployed on Render with MongoDB Atlas handling cloud database storage, making it fully accessible and scalable without any local infrastructure.`,
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Paystack", "Multer", "Cookie-Parser", "Bcrypt", "Express-Rate-Limit", "Render", "MongoDB Atlas", "HTML", "CSS", "JavaScript"],
  },
  modish: {
    title: "Business Website — Modish Cakes and Events",
    description: `Modish Cakes and Events is a premium cake and event decoration brand offering custom cakes, small chops, full event styling, bridal services, and professional training programs. They needed a website that matched their brand — elegant, visual, and built to convert visitors into enquiries.

The site is a responsive multi-page build with a strong visual identity throughout. Each page is designed to showcase the business's work — a curated gallery of cakes and decorated events, a structured services page clearly outlining each offering, an about page telling the founder's story, and a contact page with direct WhatsApp and Instagram integration for instant client communication.

The project went through multiple design iterations with the client. Colours, layouts, image selections, and copy were refined in close collaboration over several rounds until the final version was approved — a process that sharpened both my design sensibility and my ability to manage client feedback professionally.

The site is built entirely with HTML, CSS, and vanilla JavaScript — no frameworks, no unnecessary dependencies. This keeps it lightweight, fast-loading, and easily maintainable. All pages are fully mobile-responsive with smooth navigation and consistent styling across screen sizes.

The live site is hosted on a custom domain — modishcakesng.com — and continues to serve as the brand's primary online presence, driving customer enquiries through WhatsApp and social media daily.`,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Mobile-First", "Custom Domain"],
  },
  kidividual: {
    title: "E-commerce Store — Kidividual",
    description: `Kidividual is a kids fashion brand with a catalogue of over 500 products spanning clothing, accessories, and lifestyle items for children. The client needed a professional, fully functional online store capable of handling a large product inventory, processing payments, and providing a seamless shopping experience for their customers.

The platform was built on WordPress with WooCommerce as the e-commerce engine — a deliberate choice that gives the client full autonomy to manage their store without developer dependency. They can add products, update stock, process orders, apply discounts, and view sales reports entirely through the admin dashboard.

The build involved complete WooCommerce configuration, custom theme setup aligned to the Kidividual brand, and the integration of a payment gateway to handle online transactions securely. Product pages were structured and optimised for SEO across all 500+ listings — including meta titles, descriptions, image alt tags, and URL slugs — to maximise organic visibility in search results.

Performance was a key consideration given the size of the catalogue. Image optimisation, lazy loading, and caching configurations were applied to ensure the store loads quickly even on mobile connections — critical for a Nigerian customer base where mobile browsing is dominant.

The final result is a scalable, independently manageable e-commerce platform that functions as a full digital storefront for the Kidividual brand.`,
    tags: ["WordPress", "WooCommerce", "SEO Optimisation", "Payment Gateway", "Performance Tuning", "Custom Theme", "Mobile Responsive"],
  },
  landing: {
    title: "Responsive Landing Page",
    description: `A clean, visually engaging landing page built entirely with HTML, CSS, and vanilla JavaScript — no frameworks, no libraries, no shortcuts. The goal was to demonstrate a strong command of frontend fundamentals while delivering a page that looks and feels professional.

The layout is built using CSS Flexbox and Grid, with a mobile-first approach ensuring the design responds elegantly across all screen sizes — from small mobile screens to large desktop displays. Careful attention was given to spacing, typography, and visual hierarchy to guide the visitor's eye naturally toward the call-to-action.

Subtle JavaScript interactions enhance the user experience — smooth scroll behaviour, scroll-triggered animations, and lightweight dynamic effects that add polish without bloating the page. No frameworks were used deliberately, keeping the codebase clean, fast, and fully transparent.

This project represents the foundation of my frontend work — the discipline of building with precision using the core tools of the web before reaching for abstractions.`,
    tags: ["HTML5", "CSS3", "Flexbox", "Grid", "JavaScript", "Responsive Design", "Mobile-First"],
  },
  portfolio: {
    title: "Personal Portfolio — Version 1",
    description: `My first personal portfolio, built as a live showcase of my skills and work as a web developer. The design direction was deliberate — a dark, immersive theme with neon cyan accents, giving it a futuristic, developer-coded aesthetic that reflects the nature of the work inside it.

The site features smooth scroll navigation, a typewriter hero effect that cycles through developer titles, animated skill cards, project cards with live links, and a fully responsive layout that works cleanly on mobile and desktop alike. The hamburger menu animates into an X on toggle and the nav collapses into a side panel on smaller screens.

Beyond the aesthetics, this project was my first attempt at establishing a professional online presence — a single URL where potential clients and employers could see who I am, what I build, and how to reach me. It gave me hands-on experience in personal branding, layout composition, and presenting technical work to a non-technical audience.

Portfolio v1 laid the groundwork for everything that followed. It is the project that started the professional journey.`,
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Animations", "Dark Theme", "GitHub Pages"],
  },
};


// ── Modal open/close logic ──
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.project;
    const project = projectData[key];
    if (!project) return;

    // Build modal HTML
    const tagsHTML = project.tags.map(t => `<span>${t}</span>`).join('');
    const descHTML = project.description
      .split('\n\n')
      .map(para => `<p>${para.trim()}</p>`)
      .join('');

    modalContent.innerHTML = `
      <h2>${project.title}</h2>
      <div class="modal-tags">${tagsHTML}</div>
      ${descHTML}
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// close on X button
modalClose.addEventListener('click', closeModal);

// close on overlay click
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
