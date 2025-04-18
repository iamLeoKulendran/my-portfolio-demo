import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";
import { getProjectTags, projects } from "@/data/projectsData";
import { useState } from "react";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = getProjectTags();
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <Layout>
      <div className="section-container pt-10 md:pt-20 pb-20">
        <div className="mb-12 text-center">
          <h1
            className="heading-lg mb-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            My Projects
          </h1>
          <p
            className="body-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            A collection of DevOps and infrastructure projects I've built and
            contributed to
          </p>

          <ProjectFilters
            tags={tags}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
