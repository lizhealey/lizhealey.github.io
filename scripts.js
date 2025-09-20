// Website JavaScript - Improved version
console.log("Website loaded!");

const publications = [
  {
    title: "Heterogeneity of continuous glucose monitoring features and their clinical associations in a type 2 diabetes population",
    authors: "Elizabeth Healey, Carlos Morato, Jaime Murillo, Isaac Kohane",
    journal: "Diabetes, Obesity & Metabolism",
    month: "May",
    year: "2025",
    category: "Research Interests",
    interest: "Diabetes Technology",
    type: "Journal",
    link: ""
  },
  {
    title: "CGM Data Analysis 2.0: Functional Data Pattern Recognition and Artificial Intelligence Applications",
    authors: "David C. Klonoff, Richard M. Bergenstal, Eda Cengiz, Mark A. Clements, Daniel Espes, Juan Espinoza, David Kerr, Boris Kovatchev, David M. Maahs, Julia K. Mader, Nestoras Mathioudakis, Ahmed A. Metwally, Shahid N. Shah, Bin Sheng, Michael P. Snyder, Guillermo Umpierrez, Mandy M. Shao, Agatha F. Scheideman, Alessandra T. Ayers, Cindy N. Ho, Elizabeth Healey",
    journal: "Journal of Diabetes Science and Technology",
    month: "August",
    year: "2025",
    category: "Research Interests",
    interest: "Diabetes Technology",
    type: "Journal",
    link: ""
  },
  {
    title: "Medical artificial intelligence and human values",
    authors: "Kun-Hsing Yu, Elizabeth Healey, Tze-Yun Leong, Isaac S Kohane, Arjun K Manrai",
    journal: "New England Journal of Medicine",
    month: "May",
    year: "2024",
    category: "Highlighted",
    interest: "AI in Medicine, Large Language Models",
    type: "Journal",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMra2214183"
  },
  {
    title: "A case study on using a large language model to analyze continuous glucose monitoring data",
    authors: "Elizabeth Healey, Amelia L M Tan, Kristen Flint, Jessica Ruiz, Isaac S Kohane",
    journal: "Scientific Reports",
    publisher: "Nature Publishing Group UK",
    volume: "15",
    number: "1",
    pages: "1143",
    month: "Jan",
    year: "2025",
    category: "Research Interests",
    interest: "Diabetes Technology, Large Language Models",
    type: "Journal",
    presentation: "Oral presentation at NIDDK Workshop on AI in Diabetes",
    link: "https://www.nature.com/articles/s41598-024-84003-0"
  },
  {
    title: "Use of machine learning to assess the management of uncomplicated urinary tract infection",
    authors: "Noah Jones, Ming-Chieh Shih, Elizabeth Healey, Chen Wen Zhai, Sonali Advani, Aaron Smith-McLallen, David Sontag, Sanjat Kanjilal",
    journal: "JAMA Network Open",
    publisher: "American Medical Association",
    volume: "8",
    number: "1",
    pages: "e2456950--e2456950",
    month: "Jan",
    year: "2025",
    category: "Research Interests",
    interest: "Causal Machine Learning",
    type: "Journal",
    link: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2829781"
  },
  {
    title: "LLM-CGM: A benchmark for large language model-enabled querying of continuous glucose monitoring data for conversational diabetes management",
    authors: "Elizabeth Healey, Isaac Kohane",
    journal: "Pacific Symposium on Biocomputing",
    volume: "30",
    year: "2025",
    category: "Highlighted",
    interest: "Diabetes Technology, Large Language Models",
    type: "Conference",
    presentation: "Oral presentation at Pacific Symposium on Biocomputing 2025",
    link: "https://www.worldscientific.com/doi/abs/10.1142/9789819807024_0007"
  },
  {
    title: "Identifying heterogeneous treatment effects in multiple outcomes using joint confidence intervals",
    authors: "Peniel N Argaw*, Elizabeth Healey*, Isaac Kohane",
    journal: "Machine Learning for Health Symposium",
    month: "Dec",
    year: "2022",
    category: "Research Interests",
    interest: "Causal Machine Learning",
    type: "Conference",
  },
  {
    title: "Embedded model predictive control for a wearable artificial pancreas",
    authors: "Ankush Chakrabarty, Elizabeth Healey, Dawei Shi, Stamatina Zavitsanou, Francis J Doyle III, Eyal Dassau",
    journal: "IEEE Transactions Control Systems Technology",
    year: "2020",
    category: "Research Interests",
    interest: "Diabetes Technology",
    type: "Journal",
    link: "https://ieeexplore.ieee.org/abstract/document/8844266"
  },
  {
    title: "Recent Advances, Applications and Open Challenges in Machine Learning for Health: Reflections from Research Roundtables at ML4H 2024 Symposium",
    authors: "Amin Adibi, Xu Cao, Zongliang Ji, Jivat Neet Kaur, Winston Chen, Elizabeth Healey, Brighton Nuwagira, Wenqian Ye, Geoffrey Woollard, Maxwell A Xu, Hejie Cui, Johnny Xi, Trenton Chang, Vasiliki Bikia, Nicole Zhang",
    category: "Research Interests",
    journal: "arXiv",
    interest: "AI in Medicine",
    type: "Other",
  },
  {
    title: "Recent Advances, Applications and Open Challenges in Machine Learning for Health: Reflections from Research Roundtables at ML4H 2022 Symposium",
    authors: "Stefan Hegselmann, Helen Zhou, Yuyin Zhou, Jennifer Chien, Sujay Nagaraj, Neha Hulkund, Shreyas Bhave, Michael Oberst, Amruta Pai, Caleb Ellington, Wisdom Ikezogwo, Jason Xiaotian Dou, Monica Agrawal, Changye Li, Peniel Argaw, Arpita Biswas, Mehak Gupta, Xinhui Li, Marta Lemanczyk, Yuhui Zhang, Christian Garbin, Elizabeth Healey, Heejong Kim, Claire Boone, Roxana Daneshjou, Siyu Shi, Nicola Pezzotti, Stephen R Pfohl, Edwin Fong, Aakanksha Naik, Ben Lengerich, Ying Xu, Jonathan Bidwell, Mark Sendak, Byung-Hak Kim, Nathaniel Hendrix, Dimitris Spathis, Jun Seita, Bastiaan Quast, Megan Coffee, Collin Stultz, Irene Y Chen, Shalmali Joshi, Girmaw Abebe Tadesse",
    year: "2023",
    journal: "arXiv",
    category: "Research Interests",
    interest: "AI in Medicine",
    type: "Other",
  },
  {
    title: "Model-Based Insulin Sensitivity and Beta-Cell Function Estimation from Daily Continuous Glucose Monitoring",
    authors: "Elizabeth Healey, Isaac Kohane",
    conference: "2024 46th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC)",
    pages: "1-4",
    publisher: "IEEE",
    month: "July",
    day: 15,
    year: "2024",
    category: "Research Interests",
    interest: "Diabetes Technology",
    type: "Conference",
    presentation: "Oral presentation at IEEE EMBC 2024",
  }
];

