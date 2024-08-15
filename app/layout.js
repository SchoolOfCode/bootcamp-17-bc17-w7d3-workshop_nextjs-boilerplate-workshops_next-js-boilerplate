// app/layout.js
"use client"; // Add this line at the top
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Main from "../components/main/main.js";
import Founders from "./Founders/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [page, setPage] = useState(true);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header onClick={() => setPage(!page)} />
        {page ? <Main /> : <Founders />}
        <Footer />
      </body>
    </html>
  );
}
