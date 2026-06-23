import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section
      id="experiences"
      style={{ padding: "96px 0", background: "#0a0a0a" }}
    >
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
