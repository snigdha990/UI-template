"use client";

import React, { useState, useEffect } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <ClerkProvider>
      <html lang="en" className={darkMode ? "dark" : ""}>
        <body className="m-0 p-0 overflow-x-hidden bg-[#0A0F1C]">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
