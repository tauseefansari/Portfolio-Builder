import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';
import { RootState } from '../../redux/store';

const CTA: FC = () => {
  const configuration = useSelector((state: RootState) => state.config.configuration);
  const { resume } = configuration.links;
  const { downloadCVBtn, letsTalkBtn } = configuration.home;

  return (
    <div className="cta">
      <a href={resume} target="_blank" rel="noreferrer" className="btn">
        {downloadCVBtn}
      </a>
      <Link smooth to="contact" className="btn btn-primary">
        {letsTalkBtn}
      </Link>
    </div>
  );
};

export default CTA;
