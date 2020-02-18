import React from 'react';
import logo from '../images/logo.svg';

const Form = () => (
  <div className="form">
    <img className="form__logo" src={logo} alt="logo" />
    <h1 className="form__heading">م	حباً، يس	ا لقاؤك</h1>
    <span className="form__advice"> ﻣﻦ ﺧﺒﺮاﺋﻨﺎ؟ اﺗﺮك ﺗﻔﺎﺻﻴﻠﻚ ﻫﻨﺎ، وﺳﻮف ﻳﻘﻮم ﻣﻨﺪوﺑﻨﺎ ﺑﺎﻟﺮد ﻋﻠﻚﻴ
ﻫﻞ ﺗﺮﻳﺪ ﻧﺼﺎﺋﺢ ﻣﻔﻴﺪة
    </span>
  </div>
);

export default Form;