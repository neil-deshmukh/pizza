import clsx from "clsx";

export default function Card({ id, icon, title, desc }) {
  return (
    <div
      className={clsx("card w-96 bg-base-100 shadow-xl", {
        "border border-orange-400": id == 1,
      })}
    >
      <figure className="px-10 pt-10">{icon}</figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
