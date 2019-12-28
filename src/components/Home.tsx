import React from 'react';
import Head from 'next/head';
import { Nav } from './Nav';
import { Timer } from './Timer';
import { Typography } from '@material-ui/core';

export const Home = () => {
  return (
    <div>
      <Head>
        <title>daysman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div>
        <Typography variant="h1">Welcome to daysman!</Typography>
        <Timer />
      </div>

      {/* <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style> */}
    </div>
  );
};
