const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

// Dummy image data for testing
const movies = [
    {
        title: "Monster House",
        poster_path: "movie.jpg"
    },
    {
        title: "Monster House",
        poster_path: "movie.jpg"
    },
    {
        title: "Monster House",
        poster_path: "movie.jpg"
    },
    {
        title: "Monster House",
        poster_path:"movie.jpg"
    },
    {
        title: "Monster House",
        poster_path: "movie.jpg"
    },
    {
        title: "Monster House",
        poster_path: "movie.jpg"
    }
];

// Initial load
showMovies(movies);

function showMovies(movieList) {
    main.innerHTML = '';
    movieList.forEach(element => {
        const div_column = document.createElement('div');
        div_column.classList.add('column');

        const div_card = document.createElement('div');
        div_card.classList.add('card');

        const image = document.createElement('img');
        image.src = element.poster_path;
        image.classList.add('thumbnail');

        const title = document.createElement('h3');
        title.innerText = element.title;

        div_card.appendChild(image);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        main.appendChild(div_column);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchItem = search.value.toLowerCase();
    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchItem)
    );
    showMovies(filtered);
    search.value = "";
});
