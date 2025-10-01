import { useState, useEffect } from "react";
import { User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    " Hello World👋",
    " I'm Muragu",
    
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary/20 hover:scale-105 transition-transform duration-300">
            <img 
              src="/he.jpg" 
              alt="Mary Muragu" 
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
               <span className="text-primary min-h-[1.2em] inline-block">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A Computer Science undergrad at Jkuat trying to balance backend development, AI, machine learning, and chess addiction.
            </p>
            <a href="/MURAGU CV.pdf" download="Muragu_Resume.pdf">
            <Button className="gap-2 hover:scale-105 transition-transform" size="lg">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
