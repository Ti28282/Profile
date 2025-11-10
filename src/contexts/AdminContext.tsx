import { createContext, useContext, useState, ReactNode } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

interface AboutData {
  name: string;
  age: number;
  profilePhoto: string;
  description: string[];
  stats: {
    age: number;
    projects: string;
    apis: string;
    uptime: string;
  };
}

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

interface IMyInfo {

  email: string;
  github: string;
  telegram: string;
  whatsapp: string;

}

interface AdminContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: number, project: Partial<Project>) => void;
  deleteProject: (id: number) => void;
  skillCategories: SkillCategory[];
  updateSkillCategories: (categories: SkillCategory[]) => void;
  aboutData: AboutData;
  updateAboutData: (data: Partial<AboutData>) => void;
  messages: Message[];
  markMessageAsRead: (id: number) => void;
  deleteMessage: (id: number) => void;
  initialMyinfo: IMyInfo; 
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const initialMyinfo: IMyInfo = {
  email: "sabirovt50@gmail.com",
  github: "https://github.com/Ti28282",
  telegram: "https://t.me/timurtksI",
  whatsapp: "https://wa.me/79179090362"
}


// Mock data
const initialProjects: Project[] = [
  {
    id: 1,
    title: "REST API для E-Commerce",
    description: "Масштабируемый backend с микросервисной архитектурой, обработкой платежей и системой уведомлений",
    image: "https://images.unsplash.com/photo-1596167175550-19b780c8b461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBkZXZlbG9wbWVudCUyMGJhY2tlbmR8ZW58MXx8fHwxNzYwODc4MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Система аналитики данных",
    description: "Backend для обработки и анализа больших объемов данных с real-time агрегацией",
    image: "https://images.unsplash.com/photo-1620722664104-d4b8a0c5b556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHBvc3RncmVzcWx8ZW58MXx8fHwxNzYwODc4MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Django", "PostgreSQL", "Celery"],
    liveUrl: "#", 
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Микросервисная архитектура",
    description: "Распределенная систeма из 6+ микросервисов с message broker и service discovery",
    image: "https://images.unsplash.com/photo-1676030789467-a097e2291bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NlcnZpY2VzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDg3ODI1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Docker", "RabbitMQ", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const initialSkillCategories: SkillCategory[] = [
  {
    title: "Backend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "PostgreSQL", level: 90 },
      { name: "REST API", level: 95 },
      { name: "FastAPI", level: 85 }
    ]
  },
  {
    title: "Архитектура & DevOps",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Микросервисы", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Redis", level: 75 }
    ]
  }
];

const initialAboutData: AboutData = {
  name: "Тимур",
  age: 23,
  profilePhoto: "",
  description: [
    "Мне 23 года, и я backend разработчик, специализирующийся на построении высокопроизводительных серверных приложений.",
    "Работаю преимущественно с Python и PostgreSQL, разрабатывая RESTful API и микросервисные архитектуры.",
    "Постоянно изучаю новые подходы к оптимизации баз данных и масштабированию приложений."
  ],
  stats: {
    age: 23,
    projects: "30+",
    apis: "20+",
    uptime: "99.9%"
  }
};

const initialMessages: Message[] = [
  {
    id: 1,
    name: "Иван Петров",
    email: "ivan@example.com",
    message: "Здравствуйте! Хотел бы обсудить сотрудничество по проекту REST API.",
    date: "2025-11-05",
    read: false
  },
  {
    id: 2,
    name: "Анна Смирнова",
    email: "anna@company.com",
    message: "Интересуюсь возможностью разработки микросервисной архитектуры.",
    date: "2025-11-04",
    read: true
  }
];

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(initialSkillCategories);
  const [aboutData, setAboutData] = useState<AboutData>(initialAboutData);
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const login = (password: string) => {
    // Mock authentication - в реальном приложении это должно быть API запросом
    if (password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = {
      ...project,
      id: Math.max(...projects.map(p => p.id), 0) + 1
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id: number, updatedProject: Partial<Project>) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, ...updatedProject } : p
    ));
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const updateSkillCategories = (categories: SkillCategory[]) => {
    setSkillCategories(categories);
  };

  const updateAboutData = (data: Partial<AboutData>) => {
    setAboutData({ ...aboutData, ...data });
  };

  const markMessageAsRead = (id: number) => {
    setMessages(messages.map(m =>
      m.id === id ? { ...m, read: true } : m
    ));
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter(m => m.id !== id));
  };

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        projects,
        addProject,
        updateProject,
        deleteProject,
        skillCategories,
        updateSkillCategories,
        aboutData,
        updateAboutData,
        messages,
        markMessageAsRead,
        deleteMessage
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
