let apiKey = "e690af63c7b64409a619313d5d384b4c";
let apiUrl = `https://newsapi.org/v2/everything?q=Apple&from=2023-11-29&sortBy=popularity&apiKey=${apiKey}`;

let mostrar_noticias = document.getElementById("noticias");
fetch(apiUrl)
  .then((resp) => resp.json())
  .then(async (dato) => {
    console.log(dato);
    let noticias = dato.articles;
    noticias.slice(0, 6).map(async (numero) => {
      let div = document.createElement("noticias");
      div.className = "noticia";
      div.innerHTML = `<br>
                  <img style="max-width:647.885px" src=${numero.urlToImage}><br>
                  <p>${numero.description}</p>`;
      mostrar_noticias.appendChild(div);
    });
  });
