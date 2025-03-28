import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "日出而作",
  description: "菜鳥餐點製作查詢",
  openGraph: {
    title: "日出而作",
    description: "菜鳥餐點製作查詢",
    url: "https://sunrise-sandwich-tutorial.vercel.app",
    siteName: "日出而作",
    images: [
      {
        url: "https://sunrise-sandwich-tutorial.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "日出而作早餐店",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "日出而作",
    description: "菜鳥餐點製作查詢",
    images: ["https://sunrise-sandwich-tutorial.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
