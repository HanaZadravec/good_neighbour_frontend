<template>
  <div class="boja">
    <appNav />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Crimes</h1>
        </div>
        <div class="col-md-12 filter-inputs" style="margin-bottom: 30px;">
          <div>
            <label for="location" style="font-size: 20px;">Location:</label>
            <input type="text" id="location" v-model="locationFilter" class="input-round" />
          </div>
          <div>
            <label for="date" style="font-size: 20px;">Date:</label>
            <input type="date" id="date" v-model="dateFilter" class="input-round" />
          </div>
          <div>
            <button @click.prevent="applyFilters" class="btn btn-round">Filter</button>
          </div>
        </div>

        <div class="col-md-12">
          <div class="card" style="margin:20px;" v-for="crime in crimes" :key="crime._id">
            <div class="card-body">
              <h5 class="card-title">Reported by: {{ crime.reporterEmail }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Title: {{ crime.crimeTitle }}</h6>
              <p class="card-text">Address: {{ crime.crimeAddress }}, {{ crime.crimeCity }}</p>
              <p class="card-text">Description: {{ crime.crimeDesc }}</p>

              <h6 class="card-subtitle mb-2 text-muted">Comments:</h6>
              <ul>
                <li v-for="comment in getCrimeComments(crime._id)" :key="comment._id">
                  {{ comment.commentText }}
                </li>
              </ul>

              <form @submit.prevent="addComment(crime._id)">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="crime.newCommentText" placeholder="Enter a comment">
                </div>
                <button type="submit" class="btn btn-primary">Add Comment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <appFooter />
  </div>
</template>

<script>
import appFooter from "@/components/footer.vue";
import appNav from "@/components/nav.vue";
import axios from "axios";

export default {
  name: "crimes",
  components: {
    appFooter,
    appNav,
  },
  data() {
    return {
      locationFilter: "",
      dateFilter: "",
      crimes: [],
      comments: [],
    };
  },
  mounted() {
    this.fetchCrimes();
    this.fetchComments();
  },
  methods: {
    fetchCrimes() {
      axios
        .get("http://localhost:4000/crimes")
        .then((response) => {
          response.data.sort((a, b) => new Date(b.crimeDate) - new Date(a.crimeDate));
          this.crimes = response.data.map((crime) => ({
            ...crime,
            newCommentText: "", // Initialize newCommentText property for each crime
          }));
        })
        .catch((error) => {
          console.error("Failed to fetch crimes:", error);
        });
    },
    fetchComments() {
      axios
        .get("http://localhost:4000/getComments")
        .then((response) => {
          this.comments = response.data;
        })
        .catch((error) => {
          console.error("Failed to fetch comments:", error);
        });
    },
    getCrimeComments(crimeId) {
      return this.comments.filter((comment) => comment.crimeId === crimeId);
    },
    addComment(crimeId) {
      const crime = this.crimes.find((c) => c._id === crimeId);
      if (crime) {
        const commentText = crime.newCommentText;
        axios
          .post("http://localhost:4000/comment", { crimeId, commentText })
          .then((response) => {
            const newComment = response.data;
            this.comments.push(newComment);
            crime.newCommentText = ""; // Reset comment input field for this specific crime
          })
          .catch((error) => {
            console.error("Failed to add comment:", error);
          });
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
label {
  color: white;
}
h1 {
  font-size: 70px;
  color: white;
  margin-bottom: 30px;
  font-family: "Norwester", sans-serif;
}
.btn-round {
  border-radius: 20px;
  border: none;
  background-color: #f2f2f2;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  font-family: "Norwester", sans-serif;
  text-align: center;
}
.input-round {
  background-color: #f2f2f2;
  border-radius: 20px;
  border: none;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  width: 200px;
  margin-bottom: 20px;
  color: #333;
}
* {
  font-family: "Norwester", sans-serif;
}
.card {
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  color: black;
}
</style>
