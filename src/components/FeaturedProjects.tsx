import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects as allProjects } from "@/data/projectsData";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

// Get the top 3 featured projects (IDs 1, 2, and 4)
const projects: Project[] = [14,13, 12]
  .map(id => allProjects.find(project => project.id === id))
  .filter(Boolean)
  .map(project => ({
    id: project!.id,
    title: project!.title,
    description: project!.description,
    tags: project!.technologies.slice(0, 4), // Use technologies as tags, limit to first 4
    image: project!.image,
    link: `/projects/${project!.id}`,
  }));

const FeaturedProjects = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="heading-lg mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              Featured Projects
            </h2>
            <p className="body-md text-muted-foreground max-w-lg animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              A selection of my recent DevOps and infrastructure projects
            </p>
          </div>
          <Button asChild variant="outline" className="animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <Link to="/projects">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group animate-fade-in opacity-0 h-full" 
              style={{ animationDelay: `${0.2 * (index + 3)}s` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8 space-y-4 flex-grow">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button asChild variant="ghost" className="group/btn p-0 h-auto">
                      <Link to={project.link} className="flex items-center font-medium">
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-2px]" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;