import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const inter = Inter({ subsets: ['latin'] })

// /app/layout.tsx
import Link from 'next/link';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode,
}) {
 return (
  <>
            <Navbar />
            <main>{children}</main>
        </>
 );
}