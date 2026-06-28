export const tracks = [
  {
    id: 'frontend',
    icon: '🎨',
    title: 'Frontend Developer',
    subtitle: 'واجهات المستخدم وتجربة التصفح',
    level: 'مبتدئ → متقدم',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind'],
    goal: 'بناء واجهات جميلة وسريعة ومتجاوبة مع كل الشاشات.',
    project: 'Portfolio + Dashboard + متجر صغير'
  },
  {
    id: 'backend',
    icon: '🧠',
    title: 'Backend Developer',
    subtitle: 'السيرفرات، APIs، قواعد البيانات، الحماية',
    level: 'مبتدئ → محترف',
    skills: ['Node.js', 'Express', 'NestJS', 'Django', 'FastAPI', 'Laravel', 'JWT'],
    goal: 'بناء منطق التطبيق، تسجيل الدخول، APIs، وربط قواعد البيانات.',
    project: 'REST API + نظام Login + لوحة تحكم'
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile Developer',
    subtitle: 'تطبيقات Android و iOS',
    level: 'مبتدئ → متقدم',
    skills: ['Flutter', 'Dart', 'React Native', 'Kotlin', 'Swift', 'Firebase'],
    goal: 'بناء تطبيقات موبايل حقيقية مع إشعارات وتسجيل دخول و APIs.',
    project: 'تطبيق حجوزات + Chat + Notifications'
  },
  {
    id: 'fullstack',
    icon: '🚀',
    title: 'Full Stack Developer',
    subtitle: 'واجهة + سيرفر + Database + Deployment',
    level: 'متوسط → محترف',
    skills: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Vercel', 'Render'],
    goal: 'بناء منتج كامل من الصفر إلى النشر أونلاين.',
    project: 'SaaS Platform + Payments + Admin Panel'
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI / Machine Learning',
    subtitle: 'الذكاء الاصطناعي وتحليل النماذج',
    level: 'متوسط → متقدم',
    skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'LLM APIs'],
    goal: 'بناء أنظمة ذكية، تصنيف بيانات، Chatbots، وربط AI بالتطبيقات.',
    project: 'AI Chatbot + Image Classifier + Recommendation System'
  },
  {
    id: 'cybersecurity',
    icon: '🛡️',
    title: 'Cybersecurity',
    subtitle: 'حماية الأنظمة واختبار الأمان',
    level: 'متوسط → محترف',
    skills: ['Linux', 'Networking', 'OWASP', 'Burp Suite', 'Nmap', 'Wireshark', 'Encryption'],
    goal: 'فهم الثغرات وحماية التطبيقات والسيرفرات والبيانات.',
    project: 'Security Audit + OWASP Lab + Network Scan'
  },
  {
    id: 'devops',
    icon: '☁️',
    title: 'DevOps / Cloud',
    subtitle: 'النشر، السيرفرات، CI/CD، Cloud',
    level: 'متوسط → محترف',
    skills: ['Linux', 'Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'Nginx', 'Terraform'],
    goal: 'تشغيل التطبيقات بثبات، مراقبتها، وتحديثها تلقائيًا.',
    project: 'Dockerized App + CI/CD + Cloud Deployment'
  },
  {
    id: 'data',
    icon: '📊',
    title: 'Data Analyst / Engineer',
    subtitle: 'SQL، Dashboards، Big Data، Pipelines',
    level: 'مبتدئ → متقدم',
    skills: ['SQL', 'Python', 'Power BI', 'Tableau', 'Airflow', 'BigQuery', 'ETL'],
    goal: 'تحويل البيانات الخام إلى قرارات واضحة وتقارير عملية.',
    project: 'Sales Dashboard + Data Pipeline + Reports'
  }
];

export const categories = ['الكل', 'Database', 'Auth', 'Payment', 'Storage', 'Messaging', 'Deployment', 'AI', 'Testing', 'Design', 'DevOps'];

