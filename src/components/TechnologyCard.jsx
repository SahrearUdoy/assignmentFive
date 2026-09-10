export default function TechnologyCard({ technology }) {
  return (
    <div>
      <img src={technology.icon} alt="" />
      <span>{technology.badge}</span>
      <h2>{technology.name}</h2>
      <p>{technology.description}</p>
      <span>{technology.category}</span>
      <span>{technology.difficulty}</span>
      <span>{technology.rating}</span>
      <button>Add to Stack</button>
    </div>
  );
}
