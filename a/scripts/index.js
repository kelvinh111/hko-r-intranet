var app = new Vue({
  el: "#app",
  data() {
    return {
      list: null
    };
  },
  methods: {},
  mounted() {
    axios.get("scripts/wiki.json").then(res => {
      this.list = res.data;
    });
  }
});
