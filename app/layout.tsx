"use client"

import type { Metadata } from 'next'
import './globals.css'
import Taskbar from './components/TaskBar'
import { Press_Start_2P } from 'next/font/google'
import LoadingScreen from './pages/LoadingScreen'
import { useEffect, useState } from 'react'

const metadata: Metadata = { //! removed the export , check why?
  title: 'Regashi',
  description: 'by Arpan Mahanty',
}

const retro = Press_Start_2P({ subsets: ['latin'], weight: "400" })
// const audio = new Audio("/sounds/mouseClick.mp3")

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); //!! change the value

    return () => clearTimeout(loadingTimeout);
  }, []);
  // const handleMouseClick = () => {
  //   audio.play();
  // };
  return (
    <html lang="en" 
    // onClick={handleMouseClick}
    >
      <body className={`${retro.className} bg-gray-900 h-screen m-0 p-0 flex flex-col overflow-hidden`}>
        {isLoading ? <LoadingScreen /> : (
          <>
            {children}
            <Taskbar />
          </>
        )}
      </body>
    </html>
  )
}
