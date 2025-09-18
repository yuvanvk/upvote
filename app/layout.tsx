import type { Metadata } from "next";
import { Provider } from "@/lib/providers/provider";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

import { GeistMono } from 'geist/font/mono';
import { Navbar } from "@/components/ui/navbar";



export const metadata: Metadata = {
  title: "Upvote",
  description: "vote anything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistMono.variable} antialiased `}
      >
        <Provider>
          <Navbar />
          {children}
        </Provider>

      </body>
    </html>
  );
}
