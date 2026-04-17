import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, Users } from "lucide-react";
import heroImage from "@/assets/hero-students.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70 z-10" />
        <img
          src={heroImage}
          alt="International students celebrating success"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-1 w-12 bg-secondary rounded-full" />
            <span className="text-secondary-foreground font-semibold uppercase tracking-wider text-sm">
              Your Gateway to Global Education
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Study Abroad with
            <span className="block text-secondary">EeshaGlobalServices</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Transform your future with world-class education. We guide you every step of the way to
            study at top universities across the globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/30 text-lg px-8 py-6"
            >
              Explore Services
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-primary-foreground">
              <div className="bg-secondary/20 p-3 rounded-lg backdrop-blur-sm">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-2xl">500+</p>
                <p className="text-sm text-primary-foreground/80">Students Placed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground">
              <div className="bg-secondary/20 p-3 rounded-lg backdrop-blur-sm">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-2xl">25+</p>
                <p className="text-sm text-primary-foreground/80">Countries</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground">
              <div className="bg-secondary/20 p-3 rounded-lg backdrop-blur-sm">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-2xl">98%</p>
                <p className="text-sm text-primary-foreground/80">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
