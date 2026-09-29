const projects = [
  ['The Other Side of the Sun', '2019', 'Drama', 'An aspiring actor rebuilds his ambition after failure.'],
  ['Water', '2022', 'Drama', 'A musician faces rejection, loss and fractured memory.'],
  ['Adghath', '2024', 'Psychological Horror', 'Five interconnected short films exploring psychological horror.'],
  ['Come Across', '2024', 'Drama', 'Self-discovery intertwines with an unexpected love story.'],
  ['The Idea of the Film', '2025', 'Meta Comedy', 'A director searches for an idea and finds the film in that search.'],
  ['Lady of the Moonlit Night', '2025', 'Psychological Drama', 'Longing for connection leads a lonely man into hallucination.']
];

const workGrid = document.getElementById('workGrid');
workGrid.innerHTML = projects.map((project) => `
  <article class="work-card">
    <div class="work-info">
      <small>${project[1]}</small>
      <h3>${project[0]}</h3>
      <p>${project[2]}</p>
    </div>
  </article>
`).join('');

const copy = {
  ar: {
    eyebrow: 'صانع أفلام من الإسكندرية',
    tagline: 'حكايات تُصنع من الضوء، والإحساس، والحقيقة البصرية.',
    explore: 'استكشف الأعمال',
    start: 'ابدأ مشروعًا',
    selected: 'مختارات',
    workTitle: 'أعمال تحكي أكثر<br><em>مما تقول.</em>',
    workIntro: 'أفلام سردية، إعلانات، وحملات إبداعية — من الفكرة إلى الشاشة.',
    aboutLabel: 'عن المخرج',
    aboutTitle: 'الصورة تحكي<br><em>ما لا يقوله الكلام.</em>',
    aboutText: 'مهند لطفي صانع أفلام مصري يعمل في الإخراج، والتصوير السينمائي، والمونتاج، والإنتاج الإبداعي. يمتلك خبرة متراكمة في الإعلانات، المحتوى التجاري، الأفلام القصيرة، والمشروعات السردية.',
    aboutText2: 'يجمع أسلوبه بين السرد البصري والتكوين الدقيق والاهتمام بالتفاصيل الإنسانية، مع استكشاف أدوات الذكاء الاصطناعي لتوسيع إمكانيات صناعة الصورة.',
    servicesLabel: 'الخدمات',
    servicesTitle: 'من الفكرة<br>إلى التنفيذ.',
    servicesIntro: 'فريق إبداعي يقود مشروعك بصريًا وإنتاجيًا حتى التسليم النهائي.',
    s1: 'إخراج وتصوير',
    s1d: 'إعلانات، أفلام قصيرة، ومحتوى بصري بهوية سينمائية.',
    s2: 'مونتاج وتلوين',
    s2d: 'إيقاع، سرد، وتصحيح ألوان يرفع قيمة كل لقطة.',
    s3: 'إنتاج إبداعي',
    s3d: 'إدارة الفريق والميزانية والجدول من الفكرة إلى التسليم.',
    s4: 'AI Video Workflows',
    s4d: 'استخدام Runway وTopaz AI كأدوات مساعدة في الإنتاج.',
    pricingLabel: 'الأسعار',
    pricingTitle: 'اختر مستوى<br><em>المشروع.</em>',
    pricingIntro: 'الأسعار استرشادية وتتغير حسب الفكرة، عدد أيام التصوير، وحجم الفريق.',
    teamLabel: 'الفريق',
    teamTitle: 'قيادة واضحة.<br><em>رؤية مشتركة.</em>',
    teamIntro: 'مهند يقود المشروع كـ Team Leader، مع جمع المواهب المناسبة لكل قصة.',
    teamBio: 'Director · Creative Director · Cinematographer · Editor · Producer',
    contactLabel: 'لنتحدث',
    contactTitle: 'لنصنع شيئًا<br><em>لا يُنسى.</em>',
    contactText: 'للاستفسارات المهنية، الإعلانات، الأفلام، أو أي تعاون إبداعي.',
    ask: 'اسأل عن الأفلام',
    botWelcome: 'أهلًا! اسألني عن الأفلام، الخدمات، الخبرة أو الأسعار.',
    sourceNote: 'المصدر: السيرة الذاتية ومحتوى الموقع. هذا مساعد معلوماتي وليس بديلاً عن التواصل المباشر.'
  },
  en: {
    eyebrow: 'Filmmaker from Alexandria',
    tagline: 'Stories shaped by light, emotion, and visual truth.',
    explore: 'Explore the work',
    start: 'Start a project',
    selected: 'Selected',
    workTitle: 'Stories that say<br><em>more than words.</em>',
    workIntro: 'Narrative films, commercials and creative campaigns — from idea to screen.',
    aboutLabel: 'The director',
    aboutTitle: 'The image says<br><em>what words cannot.</em>',
    aboutText: 'Mohaned Lotfy is an Egyptian filmmaker working across directing, cinematography, editing and creative production with a strong track record across commercials and cinematic storytelling.',
    aboutText2: 'His approach blends visual storytelling, precise composition, and human detail while exploring AI tools to expand visual possibilities.',
    servicesLabel: 'Services',
    servicesTitle: 'From the idea<br>to execution.',
    servicesIntro: 'Creative and production leadership through every stage of the project.',
    s1: 'Direction & cinematography',
    s1d: 'Commercials, short films and cinematic visual content.',
    s2: 'Editing & grading',
    s2d: 'Rhythm, story and color that elevate every frame.',
    s3: 'Creative production',
    s3d: 'Team, budget and schedule management from idea to delivery.',
    s4: 'AI Video Workflows',
    s4d: 'Runway and Topaz AI as assisting tools in production.',
    pricingLabel: 'Pricing',
    pricingTitle: 'Choose the right<br><em>scale.</em>',
    pricingIntro: 'Indicative pricing changes with concept, shoot days and team size.',
    teamLabel: 'The team',
    teamTitle: 'Clear leadership.<br><em>Shared vision.</em>',
    teamIntro: 'Mohaned leads each project as Team Leader, building the right team for every story.',
    teamBio: 'Director · Creative Director · Cinematographer · Editor · Producer',
    contactLabel: 'Let’s talk',
    contactTitle: 'Let’s create something<br><em>unforgettable.</em>',
    contactText: 'For professional inquiries, commercials, films, or creative collaborations.',
    ask: 'Ask about films',
    botWelcome: 'Hello! Ask me about films, services, experience or pricing.',
    sourceNote: 'Source: CV and website content. This is an informational assistant and not a replacement for direct contact.'
  }
};

