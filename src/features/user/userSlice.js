import { createSlice } from "@reduxjs/toolkit";
// createSlice는 코드를 간소화 해준다. Immer가 내장되어있어 불변성을 유지하기 위해서 추가적으로 코드를 작성하지 않아도 된다.

const initialState = {
  name: "",
  email: "",
  photo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const {setUserLoginDetails,setSignOutState} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
