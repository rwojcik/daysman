import React from 'react';
import { Nav } from './Nav';

export const Error = () => (
  <div>
    <Nav />

    <div className="hero">
      <h1 className="title">Error!</h1>
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
        text-align: center;
        font-size: 48px;
      }
    `}</style> */}
  </div>
);
