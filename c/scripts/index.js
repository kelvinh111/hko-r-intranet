Vue.use(window.NavScroll);

new Vue({
  el: "#app",
  components: {},
  data() {
    return {
      container: "#scrollable-content",
      activeClass: "is-active",
      preClass: "",
      alwaysTrack: false,
      duration: 600,
      offset: 20,
      easing: ".5,0,.35,1",
      anchor: false,
      cancelable: true,
      scrollAxis: "y"
    };
  },
  computed: {
    prop() {
      return {
        container: "#scrollable-content",
        activeClass: "active-position",
        alwaysTrack: this.alwaysTrack,
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
        anchor: this.anchor,
        cancelable: this.cancelable,
        scrollX: this.scrollAxis === "x",
        scrollY: this.scrollAxis === "y"
      };
    }
  },
  methods: {}
});