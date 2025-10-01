import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const experiences = [
    {
      title: "Backend Developer",
      company: "Jhub Africa",
      period: "May 2025 - September 2025",
      technologies: ["Three.js", "MotionBuilder/Blender", "django", "PostgreSQL"],
      description: "Creating an Educational Toolkit for learners with hearing impairment to create an inclusive learning environment using AI, Machine Learning and 3D avatars. "
    },
    {
      title: "Computer Science Undergrad",
      company: "JKUAT",
      period: "September 2023 - Present",
      technologies: ["Python", "Java", "C", "C++", "HTML", "CSS", "JavaScript","bash"],
      description: "Exploring All areas of tech!"
    }
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 400);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".experience-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in">
          EXPERIENCE
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                data-index={index}
                className={`experience-item relative pl-20 transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                
                <div className="group bg-card p-6 rounded-lg border border-border hover:bg-card-hover transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs group-hover:bg-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
