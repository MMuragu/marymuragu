import { Code2, Database, Palette, Globe, Zap, Terminal } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Python", icon: Code2 },
    { name: "AI & Machine Learning", icon: Zap },
    { name: "Data Structures & Algorithms", icon: Terminal },
    { name: "Flask", icon: Code2 },
    { name: "Postman", icon: Globe },
    { name: "Three.js", icon: Code2 },
    { name: "MotionBuilder", icon: Palette },
    { name: "Linux", icon: Terminal },
    { name: "PostgreSQL", icon: Database },
    { name: "Git", icon: Code2 },
    { name: "GitHub", icon: Globe },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in">
          SKILLS
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-4 p-6 rounded-lg bg-card hover:bg-card-hover transition-all duration-300 animate-scale-in hover:scale-110 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors duration-300 group-hover:rotate-6">
                <skill.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm text-foreground text-center group-hover:text-primary transition-colors duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
