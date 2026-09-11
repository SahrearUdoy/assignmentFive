import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

export default function ExploreTechnologies() {
  return (
    // Main Div
    <div className="inter-font max-w-7xl mx-auto px-4 py-16 ">
      {/* 12 Technologies Cards heading and paragraph */}
      <h2 className="">
        Explore the <span>Technologies</span>
      </h2>

      <p className="pt-4 pb-10">
        Pick one technology per category to build your ideal stack.
      </p>
      {/* 12 Technologies Card */}
      <div className="flex">
        <div className="w-[85%] grid grid-cols-3 gap-6 ">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            ></TechnologyCard>
          ))}
        </div>
        {/* Your Stack secction */}
        <div className="w-[15%] pl-6">
          <h2>Your Stack</h2>
          <p>No technologies selected yet</p>
        </div>
      </div>
    </div>
  );
}
