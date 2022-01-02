<template>
  <v-card>
    <v-card-title>
      Todo List
      <v-span></v-span>
      <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <!-- ":"はv-bindの省略記号 -->
    <!-- ":"を省略すると、本来変数の値が渡されるものが文字列として渡されてしまう -->
    <!-- headers テーブルのヘッダーとなるプロパティを指定できる -->
    <!-- items 実際にテーブルへ表示させる値を指定している -->
    <v-data-table :headers="headers" :items="todos" :search="search"></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          title: "test",
          usename: "太郎"
        }
      ],
      search: "",
      headers: [
        {
          text: "タイトル",
          align: "left",
          sortable: false,
          value: "title"
        },
        { text: "ユーザー名",
          value: "usename"
        }
      ]
    };
  }
};
</script>

<style>
</style>
