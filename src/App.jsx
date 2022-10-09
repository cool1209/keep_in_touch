import LoginPageContainer from './pages/LoginPage/LoginPageContainer';
import ContentPage from './pages/ContentPage/ContentPage';

const App = ({ isUser }) => {
  return (
    <div className="app">
      {isUser
        ? <ContentPage />
        : <LoginPageContainer />
      }
    </div>
  );
}

export default App;
