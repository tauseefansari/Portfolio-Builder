import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Config } from '../Helpers/Config';
import { Configuration } from '../modals/configuration';

type InitialStateType = {
  configuration: Configuration;
  loading: boolean;
};

const initialState: InitialStateType = {
  configuration: Config,
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
