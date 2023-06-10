export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_pGPrne0Ane1qu8wcg857Gepyajam00g26yvCnluyqk7Z5N4ciKPMirdR9r1h2EY2`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
