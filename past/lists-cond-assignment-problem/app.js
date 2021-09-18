const app = Vue.createApp({
  data() {
    return {
      input: "",
      goals: [],
      show: true,
    };
  },

  methods: {
    addTask() {
      this.goals.push(this.input);
      this.input = "";
    },
    toggleShow() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
