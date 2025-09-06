import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import { Particles } from "../components/Particles";

const Experiences = () => {
  return (
    <section className="relative c-space section-spacing" id="experiences">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <Particles />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-full">
          <Timeline data={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
