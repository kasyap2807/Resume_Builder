import React, { useState, useEffect, useRef, Fragment } from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import Header from './components/Landing-page/Header/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import jsonData from './data.json';
import { useReactToPrint } from 'react-to-print';

const App = () => {
  const [data, setData] = useState();
  const [preset, setPreset] = useState([
    { primary: '#009688', background: '#ebf5f4', skills: '#e5f4f3' },
    { primary: '#2196f3', background: '#e8f4fe', skills: '#e2f2ff' },
    { primary: '#263238', background: '#f0f0f0', skills: '#e0e0e0' },
    { primary: '#3f51b5', background: '#ebedf7', skills: '#e1e3f8' },
  ]);

  const [color, setColor] = useState({
    primary: '#009688',
    background: '#e5f4f3',
    skills: '#e5f4f3',
  });

  useEffect(() => {
    setData(jsonData);
  }, []);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='mainContent'>
      <Router>
        {/* <Header /> */}

        {/* Form and Resume Page Route */}
        <Routes>
          <Route
            path='/'
            element={
              data !== undefined && (
                <Fragment>
                  <div className='left'>
                    <Form data={data} setData={setData} preset={preset} setColor={setColor} />
                  </div>

                  <div className='right'>
                    <Resume ref={componentRef} data={data} color={color} />
                  </div>

                  <button className='printBtn' onClick={handlePrint}>
                    Download / Print
                  </button>
                </Fragment>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
