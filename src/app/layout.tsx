import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/utils/Navbar";
import { PageProvider } from "@/context/PageProvider";
import { LogicProvider } from "@/context/LogicProvider";


export const metadata: Metadata = {
  title: "Sociedad Femenina  21 de Junio",
  description: "Sociedad Femenina 21 de Junio",
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning>
        <PageProvider>
          <LogicProvider>
            <Navbar />
            {children}

          </LogicProvider>
        </PageProvider>
      </body>
    </html>
  );
}
