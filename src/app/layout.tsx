import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/utils/Navbar";
import { PageProvider } from "@/context/PageProvider";

export const metadata: Metadata = {
  title: "Sociedad Femenina  21 de Junio",
  description: "Sociedad Femenina 21 de Junio",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <PageProvider>
          <Navbar />
          {children}
        </PageProvider>
      </body>
    </html>
  );
}
