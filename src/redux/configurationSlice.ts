import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Configuration } from 'modals/configuration';

type State = {
  configuration: Configuration;
  loading: boolean;
};

const initialState: State = {
  configuration: {} as Configuration,
  loading: true
};

export const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setConfiguration: (state, action: PayloadAction<typeof initialState.configuration>) => {
      state.configuration = action.payload;
    }
  }
});

export default configurationSlice.reducer;
export const { setConfiguration, setLoader } = configurationSlice.actions;
