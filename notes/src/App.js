import React, { Component } from 'react';
import Notes from './components/Notes'
import 'semantic-ui-css/semantic.min.css'
import './index.css';
// .vue 编译-》 三部分 
// react 语法不一样 jsx  
// mvvm  render 支持以html的格式写ui
// 最小单元的react组件就是带有render方法的component类实现
class App extends Component {
  render() {
    return (
      <Notes/>
    );
  }
}

export default App;
