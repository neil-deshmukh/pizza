import { reasons } from "../data";
import Card from "./Card";

export default function Reasons() {
  return (
    <section className="py-20 bg-white w-[1200px]">
      <div className="mb-14 text-center">
        <p className="text-sm text-gray-500 font-semibold">Our Service</p>
        <h2 className="my-7 text-5xl font-bold font-serif tracking-tight">
          Why Choose Us?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> Lorem ipsum dolor sit amet, consectetur
          adipiscing
        </p>
      </div>
      <div className="flex justify-evenly">
        {reasons.map(({ Icon, title, desc }, i) => {
          return <Card id={i} icon={Icon} title={title} desc={desc} key={i} />;
        })}
      </div>
    </section>
  );
}
