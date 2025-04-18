import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Containerization & Orchestration",
    skills: ["Docker", "Kubernetes", "EKS"]
  },
  {
    name: "Infrastructure as Code (IaC)",
    skills: ["Terraform", "Ansible", "Vagrant"]
  },
  {
    name: "Cloud Platforms",
    skills: ["AWS", "Azure", "GCP"]
  },
  {
    name: "CI/CD & Automation",
    skills: ["Jenkins", "GitHub Actions", "ArgoCD"]
  },
  {
    name: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana"]
  },
  {
    name: "Version Control & Collaboration",
    skills: ["Git", "GitHub", "GitLab"]
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    name: "Scritping & Programming",
    skills: ["Bash Scripting","Python Scripting (basic)","Go (basic)","Java", "C", "C#" ]
  },
  {
    name: "AI/ML",
    skills: ["Prompt Engineering", "LLMOps (Basic)", "MLOps (Basic)", "Ollama"]
  },
  
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="skills-section" className="py-16 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="heading-lg mb-4">Skills & Expertise</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to deliver robust solutions
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-full"
            >
              <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-white/5 dark:bg-black/20 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out h-full flex flex-col">
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-medium">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;