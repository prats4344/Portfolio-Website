import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <div className="font-mono font-bold text-xl gradient-text">
            &lt;Portfolio/&gt;
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-2 rounded-full hover:bg-muted transition-colors duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} Made with <Heart className="h-4 w-4 text-red-500" /> by Your Name
            </p>
            <p className="mt-1">
              B.Tech CSE Graduate • Ready for New Opportunities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;