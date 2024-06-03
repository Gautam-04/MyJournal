import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Journal",
  description: "Write your daily life in style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        </body>
    </html>
  );
}
