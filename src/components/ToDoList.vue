<template>
  <div v-if="currentSection === 'todos'">
    <center style="color: bisque"><h1>Tanny Apriliani</h1></center>
    <center>
      <h2 style="color: bisque">ToDo List Keranjang Belanja</h2>
    </center>
    <div class="container-fluid" style="width: 40em">
      <div class="card m-3">
        <div class="card-header">
          <form @submit.prevent="addTodo">
            <div class="col-12">
              <div class="row">
                <div class="col-3">
                  <label for="newTodo" class="form-label">Ingin dibeli</label>
                </div>
                <div class="col-7">
                  <input
                    v-model.trim="newTodo"
                    type="text"
                    class="form-control form-control-sm"
                    name="newTodo"
                    id="newTodo"
                  />
                </div>
                <div class="col-2">
                  <button
                    class="btn btn-primary btn-sm float-end"
                    type="submit"
                    name="button"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="card-body">
          <div class="float-end">
            <button
              class="btn btn-success btn-sm me-1"
              @click="allDone"
              type="button"
              name="button"
            >
              <i class="bi bi-check-all"></i>
            </button>
            <button
              class="btn btn-danger btn-sm me-1"
              @click="allRemove"
              type="button"
              name="button"
            >
              <i class="bi bi-trash-fill"></i>
            </button>
            <button
              class="btn btn-secondary btn-sm me-1"
              @click="filterTodos('all')"
              type="button"
              name="button"
            >
              Semua
            </button>
            <button
              class="btn btn-secondary btn-sm me-1"
              @click="filterTodos('done')"
              type="button"
              name="button"
            >
              Sudah
            </button>
            <button
              class="btn btn-secondary btn-sm me-1"
              @click="filterTodos('notDone')"
              type="button"
              name="button"
            >
              Belum
            </button>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Check</th>
                <th scope="col">Todo</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(todo, index) in filteredTodos"
                :key="todo.title"
                :class="{ 'table-secondary': todo.done }"
              >
                <td>{{ index + 1 }}</td>
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="todo.done"
                    :id="'checkbox-' + todo.title"
                  />
                </td>
                <td>
                  <label
                    class="form-check-label"
                    :for="'checkbox-' + todo.title"
                    :style="{
                      'text-decoration': todo.done ? 'line-through' : 'none',
                    }"
                  >
                    {{ todo.title }}
                  </label>
                </td>
                <td>
                  <button
                    @click="removeTodo(todo)"
                    class="btn btn-danger btn-sm"
                    type="button"
                    name="button"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="mt-2">
            <p>Total tugas yang belum selesai: {{ totalUndoneTodos }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoList",

  data() {
    return {
      newTodo: "",
      todos: [],
      filter: "all", // Default filter
      currentSection: "todos", // Default section
    };
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({
          title: this.newTodo,
          done: false,
        });
        this.newTodo = ""; // Clear the input field after adding the todo
      }
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    allDone() {
      this.todos.forEach((todo) => {
        todo.done = true;
      });
    },
    allRemove() {
      this.todos = [];
    },
    filterTodos(status) {
      this.filter = status;
    },
  },

  computed: {
    filteredTodos() {
      if (this.filter === "done") {
        return this.todos.filter((todo) => todo.done);
      } else if (this.filter === "notDone") {
        return this.todos.filter((todo) => !todo.done);
      }
      return this.todos;
    },
    totalUndoneTodos() {
      return this.todos.filter((todo) => !todo.done).length;
    },
  },
};
</script>

<style scoped>
.table-secondary .form-check-label {
  color: #808080; /* Gray text color */
}
</style>
