import Immutable from 'immutable';
// 不可变  react state 改变会rerender
// 用户做了改变。。 state没有变   如果其实什么都没变  就没必要rerender  性能问题
// 浅拷贝 深拷贝  不可控
// var obj = {}
// var obj1 = obj
// redux  使用immutable来实现不可变的state
// 业界认为可变的state是万恶之源  
// Map
const initialState = Immutable.fromJS({
    newUser: null,
    error: null,
    savaSuccess: false,
    token: null,
    currentUser: null,
})

export const users = (state=initialState, action = {}) => {
    switch(action.type){
        // case REGISTER_USER:
        //     return state.merge({
        //         'newUser': action.data,
        //         'saveSuccess': false,
        //         'error': null
        //     })
        // case REGISTER_USER_SUCCESS:
        //     return state.set('saveSuccess',action.data)
        // case REGISTER_USER_FAILURE:
        //     return state.set('error',action.data)
        // case CURRENT_USER:
        //     return state.merge({
        //         'token': action.data,
        //         'error': null,
        //     })
        default:
            return state
    }
}