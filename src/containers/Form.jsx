import React from 'react';
import logo from '../images/logo.svg';

const Form = () => (
  <div className="form">
    <img src={logo} alt="logo" />
    <h1 className="form__heading">م	حباً، يس	ا لقاؤك</h1>
    <span className="form__advice"> ﻣﻦ ﺧﺒﺮاﺋﻨﺎ؟ اﺗﺮك ﺗﻔﺎﺻﻴﻠﻚ ﻫﻨﺎ، وﺳﻮف ﻳﻘﻮم ﻣﻨﺪوﺑﻨﺎ ﺑﺎﻟﺮد ﻋﻠﻚﻴ
ﻫﻞ ﺗﺮﻳﺪ ﻧﺼﺎﺋﺢ ﻣﻔﻴﺪة
    </span>
    <form action="">
      <label>
      الكنية
        <input placeholder="الكنية" type="text"/>
      </label>
      <label>
      الكنية
        <input placeholder="الكنية" type="text"/>
      </label>
      <label>
      الكنية
        <input placeholder="الكنية" type="text"/>
      </label>

      <label>
        <input type="checkbox" /> 
        <span className="form__styled-checkbox"></span>
        و طوﺮﺸﻟا ﻰﻠﻋ ﻖﻓاوأ ، ﻊﺑﺮﻤﻟا اﺬﻫ ﺪﻳﺪﺤﺗ ﻖﻳﺮﻃ ﻦﻋ <br />
        * .اًمﺎﻋ 18 يﺮﻤﻋ ﻦﻣ ﺮﺜﻛأ ﺪﻴﻛﺄﺘﻟاو ﺔﻴﺻﻮﺼﺨﻟا ﺔﺳﺎﻴﺳو طوﺮﺸﻟا
        <span className="form__permission-text"> ﻲﻧوﺮﺘﻜﻟﺈﻟا ﺪﻳﺮﺒﻟا ﺮﺒﻋ ﺔﻴﻘﻳﻮﺴﺗ ﻞﺋﺎﺳر ﻢﻠﺴﺘﺑ نذﺈﻟا ﻲﻄﻋُأ ﺎﻧأ</span>
      </label>
      <button className="form__button">سجل</button>
    </form>
  </div>
);

export default Form;