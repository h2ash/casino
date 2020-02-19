import React from 'react';
import './styles/app.scss';
import Images from './components/Images/Images';
import Form from './containers/Form.jsx';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="background">
        <main className="wrapper">
          <Images />
          <Form />
        </main>
        <Footer />
    </div>
  );
}

export default App;
