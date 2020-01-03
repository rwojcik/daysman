import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import '../fonts/fonts.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../theme';
import Head from 'next/head';

export default class DmApp extends App {
  removeSsCss = () => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles != null && jssStyles.parentElement != null) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  };

  recalculateHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  initVw = () => {
    this.recalculateHeight();
    window.addEventListener('resize', this.recalculateHeight);
  };

  removeVw = () => {
    window.removeEventListener('resize', this.recalculateHeight);
  };

  componentDidMount() {
    this.removeSsCss();
    this.initVw();
  }

  componentWillUnmount() {
    this.removeVw();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>daysman</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
