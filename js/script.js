const API_KEY = 'api_key=a243a8f849a20f9ce98cef2aacf236c0';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + 'discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'


getMovies(API_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
    
    
}

 function showMovies(data){
    const main = document.getElementById('main');
    main.innerHTML = ' ';
    i = 0;
    data.forEach(movie => {
        
        console.log(data[i].poster_path);
        var {title,poster_path,vote_average,overview} = movie;
        const movie1 = document.createElement('div');
        movie1.classList.add('movie');
        movie1.innerHTML = `
        <a href="#"  class="toggle" onclick="toggle('${data[i].poster_path}', '${data[i].overview}', '${data[i].title}');">
         <img src="${IMG_URL+poster_path}" >
        </a>
         `
        
       i++;
        console.log(i);

        main.appendChild(movie1);   
        
    });

    
    
}

function toggle(poster,overview,title){
    
    document.body.style.overflow = "hidden";
    document.getElementById('main-popup').style.display = "flex";
    const blur = document.getElementById('main-popup');
    blur.innerHTML = ' ';

    const overlay = document.createElement('div');
        overlay.classList.add('popup');
        overlay.innerHTML = `
        
            <div>
                <img src="images/close.png" class="close">
            </div>

            <img src="${IMG_URL+poster}" class="overlay-image">

            <div class="movie-info">
              ${title}
            </div>

            <div class="overview">
              ${overview}
            </div>
        
        `
        

        blur.appendChild(overlay);

        $(' .close').click(function(){
            document.getElementById('main-popup').style.display = "none";
            document.body.style.overflow = "inherit";
        });
    
}