const newsData = [
  // Add news items here as needed
];

// Module-global variables
let publicationsList;
let interestButtonsDiv;
let allInterests;
let selectedTypes = new Set(['Journal', 'Conference', 'Other']);
let activeInterest = null;

// Utility function to format authors with proper truncation
function formatAuthors(authorsString) {
  if (!authorsString) return '';
  
  const authorList = authorsString
    .split(/,\s*|\s+and\s+/)
    .map(s => s.trim())
    .filter(Boolean);
  
  if (authorList.length === 0) return '';
  if (authorList.length <= 4) return authorList.join(', ');
  
  const firstThree = authorList.slice(0, 3).join(', ');
  const lastAuthor = authorList[authorList.length - 1];
  return `${firstThree}, ... ${lastAuthor}`;
}

// Create publication element with improved styling and accessibility
function createPublicationElement(pub) {
  const article = document.createElement('article');
  article.className = 'publication-item';
  
  // Title
  const titleElem = document.createElement('h3');
  titleElem.textContent = pub.title;
  titleElem.style.fontWeight = 'bold';
  titleElem.style.marginBottom = '0.3em';
  titleElem.style.color = 'var(--main-gold-dark)';
  article.appendChild(titleElem);
  
  // Authors and journal info
  const authorsDisplay = formatAuthors(pub.authors);
  const detailsElem = document.createElement('p');
  detailsElem.style.color = '#555';
  detailsElem.style.fontSize = '0.9em';
  detailsElem.style.margin = '0 0 0.5em 0';
  
  const journalInfo = pub.journal || pub.conference || '';
  const yearInfo = pub.year ? `(${pub.year})` : '';
  detailsElem.textContent = `${authorsDisplay}${authorsDisplay ? ' - ' : ''}${journalInfo} ${yearInfo}`;
  article.appendChild(detailsElem);
  
  // Add presentation info for papers with presentation details
  if (pub.presentation) {
    const presentationInfo = document.createElement('p');
    presentationInfo.style.color = '#555';
    presentationInfo.style.fontSize = '0.8em';
    presentationInfo.style.margin = '0 0 0.5em 0';
    presentationInfo.textContent = `>> ${pub.presentation}`;
    article.appendChild(presentationInfo);
  }
  
  
  // Make clickable if link exists
  if (pub.link) {
    article.style.cursor = 'pointer';
    article.setAttribute('tabindex', '0');
    article.setAttribute('role', 'link');
    article.setAttribute('aria-label', `Read publication: ${pub.title}`);
    
    const openLink = () => {
      window.open(pub.link, '_blank', 'noopener,noreferrer');
    };
    
    article.addEventListener('click', openLink);
    article.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        openLink();
      }
    });
    
    // Visual indicator for clickable items
    article.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    article.addEventListener('mouseenter', () => {
      article.style.transform = 'translateY(-2px)';
      article.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    });
    article.addEventListener('mouseleave', () => {
      article.style.transform = 'none';
      article.style.boxShadow = 'none';
    });
  }
  
  return article;
}

