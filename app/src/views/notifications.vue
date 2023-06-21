<template>
  <div class="boja">
    <appNav />
    <h1>Notifications</h1>
    <ul>
      <li v-for="notification in notifications" :key="notification._id" :class="{ 'read': notification.status === 'read' }">
        <strong>{{ notification.title }}</strong>
        <p>{{ notification.address }}</p>
        <p> {{notification.description}}</p>
        <button @click="markAsRead(notification)">Mark as Read</button>
      </li>
    </ul>
    <appFooter />
  </div>
</template>

<script>
import axios from 'axios';
import appFooter from '@/components/footer.vue';
import appNav from '@/components/nav.vue';

export default {
  name: "notifications",
  components: {
    appFooter,
    appNav
  },
  data() {
    return {
      notifications: [],
      city: '',
      userId: '',
    };
  },
  async mounted() {
    await this.fetchUserData();
    this.fetchNotifications();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await axios.get('http://localhost:4000/user', {
          headers: { token: localStorage.getItem('token') }
        });
        this.city = response.data.user.address;
        this.userId = response.data.user.id;
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    },
    fetchNotifications() {
      const city = this.city;
      const userId = this.userId;
      axios
        .get(`http://localhost:4000/notifications/${city}/${userId}`)
        .then((response) => {
          this.notifications = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    markAsRead(notification) {
      notification.status = 'read';
      axios
        .put(`http://localhost:4000/notifications/${notification._id}`, notification)
        .then(() => {
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
}
</script>

<style scoped>
.boja {
  background-size: cover;
  background-position: center;
  background-color: black;
  height: 100%;
}

li.read {
  background-color: lightgray; /* Promijenite boju pozadine na pročitanim notifikacijama */
}
</style>
