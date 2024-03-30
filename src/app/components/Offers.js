import { OffersData } from "../data";
import OfferCard from "./OfferCard";

export default function Offers() {
  return (
    <section className="pt-40">
      <div className="w-[1200px] mx-auto flex flex-col items-center">
        <div className="mb-14 text-center">
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
        <div className="flex gap-7">
          <div className="card w-[50%] bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/pizzabg.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h3>Lunch Time</h3>
              <h2 className="card-title my-4 text-2xl italic">
                <span className="text-5xl">20%</span> Off
              </h2>
              <p className="mb-4">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {OffersData.map(({ src, desc, title, price }, i) => {
              return (
                <OfferCard
                  src={src}
                  desc={desc}
                  title={title}
                  price={price}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
