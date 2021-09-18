const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "민정",
          name: "김민정",
          phone: "010-1234-5678",
          email: "123@gmail.com",
        },
        {
          id: "재은",
          name: "윤재은",
          phone: "010-0000-0000",
          email: "000@gmail.com",
        },
      ],
    };
  },
  methods: {},
});

app.component("friend-contact", {
  template: `
  <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "민정",
        name: "김민정",
        phone: "010-1234-5678",
        email: "123@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
