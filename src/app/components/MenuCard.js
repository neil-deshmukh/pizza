import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";

export default function MenuCard({ src, info, title }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image
          src={src}
          height={200}
          width={200}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="flex justify-center mt-3">
        <TiStarFullOutline color="#F8AA02" />
        <TiStarFullOutline color="#F8AA02" />
        <TiStarFullOutline color="#F8AA02" />
        <TiStarFullOutline color="#F8AA02" />
        <TiStarFullOutline color="#F8AA02" />
      </div>
      <div className="card-body items-center text-center">
        <p className="text-sm text-gray-500 font-semibold">{info}</p>
        <h2 className="card-title my-4">{title}</h2>
        <div className="card-actions">
          <button className="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
