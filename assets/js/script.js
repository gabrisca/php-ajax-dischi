// Attraverso l’utilizzo di axios: al caricamento della pagina axios chiederà, attraverso una chiamata api, i dischi a php e li stamperà attraverso vue

const app = new Vue({
  el: "#app",
  data: {
    // salvo in endpoint l'url per la chiamata API
    endpoint: "http://localhost:8888/php-ajax-dischi/php-ajax-dischi/index-vue.html",
    // array vuoto dove fare il push delle informazioni prese attraverso la chiamata API (i dischi)
    dischi: [],
  },
  mounted(){
    // richiamo la funzione creata in methods e passo come parametro l'endpoint
    this.callApi(this.endpoint);
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then((risp) => {
          this.dischi.push(risp.data);
        })
        .catch((error) => {
          console.log(error);
        });
       console.log(this.dischi);
    },
  },
});

