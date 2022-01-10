import { useCallback, useEffect, useState } from "react";
import { getPageRecipes } from "../../../services/masakan";
import RecipesCard from "../../molecules/Card";
import LoadingCard from "../../molecules/Card/LoadingCard";

export default function ResultCategory() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPageRecipesAPI = useCallback(async () => {
    const data = await getPageRecipes();
    console.log(data);
    setRecipes(data);
    setLoading(true);
  }, [getPageRecipes]);

  useEffect(() => {
    getPageRecipesAPI();
  }, []);

  const loadingPost = new Array(4);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading
          ? recipes.slice(0, 4).map((recipe) => {
              return (
                <RecipesCard
                  thumb={recipe.thumb}
                  dificulty={recipe.dificulty}
                  portion={recipe.portion}
                  id={recipe.key}
                  title={recipe.title}
                  times={recipe.times}
                />
              );
            })
          : loadingPost.fill(4).map((item) => {
              return <LoadingCard />;
            })}
      </div>
    </>
  );
}
