import { FC } from 'react';
import { Link } from 'react-scroll';

const CTA: FC = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1xEc7P64GXRQKKl8TLaezaNTctptn7tz5/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        Download CV
      </a>
      <Link smooth to="contact" className="btn btn-primary">
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
