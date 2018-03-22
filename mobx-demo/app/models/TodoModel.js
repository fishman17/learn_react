import { observable } from 'mobx';
class TodoModel {
  store;
  id = Math.random();
  @observable title = "";
  @observable finished = false;
  @observable destroyed = false;
  @observable isEditing = false;
  @observable type = 'Shoping'
  @observable priority = false

  constructor(store, title, priority, type) {
    this.store = store;
    this.title = title;
    this.finished = false;
    this.destroyed = false;
    this.isEditing = false;
    this.type = type;
    this.priority = priority;
  }
  setTitle(title) {
    this.title = title;
  }
  setType(type){
    this.type = type;
  }
  destroyed(){
      this.destroyed = true;
      this.store.todos.remove(this);
  }
  toggleCheck(){
      this.finished = !this.finished;
  }
  handlePriority(){
      this.priority = !this.priority;
  }

}
export default TodoModel;
