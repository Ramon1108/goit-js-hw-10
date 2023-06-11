const BASE_URL = `https://api.thecatapi.com/v1`;
const API_KEY = `live_pGPrne0Ane1qu8wcg857Gepyajam00g26yvCnluyqk7Z5N4ciKPMirdR9r1h2EY2`;
export function fetchBreeds() {
  const url = `${BASE_URL}/breeds`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const url = `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
