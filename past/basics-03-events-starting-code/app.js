const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
      counter: 0,
    };
  },
  methods: {
    submitForm(event) {},
    addNum() {
      this.counter++;
    },
    removeNum() {
      this.counter--;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName + "!";
    },
  },
});

app.mount("#events");
