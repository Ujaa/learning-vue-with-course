const app = Vue.createApp({
  data() {
    return {
      input: "결과",
      input2: "두번째",
    };
  },
  methods: {
    showAlert() {
      alert("첫 번째 미션!");
    },
    showInput(event) {
      this.input = event.target.value;
    },
    showInput2(event) {
      this.input2 = event.target.value;
    },
  },
});
app.mount("#assignment");
