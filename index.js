// index.js - Interactive Scripts for Tran Quoc Van's Portfolio

document.addEventListener('DOMContentLoaded', () => {

  // ===================== MOBILE NAV MENU =====================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
    
    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
      });
    });
  }

  // ===================== ACTIVE NAV LINK ON SCROLL =====================
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY || window.pageYOffset || 0;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollPos >= (sectionTop - 120)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      const hash = href.includes('#') ? href.split('#')[1] : '';
      if (hash === current) {
        item.classList.add('active');
      }
    });
  });

  // ===================== CAROUSEL SLIDER LOGIC =====================
  function initCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const track = carousel.querySelector('.carousel-track') || carousel.querySelector('.leadership-gallery-track');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const slides = Array.from(track.children);
    const slideCount = slides.length;
    
    function updateSlidePosition() {
      const percentage = -(currentIndex * 100);
      track.style.transform = `translateX(${percentage}%)`;
    }
    
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex < slideCount - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to start
      }
      updateSlidePosition();
    });
    
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slideCount - 1; // Loop to end
      }
      updateSlidePosition();
    });
  }

  // Initialize sliders


  // ===================== ACADEMIC PROJECT DATA & MODAL LOGIC =====================
  const academicData = {
    "1": {
      title: "Frontier of Digital Economy",
      course: "Digital Economy (RMIT)",
      team: "Team Project",
      highlight: "Advanced Research",
      bannerImg: "index.css", // Uses fallback primary navy color
      desc: `
        <h4>Project Overview</h4>
        <p>This presentation researches the evolving platforms, business structures, and digital ecosystem regulations shaping the modern economy. Key themes include network economics, multi-homing costs, switching barriers, and market consolidation.</p>
        <h4>Key Contribution</h4>
        <p>Conducted extensive market analysis on leading platform businesses (e.g. e-commerce giants, ride-hailing networks, and SaaS platforms) focusing on how network effects drive monetization methods (freemium, subscriptions, transaction commissions). Additionally, evaluated anti-monopoly frameworks and regional digital privacy regulations in Southeast Asia.</p>
      `,
      actions: [
        { label: "View Presentation (PPTX)", href: "Academic Experiences/Block 1/Frontier of Digital Economy - Presentation.pptx", download: true }
      ]
    },
    "2": {
      title: "Vinamilk's Internationalization Plan (India)",
      course: "Global Business (BUSM3311)",
      team: "Group 3 - Team 02",
      highlight: "3rd Prize Winner",
      bannerImg: "Academic Experiences/Block 2/IMG_9489.jpg",
      desc: `
        <h4>Project Overview</h4>
        <p>This comprehensive business report outlines a strategic internationalization plan for Vinamilk, Vietnam's leading dairy brand, aiming to expand its footprint into India's highly competitive dairy market.</p>
        <h4>My Key Responsibilities</h4>
        <ul>
          <li><strong>PESTLE Analysis:</strong> Analyzed critical political, economic, socio-cultural, technological, environmental, and legal factors influencing dairy imports in India.</li>
          <li><strong>Mode of Entry Analysis:</strong> Justified the selection of a Joint Venture (JV) model as the most optimal entry mode, outlining the timing and partnership criteria.</li>
          <li><strong>Partner Screening:</strong> Identified and evaluated potential target companies in India for the Joint Venture alignment.</li>
        </ul>
        <h4>Key Results</h4>
        <p>Awarded 3rd Prize overall in the Global Business Course at RMIT. Developed a robust roadmap detailing the market screening process, capital budgeting projections, Whitespace analysis, and localized marketing activation tactics.</p>
      `,
      actions: [
        { label: "Download Full Report (PDF)", href: "Academic Experiences/Block 2/BUSM3311_SGS03_TEAM02_ASSIGNMENT3A (1).pdf", download: true }
      ]
    },
    "3": {
      title: "Money & Debt Market Analysis",
      course: "Finance & Investment",
      team: "Individual / Group",
      highlight: "Analytical Modeling",
      bannerImg: "",
      desc: `
        <h4>Project Overview</h4>
        <p>A technical study investigating fixed-income investing and portfolio management, divided into three key quantitative areas: bond duration/convexity calculations, cash flow matching portfolio immunization, and Fed-driven yield curve forecasting.</p>
        <h4>Key Work Highlights</h4>
        <ul>
          <li><strong>Duration & Convexity:</strong> Calculated Macaulay Duration, Modified Duration, and Convexity for 10-year Dutch (NL10Y) and UK (GB10Y) government bonds to evaluate interest rate sensitivity.</li>
          <li><strong>Cash Flow Matching:</strong> Formulated an optimal bond immunization portfolio strategy to minimize shortfall risk and portfolio cost using Excel Solver.</li>
          <li><strong>Yield Curve Forecasting:</strong> Modeled macroeconomic and geopolitical scenarios to forecast Federal Reserve rate adjustments and their impacts on yield curve steepening/flattening.</li>
        </ul>
      `,
      actions: [
        { label: "Download Report (DOCX)", href: "Academic Experiences/Block 3/Money and Debt Report.docx", download: true }
      ]
    },
    "4": {
      title: "O-We Water Social Enterprise Strategy",
      course: "Integrated Perspectives (BUSM2580)",
      team: "Group Case Study",
      highlight: "Design Thinking Framework",
      bannerImg: "Academic Experiences/Block 4/images (1).jpeg",
      desc: `
        <h4>Project Overview</h4>
        <p>Applying the 5-step Design Thinking process (Empathize, Define, Ideate, Prototype, Test) to design a sustainable business model for O-We Water, a social enterprise addressing clean water access for vulnerable populations in the outskirts of Ho Chi Minh City.</p>
        <h4>Key Solutions Developed</h4>
        <p>The report analyzed O-We's structural imbalance between its low-cost social mission and commercial viability. Our team proposed a localized brand awareness campaign combined with an external crowdfunding/sponsorship funding framework from society to secure capital while keeping drinking water affordable for the target demographic.</p>
      `,
      actions: [
        { label: "Download Report (DOCX)", href: "Academic Experiences/Block 4/IPBP - Report_.docx", download: true }
      ]
    },
    "5": {
      title: "AI-Powered myRMIT Course Advisor",
      course: "Introduction to Enterprise AI",
      team: "Team 05 - G03",
      highlight: "AI Architecture Design",
      bannerImg: "",
      desc: `
        <h4>Project Overview</h4>
        <p>Designed a strategic deployment proposal for an AI-powered course recommendation and eligibility validation system embedded within the myRMIT student platform to automate course planning and reduce administrative error rates.</p>
        <h4>Key Analysis Highlights</h4>
        <ul>
          <li><strong>Technical Solution:</strong> Modeled a deep learning recommendation system using centralized student data governance, machine learning model architectures, and modular APIs.</li>
          <li><strong>Governance & Compliance:</strong> Audited compliance with Vietnam's Cybersecurity Law, data privacy regulations, and ethical AI fairness protocols.</li>
          <li><strong>SWOT & PESTLE:</strong> Analyzed the competitive EdTech landscape in Southeast Asia and detailed resource budgeting and stakeholder management models.</li>
        </ul>
      `,
      actions: [
        { label: "Download Presentation (PDF)", href: "Academic Experiences/Block 5/Introduction to Enterprise AI - Presentation.pdf", download: true },
        { label: "Download Full Report (DOCX)", href: "Academic Experiences/Block 5/Introduction to Enterprise AI.docx", download: true }
      ]
    },
    "6": {
      title: "Techains: Blockchain Crowdfunding",
      course: "The Next Founder Competition",
      team: "Platform Founders Team",
      highlight: "Top 8 Finalist 2024",
      bannerImg: "Academic Experiences/Block 6/IMG_9546.JPG",
      desc: `
        <h4>Project Overview</h4>
        <p>Techains is a blockchain-enabled crowdfunding and fundraising platform proposed during RMIT's The Next Founder Competition 2024. The project aimed to solve transparency, traceability, and public distrust in Vietnam's charity activities.</p>
        <h4>Key Work & Platform Design</h4>
        <p>Designed the smart contract automation flow, platform tokenomics, and regulatory compliance protocols. The solution utilized decentralized public ledgers to verify donation flow, enabling donors to track the precise impact of their financial support and eliminating middle-tier charity scams.</p>
        <h4>Achievement</h4>
        <p>Out of hundreds of startup ideas, Techains successfully advanced to the <strong>Top 8 of RMIT The Next Founder Competition 2024</strong>.</p>
      `,
      actions: [
        { label: "Download Pitch Deck (PDF)", href: "Academic Experiences/Block 6/Loopy The Happy - TNF proposal (1).pdf", download: true }
      ]
    }
  };

  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalBannerImg = document.getElementById('modalBannerImg');
  const modalCourse = document.getElementById('modalCourse');
  const modalTeam = document.getElementById('modalTeam');
  const modalHighlight = document.getElementById('modalHighlight');
  const modalDesc = document.getElementById('modalDesc');
  const modalActions = document.getElementById('modalActions');

  const cards = document.querySelectorAll('.academic-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const blockId = card.getAttribute('data-block');
      const data = academicData[blockId];
      if (!data) return;

      // Populate modal data
      modalTitle.textContent = data.title;
      modalCourse.textContent = data.course;
      modalTeam.textContent = data.team;
      modalHighlight.textContent = data.highlight;
      modalDesc.innerHTML = data.desc;

      // Handle banner image
      if (data.bannerImg) {
        modalBannerImg.src = data.bannerImg;
        modalBannerImg.style.display = 'block';
      } else {
        modalBannerImg.style.display = 'none';
      }

      // Handle action buttons
      modalActions.innerHTML = '';
      data.actions.forEach(act => {
        const btn = document.createElement('a');
        btn.className = 'btn btn-primary';
        btn.href = act.href;
        btn.textContent = act.label;
        if (act.download) {
          btn.setAttribute('download', '');
        } else {
          btn.setAttribute('target', '_blank');
        }
        modalActions.appendChild(btn);
      });

      // Show modal
      projectModal.classList.add('open');
      document.body.style.overflow = 'hidden'; // Disable page scroll
    });
  });

  function closeModal() {
    projectModal.classList.remove('open');
    document.body.style.overflow = ''; // Enable page scroll
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal when clicking outside container
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && projectModal.classList.contains('open')) {
        closeModal();
      }
      if (storyModal && storyModal.classList.contains('open')) {
        closeStoryModal();
      }
      if (lightboxModal && lightboxModal.classList.contains('open')) {
        closeLightbox();
      }
    }
  });

  // ===================== GLOBAL IMAGE LIGHTBOX LOGIC =====================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, captionText) {
    if (!lightboxModal || !lightboxImg || !lightboxCaption) return;
    lightboxImg.src = src;
    lightboxCaption.style.display = 'none'; // Globally hide captions
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Disable page scroll
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Enable page scroll
  }

  // Attach click events to education thumbnails & journey items
  const clickableImages = document.querySelectorAll('.edu-img-item, .journey-item, .leader-img-item');
  clickableImages.forEach(item => {
    item.addEventListener('click', (e) => {
      const src = item.getAttribute('data-image');
      const caption = item.getAttribute('data-caption');
      if (src) {
        openLightbox(src, caption);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // ===================== LEADERSHIP STORY MODAL LOGIC =====================
  const storyModal = document.getElementById('storyModal');
  const openStoryBtn = document.getElementById('openStoryBtn');
  const storyModalClose = document.getElementById('storyModalClose');

  if (openStoryBtn && storyModal) {
    openStoryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      storyModal.classList.add('open');
      document.body.style.overflow = 'hidden'; // Disable scroll
    });
  }

  function closeStoryModal() {
    if (storyModal) {
      storyModal.classList.remove('open');
      document.body.style.overflow = ''; // Enable scroll
    }
  }

  if (storyModalClose) {
    storyModalClose.addEventListener('click', closeStoryModal);
  }

  if (storyModal) {
    storyModal.addEventListener('click', (e) => {
      if (e.target === storyModal) {
        closeStoryModal();
      }
    });
  }

  // ===================== PRESIDENT TABS LOGIC =====================
  const tabButtons = document.querySelectorAll('.president-tabs-nav .tab-btn');
  const tabPanels = document.querySelectorAll('.president-tabs-content .tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      // Deactivate all buttons & panels
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      
      // Activate clicked button & corresponding panel
      btn.classList.add('active');
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

});
