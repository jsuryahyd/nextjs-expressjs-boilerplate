
module.exports = {
    serverRuntimeConfig: { // Will only be available on the server side
      mySecret: 'secret'
    },
    publicRuntimeConfig: { // Will be available on both server and client
      baseUrl: 'http://192.168.2.143:3000',
      apiPrefix:"/api"
    }
  }