export const tools = [
  {
    name: 'PostgreSQL',
    category: 'Database',
    use: 'قاعدة بيانات relational قوية للأنظمة التي فيها علاقات وعمليات دقيقة.',
    when: 'متاجر، حجوزات، فواتير، Payments، أنظمة شركات.',
    alternatives: ['MySQL', 'MariaDB', 'Supabase']
  },
  {
    name: 'MongoDB',
    category: 'Database',
    use: 'NoSQL document database مناسبة للبيانات المرنة والسريعة التغيير.',
    when: 'Chat، Logs، Profiles مرنة، Content متغير.',
    alternatives: ['DynamoDB', 'Firestore', 'CouchDB']
  },
  {
    name: 'Redis',
    category: 'Database',
    use: 'Cache سريع جدًا للـ sessions والبيانات المؤقتة.',
    when: 'تسريع التطبيق، تخزين OTP مؤقت، rate limiting.',
    alternatives: ['Memcached', 'Dragonfly']
  },
  {
    name: 'Firebase Auth',
    category: 'Auth',
    use: 'تسجيل دخول جاهز للموبايل والويب مع Google و OTP.',
    when: 'تطبيق سريع يحتاج login بدون بناء نظام كامل.',
    alternatives: ['Supabase Auth', 'Clerk', 'Auth0']
  },
  {
    name: 'JWT',
    category: 'Auth',
    use: 'Token يستخدمه السيرفر للتأكد من هوية المستخدم.',
    when: 'REST APIs، mobile apps، dashboard authentication.',
    alternatives: ['Session Cookies', 'OAuth']
  },
  {
    name: 'Twilio',
    category: 'Messaging',
    use: 'إرسال SMS، WhatsApp، OTP، Voice calls.',
    when: 'تأكيد رقم هاتف، رسائل تنبيه، كود تحقق.',
    alternatives: ['Vonage', 'MessageBird', 'AWS SNS']
  },
  {
    name: 'SendGrid',
    category: 'Messaging',
    use: 'إرسال emails من التطبيق للمستخدمين.',
    when: 'رسائل تفعيل حساب، reset password، newsletters.',
    alternatives: ['Mailgun', 'Resend', 'Amazon SES']
  },
  {
    name: 'Stripe',
    category: 'Payment',
    use: 'بوابة دفع online للبطاقات والاشتراكات.',
    when: 'متجر إلكتروني، SaaS subscriptions، دفع داخل الموقع.',
    alternatives: ['PayPal', 'Paddle', 'Tap Payments']
  },
  {
    name: 'Cloudinary',
    category: 'Storage',
    use: 'رفع صور وفيديو مع ضغط وتحسين تلقائي.',
    when: 'صور بروفايل، منتجات، معرض أعمال، فيديوهات قصيرة.',
    alternatives: ['AWS S3', 'Firebase Storage', 'Supabase Storage']
  },
  {
    name: 'Vercel',
    category: 'Deployment',
    use: 'نشر سريع للـ frontend و Next.js.',
    when: 'Portfolio، landing page، React/Next apps.',
    alternatives: ['Netlify', 'Cloudflare Pages']
  },
  {
    name: 'Render',
    category: 'Deployment',
    use: 'نشر backend و databases بسهولة.',
    when: 'Node.js server، APIs، مشاريع تخرج وتجارب.',
    alternatives: ['Railway', 'Fly.io', 'DigitalOcean']
  },
  {
    name: 'Docker',
    category: 'DevOps',
    use: 'تشغيل التطبيق داخل container بنفس البيئة في كل مكان.',
    when: 'تسهيل deployment وتشغيل dependencies بطريقة ثابتة.',
    alternatives: ['Podman', 'LXC']
  },
  {
    name: 'GitHub Actions',
    category: 'DevOps',
    use: 'تشغيل tests و build و deployment تلقائيًا عند push.',
    when: 'CI/CD، مشاريع team، تحديثات production.',
    alternatives: ['GitLab CI', 'CircleCI']
  },
  {
    name: 'Postman',
    category: 'Testing',
    use: 'تجربة APIs قبل ربطها بالواجهة.',
    when: 'اختبار login، endpoints، headers، body، tokens.',
    alternatives: ['Insomnia', 'Thunder Client', 'Swagger']
  },
  {
    name: 'Figma',
    category: 'Design',
    use: 'تصميم UI/UX قبل البرمجة.',
    when: 'Wireframes، prototype، design system.',
    alternatives: ['Penpot', 'Framer', 'Adobe XD']
  },
  {
    name: 'OpenAI API',
    category: 'AI',
    use: 'إضافة chatbots، تلخيص، تحليل نصوص، ومساعد ذكي داخل التطبيق.',
    when: 'تطبيقات تعليم، دعم عملاء، أدوات إنتاجية.',
    alternatives: ['Anthropic', 'Gemini API', 'Local LLMs']
  }
];

