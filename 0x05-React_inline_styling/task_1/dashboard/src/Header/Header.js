import React from 'react';
import './Header.css';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
  },
  h1: {
    margin: 'auto auto auto 0',
    color: '#e1484c',
  },
});

function Header() {
  return (
    <div className={css(styles.appHeader)}>
      <img src={logo} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}

export default Header;
