export default function TechnologyCard({ technology }) {
  return (
    <div className="border border-gray-300 rounded-2xl p-5">
      <div className="flex justify-between">
        <img src={technology.icon} alt="" className="w-6 h-6" />
        <span
          className={` p-2 ${
            technology.badge === "Popular"
              ? "bg-blue-200 text-blue-700"
              : technology.badge === "Essential"
                ? "bg-orange-400 text-orange-700"
                : technology.badge === "Reliable"
                  ? "bg-green-300 text-green-700"
                  : technology.badge === "Fast"
                    ? "bg-violet-300 text-violet-700 "
                    : technology.badge === "Minimal"
                      ? "bg-gray-300 text-gray-700 "
                      : technology.badge === "Top SQL"
                        ? "bg-pink-400 text-pink-700"
                        : technology.badge === "Containers"
                          ? "bg-amber-300 text-amber-700"
                          : technology.badge === "Modern"
                            ? "bg-lime-300 text-lime-700"
                            : technology.badge === "Versatile"
                              ? "bg-red-200 text-red-700"
                              : ""
          }`}
        >
          {technology.badge}
        </span>
      </div>

      <h2 className="pt-4 pb-3">{technology.name}</h2>
      <p className="pb-4">{technology.description}</p>

      <div className="flex justify-between">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span>{technology.rating}</span>
      </div>

      <button className="bg-black text-white w-full p-3 rounded-lg">
        Add to Stack
      </button>
    </div>
  );
}
