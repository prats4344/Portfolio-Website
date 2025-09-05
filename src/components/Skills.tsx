import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "React", "TypeScript"],
    },
    {
      title: "Backend Development",
      skills: ["Express.js", "Python", "Java", "SQL"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "MongoDB", "Figma", "VS Code"],
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Virtual Experience Program",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_aCLeM3ZiGNd9xRiuz_1751296774040_completion_certificate.pdf",
    },
    {
      name: "Mastering Generative AI and ChatGPT",
      link: "https://media.geeksforgeeks.org/courses/certificates/3b0094079ceed7010d4ec98c97a23fd1.pdf",
    },
    {
      name: "Artificial Intelligence - IIT Guwahati (Alcheringa)",
      link: "https://cert.diceid.com/cid/o5cRR1fcaL",
    },
    {
      name: "Databases for Developers: Foundation - Oracle",
      link: "https://drive.google.com/file/d/1KsTmvzIFoGl3moTNSOi5sCneQvoOA3Eg/view?usp=sharing",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <Badge variant="outline" className="mb-4">
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels gained through academic projects and self-learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow slide-up">
              <CardHeader>
                <CardTitle className="text-xl text-center gradient-text">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto slide-up">
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-xl text-center">
                Certifications & Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm underline">{cert.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

