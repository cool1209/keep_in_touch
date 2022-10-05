import StartPageContainer from './components/StartPage/StartPageContainer';
import Content from './components/Content/Content';

const App = ({ isUser }) => {
  return (
    <div className="app">
      {isUser
        ? <Content />
        : <StartPageContainer />
      }
    </div>
  );
}

export default App;