let activeLang = localStorage.getItem('mohaned-lang') || 'ar';

const languageGate = document.getElementById('languageGate');
const langToggle = document.getElementById('langToggle');

type LanguageKey = keyof typeof copy.ar;

function setLanguage(lang) {
  activeLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-t]').forEach((el) => {
    const key = el.dataset.t;
    if (copy[lang][key]) {
      el.innerHTML = copy[lang][key];
    }
  });
  langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
  localStorage.setItem('mohaned-lang', lang);
  languageGate.classList.add('hidden');
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

langToggle.addEventListener('click', () => {
  setLanguage(activeLang === 'ar' ? 'en' : 'ar');
});

setLanguage(activeLang);

const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

document.getElementById('searchOpen').addEventListener('click', () => {
  searchModal.classList.add('open');
  searchInput.focus();
});

document.getElementById('searchClose').addEventListener('click', () => {
  searchModal.classList.remove('open');
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchResults.innerHTML = '<p>Type a keyword to search the portfolio.</p>';
    return;
  }

  const filtered = projects.filter((project) => project.join(' ').toLowerCase().includes(query));
  searchResults.innerHTML = filtered.length
    ? filtered.map((item) => `
      <div class="search-result">
        <strong>${item[0]}</strong>
        <small>${item[1]} · ${item[2]}</small>
      </div>
    `).join('')
    : '<p>No results found.</p>';
});

const chatBox = document.getElementById('chatBox');
const messages = document.getElementById('messages');
const chatInput = document.getElementById('chatInput');

function addMessage(text, isUser = false) {
  const div = document.createElement('div');
  div.className = isUser ? 'user-msg' : 'bot-msg';
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function getAiReply(question) {
  const q = question.toLowerCase();
  if (q.includes('film') || q.includes('movie') || q.includes('فيلم')) {
    return 'Selected works include The Other Side of the Sun, Water, Adghath, Come Across, The Idea of the Film, and Lady of the Moonlit Night.';
  }
  if (q.includes('price') || q.includes('pricing') || q.includes('سعر')) {
    return 'Project prices typically start at $250 for smaller work and $650 for signature production packages, depending on scope.';
  }
  if (q.includes('service') || q.includes('خدمة') || q.includes('work')) {
    return 'Services include direction, cinematography, editing, colour grading, creative production, and AI-assisted production workflows.';
  }
  if (q.includes('experience') || q.includes('خبرة') || q.includes('about')) {
    return 'Mohaned Lotfy works across directing, cinematography, editing, and creative production, creating cinematic work grounded in human detail and visual clarity.';
  }
  return 'I can answer questions about films, services, pricing, and experience. You can also ask: which projects are your most important?';
}

document.getElementById('chatToggle').addEventListener('click', () => {
  chatBox.classList.toggle('open');
});

document.getElementById('chatClose').addEventListener('click', () => {
  chatBox.classList.remove('open');
});

document.getElementById('sendChat').addEventListener('click', () => {
  const value = chatInput.value.trim();
  if (!value) return;
  addMessage(value, true);
  addMessage(getAiReply(value), false);
  chatInput.value = '';
});

chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('sendChat').click();
  }
});

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.bottom-panel');

function hidePanels() {
  panels.forEach((panel) => panel.classList.remove('open'));
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.target;
    hidePanels();
    if (target === 'chat') chatBox.classList.add('open');
    if (target === 'search') searchModal.classList.add('open');
    if (target === 'role') document.getElementById('panelRole').classList.add('open');
    if (target === 'settings') document.getElementById('panelSettings').classList.add('open');
    if (target === 'login') document.getElementById('panelLogin').classList.add('open');
  });
});

document.querySelectorAll('.role-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    alert('Selected role: ' + btn.textContent.trim());
  });
});

document.querySelector('.login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Login form is ready for Firebase integration.');
});

const policyModal = document.getElementById('policyModal');
const policyContent = document.getElementById('policyContent');
const policyMap = {
  privacy: {
    title: 'Privacy Policy',
    body: 'This website may collect contact details, project requests, and communication data for business use. Information is kept for service delivery, analytics, and security purposes only.'
  },
  terms: {
    title: 'Terms & Conditions',
    body: 'By using this website, the user agrees to receive professional communication, project-related contact, and relevant service information from the owner.'
  },
  copyright: {
    title: 'Copyright Policy',
    body: 'All creative content displayed on this site remains the property of Mohaned Lotfy unless otherwise stated. Unauthorized use is prohibited.'
  }
};

document.querySelectorAll('[data-policy]').forEach((el) => {
  el.addEventListener('click', () => {
    const key = el.dataset.policy;
    const item = policyMap[key];
    policyContent.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    policyModal.classList.add('open');
  });
});

document.getElementById('policyClose').addEventListener('click', () => {
  policyModal.classList.remove('open');
});

setLanguage(activeLang);
