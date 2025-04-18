import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="section-container flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1
          className="heading-xl mb-4 animate-fade-in opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          404
        </h1>
        <p
          className="body-lg text-muted-foreground mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button
          asChild
          size="lg"
          className="animate-fade-in opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
