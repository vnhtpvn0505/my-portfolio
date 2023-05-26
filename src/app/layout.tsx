import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar';


const inter = Inter({ subsets: ['latin'] })

// /app/layout.tsx
import Link from 'next/link';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode,
}) {
 return (
    <html lang="en">
        <body>{children}</body>
  </html>
 );
}