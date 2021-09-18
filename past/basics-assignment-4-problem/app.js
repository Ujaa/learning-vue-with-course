const app = Vue.createApp({
  data() {
    return {
      input: "",
      paragraphVisible: "true",
      background: "",
    };
  },
  computed: {
    classes() {
      return {
        user1: this.input === "user1",
        user2: this.input === "user2",
        visible: this.paragraphVisible,
        hidden: !this.paragraphVisible,
      };
    },
  },
  methods: {
    toggle() {
      this.paragraphVisible = !this.paragraphVisible;
    },
  },
});

app.mount("#assignment");
