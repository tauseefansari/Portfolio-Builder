import { FC } from 'react';
import { Link } from 'react-scroll';
// @ts-ignore Cannot find module '../../assets/cv.pdf' or its corresponding type declarations.ts(2307)
import Resume from '../../assets/cv.pdf';

const CTA: FC = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download CV
      </a>
      <Link smooth to="contact" className="btn btn-primary">
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
