import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Instrumate Africa",
      year: "2025",
      description: "An Education Toolkit for learners with hearing impairments that uses AI and 3D avatar technology to facilitate learning.",
      tags: ["Django", "Machine Learning", "PostgreSQL", "Three.js", "Blender/Motion Builder"],
      image: "/instrumate.jpg"
    },
    {
      title: "BugTracker",
      year: "2025",
      description: "A RESTful API that enables teams to efficiently manage and resolve software bugs through structured collaboration. The system provides endpoints for admins, testers, and collaborators to log, assign, update, and track issues throughout the development lifecycle.",
      tags: ["Flask", "SQL", "REST API", "Docker"],
      image: "/bugtracker.webp"
    },
    {
      title: "Kikuyu to English Translation Model",
      year: "2025",
      description: "A Natural Language Processing (NLP) model designed to translate Kikuyu text into English, facilitating better communication and understanding between speakers of both languages.",
      tags: ["Python", "Machine Learning", "NLP", "PyTorch"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in">
          PROJECTS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in bg-card border-border cursor-pointer hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <Badge variant="secondary" className="group-hover:bg-primary/20">{project.year}</Badge>
                </div>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs group-hover:border-primary/50 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
