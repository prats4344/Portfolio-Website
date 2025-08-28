import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 17, 27, 0.8), rgba(13, 17, 27, 0.9)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            💻  B.Tech CSE AIML | Looking for Opportunities
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Pratiyusha Kanungo</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A passionate <span className="text-primary font-semibold">Developer</span> and B.Tech CSE AIML student, ready to create innovative solutions and learn cutting-edge technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects">
              <Button size="lg" className="px-8 py-6 text-lg group">
                View My Work 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              <a 
                href="https://drive.google.com/file/d/1fYG_iVZqC32aDQhU69CtyudyhwotwhQe/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/prats4344" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pratiyushakanungo-sp4344" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:kanungopratiyusha@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors duration-300 group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
