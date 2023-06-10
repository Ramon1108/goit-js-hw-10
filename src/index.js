import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}

function hideError() {
  error.style.display = 'none';
}

function showCatInfo(imageUrl, breedName, description, temperament) {
  const catImage = document.createElement('img');
  catImage.src = imageUrl;
  catInfo.appendChild(catImage);

  const breedTitle = document.createElement('h2');
  breedTitle.textContent = breedName;
  catInfo.appendChild(breedTitle);

  const descriptionPara = document.createElement('p');
  descriptionPara.textContent = description;
  catInfo.appendChild(descriptionPara);

  const temperamentPara = document.createElement('p');
  temperamentPara.textContent = temperament;
  catInfo.appendChild(temperamentPara);

  catInfo.style.display = 'block';
}

function clearCatInfo() {
  catInfo.innerHTML = '';
  catInfo.style.display = 'none';
}

function populateBreedSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

breedSelect.addEventListener('change', () => {
  const breedId = breedSelect.value;
  clearCatInfo();
  showLoader();
  fetchCatByBreed(breedId)
    .then(data => {
      const cat = data[0];
      const imageUrl = cat.url;
      const breedName = cat.breeds[0].name;
      const description = cat.breeds[0].description;
      const temperament = cat.breeds[0].temperament;
      hideLoader();
      showCatInfo(imageUrl, breedName, description, temperament);
    })
    .catch(error => {
      hideLoader();
      showError();
      console.error(error);
    });
});

showLoader();
fetchBreeds()
  .then(breeds => {
    hideLoader();
    populateBreedSelect(breeds);
  })
  .catch(error => {
    hideLoader();
    showError();
    console.error(error);
  });
