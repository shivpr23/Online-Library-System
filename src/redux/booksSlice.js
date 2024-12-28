import { createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  { id: 1, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: 'A sci-fi classic.', rating: 4.5 },
  { id: 2, title: '1984', author: 'George Orwell', category: 'Fiction', description: 'A dystopian novel.', rating: 4.8 },
  { id: 3, title: 'Becoming', author: 'Michelle Obama', category: 'Biography', description: 'A memoir by the former First Lady.', rating: 4.7 },
  { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', description: 'A classic American novel.', rating: 4.3 },
  // Add more books as needed
];

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
