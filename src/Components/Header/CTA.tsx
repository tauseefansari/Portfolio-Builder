import { FC } from 'react';
import { Link } from 'react-scroll';
import { LetsTalkBtn, DownloadCvbtn } from '../../modals/configuration';

type Props = {
  letsTalk: LetsTalkBtn;
  downloadCV: DownloadCvbtn;
};

const CTA: FC<Props> = (props) => {
  const { letsTalk, downloadCV } = props;

  return (
    <div className="cta">
      <a href={downloadCV.url} target="_blank" rel="noreferrer" className="btn">
        {downloadCV.title}
      </a>
      <Link smooth to={letsTalk.link} className="btn btn-primary">
        {letsTalk.title}
      </Link>
    </div>
  );
};

export default CTA;
