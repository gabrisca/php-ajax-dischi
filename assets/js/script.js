// Attraverso l’utilizzo di axios: al caricamento della pagina axios chiederà, attraverso una chiamata api, i dischi a php e li stamperà attraverso vue

const app = new Vue({
  el: "#app",
  data: {
    // array vuoto dove fare il push delle informazioni prese attraverso la chiamata API (i dischi)
    dischi: [],
  },
  mounted() {
    axios
      .get("http://localhost:8888/php-ajax-dischi/php-ajax-dischi/api.php")
      .then((res) => {
        // console.log(res);
        this.dischi = res.data;
        console.log(this.dischi);
      })
      .catch((err) => {
        console.error(err);
      });
  },
});
