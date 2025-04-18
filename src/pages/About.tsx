import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

interface Achievement {
  id: number;
  title: string;
  year: string;
  description: string;
  link: string; // Add link property
  status: "completed" | "in-progress"; 
  
}

const experiences: Experience[] = [
  {
    id: 3,
    role: "Software Engineer",
    company: "Kaizens Group - United Kingdom",
    duration: "April 2025 - Present",
    description: ""
  },
  {
    id: 3,
    role: "Associate Software Engineer - DevOps",
    company: "TEATTA (Pvt) Ltd - Sri Lanka",
    duration: "July 2024 - March 2025",
    description: "Experienced in Spring Boot API deployment, cloud hosting, and Docker containerization. Proficient in VPS cloud setup and configuration, managing Linux servers, CI/CD pipelines, and Git/GitHub to streamline development and testing environments. Skilled in using AWS for cloud infrastructure management."
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "IFS R&D International (Pvt) Ltd - Sri Lanka",
    duration: "Feb 2023 - Aug 2023",
    description: "Worked under micro-service architecture Create REST API using .NET 6, Swager API testing Worked on Telerik reporting and DevExpress Built and deployed Docker containers Experienced in Azure Cloud environment."
  },
  {
    id: 1,
    role: "University Trainee",
    company: "People's Bank Trincomalee",
    duration: "Aug 2018 - Jan 2019",
    description: "Worked in the Loan and Recovery sections, responsible for creating loan accounts and managing the filing of loan documents."
  }
];

const education: Education[] = [
  {
    id: 1,
    degree: "B.Sc. (Hons) in Information Technology",
    institution: "University of Moratuwa - Sri Lanka",
    duration: "2020 - 2024",
    description: "During my B.Sc. (Hons) in Information Technology at the University of Moratuwa, I developed expertise in programming, data structures, machine learning, AI, software development with best practices in the software lifecycle, networking, software quality assurance, management, and problem solving. This comprehensive curriculum equipped me with theoretical knowledge and practical skills to effectively address complex IT challenges."
    
  },
  {
    id: 2,
    degree: "G.C.E. Advanced Level",
    institution: "St. Joseph's College - Sri Lanka",
    duration: "",
    description: "Science Stream - A, 2B"
  }
];

const achievements: Achievement[] = [
  {
    id: 4,
    title: "CKA - Certified Kubernetes Administrator",
    year: "2025",
    status: "in-progress",
    description: "Preparing for the CKA certification to validate my skills in managing Kubernetes clusters and workloads.",
    link: "https://www.cncf.io/certification/cka/"
  },
  {
    id: 3,
    title: "Credly Badges - AWS",
    year: "2025",
    status: "completed",
    description: "Earned multiple badges on AWS services, including Compute, Storage, Security and Network.",
    link: "https://www.credly.com/users/leo-siraj-kulendran"
  },
  {
    id: 2,
    title: "KodeKloud Certifications",
    year: "2024 - Present",
    status: "in-progress",
    description: "Completed multiple hands-on labs and courses on Kubernetes, Docker, Terraform, Ansible, Linux, MLOps and DevOps practices.",
    link: "https://www.linkedin.com/in/leo-kulendran/details/certifications/"
  },
  {
    id: 1,
    title: "AZ-900 - Microsoft Azure Fundamentals",
    year: "2024",
    status: "completed",
    description: "Fundamental-level certification for understanding cloud concepts and services on Azure.",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/LeoSirajKulendran-8410/65ECCEEA6BA1992F?sharingId"
  },
];

const About = () => {
  return (
    <Layout>
      <div className="section-container pt-10 md:pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="relative w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-background shadow-xl animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              <img src={`${import.meta.env.BASE_URL}profile/profile.png`} alt="Profile" />
              </div>
              
              <div className="space-y-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                <h1 className="heading-lg text-center lg:text-left">
                  Leo Kulendran
                </h1>
                <p className="text-muted-foreground text-center lg:text-left">
                DevOps Engineer | BSc (Hons) in Information Technology | Cloud Enthusiast
Passionate about automation, cloud infrastructure, and CI/CD. Skilled in Kubernetes, Docker, and Linux, I specialize in building scalable, reliable systems and streamlining deployments for efficiency and performance.
                </p>
                
                {/* Added Resume Download Button */}
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <a 
                    href={`${import.meta.env.BASE_URL}Leo Kulendran_DevOps_Engineer.pdf`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                      bg-primary text-white 
                      dark:bg-slate-900 dark:text-white 
                      border border-transparent dark:border-primary/50
                      font-medium transition-all hover:shadow-lg hover:shadow-primary/20 
                      dark:hover:shadow-primary/30 dark:hover:border-primary
                      button-glow dark:shadow-glow"
                  >
                    <Download className="h-4 w-4" /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-16">
            <section className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              <h2 className="heading-md flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-primary" />
                Work Experience
              </h2>
              
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative animate-slide-left">
                  <div className={cn(
                    "glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/20 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out",
                    index % 2 === 0 ? "bg-white/5 dark:bg-black/5" : "bg-muted/10 dark:bg-slate-900/40"
                  )}>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <h3 className="heading-sm">{exp.role}</h3>
                        <span className="text-muted-foreground text-sm">{exp.duration}</span>
                      </div>
                      <p className="font-medium text-primary">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            
            <section className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
              <h2 className="heading-md flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </h2>
              
              {education.map((edu, index) => (
                <div key={edu.id} className="relative animate-slide-left">
                  <div className={cn(
                    "glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/20 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out",
                    index % 2 === 0 ? "bg-white/5 dark:bg-black/5" : "bg-muted/10 dark:bg-slate-900/40"
                  )}>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <h3 className="heading-sm">{edu.degree}</h3>
                        <span className="text-muted-foreground text-sm">{edu.duration}</span>
                      </div>
                      <p className="font-medium text-primary">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            
            <section className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
              <h2 className="heading-md flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Certifications & Achievements
              </h2>
              
              {achievements.map((achievement, index) => (
                <div key={achievement.id} className="relative animate-slide-left">
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className={cn(
                      "glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/20 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out",
                      index % 2 === 0 ? "bg-white/5 dark:bg-black/5" : "bg-muted/10 dark:bg-slate-900/40"
                    )}>
                      <div className="space-y-3">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="heading-sm">{achievement.title}</h3>
                            <span className={cn(
                              "text-xs font-medium px-2 py-0.5 rounded-full",
                              achievement.status === "completed" 
                                ? "bg-green-500/20 text-green-500 dark:bg-green-500/30 dark:text-green-300" 
                                : "bg-amber-500/20 text-amber-500 dark:bg-amber-500/30 dark:text-amber-300"
                            )}>
                              {achievement.status === "completed" ? "Completed" : "In Progress"}
                            </span>
                          </div>
                          <span className="text-muted-foreground text-sm font-medium">{achievement.year}</span>
                        </div>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
