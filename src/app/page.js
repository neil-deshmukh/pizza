import FavMenu from "./components/FavMenu";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Offers from "./components/Offers";
import Reasons from "./components/Reasons";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reasons />
      <FavMenu />
      <Offers />
      <Newsletter />
    </main>
  );
}
