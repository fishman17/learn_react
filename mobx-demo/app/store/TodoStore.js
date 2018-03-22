import { observable, computed, action} from 'mobx'
import TodoModel from '../models/TodoModel'

class TodoStore {
    @observable filter = ''
    @observable todos = []
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @computed get finishedCount() {
        
    }
    @action addTodo(title,priority){
        let item = new TodoModel(this,title,priority);
    }
}
export default TodoStore
