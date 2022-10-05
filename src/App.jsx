import LoginPageContainer from './components/LoginPage/LoginPageContainer';
import Content from './components/Content/Content';

const App = ({ isUser }) => {
  return (
    <div className="app">
      {isUser
        ? <Content />
        : <LoginPageContainer />
      }
    </div>
  );
}

export default App;
