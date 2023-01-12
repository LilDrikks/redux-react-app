import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
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

export const { fetchError, fetchStarted, fetchSuccess } = user.actions;

export default user.reducer;

export const getUser = (token) => async (dispatch) => {
  try {
    dispatch(fetchStarted())
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    })
    const data = await response.json()
    dispatch(fetchSuccess(data))
  } catch (error) {
    dispatch(fetchError(error.message))
  }

}