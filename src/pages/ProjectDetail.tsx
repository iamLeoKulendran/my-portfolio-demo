import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Layout from "@/components/Layout";
import { projects } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, ArrowLeft, Clock, Github, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const project = projects.find(p => p.id === Number(id));
  
  if (!project) {
    return (
      <Layout>
        <div className="section-container py-20 text-center">
          <h1 className="heading-lg mb-6">Project Not Found</h1>
          <p className="mb-8 text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Button>
        </div>
      </Layout>
    );
  }
  
  const hasMultipleScreenshots = project.screenshots && project.screenshots.length > 1;
  
  const nextImage = () => {
    if (project.screenshots) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.screenshots!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  const prevImage = () => {
    if (project.screenshots) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.screenshots!.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <Layout>
      <div className="section-container py-10 md:py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/projects')} 
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="mr-2" />
          Back to Projects
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Combined title and screenshots section */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative">
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="w-full h-60 md:h-96 overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}${project.screenshots[currentImageIndex]}`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {hasMultipleScreenshots && (
                    <>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full p-1"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full p-1"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        {project.screenshots.map((_, index) => (
                          <div 
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                              index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
              
              <div className="p-6 md:p-8 space-y-4">
                <h1 className="heading-lg">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-2">
                  {project.featured && (
                    <Badge variant="default">Featured</Badge>
                  )}
                  {project.status === "in-progress" && (
                    <Badge variant="secondary" className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-primary" />
                      In Progress - {project.progress}%
                    </Badge>
                  )}
                </div>
                <p className="text-lg text-muted-foreground">{project.description}</p>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Project Summary</h2>
                  <p className="text-muted-foreground">{project.longDescription}</p>
                </div>
                
                {project.highlights && project.highlights.length > 0 && (
                  <div>
                    <h3 className="text-xl font-medium mb-3">Key Highlights</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.learningOutcomes && project.learningOutcomes.length > 0 && (
                  <div>
                    <h3 className="text-xl font-medium mb-3">Learning Outcomes</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {project.learningOutcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Project Links</h3>
                <div className="space-y-3">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full justify-start border-primary/40 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                  {project.liveUrl && project.hasLiveDemo && (
                    <Button asChild className="w-full justify-start">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            {project.status === "in-progress" && (
              <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Project Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              </div>
            )}
            
            <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;