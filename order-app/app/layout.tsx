import "./globals.css";
import Header from "./_components/Header/page"; 


import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
