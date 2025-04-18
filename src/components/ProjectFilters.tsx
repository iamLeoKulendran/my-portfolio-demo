import { Button } from "@/components/ui/button";

interface ProjectFiltersProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

const ProjectFilters = ({
  tags,
  selectedTag,
  onTagSelect,
}: ProjectFiltersProps) => {
  return (
    <div
      className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in opacity-0"
      style={{ animationDelay: "0.5s" }}
    >
      <Button
        variant={selectedTag === null ? "default" : "outline"}
        onClick={() => onTagSelect(null)}
        className="rounded-full transition-all"
      >
        All Projects
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          onClick={() => onTagSelect(tag)}
          className="rounded-full transition-all"
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilters;
