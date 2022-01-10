import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/organism/Navbar";
import ResultRecipes from "../../components/organism/ResultRecipes";
import ResultCategory from "../../components/organism/ResultRecipes/ResultCategory";

import { getDetailRecipes } from "../../services/masakan";
import Detail from "./detail";
import SkeletonDetail from "./SkeletonDetail";

export default function DetailResep() {
  const { query, isReady } = useRouter();

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDetailRecipesAPI = useCallback(async (id) => {
    try {
      const data = await getDetailRecipes(id);
      console.log(data);
      setDetails(data);
      setLoading(true);
    } catch (err) {
      throw err;
    }
  });

  useEffect(() => {
    if (isReady) {
      console.log("router sudah tersedia", query.id);
      getDetailRecipesAPI(query.id);
    } else {
      console.log("router belum tersedia");
    }
  }, [query.isReady]);

  return (
    <>
      <section className="sticky top-0 z-50">
        <Navbar />
      </section>
      {loading ? (
        <Detail
          title={details.title}
          thumb={details.thumb}
          times={details.times}
          servings={details.servings}
          dificulty={details.dificulty}
          desc={details.desc}
          ingredient={details.ingredient}
          step={details.step}
        />
      ) : (
        <SkeletonDetail />
      )}
      <div className="container mx-auto mt-4 px-5 lg:px-24">
        <h1 className="text-3xl text-gray-900 font-medium mb-3">
          Resep Lainnya
        </h1>
        <ResultCategory />
      </div>
    </>
  );
}
