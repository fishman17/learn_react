export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const registerAction = (newUser) => {
  // action 负责，提交reducer
  return {
    type: REGISTER_USER,
    data: newUser
  }
}
export const loginAction = (user) => {
  return {
    type: LOGIN_USER,
    data: user
  }
}
