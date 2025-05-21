import NavBar from "@/features/public/nav/NavBar";
import "./globals.css";
import Script from "next/script";
import Analytics from "./analytics";

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
      <head>
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XX8Y6TYW6D`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XX8Y6TYW6D', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
        <header>
          <Analytics />
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
