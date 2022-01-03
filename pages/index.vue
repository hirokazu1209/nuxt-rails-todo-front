<template>
  <div>
    <!-- AddTodo.vueからsubmitというイベントがきたら、methodsに登録したaddTodoを呼び出す -->
    <AddTodo @submit="addTodo" />
    <!-- = の右側のtodosは今回渡している値 -->
    <!-- = の左側のtodosはTodoList.vueで使っている値（propsで定義しているコード） -->
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
