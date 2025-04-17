import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import ReduxProvider from "@/store/ReduxProvider";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shahr Productions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-800 text-slate-100 container mx-auto p-4`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
