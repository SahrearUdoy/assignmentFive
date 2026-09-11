import { useState } from "react";
import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

export default function ExploreTechnologies() {
  // Event Handler

  const [count, setCount] = useState([]);

  function addToStack(technology) {
    const alreadyAdded = count.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      return;
    }
    setCount([...count, technology]);
  }

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
              onAddToStack={addToStack}
              isAdded={count.some((item) => item.id === technology.id)}
            ></TechnologyCard>
          ))}
        </div>
        {/* Your Stack secction */}
        <div className="w-[15%] pl-6">
          <div className="border border-gray-300 rounded-2xl p-5">
            <h2 className="font-bold text-lg">Your Stack</h2>
            <span className="bg-gray-200 rounded-full px-2 py-1 text-sm">
              {count.length}
            </span>
            <p className="text-gray-400 text-sm  text-center py-8">
              No technologies selected yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
