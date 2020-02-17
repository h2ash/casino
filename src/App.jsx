import React from 'react';
import './styles/app.scss';
import Images from './components/Images';
import Form from './containers/Form.jsx';

function App() {
  return (
    <div className="background">
      <div className="wrapper">
        <Images />
        <Form />
      </div>
    </div>
  );
}

export default App;
