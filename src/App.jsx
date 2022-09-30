import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Content from './components/Content/Content';



const App = ({ store }) => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={ <HomePage users={store.getState().users} /> } />
        <Route path='/keep-in-touch/*' element={ <Content store={store} /> } />
      </Routes>
    </div>
  );
}

export default App;
