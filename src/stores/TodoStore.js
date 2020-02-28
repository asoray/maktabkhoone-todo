import { observable, action, computed } from "mobx"
import TodoModel from './TodoModel'


class TodoStore {
    @observable todos = []
    lastID = 0

    @observable showingTodos = 'All'


    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID++));
    }

    @action
    deleteTodo(id) {
        const index = this.todos.findIndex(todo => todo.id = id)
        this.todos.splice(index, 1)
    }

    @action
    clearCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }

    @computed
    get activeTodos() {
        return this.todos.filter(todo => !todo.completed)
    }

    @computed
    get completedTodos() {
        return this.todos.filter(todo => todo.completed)
    }

    @action
    setShowingTodos(list) {
        this.showingTodos = list;
    }

}

const store = new TodoStore()
export default store