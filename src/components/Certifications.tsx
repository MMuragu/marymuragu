import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    
      {
          title: "Building LLM Applications With Prompt Engineering",
          issuer: "NVIDIA",
          year: "2025",
          description: "Certification focused on designing, testing, and optimizing prompts to build effective applications powered by large language models."
        },
        {
          title: "Evaluation and Light Customization of Large Language Models",
          issuer: "NVIDIA",
          year: "2025",
          description: "Advanced training on assessing LLM performance and applying parameter-efficient fine-tuning techniques to adapt models for domain-specific tasks."
        },
        {
          title: "Data Science with Python",
          issuer: "IBM",
          year: "2025",
          description: "Comprehensive certification covering data analysis, visualization, machine learning, and practical applications of Python in data science workflows."
        }

  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in">
          CERTIFICATIONS
        </h2>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="group animate-slide-in bg-card border-border hover:bg-card-hover transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                    <CardDescription className="text-primary">{cert.issuer}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
