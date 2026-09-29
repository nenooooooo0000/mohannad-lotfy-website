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
    contactText: 'For professional inquiries, advertising, films, or any creative collaboration.',
    ask: 'Ask about films',
    botWelcome: 'Hello! Ask me about films, services, experience or pricing.',
    sourceNote: 'Source: CV and website content. This is an informational assistant and not a replacement for direct contact.'
  }
};

const projects = [
  ['The Other Side of the Sun', '2019', 'Drama', 'An aspiring actor rebuilds his ambition after failure.'],
  ['Water', '2022', 'Drama', 'A musician faces rejection, loss and fractured memory.'],
  ['Adghath', '2024', 'Psychological Horror', 'Five interconnected short films exploring psychological horror.'],
  ['Come Across', '2024', 'Drama', 'Self-discovery intertwines with an unexpected love story.'],
  ['The Idea of the Film', '2025', 'Meta Comedy', 'A director searches for an idea and finds the film in that search.'],
  ['Lady of the Moonlit Night', '2025', 'Psychological Drama', 'Longing for connection leads a lonely man into hallucination.']
];

const workGrid = document.getElementById('workGrid');
workGrid.innerHTML = projects.map(p => `
  <article class="work-card">
    <div class="work-info">
      <small>${p[1]}</small>
      <h3>${p[0]}</h3>
      <p>${p[2]}</p>
    </div>
  </article>
`).join('');

let activeLang = localStorage.getItem('mohaned-lang') || 'ar';
const safeSearchTerms = ['adult', 'porn', 'xxx', 'sexual', 'explicit', 'nsfw'];

const languageGate = document.getElementById('languageGate');
const langToggle = document.getElementById('langToggle');

function setLanguage(lang) {
  activeLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (copy[lang][key]) {
      el.innerHTML = copy[lang][key];
    }
  });
  langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
  localStorage.setItem('mohaned-lang', lang);
  languageGate.classList.add('hidden');
}

document.querySelectorAll('[data-language]').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.language));
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
    searchResults.innerHTML = '<p>اكتب كلمة للبحث داخل الموقع.</p>';
    return;
  }

  const hasUnsafeWord = safeSearchTerms.some(word => query.includes(word));
  if (hasUnsafeWord) {
    searchResults.innerHTML = '<p>البحث الآمن يحظر المواقع أو الكلمات غير المسموح بها.</p>';
    return;
  }

  const filtered = projects.filter(item => item.join(' ').toLowerCase().includes(query));

  searchResults.innerHTML = filtered.length
    ? filtered.map(item => `
      <div class="search-result">
        <strong>${item[0]}</strong>
        <small>${item[1]} · ${item[2]}</small>
      </div>
    `).join('')
    : '<p>لا توجد نتائج.</p>';
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
  if (q.includes('فيلم') || q.includes('movie') || q.includes('film')) {
    return 'أشهر أعمال المهندس: The Other Side of the Sun، Water، Adghath، Come Across، The Idea of the Film، وLady of the Moonlit Night.';
  }
  if (q.includes('سعر') || q.includes('price') || q.includes('pricing')) {
    return 'الأسعار تبدأ عادةً من $250 للمشروعات الأساسية، و$650 للباقات المتكاملة، مع تقدير شخصي للمشاريع الكبيرة.';
  }
  if (q.includes('خدمة') || q.includes('service') || q.includes('عمل') || q.includes('work')) {
    return 'الخدمات تشمل الإخراج، التصوير، المونتاج، التلوين، الإنتاج الإبداعي، وأدوات AI في الإنتاج.';
  }
  if (q.includes('خبرة') || q.includes('experience') || q.includes('about')) {
    return 'مهند لطفي يعمل في الإخراج، التصوير السينمائي، المونتاج، والإنتاج الإبداعي، ويجمع رؤية سينمائية مع خبرة إنتاجية عملية.';
  }
  if (q.includes('تواصل') || q.includes('contact') || q.includes('طلب')) {
    return 'يمكنك التواصل عبر البريد الإلكتروني أو الواتساب أو نموذج التواصل في الموقع، مع إعداد عرض سعر ومناقشة المشروع.';
  }
  return 'أستطيع الإجابة عن الأفلام، الخدمات، الخبرة، والأسعار. يمكنك أيضًا سؤال: ما هي أشهر أعمالك؟ أو ما هي أسعارك؟';
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

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
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
  panels.forEach(panel => panel.classList.remove('open'));
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.target;
    hidePanels();
    if (target === 'chat') {
      chatBox.classList.add('open');
    }
    if (target === 'search') {
      searchModal.classList.add('open');
    }
    if (target === 'role') {
      document.getElementById('panelRole').classList.add('open');
    }
    if (target === 'settings') {
      document.getElementById('panelSettings').classList.add('open');
    }
    if (target === 'login') {
      document.getElementById('panelLogin').classList.add('open');
    }
  });
});

document.querySelectorAll('.role-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Selected role: ' + btn.textContent.trim());
  });
});

document.querySelector('.login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login form activated (demo mode). Connect Firebase later.');
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
    body: 'All creative content, portfolio work, and materials displayed on this site remain the property of Mohaned Lotfy unless otherwise stated. Unauthorized use is prohibited.'
  }
};

document.querySelectorAll('[data-policy]').forEach(el => {
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
