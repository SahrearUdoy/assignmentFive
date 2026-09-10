import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

export default function ExploreTechnologies() {
  return (
    <div>
      <h2>
        Explore the <span>Technologies</span>
      </h2>

      <p>Pick one technology per category to build your ideal stack.</p>

      <div>
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          ></TechnologyCard>
        ))}
      </div>
    </div>
  );
}
