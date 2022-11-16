import styles from "./AuthForm.module.scss";

const AuthForm = ({
  form,
  onHandleChange,
  onHandleFormSubmit
}) => {
  return (
    <form
      className={styles.AuthForm}
      onSubmit={onHandleFormSubmit}
    >
      <div className={styles.AuthForm__top}>
        <input
          className={styles.AuthForm__input}
          type="text"
          name="login"
          placeholder="Login..."
          onChange={onHandleChange}
          value={form.login}
          required
        />

        <input
          className={styles.AuthForm__input}
          type="password"
          name='password'
          placeholder="Password..."
          onChange={onHandleChange}
          value={form.password}
          required
        />
      </div>

      <div className={styles.AuthForm__bottom}>
        <label htmlFor="checkbox" className={styles.AuthForm__checkboxLabel}>
          <input
            type="checkbox"
            name="remember"
            id="checkbox"
            className={styles.AuthForm__checkbox}
            onChange={onHandleChange}
            checked={form.remember}
          />
          Remember me
        </label>

        <button
          className={styles.AuthForm__button}
          type='submit'
        >LogIn</button>
      </div>
    </form>
  );
};

export default AuthForm;
