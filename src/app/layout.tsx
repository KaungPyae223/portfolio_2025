import NavBar from "@/features/public/nav/NavBar";
import "./globals.css";

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
      </body>
    </html>
  );
}
