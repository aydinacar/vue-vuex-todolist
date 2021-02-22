<template>
  <div class="item">
      <p class="text" @click="todo.completed = !todo.completed" :class="{completed: todo.completed}">{{todo.name}}</p>
      <button @click="deleteItem">Delete</button>
  </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true

        }
    },
    methods: {
        deleteItem() {
            this.$store.dispatch('removeTodo', this.todo)
        }
    }
}
</script>

<style scoped>
    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f1f1f1;
        padding: .5rem .7rem;
        margin-top: 1rem;
    } 
    .completed {
        text-decoration: line-through;
    }
    button {
        background-color: tomato;
        color: white;
        padding: .5rem .7rem;
        font-size: 16px;
        border: 0px transparent;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #fa9a89;
    }
</style>