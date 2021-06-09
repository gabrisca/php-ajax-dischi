// Attraverso l’utilizzo di axios: al caricamento della pagina axios chiederà, attraverso una chiamata api, i dischi a php e li stamperà attraverso vue

const app = new Vue({
  el: "#app",
  data: {
    // array vuoto dove fare il push delle informazioni prese attraverso la chiamata API (i dischi)
    dischi: [],

    // array vuoto dove fare il push delle informazioni prese attraverso la chiamata API (i generi)
    generi: [],

    cercaGenere: 'all',

    // salvo in una variabile l'endpoint dal quale estrarre informazioni
    endpoint: 'http://localhost:8888/php-ajax-dischi/php-ajax-dischi/api.php',
  },
  mounted() {
    // opzione 1: chiamata diretta

    // axios
    //   .get("http://localhost:8888/php-ajax-dischi/php-ajax-dischi/api.php")
    //   .then((res) => {
    //     // console.log(res);
    //     this.dischi = res.data;
    //     console.log(this.dischi);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  },
  // opzione 2: creo una funzione per la chiamata axios
  methods: {
    getApi(){
      // nella chiamata axios concateno l'endpoint e il genere passato come parametro
      axios.get(this.endpoint, {
        params: {
          genre: this.cercaGenere
        }
      })
      .then((res) => {
        // a res.data aggiungo .dischi perchè ho aggiunto un livello in api.php
        this.dischi = res.data.dischi
        // console.log(this.dischi)
        // a res.data aggiungo .generi perchè ho aggiunto un livello in api.php
        this.generi = res.data.generi
        // console.log(this.generi)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  created(){
    this.getApi();
  },
});
