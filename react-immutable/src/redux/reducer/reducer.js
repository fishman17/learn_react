// 模块化
// reducer  
// user.js  auth  article

import { combineReducers } from 'redux'
import {users} from './users'
const reducer = combineReducers({
    users
})
export default reducer