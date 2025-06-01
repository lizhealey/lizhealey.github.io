// This can be used later for interactivity
console.log("Website loaded!");

const publications = [
 
  {
    title: "Medical artificial intelligence and human values",
    authors: "Kun-Hsing Yu, Elizabeth Healey,  Tze-Yun Leong, and Kohane, Isaac S and Manrai, Arjun K",
    journal: "New England Journal of Medicine",
    publisher: "Massachusetts Medical Society",
    volume: "390",
    number: "20",
    pages: "1895--1904",
    month: "May",
    year: "2024",
    category: "Highlighted",
    interest: "AI in Medicine, Large Language Models",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMra2214183"
  },

  {
    title: "A case study on using a large language model to analyze continuous glucose monitoring data",
    authors: "Elizabeth Healey, Amelia L M Tan, Kristen Flint, and Ruiz, Jessica and Kohane, Isaac S",
    journal: "Scientific Reports",
    publisher: "Nature Publishing Group UK",
    volume: "15",
    number: "1",
    pages: "1143",
    month: "Jan",
    year: "2025",
    category: "Research Interests",
    interest: "Diabetes Technology, Large Language Models",
    link: "https://www.nature.com/articles/s41598-024-84003-0"
  },
  {
    title: "Use of machine learning to assess the management of uncomplicated urinary tract infection",
    authors: "Noah Jones,  Ming-Chieh Shih,  Elizabeth Healey,  and Zhai, Chen Wen and Advani, Sonali and Smith-McLallen, Aaron and Sontag, David and Kanjilal, Sanjat",
    journal: "JAMA Network Open",
    publisher: "American Medical Association",
    volume: "8",
    number: "1",
    pages: "e2456950--e2456950",
    month: "Jan",
    year: "2025",
    category: "Research Interests",
    interest: "Causal Machine Learning",
    link: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2829781"
  },
   {
    title: "LLM-CGM: A benchmark for large language model-enabled querying of continuous glucose monitoring data for conversational diabetes management",
    authors: "Elizabeth Healey and Isaac Kohane",
    journal: "Pacific Symposium on Biocomputing",
    volume: "30",
    pages: "82--93",
    year: "2025",
    category: "Highlighted",
    interest: "Diabetes Technology, Large Language Models",
    link: "https://www.worldscientific.com/doi/abs/10.1142/9789819807024_0007"
  },
  {
    title: "Identifying heterogeneous treatment effects in multiple outcomes using joint confidence intervals",
    authors: "Peniel N Argaw*,  Elizabeth Healey*,  Isaac Kohane",
    journal: "Machine Learning for Health Symposium",
    month: "Dec",
    year: "2022",
    category: "Research Interests",
    interest: "Causal Machine Learning",
    link: "https://arxiv.org/abs/2212.08664"
  },
  {
    title: "Embedded model predictive control for a wearable artificial pancreas",
    authors: "Ankush Chakrabarty,  Elizabeth Healey,  Dawei Shi,  and Zavitsanou, Stamatina and Doyle, 3rd, Francis J and Dassau, Eyal",
    journal: "IEEE Transactions Control Systems Technology",
    publisher: "Institute of Electrical and Electronics Engineers (IEEE)",
    volume: "28",
    number: "6",
    pages: "2600--2607",
    month: "Nov",
    year: "2020",
    category: "Research Interests",
    interest: "Diabetes Technology",
    link: "https://ieeexplore.ieee.org/abstract/document/8844266"
  },
  
  {
    title: "Recent Advances, Applications and Open Challenges in Machine Learning for Health: Reflections from Research Roundtables at ML4H 2024 Symposium",
    authors: "Amin Adibi,  Xu Cao,  Zongliang Ji,  and Kaur, Jivat Neet and Chen, Winston and Healey, Elizabeth and Nuwagira, Brighton and Ye, Wenqian and Woollard, Geoffrey and Xu, Maxwell A and Cui, Hejie and Xi, Johnny and Chang, Trenton and Bikia, Vasiliki and Zhang, Nicole",
    category: "Research Interests",
    journal: "arXiv",
    interest: "AI in Medicine",
    link: "https://arxiv.org/abs/2502.06693"
  },
    {
    title: "Recent Advances, Applications and Open Challenges in Machine Learning for Health: Reflections from Research Roundtables at ML4H 2022 Symposium",
    authors: "Stefan Hegselmann,  Helen Zhou, Yuyin Zhou, and Chien, Jennifer and Nagaraj, Sujay and Hulkund, Neha and Bhave, Shreyas and Oberst, Michael and Pai, Amruta and Ellington, Caleb and Ikezogwo, Wisdom and Dou, Jason Xiaotian and Agrawal, Monica and Li, Changye and Argaw, Peniel and Biswas, Arpita and Gupta, Mehak and Li, Xinhui and Lemanczyk, Marta and Zhang, Yuhui and Garbin, Christian and Healey, Elizabeth and Kim, Heejong and Boone, Claire and Daneshjou, Roxana and Shi, Siyu and Pezzotti, Nicola and Pfohl, Stephen R and Fong, Edwin and Naik, Aakanksha and Lengerich, Ben and Xu, Ying and Bidwell, Jonathan and Sendak, Mark and Kim, Byung-Hak and Hendrix, Nathaniel and Spathis, Dimitris and Seita, Jun and Quast, Bastiaan and Coffee, Megan and Stultz, Collin and Chen, Irene Y and Joshi, Shalmali and Tadesse, Girmaw Abebe",
    year: "2023",
    journal: "arXiv",
    category: "Research Interests",
    interest: "AI in Medicine",
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const publicationsList = document.getElementById('publications-list');
  const interestButtonsDiv = document.getElementById('interest-buttons');

  // Get all unique interests (handle comma-separated and array cases)
  const allInterests = new Set();
  publications.forEach(pub => {
    if (Array.isArray(pub.interest)) {
      pub.interest.forEach(i => allInterests.add(i));
    } else {
      pub.interest.split(',').map(i => i.trim()).forEach(i => allInterests.add(i));
    }
  });

  // Render interest buttons
  interestButtonsDiv.innerHTML = '';
  let activeInterest = null;

  // Create a container for all buttons (including Show All)
  const allButtonsContainer = document.createElement('div');
  allButtonsContainer.style.display = 'flex';
  allButtonsContainer.style.flexWrap = 'wrap';
  allButtonsContainer.style.justifyContent = 'center';
  allButtonsContainer.style.gap = '0.5rem';

  // Show All button (rectangular, not round)
  const showAllBtn = document.createElement('button');
  showAllBtn.textContent = 'All';
  showAllBtn.className = 'interest-button';
  showAllBtn.style.margin = '0';
  showAllBtn.style.padding = '0.5rem 1.2rem';
  showAllBtn.style.border = '1.5px solid #bbb';
  showAllBtn.style.background = '#f3f3f3';
  showAllBtn.style.color = '#333';
  showAllBtn.style.fontWeight = 'bold';
  showAllBtn.style.fontSize = '1rem';
  showAllBtn.style.borderRadius = '0px'; // rectangular
  showAllBtn.style.cursor = 'pointer';
  showAllBtn.style.boxShadow = 'none';
  showAllBtn.classList.add('active');
  showAllBtn.addEventListener('mouseenter', () => {
    if (!showAllBtn.classList.contains('active')) {
      showAllBtn.style.background = '#e0e0e0';
    }
  });
  showAllBtn.addEventListener('mouseleave', () => {
    if (showAllBtn.classList.contains('active')) {
      showAllBtn.style.background = '#bbb';
      showAllBtn.style.color = '#fff';
    } else {
      showAllBtn.style.background = '#f3f3f3';
      showAllBtn.style.color = '#333';
    }
  });
  showAllBtn.addEventListener('click', () => {
    activeInterest = null;
    renderPublications();
    document.querySelectorAll('.interest-button').forEach(b => {
      b.classList.remove('active');
      if (b !== showAllBtn) {
        b.style.background = '#f3f3f3';
        b.style.color = '#333';
      }
    });
    showAllBtn.classList.add('active');
    showAllBtn.style.background = '#bbb';
    showAllBtn.style.color = '#fff';
  });
  allButtonsContainer.appendChild(showAllBtn);

  // Store references to all interest buttons for highlight logic
  const interestBtnMap = new Map();

  allInterests.forEach(interest => {
    const btn = document.createElement('button');
    btn.textContent = interest;
    btn.className = 'interest-button';
    btn.style.padding = '0.5rem .5rem';
    btn.style.border = '.5px solid #bbb';
    btn.style.background = '#f3f3f3';
    btn.style.color = '#333';
    btn.style.fontWeight = '500';
    btn.style.fontSize = '1rem';
    btn.style.borderRadius = '0px'; // rectangular
    btn.style.cursor = 'pointer';
    btn.style.transition = 'all 0.18s';
    btn.addEventListener('mouseenter', () => {
      if (!btn.classList.contains('active')) {
        btn.style.background = '#e0e0e0';
        btn.style.color = '#111';
        btn.style.borderColor = '#bbb';
      }
    });
    btn.addEventListener('mouseleave', () => {
      if (btn.classList.contains('active')) {
        btn.style.background = '#bbb';
        btn.style.color = '#fff';
      } else {
        btn.style.background = '#f3f3f3';
        btn.style.color = '#333';
      }
      btn.style.borderColor = '#bbb';
    });
    btn.addEventListener('click', () => {
      document.querySelectorAll('.interest-button').forEach(b => {
        b.classList.remove('active');
        if (b !== showAllBtn) {
          b.style.background = '#f3f3f3';
          b.style.color = '#333';
        }
      });
      showAllBtn.style.background = '#f3f3f3';
      showAllBtn.style.color = '#333';
      if (activeInterest === interest) {
        activeInterest = null;
        renderPublications();
        showAllBtn.classList.add('active');
        showAllBtn.style.background = '#bbb';
        showAllBtn.style.color = '#fff';
      } else {
        activeInterest = interest;
        renderPublications(interest);
        btn.classList.add('active');
        btn.style.background = '#bbb';
        btn.style.color = '#fff';
        showAllBtn.classList.remove('active');
      }
    });
    allButtonsContainer.appendChild(btn);
    interestBtnMap.set(interest, btn);
  });

  // Place all buttons (including Show All) in the interestButtonsDiv
  interestButtonsDiv.appendChild(allButtonsContainer);

  // Render all publications by default
  function renderPublications(filterInterest) {
    publicationsList.innerHTML = '';
    publications.forEach(pub => {
      const pubInterests = Array.isArray(pub.interest) ? pub.interest : pub.interest.split(',').map(i => i.trim());
      if (!filterInterest || pubInterests.includes(filterInterest)) {
        const article = document.createElement('article');
        article.className = 'publication-item';
        // Make the publication box smaller and shorter
        article.style.padding = '0.6em 1em';
        article.style.margin = '0.5em auto';
        article.style.maxWidth = '540px';
        article.style.border = '1px solid #e0e0e0';
        article.style.borderRadius = '12px';
        article.style.background = '#fff';
        article.style.boxShadow = '0 1px 4px rgba(0,0,0,0.03)';
        article.style.fontSize = '0.97em';
        article.style.lineHeight = '1.25';
        article.style.display = 'flex';
        article.style.flexDirection = 'column';
        article.style.gap = '0.25em';
        // Publication title: dark color, linked if pub.link exists
        let titleElem;
        if (pub.link) {
          titleElem = document.createElement('a');
          titleElem.href = pub.link;
          titleElem.target = '_blank';
          titleElem.textContent = pub.title;
          titleElem.style.color = '#1a1a1a';
          titleElem.style.textDecoration = 'none';
          titleElem.style.fontWeight = 'bold';
          titleElem.style.fontSize = '1.05em'; // slightly smaller
          titleElem.addEventListener('mouseenter', () => titleElem.style.textDecoration = 'underline');
          titleElem.addEventListener('mouseleave', () => titleElem.style.textDecoration = 'none');
        } else {
          titleElem = document.createElement('span');
          titleElem.textContent = pub.title;
          titleElem.style.color = '#1a1a1a';
          titleElem.style.fontWeight = 'bold';
          titleElem.style.fontSize = '1.05em';
        }
        const titleWrapper = document.createElement('h3');
        titleWrapper.style.margin = '0 0 0.15em 0';
        titleWrapper.style.fontSize = '1em';
        titleWrapper.appendChild(titleElem);
        article.appendChild(titleWrapper);
        // Show only the first 3 authors, add 'et al.' if more, no label
        const authors = document.createElement('p');
        let authorList = pub.authors.split(/,\s*|\sand\s/).map(s => s.trim()).filter(Boolean);
        let shortAuthors = authorList.slice(0, 3);
        if (authorList.length > 3) shortAuthors.push('et al.');
        authors.innerHTML = `${shortAuthors.join(', ')}`;
        authors.style.margin = '0 0 0.1em 0';
        authors.style.fontSize = '0.97em';
        article.appendChild(authors);
        // Show journal and year, no label
        const journal = document.createElement('p');
        journal.innerHTML = `${pub.journal || 'N/A'}${pub.year ? ' | ' + pub.year : ''}`;
        journal.style.margin = '0 0 0.1em 0';
        journal.style.fontSize = '0.93em';
        journal.style.color = '#555';
        article.appendChild(journal);
        // Add interest tags
        /*
        const tagsDiv = document.createElement('div');
        tagsDiv.style.marginTop = '0.2em';
        (Array.isArray(pub.interest) ? pub.interest : pub.interest.split(',').map(i => i.trim())).forEach(tag => {
          const tagSpan = document.createElement('span');
          tagSpan.textContent = tag;
          tagSpan.style.display = 'inline-block';
          tagSpan.style.background = '#e0e7ef';
          tagSpan.style.color = '#333';
          tagSpan.style.fontSize = '0.82em';
          tagSpan.style.padding = '1px 7px';
          tagSpan.style.margin = '0 4px 0 0';
          tagSpan.style.borderRadius = '10px';
          tagSpan.style.border = '1px solid #b0b8c9';
          tagsDiv.appendChild(tagSpan);
        });
        article.appendChild(tagsDiv);
        */
        publicationsList.appendChild(article);
      }
    });
  }

  renderPublications();
});
