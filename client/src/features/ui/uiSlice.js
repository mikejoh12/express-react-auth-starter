import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    snackbarOpen: false,
    snackbarMessage: {
      message: '',
      severity: '',
    },
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
      showSnackbar(state, action) {
            state.snackbarOpen = true;
            state.snackbarMessage = action.payload;
      },
      clearSnackbar(state, action) {
            state.snackbarOpen = false;
      },
    }
})

export const { showSnackbar, clearSnackbar } = uiSlice.actions;

export const selectSnackBarOpen = state => state.ui.snackbarOpen;
export const selectSnackbarMessage = state => state.ui.snackbarMessage;

export default uiSlice.reducer;