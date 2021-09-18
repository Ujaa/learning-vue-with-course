const app = Vue.createApp({
  data() {
    return {
      name: "Yujin",
      age: 21,
      imageSrc: "image.jpg",
    };
  },
  methods: {
    getRandomNum() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
