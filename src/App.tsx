import { FC } from 'react';
import { useSelector } from 'react-redux';
import Loader from './Components/Common/Loader';
import PreloadAssets from './Components/Common/PreloadAssets';
import useConfiguration from './hooks/use-configuration';
import { RootState } from './redux/store';
import MainContainer from './Components/Common/MainContainer';

const App: FC = () => {
  const configLoaded = useConfiguration();
  const loading = useSelector((state: RootState) => state.config.loading);

  return loading ? (
    <>
      {configLoaded && <PreloadAssets />}
      <Loader />
    </>
  ) : (
    <MainContainer />
  );
};

export default App;
