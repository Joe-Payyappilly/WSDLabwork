fetch('http://localhost:8080/jokes.json')
  .then(response => response.json())
  .then(data => {
    const categories = Object.keys(data);
    categories.forEach(category => {
      const jokes = Array.isArray(data[category]) ? data[category] : [data[category]];
      const categoryList = document.createElement('ul');
      jokes.forEach(joke => {
        const jokeItem = document.createElement('li');
        jokeItem.textContent = joke;
        categoryList.appendChild(jokeItem);
      });
      const categoryHeading = document.createElement('h2');
      categoryHeading.textContent = category;
      document.body.appendChild(categoryHeading);
      document.body.appendChild(categoryList);
    });
  })
  .catch(error => console.error(error));