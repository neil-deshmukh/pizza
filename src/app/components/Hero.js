import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero pt-9 bg-gray-200">
      <div className="w-[1200px] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src="/pcut.jpeg" height={1000} width={500} alt="pizza" />
          <div>
            <h1 className="text-6xl font-bold font-serif">
              <span className="text-orange-400 mr-6">Good</span>
              <span>Food.</span>
              <br /> <span>Good</span>
              <span className="text-orange-400 ml-6">Moments.</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat
              ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">View Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}