// Research summaries for each interest area
const researchSummaries = {
  'AI in Medicine': 'I design and evaluate AI systems for clinical decision support, including risk prediction, diagnostic algorithms, and workflow integration for physicians. My work includes validation of AI models in real-world hospital settings and analysis of their impact on patient outcomes.',
  'Large Language Models': 'I develop and benchmark large language models for healthcare, focusing on extracting insights from electronic health records and patient sensor data. Projects include LLMs for clinical text summarization, conversational diabetes management, and safety evaluation of generative models.',
  'Diabetes Technology': 'I create algorithms for diabetes management, including continuous glucose monitoring analysis, embedded control systems for artificial pancreas devices, and patient-facing digital tools. My work spans both hardware and software, with clinical collaborations for real-world deployment.',
  'Causal Machine Learning': 'I build robust statistical methods for estimating heterogeneous treatment effects in complex clinical settings, including multi-outcome causal inference and joint confidence intervals. Applications include personalized medicine and evaluation of interventions in large patient cohorts.'
};

// Render interest filter buttons
function renderInterestButtons() {
  if (!interestButtonsDiv) return;
  
  interestButtonsDiv.innerHTML = '';
  
  const wrapper = document.createElement('div');
  wrapper.className = 'interest-controls-wrapper';
  
  // Interest buttons row
  const interestRow = document.createElement('div');
  interestRow.className = 'interest-buttons-row';
  interestRow.style.display = 'flex';
  interestRow.style.flexWrap = 'wrap';
  interestRow.style.justifyContent = 'center';
  interestRow.style.gap = '0.25rem';
  interestRow.style.marginBottom = '0';
  
  // Create "All" button - will be added at the end
  const allBtn = document.createElement('button');
  allBtn.textContent = 'All';
  allBtn.className = 'interest-button active';
  allBtn.type = 'button';
  allBtn.setAttribute('aria-pressed', 'true');
  
  allBtn.addEventListener('click', (e) => {
    
    // Simple text link - no animations
    
    // Set active interest to null (show all)
    activeInterest = null;
    
    // Update button states
    interestRow.querySelectorAll('button').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    
    allBtn.classList.add('active');
    allBtn.setAttribute('aria-pressed', 'true');
    
    // "View all" button removed - functionality now handled by "All" button
    
    // Update research summary with animation - commented out for now
    // updateResearchSummary(activeInterest);
    
    // Re-render publications
    renderPublications();
  });
  
  // Create interest buttons in specific order
  const orderedInterests = ['AI in Medicine', 'Diabetes Technology', 'Causal Machine Learning', 'Large Language Models'];
  const remainingInterests = Array.from(allInterests)
    .filter(i => i && i.length && !orderedInterests.includes(i))
    .sort();
  
  [...orderedInterests, ...remainingInterests].forEach(interest => {
      const btn = document.createElement('button');
      btn.textContent = interest;
      btn.className = 'interest-button';
      btn.type = 'button';
      btn.setAttribute('aria-pressed', 'false');
      
      btn.addEventListener('click', (e) => {
        
        // Simple text link - no animations
        
        // Update active state
        activeInterest = activeInterest === interest ? null : interest;
        
        // Update button states
        interestRow.querySelectorAll('button').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        
        if (activeInterest) {
          btn.classList.add('active');
          btn.setAttribute('aria-pressed', 'true');
        } else {
          // If no interest is selected, activate "All" button
          allBtn.classList.add('active');
          allBtn.setAttribute('aria-pressed', 'true');
        }
        
        // "View all" button removed - functionality now handled by "All" button
        
        // Update research summary with animation - commented out for now
        // updateResearchSummary(activeInterest);
        
        // Re-render publications
        renderPublications();
      });
      
      interestRow.appendChild(btn);
    });
  
  // Add "All" button at the end
  interestRow.appendChild(allBtn);
  
  wrapper.appendChild(interestRow);
  
  // "View all publications" functionality now handled by "All" button in interest buttons
  
  // Research summary - commented out for now
  // const researchSummary = document.createElement('p');
  // researchSummary.className = 'research-summary';
  // researchSummary.style.textAlign = 'center';
  // researchSummary.style.color = '#555';
  // researchSummary.style.fontSize = '0.95rem';
  // researchSummary.style.maxWidth = '800px';
  // researchSummary.style.margin = '0 auto 1.5rem auto';
  // researchSummary.style.lineHeight = '1.5';
  // wrapper.appendChild(researchSummary);
  
  interestButtonsDiv.appendChild(wrapper);
  
  // Initialize controls container for type filters
  initializeTypeFilters();
  
  // Show default "All Research Areas" description - commented out for now
  // updateResearchSummary(null);
}

