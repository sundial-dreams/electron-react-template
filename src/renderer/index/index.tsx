import { AppContainer as ReactHotContainer } from 'react-hot-loader';
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import { Switch, Route, useHistory, HashRouter } from 'react-router-dom';
import { createStore, Action } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';
// @ts-ignore
import style from './index.scss'; // typescript不支持css模块，所以这么写编译器会不识别，建议加个@ts-ignore
import '~resources/style/reset.global.scss';

function App() {
  return (
    <div className={style.app}>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Page1/>
          </Route>
          <Route path="/page2">
            <Page2/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

function Page1() {
  const [input, setInput] = useState({ a: 0, b: 0 });
  const [result, setResult] = useState(0);
  const onOpen = () => { ipcRenderer.invoke('open-user-info-widget').catch(); };
  const onCalc = () => {
    ipcRenderer.invoke('calc-value', input.a, input.b).then(value => {
      setResult(value);
    });
  };
  const history = useHistory();
  const onNext = () => history.push('/page2');
  return (
    <div id="page" className={style.page1}>
      <h3>Hello world</h3>
      <button onClick={onOpen}>+ Open</button>
      <div className={style.calc_box}>
        <div className={style.input_value}>
          <input type="text" value={input.a} onChange={e => setInput({ a: +e.target.value, b: input.b })}/>
          +
          <input type="text" value={input.b} onChange={e => setInput({ a: input.a, b: +e.target.value })}/>
        </div>
        <button onClick={onCalc}>Native Calc</button>
        <div className={style.result}>
          <input type="text" disabled value={result}/>
        </div>
      </div>
      <button className={style.next_btn} onClick={onNext}>Next</button>
    </div>
  );
}

interface IStoreState {
  count: number
}

const initState = {
  count: 0
};

enum ActionType {
  ADD = 'ADD',
  SUB = 'SUB'
}

function reducer(state: IStoreState = initState, action: Action) {
  switch (action.type) {
    case ActionType.ADD: {
      return {
        count: state.count + 1
      };
    }
    case ActionType.SUB: {
      return {
        count: state.count - 1
      };
    }
    default: {
      return { ...state };
    }
  }
}

const store = createStore(reducer);

function Page2() {
  const count = useSelector((state: IStoreState) => state.count);
  const dispatch = useDispatch();
  const history = useHistory();
  const onAdd = () => dispatch({ type: ActionType.ADD });
  const onSub = () => dispatch({ type: ActionType.SUB });
  const onBack = () => history.push('/');

  return (
    <div id="page" className={style.page2}>
      <button className={style.back} onClick={onBack}>Back</button>
      <div className={style.counter_box}>
        <button onClick={onAdd}>+</button>
        <span>{count}</span>
        <button onClick={onSub}>-</button>
      </div>
    </div>
  );
}

const AppContainer = process.env.NODE_ENV === 'development' ? ReactHotContainer : Fragment;

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App/>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);