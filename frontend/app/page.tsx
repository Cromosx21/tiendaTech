import BestBrands from "./components/layout/BestBrands";
import Navbar from "./components/layout/Navbar";
import Slider from "./components/layout/Slider";


export default function Home() {
  return (
    <>
      <Navbar />

      <Slider />
      <main>
        <BestBrands />
      </main>

    </>
  );
}
