import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Section Under Maintenance",
        description:
          "Please contact me directly via email at leosiraj111@gmail.com",
        variant: "destructive",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="section-container pt-10 md:pt-20 pb-20">
        <div className="text-center mb-12">
          <h1
            className="heading-lg mb-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            Get in Touch
          </h1>
          <p
            className="body-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div
            className="lg:col-span-1 space-y-8 animate-fade-in opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="space-y-6">
                <h2 className="heading-md">Contact Information</h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a
                        href="mailto:leosiraj111@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        leosiraj111@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Linkedin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/leo-kulendran/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/leo-kulendran/
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Github className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a
                        href="https://github.com/iamLeoKulendran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/iamLeoKulendran
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                <h3 className="font-medium">Response Time</h3>
              </div>
              <p className="text-muted-foreground">
                I typically respond to messages within 12-24 hours. For urgent
                matters, please indicate so in your message.
              </p>
            </div>
          </div>

          <div
            className="lg:col-span-2 animate-fade-in opacity-0"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden border border-white/8 dark:border-white/8 bg-muted/10 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative">
              <h2 className="heading-md mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields remain unchanged */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
