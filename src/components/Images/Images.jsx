import React from 'react';
import mobile from '../../images/mobile.png';
import girl2 from '../../images/girl_2.png';
import girl1 from '../../images/girl_1.png';
import Frame1 from '../../images/Frame1.svg';
import Frame2 from '../../images/Frame2.svg';

const Images = () => (
  <div className="images">
    <img className="images--mobile" src={mobile} alt="mobile_background" />
    <img className="images--girl2" src={girl2} alt="girl 2" />
    <img className="images--girl1" src={girl1} alt="girl 1" />
    <img className="images--coloredDots1" src={Frame1} alt="colored dots 1" />
    <img className="images--coloredDots2" src={Frame2} alt="colored dots 2" />
  </div>
);

export default Images;