export const comparisons = [
  {
    title: 'PostgreSQL vs MongoDB',
    left: 'PostgreSQL',
    right: 'MongoDB',
    rows: [
      ['النوع', 'Relational / SQL', 'Document / NoSQL'],
      ['شكل البيانات', 'جداول وعلاقات', 'Documents تشبه JSON'],
      ['الأفضل لـ', 'Payments، Orders، Relations', 'Chat، Logs، بيانات مرنة'],
      ['القوة', 'الدقة، Transactions، العلاقات', 'المرونة وسرعة التطوير'],
      ['اختيار سريع', 'لما البيانات منظمة', 'لما شكل البيانات يتغير كثيرًا']
    ]
  },
  {
    title: 'Firebase vs Supabase',
    left: 'Firebase',
    right: 'Supabase',
    rows: [
      ['الأساس', 'Google Cloud + NoSQL غالبًا', 'PostgreSQL مفتوح المصدر'],
      ['مناسب لـ', 'موبايل سريع و MVP', 'تطبيق يحتاج SQL وعلاقات'],
      ['Auth', 'قوي وسهل', 'قوي ومتكامل مع PostgreSQL'],
      ['Database', 'Firestore / Realtime DB', 'PostgreSQL'],
      ['اختيار سريع', 'لو تريد speed وموبايل', 'لو تريد SQL وتحكم أعلى']
    ]
  },
  {
    title: 'React vs Flutter',
    left: 'React',
    right: 'Flutter',
    rows: [
      ['المجال', 'Web أساسًا', 'Mobile + Web + Desktop'],
      ['اللغة', 'JavaScript / TypeScript', 'Dart'],
      ['مناسب لـ', 'مواقع و dashboards', 'تطبيقات موبايل cross-platform'],
      ['UI', 'يعتمد على CSS ومكتبات', 'Widgets جاهزة وغنية'],
      ['اختيار سريع', 'موقع أو SaaS', 'تطبيق Android/iOS']
    ]
  }
];

export const roadmap = [
  {
    step: '01',
    title: 'تثبيت الأساسيات',
    text: 'اختر لغة بداية، افهم variables, loops, functions, objects، وتعلم كيف تحل المشاكل.'
  },
  {
    step: '02',
    title: 'أدوات كل مبرمج',
    text: 'Git/GitHub، Terminal، VS Code، Debugging، قراءة documentation، واستخدام AI بذكاء.'
  },
  {
    step: '03',
    title: 'اختيار الاختصاص',
    text: 'Frontend، Backend، Mobile، Full Stack، AI، Cybersecurity، DevOps، أو Data.'
  },
  {
    step: '04',
    title: 'بناء مشاريع حقيقية',
    text: 'ابدأ بمشاريع صغيرة ثم ابني تطبيقات فيها login، database، upload، payment، deployment.'
  },
  {
    step: '05',
    title: 'Portfolio وسوق العمل',
    text: 'اعرض المشاريع، اكتب README قوي، ارفع الكود، ودرّب نفسك على شرح قراراتك التقنية.'
  }
];

export const projects = [
  {
    level: 'Beginner',
    title: 'To-do App',
    stack: 'React + Local Storage',
    details: 'تعلم state، forms، add/delete/update.'
  },
  {
    level: 'Beginner',
    title: 'Weather App',
    stack: 'React + API',
    details: 'تعلم fetch، loading، errors، UI states.'
  },
  {
    level: 'Intermediate',
    title: 'Login System',
    stack: 'Node.js + JWT + PostgreSQL',
    details: 'تسجيل، دخول، حماية routes، tokens.'
  },
  {
    level: 'Intermediate',
    title: 'E-commerce Mini',
    stack: 'React + Express + Stripe',
    details: 'منتجات، cart، checkout، admin.'
  },
  {
    level: 'Advanced',
    title: 'AI Chatbot Platform',
    stack: 'React + Node + OpenAI API',
    details: 'محادثة، history، user accounts، limits.'
  },
  {
    level: 'Advanced',
    title: 'SaaS Dashboard',
    stack: 'Next/React + PostgreSQL + Cloud',
    details: 'اشتراكات، analytics، teams، deployment.'
  }
];

export const glossary = [
  ['API', 'طريقة تواصل بين تطبيقين أو بين الواجهة والسيرفر.'],
  ['Endpoint', 'رابط محدد داخل API ينفّذ وظيفة معينة.'],
  ['Database', 'مكان تخزين بيانات التطبيق.'],
  ['Framework', 'إطار عمل يعطيك قواعد وأدوات جاهزة لتسريع البناء.'],
  ['Library', 'مكتبة صغيرة تستخدمها لتنفيذ مهمة محددة.'],
  ['SDK', 'حزمة أدوات جاهزة للتعامل مع خدمة معينة.'],
  ['Deployment', 'رفع المشروع ليعمل على الإنترنت.'],
  ['CI/CD', 'اختبار وبناء ونشر التطبيق تلقائيًا.']
];
