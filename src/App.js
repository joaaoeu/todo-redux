import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <h1>To Do Redux</h1>
    <TodoList />
  </Provider>
);

export default App;
