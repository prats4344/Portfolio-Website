import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.TECH in Computer Science Engineering (AIML)",
      institution: "Institute of Technical Education and Research",
      location: "Bhubaneswar, Odisha",
      duration: "2023 - 2027",
      cgpa: "8.12/10",
      highlights: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Machine Learning",
        "Artificial Intelligence"
      ]
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "DAV Public School",
      location: "Cuttack, Odisha",
      duration: "2021 - 2023",
      percentage: "77.8%",
      highlights: [
        "Mathematics",
        "Physics",
        "Chemistry"
      ]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Consistently maintained decent CGPA throughout the degree program"
    },
    {
      title: "Project Lead",
      description: "Led a team of 3 for a Club project"
    },
    {
      title: "Technical Workshop",
      description: "Attended multiple workshops on modern web development and cloud computing"
    },
    {
      title: "Coding Competitions",
      description: "Participated in programming contests and hackathons"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <Badge variant="outline" className="mb-4">
            Education
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background and academic achievements that shaped my foundation 
            in computer science and engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="card-glow slide-up">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-sm">{edu.location} • {edu.duration}</p>
                      <p className="text-sm font-medium text-primary">
                        {index === 0 ? "CGPA" : "Percentage"}: {edu.cgpa}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((subject, subIndex) => (
                      <Badge key={subIndex} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto slide-up">
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Achievements & Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">{achievement.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

