import { useLayoutEffect, useState } from 'react';
import { LOCATIONS } from 'Helpers/constants';
import { setConfiguration } from 'redux/configurationSlice';
import { useAppDispatch } from 'redux/hooks';

const useConfiguration = () => {
  const dispatch = useAppDispatch();
  const [configLoaded, setConfigLoaded] = useState(false);

  useLayoutEffect(() => {
    fetch(LOCATIONS.DEFAULT_CONFIG)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setConfiguration(result));
        document.title = result.tabTitle || 'Portfolio';
        setConfigLoaded(true);
      });
  }, [dispatch]);
  return configLoaded;
};

export default useConfiguration;
