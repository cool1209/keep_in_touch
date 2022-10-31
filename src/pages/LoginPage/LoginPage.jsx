import PaginationButtons from '../shared/PaginationButtons/PaginationButtons';
import Preloader from '../shared/Preloader/Preloader';
import LoginPageStyles from './LoginPage.module.css';

const LoginPage = ({
  users,
  login,
  onSetLogin,
  onGetAuthUser,
  curentPage,
  pages,
  onSetCurentPage,
  isLoading,
}) => {
  return (
    
    <div className={LoginPageStyles.wrapper}>
      <div className={LoginPageStyles.topBlock}>
        <h1 className={LoginPageStyles.title}>
          <div>Welcome</div>
          <div>to</div>
          <div className={LoginPageStyles.mainTitle}>Keep in touch</div>
        </h1>

        <p className={LoginPageStyles.description}>
          The test login page to check the functionality of this social network for different users.
        </p>
      </div>

      <div className={LoginPageStyles.bottomBlock}>
        {isLoading
        ? <Preloader />
        : <>
            <div className={LoginPageStyles.loginField}>
              <input
                className={LoginPageStyles.input}
                type='text'
                placeholder='Enter your login...'
                value={login}
                disabled
              />

              <button
                className={LoginPageStyles.btn}
                onClick={() => (
                  login
                  ? onGetAuthUser(login)
                  : null
                )}
              >
                LogIn
              </button>
            </div>

            <p className={LoginPageStyles.hint}>
              Select a user below and click the "LogIn" button.
            </p>

            <div className={LoginPageStyles.users}>
              {users.map(user => (
                <img
                  className={LoginPageStyles.user}
                  src={user.avatar}
                  alt='User avatar'
                  key={user.login}
                  onClick={() => onSetLogin(user.login)}
                />
              ))}
            </div>

            <PaginationButtons
              styles={null}
              pages={pages}
              currentPage={curentPage}
              onEvent={onSetCurentPage}
            />
          </>
        }
      </div>
    </div>
  );
};

export default LoginPage;
