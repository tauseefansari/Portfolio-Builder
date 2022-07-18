import { FC, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoader } from '../../redux/configurationSlice';
import { RootState } from '../../redux/store';
import { imagePath } from '../../Helpers/Helpers';

const Preloader: FC = () => {
  const configuration = useSelector((state: RootState) => state.config.configuration);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const images: HTMLImageElement[] = [];
    Object.values(configuration.imagesPreload).forEach((image, i) => {
      images[i] = new Image();
      images[i].src = imagePath(image);
    });
    dispatch(setLoader(false));
    setLoading(false);
  }, [loading, dispatch, configuration]);

  return loading ? (
    <div style={{ display: 'none' }}>
      {Object.values(configuration.imagesPreload).map((image, id) => (
        <img src={imagePath(image)} alt={image} key={id} />
      ))}
    </div>
  ) : null;
};

export default Preloader;
