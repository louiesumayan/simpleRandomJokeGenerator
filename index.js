const jokeContainer = document.getElementById('joke');
const jokeCategory = document.getElementById('category');
const jokeId = document.getElementById('jokeId');
const joke__container = document.querySelector('.joke__container');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?type=single';

function getJoke() {
  joke__container.classList.remove('fade');
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = item.joke;
      jokeCategory.textContent = item.category;
      jokeId.textContent = item.id;
      joke__container.classList.add('fade');
    });
}

btn.addEventListener('click', getJoke);
