import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from './StoreProvider';
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fresco",
  description: "Fresco is a blockchain DApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
