import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import React from 'react';
import Header from './Header'
import Footer from './Footer'


export default function RootLayout({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <div className="min-h-screen  flex flex-col justify-between">
        <Header/>
        <main className="flex-1 flex flex-col items-center justify-center">
          {children}  
        </main>
        <Footer/>
    </div>
  )
}
