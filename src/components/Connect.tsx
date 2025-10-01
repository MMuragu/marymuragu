import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Connect = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:muragumary1@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/mary-muragu-016482309"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MMuragu"
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+254769689491"
    },
  ];

  return (
    <section id="connect" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          LET'S CONNECT
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Feel free to reach out
        </p>
        
        <div className="flex justify-center gap-6">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center hover:bg-card-hover hover:scale-110 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={contact.label}
            >
              <contact.icon className="w-7 h-7 text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
