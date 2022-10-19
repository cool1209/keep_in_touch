import PaginationButtons from '../shared/PaginationButtons/PaginationButtons';
import LoginPageStyles from './LoginPage.module.css';

const LoginPage = ({
  users,
  login,
  onSetLogin,
  onLoginUser,
  curentPage,
  pages,
  onSetCurentPage
}) => {

  return (
    <div className={LoginPageStyles.wrapper}>
      <h1 className={LoginPageStyles.title}>
        <span className={LoginPageStyles.titlePart}>Welcome</span>
        <span className={LoginPageStyles.titlePart}>to</span>
        <span className={LoginPageStyles.socialNetworkName}>Keep in touch</span>
      </h1>

      <p className={LoginPageStyles.description}>
        The test login page to check the functionality of this social network for different users.
      </p>

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
            ? onLoginUser(login)
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
        getDataPage={onSetCurentPage}
      />
    </div>
  );
};

export default LoginPage;
