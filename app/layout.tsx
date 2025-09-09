import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { ThemeProvider } from "@/components/theme-mode/hooks/useTheme";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Next.js Component Lab",
  description: "A repo of React Machine Coding Problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header isBackEnabled={false}/>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
