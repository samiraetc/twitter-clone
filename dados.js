class DadosFollow {
    constructor() {
        this.lista  = document.getElementById("lista"); 
    }

    showFollow(dados) {
        let card = ''
         dados.forEach(function (elemento) {
            card += `
            <li class="tweet-card">
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                    <div class="tweet-header">
            <span class="fullname">
            <strong>${elemento.nome}</strong>
            </span> <br/>
            <span class="username">${elemento.usuario}</span>
            </div>

            <button class="btn btn-follow">Follow</button>
          </div>
        </li>

           `     
          });
          this.lista.innerHTML = card; 
    }
}


class DadosUsuarios {
    constructor() {
        this.nome = document.getElementById("nome");
        this.usuario = document.getElementById("usuario");
        this.site = document.getElementById("site");
        this.local = document.getElementById("local");
        this.cadastro = document.getElementById("cadastro");
        this.quantidade_tweets = document.getElementById("quantidade_tweets");
        this.seguindo = document.getElementById("seguindo");
        this.seguidores = document.getElementById("seguidores");
        this.likes = document.getElementById("likes");
    }

    showUsers(dados) {
       console.log(dados)

            this.nome.innerText = dados[0].nome;
            this.usuario.innerText = dados[0].usuario;
            this.site.innerText = dados[0].site;
            this.local.innerText = dados[0].local;
            this.cadastro.innerText = dados[0].cadastro;
            this.quantidade_tweets.innerText = dados[0].quantidade_tweets;
            this.seguindo.innerText = dados[0].seguindo;
            this.seguidores.innerText = dados[0].seguidores;
            this.likes.innerText = dados[0].likes;
          
    }
 }

 class DadosTweets {
  constructor() {
      this.listatweets  = document.getElementById("listatweets"); 
  }

  showTweets(dados) {
      let card = ''
       dados.forEach(function (elemento) {
          card += `
          <li class="tweet-card">
              <div class="tweet-content">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong> ${elemento.nome}</strong>
                  </span>
                  <span class="username">${elemento.usuario}</span>
                  <span class="tweet-time">- ${elemento.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0"> ${elemento.mensagem}
                  </p>
                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span>${elemento.comentarios}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span>${elemento.compartilhamentos}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span>${elemento.likes}</span>
                  </a>
                </div>
              </div>
            </li>

         `     
        });
        this.listatweets.innerHTML = card; 
  }
}
