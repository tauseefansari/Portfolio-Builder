import { FC } from 'react';
// @ts-ignore Cannot find module '../../assets/cv.pdf' or its corresponding type declarations.ts(2307)
import Resume from '../../assets/cv.pdf';

const CTA: FC = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
