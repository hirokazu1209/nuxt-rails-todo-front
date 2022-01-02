<template>
  <div>
    <AddTodo @submit="appTodo" />
    <TodoList :todos="todos" />
  </div>
</template>

<script>
  // "@" エイリアス トップディレクトリを指す
  import AddTodo from "@/components/AddTodo";
  import TodoList from "@/components/TodoList";

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
    methods: {
      addTodo(title) {
        this.todos.push({
          title
        });
      },
    },
  };

</script>

<style>
</style>
