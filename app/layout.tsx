import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

import { GeistMono } from 'geist/font/mono';



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
          {children}
        </Provider>

      </body>
    </html>
  );
}
