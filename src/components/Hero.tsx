import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[91.5vh] w-full max-w-[1600px] mx-auto flex items-center pt-8">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-[80px] animate-blob" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="hidden md:block absolute top-2/3 right-1/3 w-60 h-60 bg-purple-500/10 rounded-full filter blur-[80px] animate-blob animation-delay-4000" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          {/* Profile Photo */}
          <Link to="/about" className="inline-block mb-6 animate-fade-in opacity-0 hover:scale-105 transition-transform" style={{ animationDelay: '0.1s' }}>
            <div className="relative w-44 h-44 md:w-48 md:h-48 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
             <img src={`${import.meta.env.BASE_URL}profile/profile.png`} alt="Profile" />
            </div>
          </Link>
          
          <div className="inline-block rounded-full bg-muted px-4 py-2 text-base font-medium mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <Link to="/about" className="hover:text-primary transition-colors">Leo Kulendran</Link>
          </div>
          
          <h1 className="heading-xl mb-6 animate-fade-in opacity-0 text-balance" style={{ animationDelay: '0.5s' }}>
            Automating Excellence in <span className="text-primary">DevOps Engineering</span>
          </h1>
          
          <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in opacity-0 text-balance" style={{ animationDelay: '0.7s' }}>
            Specialized in building scalable infrastructure, CI/CD pipelines, and cloud-native solutions to accelerate development and streamline operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
            <Button asChild size="lg" className="rounded-full group">
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative animate-slide-left hidden lg:block">
        <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/20 dark:border-white/5 bg-white/5 dark:bg-black/5 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="relative z-10 font-mono text-sm md:text-base space-y-5 [&>div]:opacity-90">
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span> 
                <span className="typing-animation">whoami</span>
              </div>
              <div>DevOps Engineer with expertise in cloud infrastructure, CI/CD pipelines, and automation</div>
              
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span> 
                <span className="typing-animation">ls skills/</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "GitHub Actions", "Ansible", "Jenkins", "Prometheus", "Grafana"].map((skill, index) => (
                  <span 
                    key={skill} 
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary dark:bg-secondary/30"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span> 
                <span className="typing-animation">cd projects/</span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-2 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl" />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center shadow-sm">
          <div className="w-1.5 h-3 bg-primary/35 rounded-full animate-[slide-down_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;