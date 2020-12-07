import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from '@/redux/rootReducer';

import {Sidebar} from '@components/Sidebar';
import {Container} from '@components/Container';

import 'antd/dist/antd.css'
import './styles/main.sass'


const store = createStore(rootReducer);


const App = () => {
  console.log('store is updated', store.getState());
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <Container />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));