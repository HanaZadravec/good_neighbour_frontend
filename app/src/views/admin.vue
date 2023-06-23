<template>
  <div class="boja">
    <adminNav />
    <div class="container">
      <h1>REPORTED CRIMES</h1>
      <div class="card">
        <div class="card-header">
          Reported by: {{ crime.reporterEmail }}
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ crime.crimeTitle }}</h5>
          <p class="card-text">Address: <span class="capitalize">{{ crime.crimeAddress }}</span>, <span class="capitalize">{{ crime.crimeCity }}</span></p>
          <p class="card-text">Crime Level: {{ crime.crimeLevel }}</p>
          <p class="card-text">Description: {{ crime.crimeDesc }}</p>
          <h6 class="card-subtitle mb-2 text-muted">Comments:</h6>
          <transition-group name="fade" tag="ul">
            <li v-for="comment in getCrimeComments(crime._id)" :key="comment._id">
              <transition name="fade" mode="out-in">
                <div v-if="!comment.deleted">
                  {{ comment.userEmail }} - {{ comment.commentText }}
                  <transition-group name="fade" tag="ul">
                    <li v-for="reply in comment.replies" :key="reply._id">
                      {{ reply.userEmail }} - {{ reply.replyText }}
                      <button @click="deleteReply(comment._id, reply._id)">Delete Reply</button>
                    </li>
                  </transition-group>
                  <button @click="deleteComment(comment._id)">Delete Comment</button>
                </div>
              </transition>
            </li>
          </transition-group>
          <p v-if="getCrimeComments(crime._id).length === 0">No comments</p>
        </div>
      </div>
    </div>
    <appFooter />
  </div>
</template>

<script>
import appFooter from "@/components/footer.vue";
import adminNav from "@/components/navAdmin.vue";
import axios from "axios";

export default {
  name: "admin",
  components: {
    appFooter,
    adminNav,
  },
  data() {
    return {
      crime: {
        reporterEmail: "",
        crimeTitle: "",
        crimeAddress: "",
        crimeCity: "",
        crimeLevel: "",
        crimeDesc: "",
      },
      comments: [],
    };
  },
  async mounted() {
    await this.fetchCrimes();
    await this.fetchComments();
  },
  methods: {
    async fetchCrimes() {
      try {
        const response = await axios.get("http://localhost:4000/crimes");
        this.crimes = response.data;
        if (this.crimes.length > 0) {
          this.crime = this.crimes[0];
        }
      } catch (error) {
        console.error("Failed to fetch crimes:", error);
      }
    },
    async fetchComments() {
      try {
        const response = await axios.get("http://localhost:4000/getComments");
        this.comments = response.data;
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    },
    getCrimeComments(crimeId) {
      return this.comments.filter((comment) => comment.crimeId === crimeId);
    },
    async deleteComment(commentId) {
      try {
        await axios.delete(`http://localhost:4000/comments/${commentId}`);
        await this.fetchComments();
      } catch (error) {
        console.error('Failed to delete comment:', error);
      }
    },
    async deleteReply(commentId, replyId) {
      try {
        await axios.delete(`http://localhost:4000/comments/${commentId}/replies/${replyId}`);
        await this.fetchComments(); 
      } catch (error) {
        console.error('Failed to delete reply:', error);
      }
    },
  },
};
</script>

<style scoped>
.boja {
  background-size: cover;
  background-position: center;
  background-color: black;
  height: 100%;
}

.capitalize {
  text-transform: capitalize;
}

.container {
  padding: 20px;
}

.card {
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-move {
  transition: transform 0.5s;
}

.fade-move-up {
  transform: translateY(-20px);
}

.fade-move-down {
  transform: translateY(20px);
}
</style>
