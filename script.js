const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3832f848d12ad047efdd0c9e4b297320&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=3832f848d12ad047efdd0c9e4b297320&query=";


const main = document.querySelector("#section");
const form = document.querySelector("#form");
const search = document.querySelector("#query");

returnMovie(APILINK);

function returnMovie(url) {
   fetch(url).then(res => res.json()).then(function (data) {
      console.log(data.results)
      data.results.forEach(element => {
         const div_card = document.createElement("div");
         div_card.setAttribute("class", "card");
         const row = document.createElement("div");
         row.setAttribute("class", "row");
         const column = document.createElement("div");
         column.setAttribute("class", "column");
         const image = document.createElement("img");
         image.setAttribute("class", "thumpnail");
         const title = document.createElement("h3");

         title.innerHTML = `${element.title}`;
         image.src = IMG_PATH + element.poster_path;

         div_card.appendChild(image);
         div_card.appendChild(title);
         column.appendChild(div_card);
         row.appendChild(column);


         main.appendChild(row);
      });
   });
}

form.addEventListener("submit", e => {
   e.preventDefault();
   main.innerHTML = "";

   const searchItem = search.value;

   if (searchItem) {
      returnMovie(SEARCHAPI + searchItem);
      searchItem = "";
   }
})