export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  hasLiveDemo?: boolean; // Add this new property
  featured: boolean;
  status: "completed" | "in-progress";
  progress?: number;
  highlights?: string[];
  learningOutcomes?: string[];
  screenshots?: string[];
}

export const projects: Project[] = [

  {
    id: 13,
    title: "DevOps Implementation on OpenTelemetry Astronomy Shop",
    description: "End-to-End DevOps Project",
    longDescription: "This project demonstrates a full-scale DevOps implementation on an E-Commerce platform using OpenTelemetrys Astronomy Shop. It covers the entire DevOps lifecycle, from infrastructure provisioning to CI/CD automation and monitoring.",
    tags: ["End-to-End DevOps", "CI/CD", "Containerization & Orchestration", "Cloud Migration","IaC","GitOps"],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "ArgoCD", "GitHub Actions"],
    image: "projects/OpenTelemetry Astronomy Shop.jpg",
    githubUrl: "https://github.com/iamLeoKulendran/DevOps-Implementation-on-OpenTelemetry-Astronomy-Shop",
    liveUrl: "",
    hasLiveDemo: false,
    featured: true,
    status: "in-progress",
    progress: 35,
    highlights: [
      "Infrastructure setup on AWS, including IAM roles, EC2, security groups, and networking",
      "Containerization and deployment using Docker, Kubernetes, and Terraform",
      "Automated application deployment and management with ArgoCD",
      "CI/CD pipeline integration using GitHub Actions and Terraform backend configuration",
      "Custom domain setup with Route 53 and Ingress controller for traffic management"
    ],
    learningOutcomes: [
      "Hands-on experience with real-time DevOps project management",
      "Mastering best practices for deploying microservices in Kubernetes",
      "Implementing end-to-end GitOps workflows with ArgoCD",
      "Setting up and securing cloud infrastructure efficiently",
      "Gaining industry-relevant experience to enhance resume and interview readiness"
    ],
    screenshots: [
      "projects/OpenTelemetry Astronomy Shop.jpg",
      
      
    ]
  },
  {
    "id": 14,
    "title": "DevSecOps Pipeline Implementation for Tic Tac Toe Game",
    "description": "Automated CI/CD Pipeline with Security Best Practices",
    "longDescription": "This project demonstrates a DevSecOps pipeline implementation for a Node.js Tic Tac Toe application using GitHub Actions. It ensures a secure, automated, and efficient CI/CD workflow with container security scanning, GitOps, and Kubernetes deployment.",
    "tags": ["DevSecOps", "CI/CD", "GitOps", "Containerization & Orchestration"],
    "technologies": ["GitHub Actions", "Docker", "Kubernetes", "ArgoCD", "Trivy", "ghcr.io"],
    "image": "projects/tic-tac.png",
    "githubUrl": "https://github.com/iamLeoKulendran/devsecops-demo-tic-tac-toe-game",
    "liveUrl": "",
    "hasLiveDemo": false,
    "featured": true,
    "status": "completed",
    "progress": 100,
    "highlights": [
      "Automated unit testing and static code analysis in CI pipeline",
      "Containerized application using Docker",
      "Security vulnerability scanning with Trivy before deployment",
      "CI/CD pipeline implemented using GitHub Actions",
      "GitOps-based deployment automation using ArgoCD on Kubernetes",
      "Implemented secret management for enhanced security"
    ],
    "learningOutcomes": [
      "Hands-on experience with DevSecOps pipeline automation",
      "Implementing security scanning in CI/CD workflows",
      "Deploying and managing applications in Kubernetes using ArgoCD",
      "Automating Kubernetes manifest updates with GitOps",
      "Enhancing CI/CD security with best practices in secret management"
    ],
    "screenshots": [
      
      "projects/tic-tac-ss1.png",
      "projects/tic-tac-ss2.png",
      "projects/tic-tac.png"
    ]
  }
  ,
  {
    id: 12,
    title: "Hands-On AWS Project: Deploy Crypto App",
    description: "AWS Cloud & Microservices",
    longDescription: "This project focuses on deploying a microservices-based crypto application on AWS using industry best practices. It covers containerization, CI/CD automation, and scalable deployment strategies.",
    tags: ["End-to-End DevOps","Cloud Migration", "Containerization & Orchestration", "CI/CD"],
    technologies: ["AWS Cloud9", "Docker", "AWS CodeBuild", "Amazon ECR", "Amazon ECS", "AWS Load Balancer", "AWS CodePipeline"],
    image: "projects/Crypto App.png",
    githubUrl: "https://github.com/iamLeoKulendran/Hands-On-AWS-Project-Deploy-Crypto-App",
    liveUrl: "https://github.com/iamLeoKulendran/Hands-On-AWS-Project-Deploy-Crypto-App",
    hasLiveDemo: false,
    featured: true,
    status: "in-progress",
    progress: 15,
    highlights: [
      "Understanding microservices architecture and its advantages over monolithic systems",
      "Setting up AWS Cloud9 for cloud-based development",
      "Containerizing microservices with Docker for efficient deployment",
      "Using AWS CodeBuild and ECR for automated builds and secure image management",
      "Deploying services onto Amazon ECS with high availability and scalability"
    ],
    learningOutcomes: [
      "Gaining hands-on experience in deploying microservices on AWS",
      "Mastering containerization and cloud-based development workflows",
      "Understanding CI/CD pipelines and best practices for microservices",
      "Developing scalable, resilient cloud applications using AWS services"
    ],
    screenshots: [
      "projects/crypto app sr1.png",
      "projects/crypto app sr2.png"

    ]
  },
  {
    id: 11,
    title: "GCP DevOps Project",
    description: "DevOps lifecycle implementation on Google Cloud",
    longDescription: "This hands-on project walks through an end-to-end DevOps lifecycle implementation on Google Cloud Platform (GCP). It follows a sprint-based approach, demonstrating how top companies manage software delivery using DevOps best practices.",
    tags: ["End-to-End DevOps", "CI/CD", "Containerization & Orchestration", "Cloud Migration"],
    technologies: ["Linux", "Docker", "Kubernetes", "GCP", "CI/CD Pipelines", "GitHub"],
    image: "projects/GCP DevOps Project.png",
    githubUrl: "https://github.com/iamLeoKulendran/GCP-DevOps-Project",
    liveUrl: "https://github.com/iamLeoKulendran/GCP-DevOps-Project",
    hasLiveDemo: false,
    featured: true,
    status: "in-progress",
    progress: 20,
    highlights: [
      "Understanding real-world DevOps lifecycle implementation",
      "Setting up and deploying a Python Flask application on Kubernetes",
      "Implementing a proper CI/CD pipeline to streamline software delivery",
      "Learning key sprint deliverables and how to effectively plan and review them",
      "Gaining hands-on experience with GCP cloud environments and DevOps workflows"
    ],
    learningOutcomes: [
      "Understanding DevOps workflows in a professional environment",
      "Enhancing expertise in cloud-native development and deployment",
      "Building practical experience to showcase in job interviews",
      "Developing a solid foundation in GCP-based DevOps automation"
    ],
    screenshots: [
      
    ]
  },
  {
    "id": 10,
    "title": "Develop portfolio website using Prompt engineering technique and LLM",
    "description": "LLM-powered React portfolio website",
     "longDescription": "This project involved creating a portfolio website using advanced prompt engineering techniques and leveraging language models such as Lovable.dev, Locall-LLM (Quewn Corder and Deepseek) and GitHub Copilot. The application was built using React, Tailwind CSS, and Vite. Despite having limited React experience, the project was rapidly developed in less than a day by modifying an existing template with custom contact details and UI enhancements. It involved debugging routing and networking issues, setting up automated deployment with GitHub Actions, configuring DNS, and hosting on a custom domain (iamleo.net).",
     "tags": [
      "Prompt Engineering",
      "Development",
      "LLM",
    ],
    "technologies": [
      "Prompt Engineering",
      "React",
      "Locall-LLM",
      "Vite",
      "GitHub Actions",
      "Lovable.dev",
      "Tailwind CSS",
      "Quewn Corder",
      "Deepseek",
      "GitHub Copilot",
      "DNS",
      
    ],
    "image": "projects/porfilio-web-ss1.png",
    "githubUrl": "https://github.com/iamLeoKulendran/iamLeo-Porfolio-V2",
    "liveUrl": "https://iamleo.net",
    "hasLiveDemo": true,
    "featured": true,
    "status": "completed",
    "progress": 100,
    "highlights": [
      "Utilized prompt engineering techniques and LLMs for rapid development",
      "Customized an existing template with contact details and UI modifications",
      "Debugged routing, networking, and hosting issues",
      "Implemented automated deployment using GitHub Actions",
      "Configured DNS and hosted the application on a custom domain"
    ],
    "learningOutcomes": [
      "Enhanced prompt engineering skills",
      "Improved debugging and problem-solving abilities",
      "Gained hands-on experience with React and Tailwind CSS",
      "Learned automated deployment and DNS configuration techniques"
    ],
    "screenshots": [
      "projects/porfilio-web-ss3.jpg",
      "projects/porfilio-web-ss2.png",
      "projects/porfilio-web-ss1.png",
    ]
  },
  {
    id: 9,
    title: "GitOps with ArgoCD: Tetris Game Deployment",
    description: "GitOps & Kubernetes deployment showcase",
    longDescription: "This project showcases the use of ArgoCD for GitOps to automate the deployment and management of a Tetris game on a Kubernetes single-node cluster. It emphasizes seamless version management and application synchronization.",
    tags: ["GitOps", "Containerization & Orchestration"],
    technologies: ["Git", "ArgoCD", "Kubernetes", "Docker"],
    image: "projects/gitops.jpg",
    githubUrl: "https://github.com/iamLeoKulendran/GitOps-ArgoCD-tetris-game",
    liveUrl: "https://github.com/iamLeoKulendran/GitOps-ArgoCD-tetris-game",
    hasLiveDemo: false,
    featured: false,
    status: "completed",
    highlights: [
      "Utilized ArgoCD to automate deployments and maintain the desired state of the Kubernetes cluster",
      "Deployed and managed multiple versions of the Tetris game",
      "Designed for a single-node Kubernetes cluster, ideal for development and testing"
    ],
    learningOutcomes: [
      "Gaining hands-on experience with GitOps principles using ArgoCD",
      "Understanding version control and automated application synchronization in Kubernetes",
      "Developing best practices for Kubernetes-based application deployment",
      "Exploring real-world GitOps workflows for continuous delivery"
    ],
    screenshots: [
      "projects/argocd ss1.png",
      "projects/argocd ss2.png",
      "projects/argocd ss3.png"
    ]
  },
  {
    id: 8,
    title: "Improved RAG Pipeline: Out-of-Scope Handling",
    description: "AI & Machine Learning research project",
    longDescription: "This project focuses on enhancing the handling of Out-of-Scope (OOS) queries in Large Language Models (LLMs) by integrating state-of-the-art methodologies. The goal is to improve accuracy and contextual relevance when dealing with user inputs beyond the model's knowledge domain.",
    tags: ["AI/ML"],
    technologies: ["Machine Learning", "Logistic Regression", "Vector Similarity Analysis", "AWS Titan Text Embedding", "RAG"],
    image: "projects/fyp.png",
    githubUrl: "https://github.com/iamLeoKulendran/Improved-RAG-Pipeline",
    liveUrl: "https://github.com/iamLeoKulendran/Improved-RAG-Pipeline",
    hasLiveDemo: false,
    featured: true,
    status: "completed",
    highlights: [
      "Developed an OOS Detection Model using supervised learning to classify queries",
      "Integrated Retrieval-Augmented Generation (RAG) for more accurate and context-aware responses",
      "Implemented Prompt Engineering techniques to refine LLM interactions",
      "Built a user-friendly frontend interface for improved accessibility"
    ],
    learningOutcomes: [
      "Enhancing the efficiency of OOS query detection and handling",
      "Building a scalable and modular AI-powered pipeline",
      "Applying advanced retrieval techniques to optimize LLM responses",
      "Gaining hands-on experience in integrating AI models with real-world applications"
    ],
    screenshots: [
      "projects/fyp.png"
    ]
  },
  {
    id: 7,
    title: "Hands-on Project for creating CI/CD pipelines",
    description: "CI/CD Pipeline implementation",
    longDescription: "My project involves hands-on labs focused on creating robust DevOps CI/CD pipelines. Throughout the process, I utilize key technologies such as Git, Jenkins, Docker, and Kubernetes, orchestrating seamless integration and deployment workflows. The entire setup is implemented on the AWS cloud platform, Explore the step-by-step guides and practical demonstrations that illustrate the implementation of these technologies in real-world scenarios",
    tags: ["CI/CD", "Containerization & Orchestration"],
    technologies: ["Git", "Jenkins", "Docker", "Kubernetes", "AWS"],
    image: "projects/CI-CD Pipeline.png",
    githubUrl: "https://github.com/iamLeoKulendran",
    liveUrl: "https://github.com/Leo-JeromeKulendran",
    hasLiveDemo: false,
    featured: false,
    status: "completed",
    highlights: [
      "Built end-to-end CI/CD pipelines with Jenkins",
      "Configured container orchestration with Kubernetes",
      "Integrated automated testing and deployment workflows"]
  },
  {
    id: 6,
    title: "Spring boot OAuth Demo app",
    description: "Spring Security and SSO implementation",
    longDescription: "A demonstration of Spring Security and OAuth2 implementation for Single Sign-On (SSO) authentication using JWT tokens.",
    tags: ["Development"],
    technologies: ["Spring Security", "OAuth2", "SSO", "JWT"],
    image: "projects/SSO.png",
    githubUrl: "https://github.com/iamLeoKulendran/Spring-OAuth-Demo-app",
    liveUrl: "https://github.com/iamLeoKulendran/Spring-OAuth-Demo-app",
    hasLiveDemo: false,
    featured: false,
    status: "completed",
    highlights: [
      "Implemented OAuth2 authentication flow",
      "Configured Spring Security for robust backend protection",
      "Set up JWT token-based authentication"
    ],
    learningOutcomes: [
      "Understanding OAuth2 authentication protocols",
      "Applying security best practices in Spring applications",
      "Working with JWT for stateless authentication"
    ],
    screenshots: [
      "projects/SSO.png"
    ]
  },
  {
    id: 5,
    title: "Lift and Shift Web Application on AWS",
    description: "AWS Cloud Migration",
    longDescription: "A cloud migration project demonstrating the 'Lift and Shift' strategy to move an on-premises web application to AWS EC2 instances.",
    tags: ["Cloud Migration"],
    technologies: ["AWS", "EC2"],
    image: "projects/Lift and Shift.png",
    githubUrl: "https://github.com/iamLeoKulendran",
    liveUrl: "https://github.com/Leo-JeromeKulendran",
    hasLiveDemo: false,
    featured: false,
    status: "completed",
    highlights: [
      "Migrated on-premises application to AWS",
      "Implemented EC2 instances for application hosting",
      "Configured networking and security groups"
    ],
    learningOutcomes: [
      "Cloud migration strategies",
      "AWS infrastructure configuration",
      "High availability design in cloud environments"
    ],
    screenshots: [
      
    ]
  },
  {
    id: 4,
    title: "2048 Game - Dockerized and Deployed",
    description: "Containerization and Deployment",
    longDescription: "A containerized version of the popular 2048 game, showcasing Docker for application deployment and Nginx for web serving.",
    tags: ["Containerization & Orchestration"],
    technologies: ["Docker", "Nginx", "AWS", "Azure"],
    image: "projects/2048.jpg",
    githubUrl: "https://github.com/iamLeoKulendran/2048",
    liveUrl: "https://github.com/iamLeoKulendran/2048",
    hasLiveDemo: false,
    featured: false,
    status: "completed",
    highlights: [
      "Containerized web application using Docker",
      "Configured Nginx as a web server",
      "Deployed to multiple cloud platforms"
    ],
    learningOutcomes: [
      "Docker containerization best practices",
      "Web server configuration and optimization",
      "Multi-cloud deployment strategies"
    ],
    screenshots: [
      
    ]
  },
  {
    id: 3,
    title: "Micro-services Spring boot app",
    description: "Microservices architecture implementation",
    longDescription: "A microservices application built with Spring Boot, showcasing service decomposition, containerization, and orchestration with Kubernetes.",
    tags: ["Development", "Containerization & Orchestration"],
    technologies: ["Spring Boot", "Microservices", "Docker", "Kubernetes"],
    image: "projects/microservices app.jpg",
    githubUrl: "https://github.com/iamLeoKulendran",
    liveUrl: "https://github.com/iamLeoKulendran/Micro-services-Spring-boot-app",
    hasLiveDemo: false,
    featured: false,
    status: "completed",
    highlights: [
      "Designed microservices architecture",
      "Implemented service discovery and API gateway",
      "Containerized services with Docker"
    ],
    learningOutcomes: [
      "Microservices design patterns",
      "Distributed systems architecture",
      "Container orchestration strategies"
    ],
    screenshots: [
      "projects/microservices app.jpg"]
  },
  {
    id: 2,
    title: "Cake Shop app - CURD operation",
    description: "Mobile app - android development",
    longDescription: "An Android mobile application for a cake shop that demonstrates Create, Update, Read, and Delete operations using Java.",
    tags: ["Development"],
    technologies: ["Android", "Java"],
    image: "projects/cake shop app.jpg",
    githubUrl: "https://github.com/iamLeoKulendran",
    liveUrl: "https://github.com/iamLeoKulendran/Cake-Shop-CURD-opration",
    hasLiveDemo: false,
    featured: false,
    status: "completed",
    highlights: [
      "Implemented CRUD operations in Android",
      "Created responsive UI for mobile devices",
      "Built data persistence layer"
    ],
    learningOutcomes: [
      "Android application architecture",
      "Mobile UI/UX design principles",
      "Data management in mobile applications"
    ],
    screenshots: [
      "projects/cake shop app - screenshot.png"
    ]
  },
  {
    id: 1,
    title: "Employee Expense Management System",
    description: "Academic Project with Laravel and Flutter",
    longDescription: "A comprehensive system for managing employee expenses built with Laravel backend, MySQL database, and Flutter for the mobile frontend.",
    tags: ["Development"],
    technologies: ["Laravel", "MySQL", "Flutter"],
    image: "projects/Software Project.jpg",
    githubUrl: "https://github.com/iamLeoKulendran",
    liveUrl: "https://github.com/iamLeoKulendran/Employee-Expense-Management-System",
    hasLiveDemo: false,
    featured: false,
    status: "completed",
    highlights: [
      "Developed full-stack application with Laravel backend",
      "Created Flutter mobile client for expense tracking",
      "Implemented secure authentication and data validation"
    ],
    learningOutcomes: [
      "Full-stack development workflow",
      "Cross-platform mobile development",
      "Database design and optimization"
    ],
    screenshots: [
      "projects/Software Project.jpg",
      
    ]
  }
];

export const getProjectTags = (): string[] => {
  return [...new Set(projects.flatMap(project => project.tags))];
};