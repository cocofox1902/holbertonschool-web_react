import React, { Component, Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import './Login.css';

const styles = StyleSheet.create({
  loginBody: {
    padding: '36px 24px',
  },
  input: {
    margin: '0 16px 0 8px',
  },
});

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className={css(styles.loginBody, 'Login-body')}>
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.input)}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            className={css(styles.input)}
          />
          <button>OK</button>
        </div>
      </Fragment>
    );
  }
}

export default Login;
