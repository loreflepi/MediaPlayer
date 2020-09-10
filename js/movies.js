const buttonShow = document.getElementById("buttonShow");
const apiKey = "b89fc45c2067cbd33560270639722eae";


getMovies();


async function getMovies(){
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    let ids = [];
    for(let i = 0; i < 20; i++){
        ids.push(getMovie(data.results[i].id));
    }
    let result = await Promise.all(ids);
    const movieList = document.getElementById('container__movies');
    movieList.innerHTML = '';
    result.forEach(re => {
        let domVariable = document.createElement("div");
        domVariable.className = "container__movies--details";
        domVariable.innerHTML = `   <img src="https://image.tmdb.org/t/p/w342${re.poster_path}">
                                    <b>${re.title}</b>
                                    <p>${re.release_date}</p>`;
        movieList.appendChild(domVariable);
    });
}

async function getMovie(id){
    const urlFirsts = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const responseMovies = await fetch(urlFirsts);
    const dataMovies = await responseMovies.json();
    const movieImage = `https://image.tmdb.org/t/p/w342${dataMovies.poster_path}`;
    return dataMovies;
}