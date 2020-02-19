import React from 'react';
import logo from '../images/logo.svg';

const Form = () => (
  <div className="form">
    <img src={logo} alt="logo" />
    <h1 className="form__heading">م	حباً، يس	ا لقاؤك</h1>
    <span className="form__advice">
     هل تريد نصائح مفيدة من خبرائنا؟ اترك تفاصيلك هنا، وسوف يقوم مندوبنا بالرد عليك
    </span>
    <form action="">
      <label>
      <span className="form__label-text">الكنية</span>
        <input placeholder="الكنية" type="text"/>
      </label>
      <label>
      <span className="form__label-text">الكنية</span>
        <input placeholder="الكنية" type="text"/>
      </label>
      <label>
      <span className="form__label-text">الكنية</span>
        <input placeholder="الكنية" type="text"/>
      </label>

      <label>
        <input type="checkbox" /> 
        <span className="form__styled-checkbox"></span>
        <span className="form__text-checkbox">عن طريق تحديد هذا المربع ، أوافق على الشروط و<br />
         الشروط وسياسة الخصوصية والتأكيد أكثر من عمري 18 عامًا. *</span>
        <span className="form__permission-text">
        أنا أُعطي الإذن بتسلم رسائل تسويقية عبر البريد الإلكتروني
        </span>
      </label>
      <button className="form__button">سجل</button>
    </form>
  </div>
);

export default Form;