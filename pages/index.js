import Hero from "../components/organism/Hero";
import Navbar from "../components/organism/Navbar";
import ResultRecipes from "../components/organism/ResultRecipes";

export default function Home() {
  return (
    <>
      <section className="font-inter text-base text-black bg-white antialiased font-feature-default">
        <section className="sticky top-0 z-50">
          <Navbar />
        </section>
        <div className="relative">
          <section className="px-6 pt-8 hero">
            <Hero />
          </section>
          <section className="container mx-auto px-6 -mt-6 md:px-16 md:-mt-20 lg:px-32 lg:-mt-24 ">
            <h1 className="text-3xl text-gray-900 font-medium mb-3">
              Daftar Resep Terbaru
            </h1>
            <ResultRecipes />
          </section>
        </div>
      </section>
    </>
  );
}
