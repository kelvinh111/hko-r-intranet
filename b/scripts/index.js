var app = new Vue({
  el: "#app",
    data: {
    cats: {},
    list: [],
    selected: null,
    filterOption: "all",
    filterText: "",
    option: {
      itemSelector: ".element-item",
      getFilterData: {},
      getSortData: {
        name: "text",
        category: "cat"
      }
    }
  },
  methods: {
    filter: function (key) {
      this.$refs.cpt.filter(key);
    }
  },
  computed: {
    filteredList() {
      var self = this;
      return this.list.filter(function (item) {
        var searchRegex = new RegExp(
          self.filterText.replace(/[^a-zA-Z0-9 ]/g, ""),
          "i"
        );
        return searchRegex.test(item.text);
      });
    }
  },
  created: function () {
    this.cats = _.keys(src);
    let idx = 0;
    _.forEach(src, (v, k) => {
      this.list = this.list.concat(
        _.map(v, (a) => {
          a.cat = k;
          a.catCode = _.kebabCase(k);
          a.idx = idx;
          return a;
        })
      );
      idx++;
    });

    this.option.getFilterData = {
      "all": function () {
        return true;
      }
    };

    _.forEach(this.cats, (cat) => {
      this.option.getFilterData[cat] = function (el) {
        return el.cat === cat;
      };
    });
  }
});
