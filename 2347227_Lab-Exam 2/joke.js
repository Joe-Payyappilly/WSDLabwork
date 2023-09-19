const jokeElement = document.getElementById("joke");
      const fetchJokeButton = document.getElementById("fetch-joke");

      function fetchJoke() {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
          .then((response) => response.json())
          .then((data) => {
            if (data.type === "single") {
              jokeElement.textContent = data.joke;
            } else if (data.type === "twopart") {
              jokeElement.textContent = `${data.setup} ${data.delivery}`;
            }
          })
          .catch((error) => {
            console.error(error);
            jokeElement.textContent = "Failed to fetch joke. Please try again later.";
          });
      }

      fetchJokeButton.addEventListener("click", fetchJoke);