// Update research summary text and description with animations
function updateResearchSummary(interest) {
  const summaryElement = document.querySelector('.research-summary');
  const descriptionElement = document.getElementById('interest-description');
  const titleElement = document.getElementById('description-title');
  const textElement = document.getElementById('description-text');
  
  if (descriptionElement && titleElement && textElement) {
    // Add fade out animation first
    descriptionElement.style.opacity = '0';
    descriptionElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      if (interest && researchSummaries[interest]) {
        titleElement.textContent = interest;
        textElement.textContent = researchSummaries[interest];
        descriptionElement.classList.add('show');
      } else {
        titleElement.textContent = 'All Research Areas';
        textElement.textContent = 'Browse all publications across my research interests, or select a specific area above to filter by topic.';
        descriptionElement.classList.add('show');
      }
      
      // Trigger fade in animation
      requestAnimationFrame(() => {
        descriptionElement.style.opacity = '1';
        descriptionElement.style.transform = 'translateY(0)';
      });
    }, 200);
  }
  
  // Hide the old research summary
  if (summaryElement) {
    summaryElement.style.display = 'none';
  }
}

// Initialize type filter controls
function initializeTypeFilters() {
  const controlsContainer = document.getElementById('controls-container');
  if (!controlsContainer) return;
  
  controlsContainer.innerHTML = '';
  
  const controlsRow = document.createElement('div');
  controlsRow.className = 'controls-row';
  controlsRow.style.display = 'flex';
  controlsRow.style.justifyContent = 'flex-end';
  controlsRow.style.alignItems = 'center';
  controlsRow.style.gap = '0.5rem';
  controlsRow.style.marginBottom = '1rem';
  
  ['Journal', 'Conference', 'Other'].forEach(type => {
    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.style.display = 'flex';
    checkboxWrapper.style.alignItems = 'center';
    checkboxWrapper.style.gap = '0.5rem';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `type-${type.toLowerCase()}`;
    checkbox.checked = selectedTypes.has(type);
    checkbox.style.margin = '0';
    
    const label = document.createElement('label');
    label.htmlFor = `type-${type.toLowerCase()}`;
    label.textContent = type;
    label.style.margin = '0';
    label.style.cursor = 'pointer';
    label.style.fontSize = '0.9rem';
    
    checkbox.addEventListener('change', () => {
      
      if (checkbox.checked) {
        selectedTypes.add(type);
      } else {
        selectedTypes.delete(type);
      }
      renderPublications();
    });
    
    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);
    controlsRow.appendChild(checkboxWrapper);
  });
  
  // "View all publications" button removed - now handled by "All" button in interest buttons
  
  controlsContainer.appendChild(controlsRow);
}

