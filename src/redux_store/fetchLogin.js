import { createSlice } from "@reduxjs/toolkit";

const token = createSlice({
  name: "token",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchError, fetchStarted, fetchSuccess } = token.actions;

export default token.reducer;

export const fetchToken = (user) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    dispatch(fetchSuccess(data.token));
  } catch (error) {
    dispatch(fetchError(error.message))
  }
};
