import Image from "next/image";

export default function OfferCard({ src, desc, title, price }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Image src={src} height={100} width={100} alt="Movie" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title font-serif">{title}</h2>
          <span className="text-orange-400 font-semibold text-lg">{price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
