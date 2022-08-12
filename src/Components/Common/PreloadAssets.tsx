import { FC, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoader } from '../../redux/configurationSlice';
import { RootState } from '../../redux/store';
import { imagePath } from '../../Helpers/Helpers';

const PreloadAssets: FC = () => {
  const configuration = useSelector((state: RootState) => state.config.configuration);
  const { imagesPreload } = configuration;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const images: HTMLImageElement[] = [];
    imagesPreload.forEach((image, i) => {
      images[i] = new Image();
      images[i].src = imagePath(image);
    });
    dispatch(setLoader(false));
    setLoading(false);
  }, [loading, dispatch, configuration, imagesPreload]);

  return loading ? (
    <div style={{ display: 'none' }}>
      {imagesPreload.map((image, id) => (
        <img src={imagePath(image)} alt={image} key={id} />
      ))}
    </div>
  ) : null;
};

export default PreloadAssets;
