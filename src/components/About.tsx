import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "Love tackling complex challenges with clean, efficient code"
    },
    {
      icon: Lightbulb,
      title: "Quick Learner",
      description: "Adapt quickly to new technologies and frameworks"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering quality results and meeting deadlines"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborate effectively and contribute to team success"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a recent B.Tech Computer Science Engineering graduate with a strong foundation 
              in software development, algorithms, and system design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  During my academic journey, I've developed a deep understanding of computer science 
                  fundamentals and gained hands-on experience with modern web technologies. I'm passionate 
                  about creating user-friendly applications and solving real-world problems through code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying updated with the latest industry trends. 
                  My goal is to contribute to innovative projects while growing as a professional developer 
                  in a collaborative environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Python", "Java", "JavaScript", "TypeScript"].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 slide-up">
              {highlights.map((item, index) => (
                <Card key={index} className="card-glow">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;