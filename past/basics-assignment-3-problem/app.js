const app = Vue.createApp({
  data() {
    return {
      num: 0,
      resultText: "Not there yet",
    };
  },
  computed: {
    checkNum() {
      if (this.num < 37) {
        return "Not there yet";
      } else if (this.num === 37) {
        return this.num;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    checkNum() {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
  methods: {
    addFive() {
      this.num += 5;
    },
    addOne() {
      this.num += 1;
    },
  },
});
app.mount("#app");
