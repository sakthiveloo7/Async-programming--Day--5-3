const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
//API url
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

//To get the random joke for that to fetch the data
let randomJoke = () => {
    fetch(url).then(data => data.json()).then(item => {
        joke.textContent=`${item.joke}`
    })
    
}
//onclicking button update the content
btn.addEventListener("click", randomJoke);
randomJoke();