<template>
  <v-card>
    <v-card-title>
      Todo List
      <v-spacer></v-spacer>
      <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <!-- ":"はv-bindの省略記号 -->
    <!-- ":"を省略すると、本来変数の値が渡されるものが文字列として渡されてしまう -->
    <!-- headers テーブルのヘッダーとなるプロパティを指定できる -->
    <!-- items 実際にテーブルへ表示させる値を指定している -->
    <v-data-table :headers="headers" :items="todos" :search="search">
      <template v-slot:item.action="{ item }">
        <v-icon small @click="deleteItem(item)">delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  // 親コンポーネントから子コンポーネントに値を渡す時に使うもの
  props: ["todos"],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "タイトル",
          align: "left",
          sortable: false,
          value: "title"
        },
        {
          text: "ユーザー名",
          value: "usename"
        },
        {
          text: "Actions",
          value: "action",
        },
      ]
    };
  },
computed: {
  user() {
      return this.$store.state.auth.currentUser;
    }
  },
  methods: {
    async deleteItem(item) {
      const res = confirm("本当に削除しますか？");
      if (res) {
        await axios.delete(`/v1/todos/${item.id}`);
        const todos = this.user.todos.filter((todo) => {
          return todo.id !== item.id;
        });
        const newUser = {
          ...this.user,
          todos,
        };
        this.$store.commit("auth/setUser", newUser);
      }
    },
  }
};
</script>

<style>
</style>
