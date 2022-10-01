import HomePage from './components/HomePage/HomePage';
import Content from './components/Content/Content';

const App = ({ store }) => {
  const state = store.getState();

  return (
    <div className="app">
      {state.user.id
        ? <Content store={store} />
        : <HomePage store={store} />
      }
    </div>
  );
}

export default App;
