import classNames from "classnames";
import { connect } from "react-redux";
import { getIsAuthError } from "../../../store/selectors/authSelectors";
import styles from "./AuthHint.module.scss";

const AuthHint = ({ isAuthError }) => {
  return (
    <div className={styles.authHint}>
      <div className={classNames(
          styles.authHint__error,
          {[styles.authHint__error_isActive]: isAuthError}
      )}>
        <p>
          Incorrect login or password...
        </p>

        <p>
          Try again.
        </p>
      </div>

      <p>
        Enter from <b>1</b> to <b>50</b> to field <b>"login"</b>
      </p>

      <p>
        Enter <b>"111"</b> to field <b>"password"</b>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthError: getIsAuthError(state)
});

export default connect(mapStateToProps)(AuthHint);
