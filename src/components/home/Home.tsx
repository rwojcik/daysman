import React from 'react';
import Head from 'next/head';
import { Nav } from '../Nav';
import { HomeLayout } from './HomeLayout';

export const Home = () => {
  return (
    <>
      <Head>
        <title>daysman</title>
      </Head>

      <Nav />

      <HomeLayout />
    </>
  );
};
