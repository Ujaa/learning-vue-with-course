const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and create website what I want!",
      courseGoal2: "<h2>vue 3끝장낼거야.</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoal;
      else return this.courseGoal2;
    },
  },
});

app.mount("#user-goal");
