import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type ContactType = {
  name: string;
  number: string;
  email: string;
};

interface StateType {
  items: ContactType[];
  selectedItem: ContactType | null;
}

const initialState: StateType = {
  items: [],
  selectedItem: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts(state, action) {
      state.items = action.payload;
    },
    setSelected(state, action) {
      state.selectedItem = action.payload;
    },
    addContact(state, action) {
      const findItem = state.items.find(
        (item: ContactType) => action.payload.number === item.number
      );

      if (!findItem) {
        state.items.unshift({ ...action.payload });
        state.selectedItem = action.payload
      } else if (findItem) {
        alert("You already have contact with the same number!");
      }
    },
    removeContact(state, action) {
      state.items = state.items.filter((item: any) => item.number !== action.payload);
    },
    editContact(state, action) {
      //чекпоинт
    }
  },
});

export const { setContacts, setSelected, addContact, removeContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