// Render publications with filters applied
function renderPublications() {
  if (!publicationsList) {
    console.error('Publications list element not found');
    return;
  }
  
  publicationsList.innerHTML = '';
  
  const filteredPublications = publications.filter(pub => {
    // Interest filter
    const pubInterests = Array.isArray(pub.interest) 
      ? pub.interest 
      : (pub.interest || '').split(',').map(i => i.trim()).filter(Boolean);
    
    const interestMatch = !activeInterest || pubInterests.includes(activeInterest);
    
    // Type filter
    const typeMatch = selectedTypes.size === 0 || selectedTypes.has(pub.type);
    
    return interestMatch && typeMatch;
  });
  
  if (filteredPublications.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.style.textAlign = 'center';
    noResults.style.color = '#666';
    noResults.style.padding = '2rem';
    noResults.style.fontStyle = 'italic';
    noResults.textContent = 'No publications match the selected filters.';
    publicationsList.appendChild(noResults);
    return;
  }
  
  // Sort by year (most recent first), then by title
  filteredPublications
    .sort((a, b) => {
      const yearDiff = (parseInt(b.year) || 0) - (parseInt(a.year) || 0);
      if (yearDiff !== 0) return yearDiff;
      return a.title.localeCompare(b.title);
    })
    .forEach(pub => {
      const pubElement = createPublicationElement(pub);
      publicationsList.appendChild(pubElement);
    });
}

