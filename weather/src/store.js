// import {createStore, combineReducers} from 'redux' 
// import { reducer as locationByIp } from './weatherLocation' 

// // 状态树 接受一个旧状态，返回一个新状态 fn(oldState)
// // vuex : state + mutations  
// // reducer 纯函数

// // modules 

// const reducer = combineReducers({
//     locationByIp,
// })
// const initialState = {}
// export default createStore(
//     reducer,
//     initialState, //初始化   
// )


import { createStore, 
    combineReducers, 
    applyMiddleware,
    compose } 
  from 'redux'
  import { reducer as locationByIp }
   from './weatherLocation'
  import thunk from 'redux-thunk'
  
  // 状态树 接受一个旧状态,返回一个
  // 新状态 fn(oldState)
  // vuex state + mutations
  // reducer 纯函数
  // modules 
  const reducer = combineReducers({
    locationByIp
  })
  const initialState = {}
  const middlewares = [thunk]
  const enhancers = []
  const composedEnhancers = 
  compose(
    applyMiddleware(
      ...middlewares), ...enhancers)
  export default createStore(
    reducer,
    initialState,
    composedEnhancers
  )
  