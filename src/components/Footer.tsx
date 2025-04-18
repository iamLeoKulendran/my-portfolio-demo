
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">DevOps Engineer</h3>
            <p className="text-muted-foreground max-w-xs">
              Building reliable, scalable infrastructure and automated workflows
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/iamLeoKulendran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/leo-kulendran/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:leosiraj@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t">
          <p className="text-center text-muted-foreground">
            &copy; {currentYear} DevOps Engineer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
