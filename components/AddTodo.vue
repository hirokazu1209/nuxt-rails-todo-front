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
  methods: {
    handleSubmit() {
      // トリガーする:submitというイベントが起こったらその処理を実行する
      // 第一引数：イベント名 第二引数：イベントとして渡される値（TODOの情報を受け取って、TodoList.vueに渡すコード）
      this.$emit("submit", this.title);
      this.title = "";
    }
  }
};
</script>

<style>
</style>
