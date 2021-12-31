import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { getNewRecipes } from "../../../services/masakan";
import RecipesCard from "../../molecules/Card";
import LoadingCard from "../../molecules/Card/LoadingCard";

export default function ResultRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNewRecipesAPI = useCallback(async () => {
    const data = await getNewRecipes();
    console.log(data);
    setRecipes(data);
    setLoading(true);
  }, [getNewRecipes]);

  useEffect(() => {
    getNewRecipesAPI();
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
                  key={recipe.key}
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
