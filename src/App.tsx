import { FC } from 'react';
import Loader from 'Common/Loader';
import PreloadAssets from 'Common/PreloadAssets';
import useConfiguration from 'hooks/useConfiguration';
import MainContainer from 'Common/MainContainer';
import { useAppSelector } from 'redux/hooks';
import { selectIsLoading } from 'redux/configurationSlice';

const App: FC = () => {
  const configLoaded = useConfiguration();
  const loading = useAppSelector(selectIsLoading);

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
