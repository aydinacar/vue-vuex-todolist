<template>
    <div class="list">
        <div v-for="todo in todos" :key="todo.id">
            <todo-item :todo="todo"></todo-item>
        </div>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
    components: {
        TodoItem
    },
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column; 
}
</style>