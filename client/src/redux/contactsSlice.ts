import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  selectedItem: null
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts(state, action) {
      state.items = action.payload
    },
    setSelected(state, action) {
      state.selectedItem = action.payload
    },
    addContact(state, action) {
      // @ts-ignore
      state.items.push({ ...action.payload })
    },
    removeContact(state, action) {
      state.items.filter((item: any) => item.number !== action.payload.number)
    }
  },
});

export const { setContacts, setSelected } = contactsSlice.actions;

export default contactsSlice.reducer;
