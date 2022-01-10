import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
export async function getNewRecipes() {
  const URL = "api/recipes";

  const response = await axios.get(`${ROOT_API}/${URL}`);
  const responseAxios = response.data.results;

  return responseAxios;
}

export async function getPageRecipes() {
  const URL = "api/recipes/2";

  const response = await axios.get(`${ROOT_API}/${URL}`);
  const responseAxios = response.data.results;

  return responseAxios;
}

export async function getDetailRecipes(id) {
  const URL = `api/recipe/${id}`;

  const response = await axios.get(`${ROOT_API}/${URL}`);
  const responseAxios = response.data.results;

  return responseAxios;
}