// Mobile menu setup with header wrapping detection
function setupMobileMenu() {
  const headerNav = document.querySelector('.header-nav-top');
  if (!headerNav) {
    console.log('Header nav not found');
    return;
  }
  
  console.log('Setting up mobile menu...');
  
  // Check if we already have mobile menu elements in HTML
  const existingToggle = headerNav.querySelector('.menu-toggle');
  const existingMenu = document.getElementById('mobile-menu');
  const hasExistingMobileMenu = existingToggle && existingMenu;
  
  // Clean up the header structure first (only for pages without existing mobile menu)
  if (!hasExistingMobileMenu) {
    cleanupHeaderStructure();
  }
  
  // Create toggle button if it doesn't exist
  let toggleBtn = existingToggle;
  if (!toggleBtn) {
    toggleBtn = document.createElement('button');
    toggleBtn.className = 'menu-toggle';
    toggleBtn.type = 'button';
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-controls', 'mobile-menu');
    toggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
    toggleBtn.innerHTML = `☰`;
    headerNav.appendChild(toggleBtn);
    console.log('Toggle button created');
  }
  
  // Create mobile menu if it doesn't exist
  let mobileMenu = existingMenu;
  if (!mobileMenu) {
    mobileMenu = document.createElement('nav');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'mobile-menu';
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.appendChild(mobileMenu);
    console.log('Mobile menu created');
  }
  
  let isOpen = false;
  let lastFocusedElement = null;
  
  // Function to clean up problematic header structure
  function cleanupHeaderStructure() {
    // Remove the nested div with inline styles around icons
    const problematicDiv = headerNav.querySelector('div[style*="margin-top"]');
    if (problematicDiv) {
      console.log('Found problematic div, cleaning up...');
      const iconsContainer = problematicDiv.querySelector('.sidebar-icons');
      if (iconsContainer) {
        // Move icons directly to header nav
        headerNav.appendChild(iconsContainer);
        // Remove the wrapper div
        problematicDiv.remove();
        console.log('Header structure cleaned');
      }
    }
  }
  
  // Function to check if header content is wrapping
  function checkHeaderWrapping() {
    const headerName = headerNav.querySelector('.header-name');
    const navLinks = Array.from(headerNav.querySelectorAll('a:not(.icon-link)'));
    const icons = headerNav.querySelector('.sidebar-icons, .home-icons, .header-icons');
    
    if (!headerName || navLinks.length === 0) {
      console.log('Missing header elements for wrapping check');
      return false;
    }
    
    // Get the header container width
    const headerRect = headerNav.getBoundingClientRect();
    const headerWidth = headerRect.width;
    
    // Calculate total width needed for all elements
    const headerNameRect = headerName.getBoundingClientRect();
    const navLinksWidth = navLinks.reduce((total, link) => {
      return total + link.getBoundingClientRect().width + 48; // 48px for gap
    }, 0);
    const iconsWidth = icons ? icons.getBoundingClientRect().width + 48 : 0;
    
    const totalNeededWidth = headerNameRect.width + navLinksWidth + iconsWidth + 120; // 120px buffer
    
    const isWrapping = totalNeededWidth > headerWidth;
    
    // Also check vertical positions as backup
    const elements = [headerName, ...navLinks];
    if (icons) elements.push(icons);
    
    let maxTop = 0;
    let minTop = Infinity;
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      maxTop = Math.max(maxTop, rect.top);
      minTop = Math.min(minTop, rect.top);
    });
    
    const verticalWrapping = (maxTop - minTop) > 15;
    
    const finalWrapping = isWrapping || verticalWrapping;
    
    console.log(`Wrapping check: width=${headerWidth}, needed=${totalNeededWidth}, wrapping=${finalWrapping}`);
    
    return finalWrapping;
  }
  
  // Function to update header state based on wrapping
  function updateHeaderState() {
    const isWrapping = checkHeaderWrapping();
    console.log(`Header wrapping: ${isWrapping}`);
    
    if (isWrapping) {
      headerNav.classList.add('wrapped');
      console.log('Added wrapped class');
    } else {
      headerNav.classList.remove('wrapped');
      console.log('Removed wrapped class');
      // Close menu if it's open and we're no longer wrapping
      if (isOpen) {
        closeMenu();
      }
    }
  }
  
  function populateMenu() {
    // Don't repopulate if menu already has content from HTML
    if (hasExistingMobileMenu && mobileMenu.children.length > 0) {
      console.log('Using existing menu content');
      return;
    }
    
    mobileMenu.innerHTML = '';
    
    // Clone navigation links
    const navLinks = headerNav.querySelectorAll('a:not(.icon-link)');
    navLinks.forEach(link => {
      const clone = link.cloneNode(true);
      clone.setAttribute('tabindex', '0');
      mobileMenu.appendChild(clone);
    });
    
    // Add social icons if present
    const iconContainer = headerNav.querySelector('.sidebar-icons, .home-icons, .header-icons');
    if (iconContainer) {
      const iconRow = document.createElement('div');
      iconRow.className = 'mobile-menu-icons';
      iconRow.style.display = 'flex';
      iconRow.style.gap = '1rem';
      iconRow.style.justifyContent = 'center';
      iconRow.style.marginTop = '1rem';
      iconRow.style.paddingTop = '1rem';
      iconRow.style.borderTop = '1px solid rgba(255,255,255,0.2)';
      
      iconContainer.querySelectorAll('.icon-link').forEach(icon => {
        const clone = icon.cloneNode(true);
        clone.setAttribute('tabindex', '0');
        iconRow.appendChild(clone);
      });
      
      mobileMenu.appendChild(iconRow);
    }
  }
  
  function openMenu() {
    console.log('Opening menu');
    isOpen = true;
    lastFocusedElement = document.activeElement;
    
    populateMenu();
    document.body.classList.add('nav-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    
    // Focus first menu item
    const firstFocusable = mobileMenu.querySelector('a, button, [tabindex="0"]');
    if (firstFocusable) firstFocusable.focus();
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
    console.log('Closing menu');
    isOpen = false;
    
    document.body.classList.remove('nav-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    
    // Restore focus
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    } else {
      toggleBtn.focus();
    }
    
    // Restore scrolling
    document.body.style.overflow = '';
  }
  
  // Event listeners
  toggleBtn.addEventListener('click', () => {
    console.log('Toggle button clicked');
    isOpen ? closeMenu() : openMenu();
  });
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
    }
  });
  
  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (isOpen && !headerNav.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });
  
  // Close when clicking menu links
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
  
  // Only set up automatic wrapping detection if we don't have existing mobile menu
  if (!hasExistingMobileMenu) {
    // Check wrapping on resize and load
    function handleResize() {
      console.log('Checking header wrapping...');
      // Use requestAnimationFrame to ensure layout is complete
      requestAnimationFrame(() => {
        updateHeaderState();
      });
    }
    
    // Debounce resize events for better performance
    let resizeTimeout;
    function debouncedResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 50);
    }
    
    window.addEventListener('resize', debouncedResize);
    window.addEventListener('load', handleResize);
    
    // Initial checks with multiple attempts to ensure DOM is ready
    setTimeout(() => {
      console.log('Initial wrapping check 1');
      handleResize();
    }, 100);
    
    setTimeout(() => {
      console.log('Initial wrapping check 2');
      handleResize();
    }, 500);
    
    setTimeout(() => {
      console.log('Initial wrapping check 3');
      handleResize();
    }, 1000);
    
    // Also check when fonts load (can affect layout)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        console.log('Fonts loaded, checking wrapping');
        setTimeout(handleResize, 100);
      });
    }
    
    // Force a check when images load (can affect layout)
    window.addEventListener('load', () => {
      console.log('Page fully loaded, checking wrapping');
      setTimeout(handleResize, 200);
    });
    
    // Manual trigger for testing
    window.testWrapping = () => {
      console.log('Manual wrapping test');
      updateHeaderState();
    };
  } else {
    console.log('Existing mobile menu detected, skipping automatic wrapping detection');
    // Ensure navigation links are visible by default when we have existing mobile menu
    headerNav.classList.remove('wrapped');
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Get DOM references
  publicationsList = document.getElementById('publications-list');
  interestButtonsDiv = document.getElementById('interest-buttons');
  
  if (!publicationsList) {
    console.error('Publications list element not found');
    return;
  }
  
  if (!interestButtonsDiv) {
    console.error('Interest buttons element not found');
    return;
  }
  
  // Extract all unique interests
  allInterests = new Set();
  publications.forEach(pub => {
    if (Array.isArray(pub.interest)) {
      pub.interest.forEach(i => allInterests.add(i));
    } else if (pub.interest) {
      pub.interest.split(',').map(i => i.trim()).forEach(i => {
        if (i) allInterests.add(i);
      });
    }
  });
  
  console.log(`Found ${publications.length} publications with ${allInterests.size} unique interests`);
  
  // Initialize UI
  try {
    renderInterestButtons();
    renderPublications();
    setupMobileMenu();
  } catch (error) {
    console.error('Error initializing publications UI:', error);
  }
  
  // Render news if container exists
  const newsContainer = document.querySelector('#home-news-list');
  if (newsContainer && newsData.length > 0) {
    renderNewsSection(newsData, '#home-news-list');
  }
});

// News rendering function
function renderNewsSection(newsData, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container || !newsData.length) return;
  
  const newsList = document.createElement('ul');
  newsList.className = 'news-list';
  newsList.style.marginBottom = '0';
  
  newsData.forEach(item => {
    const listItem = document.createElement('li');
    listItem.style.marginBottom = '0.5rem';
    
    const newsText = document.createElement('span');
    newsText.textContent = item.text;
    
    listItem.appendChild(newsText);
    newsList.appendChild(listItem);
  });
  
  container.innerHTML = '';
  container.appendChild(newsList);
  container.style.maxHeight = '12em';
  container.style.overflowY = 'auto';
}