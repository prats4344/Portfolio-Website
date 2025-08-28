import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Fintech Risk Assessment System",
      description: "An AI-powered web app that predicts credit risk, and worthy financial insights.",
      technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "Matplotlib"],
      github: "https://github.com/prats4344/smart-fintech-risk-app",
      live: "https://smart-fintech-risk-app-1.onrender.com",
      status: "Completed"
    },
    {
      title: "InventoryPal – Smart Inventory Management System",
      description: "Management system that logs products from barcodes into Excel, updates stock in real time, and generates clear summary insights.",
      technologies: ["Python", "Flask", "SQLite", "JavaScript", "Chart.js"],
      github: "https://github.com/prats4344/InventoryPal",
      live: "https://inventorypal.onrender.com/",
      status: "Completed"
    },
    {
      title: "FinWise – Personal Finance Tracker",
      description: "A personal finance tracker that helps users manage expenses, analyze spending patterns, and visualize financial health with smart insights.",
      technologies: ["Python", "Flask", "SQLite", "Chart.js", "Pandas"],
      github: "https://github.com/prats4344/finwise-finance-tracker",
      live: "https://finwise-app.onrender.com",
      status: "Completed"
    },
    {
      title: "Customer Churn Prediction",
      description: "A real-world MLOps project that predicts telecom customer churn with XGBoost, integrates Optuna tuning, MLflow tracking, SHAP explainability, and deploys seamlessly via FastAPI backend & Streamlit web app.",
      technologies: ["Python", "XGBoost", "Optuna", "FastAPI", "Streamlit"],
      github: "https://github.com/prats4344/churn-prediction-project",
      live: "https://customer-churn-frontend.onrender.com",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities.
            Each project demonstrates different aspects of full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-glow slide-up">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="flex-1"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.live && project.live !== "#" && (
                  <Button 
                    size="sm" 
                    asChild
                    className="flex-1"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
