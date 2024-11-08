import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='w-screen h-screen overflow-hidden flex flex-col'>
          <Navbar />
          <div className='flex flex-row w-full h-full'>
            <Sidebar />
            <main className='flex-1 overflow-y-auto'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
