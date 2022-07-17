import { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LOCATIONS } from '../Helpers/constants';
import { setConfiguration } from '../redux/configurationSlice';

const useConfiguration = () => {
  const dispatch = useDispatch();
  const [configLoaded, setConfigLoaded] = useState(false);

  useLayoutEffect(() => {
    fetch(LOCATIONS.DEFAULT_CONFIG)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setConfiguration(result));
        setConfigLoaded(true);
      });
  }, [dispatch]);
  return configLoaded;
};

export default useConfiguration;
