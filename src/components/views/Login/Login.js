import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => (
  <Card className={styles.component}>
    <h2>Login Page</h2>
    <form>
      <div>
        <TextField
          id="login-input"
          label="Login"
          type="login"
          variant="filled"
          className={styles.textField}
        />
        <TextField
          id="password-input"
          label="Password"
          type="password"
          variant="filled"
          className={styles.textField}
        />
      </div>
    </form>
    <Button variant="outlined" color="primary">
      Login
    </Button>
  </Card>
);

export default Login;
