import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    openModal: () => true,
    closeModal: () => false,
  },
});

export const { openModal, closeModal } = modal.actions
export default modal.reducer;
