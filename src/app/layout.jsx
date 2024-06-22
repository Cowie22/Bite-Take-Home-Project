'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss';

import React, { memo } from 'react'
import { AppWrapper } from '../contexts/state'
import Header from '../components/Header/Header'


const RootLayout = ({ children }) => {
  return (
    <AppWrapper>
      <html lang='en'>
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </AppWrapper>
  );
}

export default memo(RootLayout)