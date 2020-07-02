import { AppContainer as ReactHotContainer } from 'react-hot-loader';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
import style from './index.scss'; // typescript不支持css模块，所以这么写编译器会不识别，建议加个@ts-ignore

function App() {
  return (
    <div className={style.app}>
      <div className={style.avatar}>
        <img src={require('~resources/icons/app.png').default} alt=""/>
      </div>
      <h4>I am dpfff</h4>
    </div>
  );
}

const AppContainer = process.env.NODE_ENV === 'development' ? ReactHotContainer : Fragment;

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('app')
);