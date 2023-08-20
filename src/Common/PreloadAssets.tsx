import { FC, useLayoutEffect, useState } from 'react';
import { selectConfiguration, setLoader } from 'redux/configurationSlice';
import { imagePath } from 'Helpers/Helpers';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const PreloadAssets: FC = () => {
  const configuration = useAppSelector(selectConfiguration);
  const { imagesPreload } = configuration;
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

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
