// ── Hamburger ──
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// close menu when a link is clicked on mobile
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger?.classList.remove('active');
  });
});

// ── Navbar scroll background ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Typewriter effect ──
const phrases = [
  "Full Stack JavaScript Developer",
  "I build scalable systems for businesses",
  "Node.js · Express · MongoDB",
  "From idea to deployed product",
  "Custom platforms . E-commerce . Web Apps",
];

const heroSub = document.querySelector('.hero-sub');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
  if (!heroSub) return;

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
lvstpos: {
    title: "LVST POS System — Business Management Software",
    description: `LVST POS System is a full-stack point of sale and business management software built for businesses that need sales, inventory, receipts, purchases, expenses, reports, users, roles, and business settings in one system.

The application includes a complete POS workflow for recording sales, handling cart items, calculating totals, receiving payments, printing receipts, and tracking sales history. Products can be managed with categories, SKU, barcode, stock quantity, low stock threshold, images, and status control. Inventory updates automatically as sales and purchases are recorded, making the system useful for real retail and shop operations.

Beyond sales, the system includes purchases, suppliers, customers, expenses, reports, payment methods, themes, settings, and user management. Admins can create users with roles, manage business details, update receipt settings, and view business performance through reports and summaries. Search was also added across major list pages such as products, inventory, categories, expenses, customers, suppliers, users, and purchases to make the system easier to use with large records.

The backend is built with Node.js, Express, Prisma, and MySQL, while the frontend uses EJS, CSS, and vanilla JavaScript. The software is packaged for local installation, supports fresh database setup, and can be launched locally through a desktop-style startup flow.

A private license server was also built separately to support license generation, activation, verification, installation tracking, reset/disable controls, and software access protection. The license server is not publicly linked for security reasons.`,
    tags: ["Node.js", "Express", "EJS", "Prisma", "MySQL", "POS", "Inventory", "Receipts", "Reports", "License Activation", "Local Deployment"],
  },

  lvstlanding: {
    title: "Software Sales Website — LVST POS",
    description: `The LVST POS sales website is a responsive product landing page built to present, sell, and support the LVST POS software as a real digital product.

The site includes a product-focused hero section, feature breakdowns, screenshots, pricing, a local setup offer, FAQ content, and a Vimeo demo video showing the software in action. It was designed to explain the value of the software clearly to both online buyers and local businesses that may need installation, setup, and training.

The checkout flow is integrated with Paystack for Nigerian payments, with server-side payment verification, callback handling, webhook support, and an admin area for viewing orders and license requests. Custom license requests can also be submitted from the site, allowing buyers to request special arrangements outside the standard plans.

The project also includes SEO and social sharing polish such as favicon setup, Open Graph image, meta descriptions, canonical URLs, sitemap, robots.txt, and a custom domain. The result is not just a landing page, but a full sales and marketing layer for a software product.`,
    tags: ["Node.js", "Express", "EJS", "Paystack", "Webhook", "SEO", "Open Graph", "Vimeo", "Responsive Design", "Render"],
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
  ecommerce: {
    title: "Full Stack E-commerce System — Lvst Store",
    description: `Lvst Store is a production-grade, fully featured e-commerce platform built from scratch as a deployable template for any retail business. The system covers the complete shopping journey — from product discovery to secure payment — alongside a comprehensive admin panel for full business management.

Customers can browse products with real-time search, category filtering, and price range controls. Each product page features an image gallery, star ratings, stock status, quantity selector, and a reviews system that only allows verified purchasers to leave feedback. Items can be saved to a wishlist, added to cart, and purchased via Paystack with server-side transaction verification.

The cart supports quantity updates, item removal, and coupon code discounts — both percentage and fixed amount. At checkout, customers fill in their delivery address and complete payment through the Paystack popup. Once payment is verified server-side, the order is confirmed, stock is automatically deducted, and a notification is sent to the customer. Order history is accessible from the user profile, with full status tracking from pending through to delivered.

The admin dashboard provides complete control over the business — product and category management with image uploads, order management with status updates, user management with ban/unban capability, coupon creation and management, review moderation, and broadcast notifications to all users. A dashboard overview shows total revenue, orders, customers, and products at a glance.

The backend is built on Node.js and Express with MongoDB, secured with JWT in HttpOnly cookies, rate limiting, manual XSS sanitization, and Helmet security headers. A cron job runs hourly to automatically expire sales when their end date passes. The system is deployed on Render with MongoDB Atlas and fully operational on HTTPS.`,
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Paystack", "Multer", "Bcrypt", "Node-Cron", "Nodemailer", "Render", "MongoDB Atlas", "HTML", "CSS", "JavaScript"],
  },
  blog: {
    title: "Full Stack Blog System — Stone Boy Dev Blog",
    description: `A production-grade personal dev blog built entirely from scratch — backend, frontend, and admin panel — as a live platform for sharing technical writing, project breakdowns, and dev lessons learned in the field.

The backend is built on Node.js and Express with MongoDB, featuring four core models: User, Post, Category, and Comment. Posts support rich text content via Quill.js, cover image uploads via Multer, slugified URLs, category associations, tag arrays, and a published/draft toggle. The comment system includes public submission and admin approval before any comment goes live. All admin routes are protected by a custom verifyAdmin middleware that reads a JWT from an HttpOnly cookie and checks for admin privileges.

The admin dashboard gives full control over the blog — creating and editing posts with the Quill.js rich text editor, managing categories, moderating comments, and toggling post visibility. The entire admin panel is built with no frameworks, using separated HTML, CSS, and JavaScript files — 41 files total with zero inline styles or scripts anywhere in the project.

The frontend is a dark editorial design system built around a deliberate typographic identity — Bebas Neue for display headings, DM Serif Display for editorial serif moments, and IBM Plex Mono for metadata and labels. The result is a design that looks closer to a high-end digital magazine than a typical developer blog. Every page has a working hamburger menu, animated custom cursor, scroll reveal animations, and a consistent design language across all six public pages and five admin pages.

The blog is live with real posts, real categories, and real content — not a demo. It was built independently, with the backend architecture mapped entirely from patterns developed in previous projects without requesting any code.`,
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "Quill.js", "Bcrypt", "Cookie-Parser", "Slugify", "Render", "MongoDB Atlas", "HTML", "CSS", "JavaScript"],
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
  pos: {
    title: "POS & Inventory Management System — Gas Plant",
    description: `This is a full stack Point of Sale and inventory management system delivered to a gas plant client and deployed locally across their business operations. While the system's foundation provided core POS functionality, the majority of the business-critical logic — the features that make it actually work for a gas business — were designed and built from scratch.

The most significant addition was a gas unit conversion engine. Gas is sold and measured in multiple units — kilograms, litres, and cubic metres — and prices fluctuate based on weight, volume, and tank capacity. A custom calculation module was built to handle all conversions automatically, ensuring every transaction is computed accurately regardless of the unit used at the point of sale. This eliminated manual calculation errors and significantly sped up the sales process for staff.

Beyond gas conversion, additional features were developed including automated stock deduction based on units dispensed, low stock threshold alerts to notify staff before a tank runs empty, transaction history with detailed breakdowns per sale, and a summary dashboard showing daily revenue, total units sold, and inventory levels at a glance.

The system is built on PHP with a MySQL database — a stack chosen for its reliability in local network environments where internet connectivity cannot be guaranteed. The interface runs entirely within the company's internal network, accessible from any machine on-site without requiring external hosting.

The client uses this system daily to manage sales, track inventory, and generate end-of-day reports — replacing a manual, error-prone process with a reliable, automated one.`,
    tags: ["PHP", "MySQL", "Full Stack", "POS", "Inventory Management", "Gas Conversion Logic", "Local Network Deployment", "CRUD", "Dashboard"],
  },
//   landing: {
//     title: "Responsive Landing Page",
//     description: `A clean, visually engaging landing page built entirely with HTML, CSS, and vanilla JavaScript — no frameworks, no libraries, no shortcuts. The goal was to demonstrate a strong command of frontend fundamentals while delivering a page that looks and feels professional.

// The layout is built using CSS Flexbox and Grid, with a mobile-first approach ensuring the design responds elegantly across all screen sizes — from small mobile screens to large desktop displays. Careful attention was given to spacing, typography, and visual hierarchy to guide the visitor's eye naturally toward the call-to-action.

// Subtle JavaScript interactions enhance the user experience — smooth scroll behaviour, scroll-triggered animations, and lightweight dynamic effects that add polish without bloating the page. No frameworks were used deliberately, keeping the codebase clean, fast, and fully transparent.

// This project represents the foundation of my frontend work — the discipline of building with precision using the core tools of the web before reaching for abstractions.`,
//     tags: ["HTML5", "CSS3", "Flexbox", "Grid", "JavaScript", "Responsive Design", "Mobile-First"],
//   },
//   portfolio: {
//     title: "Personal Portfolio — Version 1",
//     description: `My first personal portfolio, built as a live showcase of my skills and work as a web developer. The design direction was deliberate — a dark, immersive theme with neon cyan accents, giving it a futuristic, developer-coded aesthetic that reflects the nature of the work inside it.

// The site features smooth scroll navigation, a typewriter hero effect that cycles through developer titles, animated skill cards, project cards with live links, and a fully responsive layout that works cleanly on mobile and desktop alike. The hamburger menu animates into an X on toggle and the nav collapses into a side panel on smaller screens.

// Beyond the aesthetics, this project was my first attempt at establishing a professional online presence — a single URL where potential clients and employers could see who I am, what I build, and how to reach me. It gave me hands-on experience in personal branding, layout composition, and presenting technical work to a non-technical audience.

// Portfolio v1 laid the groundwork for everything that followed. It is the project that started the professional journey.`,
//     tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Animations", "Dark Theme", "GitHub Pages"],
//   },
};

// ── Modal open/close logic ──
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.project;
    const project = projectData[key];
    if (!project || !modalContent || !modalOverlay) return;

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
modalClose?.addEventListener('click', closeModal);

// close on overlay click
modalOverlay?.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function closeModal() {
  modalOverlay?.classList.remove('active');
  document.body.style.overflow = '';
}


// =========================
// BACK TO TOP
// =========================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTop) return;

  if (window.scrollY > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}