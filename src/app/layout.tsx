import { Analytics } from '@vercel/analytics/react';
import NavBar from "@/features/public/nav/NavBar";
import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Kaung Pyae Aung",
  description: "Kaung Pyae Aung's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      
      <body className="transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <Analytics />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
      </body>
    </html>
  );
}
