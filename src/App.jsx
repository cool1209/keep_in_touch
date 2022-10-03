import HomePage from './components/HomePage/HomePage';
import Content from './components/Content/Content';

const App = ({ state, store }) => {
  const isCurrentUser = state.users.currentUser.id;

  return (
    <div className="app">
      {isCurrentUser
        ? <Content state={state} store={store} />
        : <HomePage state={state} store={store} />
      }
    </div>
  );
}

export default App;
