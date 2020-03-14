class Usuarios {
    buscaUsuarios() {
        return fetch("./usuario.json", { method: 'get' })
    } 
  }

class Tweets {
    buscaTweets() {
        return fetch("./tweets.json", { method: 'get' })
    } 
  }

class Follow {
    buscaFollow() {
        return fetch("./follow.json", {method: 'get'})
    }
} 