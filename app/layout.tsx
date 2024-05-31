import type { Metadata } from "next";
import "./globals.scss";
import Header from "./components/Header";
import ReactQueryProvider from "./utils/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Header />
          <main>
            {children}
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
