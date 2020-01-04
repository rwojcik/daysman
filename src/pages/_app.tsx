import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import '../fonts/fonts.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../theme';
import Head from 'next/head';
import { StoreProvider, Store } from 'easy-peasy';
import { makeStore } from '../store/store';
import withRedux from 'next-redux-wrapper';

type DmAppProps = {
  store: Store;
};

class DmApp extends App<DmAppProps> {
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
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <Head>
          <title>daysman</title>
        </Head>
        <StoreProvider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StoreProvider>
      </>
    );
  }
}

export default withRedux(makeStore, { debug: process.env.NODE_ENV === 'development' })(DmApp);
