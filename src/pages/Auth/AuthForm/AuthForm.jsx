import classNames from "classnames";
import { Field, Form } from "react-final-form";
import styles from "./AuthForm.module.scss";

const AuthForm = ({ required, onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form className={styles.AuthForm} onSubmit={handleSubmit}>
          <div className={styles.AuthForm__top}>
            <Field name="login" validate={required}>
              {({ input, meta }) => {
                const isInvalid = meta.touched && meta.error;

                return (
                  <input
                    type="text"
                    {...input}
                    placeholder={isInvalid ? "Enter your login" : "Login"}
                    className={classNames(styles.AuthForm__input, {
                      [styles.AuthForm__input_required]: isInvalid,
                    })}
                  />
                );
              }}
            </Field>

            <Field name="password" validate={required}>
              {({ input, meta }) => {
                const isInvalid = meta.touched && meta.error;

                return (
                  <input
                    type="text"
                    {...input}
                    placeholder={isInvalid ? "Enter your password" : "Password"}
                    className={classNames(styles.AuthForm__input, {
                      [styles.AuthForm__input_required]: isInvalid,
                    })}
                  />
                );
              }}
            </Field>
          </div>

          <div className={styles.AuthForm__bottom}>
            <label className={styles.AuthForm__checkboxLabel}>
              <Field
                type="checkbox"
                name="remember"
                component="input"
                className={styles.AuthForm__checkbox}
              />
              Remember me
            </label>

            <button
              className={styles.AuthForm__button}
              type="submit"
              disabled={submitting}
            >
              LogIn
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default AuthForm;
