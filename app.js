
const objectFollow = new Follow();
const objectDados = new DadosFollow();

objectFollow.buscaFollow()
  // fetch realizado, uso o then para pegar a resposta 
  .then(function (resposta) {
    // converto a resposta em json
    resposta.json()
      // pego os dados convertidos em json  
      .then(function (dados) {
        // envio para o método mostraNoticia dentro do meu objetoCard
        objectDados.showFollow(dados)
      })
  })


  const objectUsuarios = new Usuarios();
  const objectDados1 = new DadosUsuarios();
  
  objectUsuarios.buscaUsuarios()
    // fetch realizado, uso o then para pegar a resposta 
    .then(function (resposta) {
      // converto a resposta em json
      resposta.json()
        // pego os dados convertidos em json  
        .then(function (dados) {
          // envio para o método mostraNoticia dentro do meu objetoCard
          objectDados1.showUsers(dados)
        })
    })


    const objectTweets = new Tweets();
    const objectDados2 = new DadosTweets();
    
    objectTweets.buscaTweets()
      // fetch realizado, uso o then para pegar a resposta 
      .then(function (resposta) {
        // converto a resposta em json
        resposta.json()
          // pego os dados convertidos em json  
          .then(function (dados) {
            // envio para o método mostraNoticia dentro do meu objetoCard
            objectDados2.showTweets(dados)
          })
      })
  


  