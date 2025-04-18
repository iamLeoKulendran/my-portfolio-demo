
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Get in Touch
          </h2>
          <p className="body-lg text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg" className="rounded-full">
              <a href="mailto:leosiraj111@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="https://www.linkedin.com/in/leo-kulendran/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="https://github.com/iamLeoKulendran" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
          
          <p className="text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
            I'll typically respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
