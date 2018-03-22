import { observable, computed } from 'mobx'
// 装饰器 decorator
class Store {
  @observable name = 'Bartek';
  @computed get decorated() {        //类似于actions
    return `${this.name} is awesome`
  }
}
export default Store;
