import { FavMenuItems } from "../data";
import MenuCard from "./MenuCard";

export default function FavMenu() {
  return (
    <section>
      <div className="mb-14 text-center w-[1200px]">
        <p className="text-sm text-gray-500 font-semibold">Quality Food</p>
        <h2 className="my-7 text-5xl font-bold font-serif tracking-tight">
          Our Popular Menu
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> Lorem ipsum dolor sit amet, consectetur
          adipiscing
        </p>
      </div>
      <div className="flex justify-evenly">
        {FavMenuItems.map(({ src, info, title }, i) => {
          return <MenuCard src={src} info={info} title={title} key={i} />;
        })}
      </div>
    </section>
  );
}
