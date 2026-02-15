let joke = document.getElementById("joke");
let button = document.querySelector(".btn");

button.addEventListener("click", async() => {
    joke.classList.remove("show")
    let url = await fetch("https://v2.jokeapi.dev/joke/Any");
    let response = await url.json();
    console.log(response);

    if(response.type === "single")
    {
        joke.textContent = response.joke
    }
    else {
        joke.textContent = response.setup + " " + response.delivery;
    }

    setTimeout(() => {
        joke.classList.add("show")
    }, 50);
});
