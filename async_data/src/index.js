import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
//  action处理 异步 reducer 
//  action->reducer(oldState,data)
//  ->返回一个新状态
import thunk from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
const middleware = [ thunk ]
middleware.push(createLogger())

const store = createStore(
  reducer,
  applyMiddleware(...middleware)   //中间件，用户请求数据，交给middleware
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
