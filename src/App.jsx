import { useSelector } from 'react-redux';
import ContentPage from './pages/ContentPage/ContentPage';
import LoginPage from './pages/LoginPage/LoginPageContainer';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <div className="app">
      {isAuth
        ? <ContentPage />
        : <LoginPage />
      }
    </div>
  );
}

export default App;
