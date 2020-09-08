const buttonShow = document.getElementById("buttonShow");
const apiKey = "b89fc45c2067cbd33560270639722eae";

buttonShow.onclick = () => {
    getMovies();
}

async function getMovies(){
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    let ids = [];
    for(let i = 0; i < 5; i++){
        ids.push(getMovie(data.results[i].id));
    }
    let result = await Promise.all(ids);
    result.forEach(re => console.log(re));
}

async function getMovie(id){
    const urlFirsts = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const responseMovies = await fetch(urlFirsts);
    const dataMovies = await responseMovies.json();
    return dataMovies;
}