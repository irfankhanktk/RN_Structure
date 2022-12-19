import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  userInfo: {
    email:'',
    name:'',
    userId:''
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    reset: (state, action) => {
      state = initialState
    },
    // demoAsync: (state, action) => {
    //   state.userInfo = action.payload
    // },
  },
})
// Action creators are generated for each case reducer function
export const { 
  setUserInfo,
  reset,
  // demoAsync
 } = userSlice.actions

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default userSlice.reducer