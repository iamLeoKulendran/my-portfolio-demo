import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Project } from "@/data/projectsData";
import { ArrowRight, Clock, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col animate-fade-in opacity-0 h-full"
      style={{ animationDelay: `${0.1 * (index + 5)}s` }}
    >
      <div className="glass-card overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out group h-full flex flex-col">
        <div className="relative h-52 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {project.featured && (
            <Badge
              className="absolute top-3 right-3 bg-primary/90 hover:bg-primary/90"
              variant="default"
            >
              Featured
            </Badge>
          )}
          {project.status === "in-progress" && (
            <div className="absolute bottom-0 left-0 right-0 bg-background/30 backdrop-blur-sm p-2">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-primary animate-pulse-subtle" />
                <span className="text-xs font-medium">
                  In Progress - {project.progress}%
                </span>
              </div>
              <Progress value={project.progress} className="h-1.5" />
            </div>
          )}
        </div>

        <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col">
          <div className="space-y-1.5">
            <h3 className="text-xl font-medium group-hover:text-primary transition-colors line-clamp-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm italic line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 flex-grow flex flex-col justify-between">
            {/* Description limited to 4 lines with ellipsis */}
            <p className="text-muted-foreground line-clamp-4">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.slice(0, 6).map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t flex flex-col gap-3 mt-auto">
          <div className="flex gap-2 w-full">
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
            {project.liveUrl && project.hasLiveDemo && (
              <Button asChild size="sm" className="flex-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full flex items-center justify-center"
          >
            <Link to={`/projects/${project.id}`}>
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
