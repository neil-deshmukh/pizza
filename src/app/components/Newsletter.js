import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Newsletter() {
  return (
    <section className="py-40">
      <div className="w-[1200px] mx-auto flex items-end">
        <div className="w-[60%]">
          <h2 className="text-4xl font-serif">Subscribe to our NewsLetter</h2>
          <p className="my-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
          </p>
          <input
            type="email"
            placeholder="Enter you email address"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-secondary">
            Discover <IoIosArrowDroprightCircle fontSize={30} color="#fff" />
          </button>
        </div>
        <div className="text-center w-[40%]">
          <h2 className="text-4xl font-serif mb-6">Ready to Order</h2>
          <button className="btn btn-primary">Order</button>
        </div>
      </div>
    </section>
  );
}
