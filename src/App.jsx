import LoginPageContainer from './pages/LoginPage/LoginPageContainer';
import ContentPage from './pages/ContentPage/ContentPage';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <div className="app">
      {isAuth
        ? <ContentPage />
        : <LoginPageContainer />
      }
    </div>
  );
}

export default App;
