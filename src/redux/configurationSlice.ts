import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Configuration } from "modals/configuration";
import { RootState } from "./store";

type State = {
  configuration: Configuration;
  loading: boolean;
};

const initialState: State = {
  configuration: {} as Configuration,
  loading: true,
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setConfiguration: (state, action: PayloadAction<Configuration>) => {
      state.configuration = action.payload;
    },
  },
});

export default configurationSlice.reducer;

// Selectors
export const selectIsLoading = (state: RootState) => state.config.loading;
export const selectConfiguration = (state: RootState) =>
  state.config.configuration;

// Actions
export const { setConfiguration, setLoader } = configurationSlice.actions;
