<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message(Enter to send):</label>
      <input type="text" name="new-message" v-model="newMessage" />
      <p class="red-text">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You must write something first";
      }
    }
  }
};
</script>

<style>
</style>