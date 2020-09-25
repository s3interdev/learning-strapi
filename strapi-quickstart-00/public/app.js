const generateTemplate = async () => {
  // get the items from the api
  const res = await fetch("/articles");

  // format the items in json
  const articles = await res.json();

  const blogContainer = document.querySelector(".container");

  articles.forEach((article) => {
    const html = `
      <div class="card">
        <div class="card-header">
          <img src="${article.thumbnail.url}" alt="pirate stuff" />
        </div>
        <div class="card-body">
          <h4>${article.title}</h4>
          <p>${article.content}</p>
        </div>
      </div>
    `;

    blogContainer.innerHTML += html;
  });
};

generateTemplate();
