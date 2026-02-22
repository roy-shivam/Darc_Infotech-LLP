export const brand = {
  name: "DARC Infotech",
  tagline: "Develop Accuire Rise and Connect",
  primaryCta: { label: "Enroll Today", to: "/enroll" },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Workshops", to: "/workshops" },
  { label: "Courses", to: "/courses" },
  { label: "Training", to: "/training" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

// Dummy images: replace with your own assets anytime.
const img = (seed, w = 1200, h = 800) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const hero = {
  eyebrow: "Career-focused learning platform",
  title: "Build skills. Gain confidence. Get hired.",
  subtitle:
    "Hands-on workshops, structured courses, and interview preparation—designed to take you from learning to earning.",
  badges: [
    { label: "Workshops", hint: "Short, practical sprints" },
    { label: "Courses", hint: "Full learning paths" },
    { label: "Support", hint: "Mentorship & guidance" },
  ],
  ctas: [
    { label: "Explore Workshops", to: "/workshops", variant: "primary" },
    { label: "View Courses", to: "/courses", variant: "secondary" },
    { label: "Book a Demo", to: "/contact", variant: "ghost" },
  ],
  image: { src: img("team-1"), alt: "Students collaborating in a modern workspace" },
  trust: {
    label: "Trusted by learners from",
    logos: [
      { name: "IILM University", src: img("logo-1", 220, 90), alt: "IILM University (placeholder)" },
      { name: "NIET", src: img("logo-2", 220, 90), alt: "NIET (placeholder)" },
      { name: "HPTM University", src: img("logo-3", 220, 90), alt: "HPTM University (placeholder)" },
      { name: "GL Bajaj Institute", src: img("logo-4", 220, 90), alt: "GL Bajaj (placeholder)" },
      { name: "Poornima Group", src: img("logo-5", 220, 90), alt: "Poornima Group (placeholder)" },
      { name: "IILM (Greater Noida)", src: img("logo-6", 220, 90), alt: "IILM Greater Noida (placeholder)" },
    ],
  },
};

export const workshops = {
  heading: "Technical Workshops",
  subheading:
    "Hands-on sessions led by industry practitioners to help you learn faster and build real projects.",
  items: [
    {
      title: "Python Workshop",
      level: "Beginner friendly",
      description:
        "Learn Python fundamentals with mini-projects, problem solving, and clean coding practices.",
      to: "/workshops",
      image: img("workshop-python", 900, 600),
      tag: "Programming",
    },
    {
      title: "Data Science Workshop",
      level: "Intermediate",
      description:
        "Understand data analysis, visualization, and common ML workflows with practical exercises.",
      to: "/workshops",
      image: img("workshop-ds", 900, 600),
      tag: "Analytics",
    },
    {
      title: "ML Workshop",
      level: "Intermediate",
      description:
        "Build intuition for machine learning and implement models end-to-end with guided labs.",
      to: "/workshops",
      image: img("workshop-ml", 900, 600),
      tag: "AI/ML",
    },
    {
      title: "Java Workshop",
      level: "Beginner to intermediate",
      description:
        "Master OOP basics, core Java, and build simple applications with best practices.",
      to: "/workshops",
      image: img("workshop-java", 900, 600),
      tag: "Programming",
    },
  ],
};

export const ecosystem = {
  eyebrow: "Your success path",
  heading: "A complete learning ecosystem",
  subheading:
    "Go beyond classes. Get a structured journey that supports you from skills to placements.",
  highlight: "Beyond training — mentorship, projects, and career support",
  cards: [
    {
      title: "Technical Training",
      description:
        "Learn modern tech stacks through guided content, labs, and project-based learning.",
      icon: "code",
    },
    {
      title: "Aptitude Development",
      description:
        "Improve problem solving with topic-wise practice, quizzes, and mock tests.",
      icon: "target",
    },
    {
      title: "Soft Skills",
      description:
        "Boost communication, teamwork, and leadership through practical sessions.",
      icon: "spark",
    },
    {
      title: "Campus Preparation",
      description:
        "Get placement-ready with resume building, LinkedIn tips, and interview drills.",
      icon: "cap",
    },
    {
      title: "Career Support",
      description:
        "Work on portfolio projects and get guidance on roles, roadmaps, and interviews.",
      icon: "briefcase",
    },
    {
      title: "Handhold Support",
      description:
        "Continuous mentorship and accountability to keep you moving forward.",
      icon: "hand",
    },
  ],
};

export const courses = {
  heading: "Our Courses",
  subheading:
    "Industry-aligned courses to help you build confidence and launch your career.",
  items: [
    {
      title: "Data Science",
      badge: "In-demand",
      description:
        "Statistics, Python, SQL, visualization, and end-to-end data projects.",
      image: img("course-ds", 1000, 650),
      tags: ["Python", "SQL", "Pandas"],
      cta: { label: "Book Demo", to: "/contact" },
    },
    {
      title: "AI / ML",
      badge: "Popular",
      description:
        "Learn ML fundamentals, model evaluation, and practical applications.",
      image: img("course-ml", 1000, 650),
      tags: ["ML", "Deep Learning", "NLP"],
      cta: { label: "Book Demo", to: "/contact" },
    },
    {
      title: "Full Stack Development",
      badge: "Job-ready",
      description:
        "Build web apps with frontend + backend, databases, and deployment basics.",
      image: img("course-fs", 1000, 650),
      tags: ["React", "Node", "APIs"],
      cta: { label: "Book Demo", to: "/contact" },
    },
    {
      title: "Cloud Computing",
      badge: "Career track",
      description:
        "Understand cloud fundamentals, compute, networking, and security basics.",
      image: img("course-cloud", 1000, 650),
      tags: ["Cloud", "DevOps", "Security"],
      cta: { label: "Book Demo", to: "/contact" },
    },
  ],
};

export const testimonials = {
  heading: "What our learners say",
  subheading:
    "Feedback from students who improved their skills and moved forward in their careers.",
  items: [
    {
      name: "Abhinav A.",
      role: "Student",
      quote:
        "The workshop was practical and easy to follow. The mentor feedback helped me fix mistakes quickly.",
      rating: 5,
    },
    {
      name: "Himanshu K.",
      role: "Junior Developer",
      quote:
        "Clear roadmap, strong projects, and mock interviews—exactly what I needed to feel prepared.",
      rating: 5,
    },
    {
      name: "Laxmi M.",
      role: "Campus Student",
      quote:
        "I liked the structured assignments and weekly check-ins. It kept me consistent and focused.",
      rating: 4,
    },
  ],
};

export const ctaBand = {
  heading: "Ready to transform your career?",
  subheading: "Start today with a free 상담/demo or explore workshops to find your next step.",
  actions: [
    { label: "Book a Free Demo", to: "/contact", variant: "primary" },
    { label: "Explore Workshops", to: "/workshops", variant: "secondary" },
    { label: "Start Learning", to: "/courses", variant: "ghost" },
  ],
};

export const highlights = {
  heading: "Workshop Highlights",
  items: [
    { src: img("hl-1", 900, 650), alt: "Classroom workshop (placeholder)" },
    { src: img("hl-2", 900, 650), alt: "Learners in session (placeholder)" },
    { src: img("hl-3", 900, 650), alt: "Group discussion (placeholder)" },
    { src: img("hl-4", 900, 650), alt: "Mentor explaining concepts (placeholder)" },
    { src: img("hl-5", 900, 650), alt: "Hands-on learning lab (placeholder)" },
    { src: img("hl-6", 900, 650), alt: "Students practicing (placeholder)" },
  ],
};

export const contactInfo = {
  address: "House :- 39, Ashok Nagar Kankarbagh, Patna, Bihar, 800020",
  phone: "+91 9430916250",
  email: "info@darcinfotech.com",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/darc_infotech/?hl=en", icon: "fa-brands fa-instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/darc-infotech/posts/?feedView=all", icon: "fa-brands fa-linkedin" },
    { label: "YouTube", href: "#", icon: "fa-brands fa-youtube" },
  ],
  quickLinks: [
    { label: "Reviews", to: "/reviews" },
    { label: "Training", to: "/training" },
    { label: "FAQs", to: "/contact#faq" },
    { label: "Privacy Policy", to: "/contact#privacy" },
    { label: "Terms & Conditions", to: "/contact#terms" },
  ],
};
