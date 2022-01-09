<template>
  <!-- v-から始まるのは"Vuetify"のタグ -->
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <!-- v-model="title" scriptのdataの中で宣言されているtitleとデータを紐づけることが出来る -->
          <v-text-field v-model="title" counter="10" label="todo" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn @click="handleSubmit">作成</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      title:""
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.currentUser;
    },
  },
  methods: {
    handleSubmit() {
      const todo = {
        title: this.title,
        user_id: this.user.id,
      };
      this.$emit("submit", todo);
      this.title = "";
    }
  }
};
</script>

<style>
</style>
