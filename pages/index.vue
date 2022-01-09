<template>
  <div v-if="user">
    <p>名前:{{ user.name }}</p>
    <!-- AddTodo.vueからsubmitというイベントがきたら、methodsに登録したaddTodoを呼び出す -->
    <AddTodo @submit="addTodo" />
    <!-- = の右側のtodosは今回渡している値 -->
    <!-- = の左側のtodosはTodoList.vueで使っている値（propsで定義しているコード） -->
    <TodoList :todos="user.todos" />
  </div>
</template>

<script>
  // "@" エイリアス トップディレクトリを指す
  import AddTodo from "@/components/AddTodo";
  import TodoList from "@/components/TodoList";
  import axios from "@/plugins/axios";

  export default {
    // 作成したコンポーネントを登録する
    components: {
      AddTodo,
      TodoList,
    },
    data() {
      return {
        todos: [],
      };
    },
    // ここで宣言した値は、vueプロパティの中で使用できる
    computed: {
      user() {
        // storeの中のauth.jsのstateのcurrentUserという値が返される
        // this.$storeの記述でVuexのstoreの情報を得られる
        return this.$store.state.auth.currentUser;
      }
    },
    created() {
      console.log("API_KEY:", process.env.API_KEY);
    },
    methods: {
      async addTodo(todo) {
        const { data } = await axios.post("/v1/todos", { todo });

        this.$store.dispatch("auth/setUser", {
        ...this.user,
        todos: [...this.user.todos, data]
        });
      },
    },
  };

</script>

<style>
</style>
