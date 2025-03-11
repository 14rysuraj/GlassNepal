import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: !!localStorage.getItem("user"),
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
    token: localStorage.getItem("token") || "",
  },

  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
    },
    setUserData: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { logout, setUserData } = authenticationSlice.actions;
export default authenticationSlice.reducer;
