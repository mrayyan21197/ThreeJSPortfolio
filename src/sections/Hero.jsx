import HeroText from "../components/HeroText";
import { Particles } from "../components/Particles";
import { AuroraBackground } from "../components/ui/aurora-background";

const Hero = () => {
  return (
    <section className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space px-4 md:px-0" id="home">
      <AuroraBackground className="h-screen w-full">
        {/* Background Particles */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <Particles />
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <HeroText />
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
