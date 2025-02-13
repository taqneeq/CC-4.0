import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm",
});

const retroTech = localFont({
  src: "./fonts/RETROTECH.ttf",
  variable: "--font-retro-tech",
  weight: "100 900",
});

const lcd = localFont({
  src: "./fonts/LCD.ttf",
  variable: "--font-lcd",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cyber Cypher by Taqneeq",
  description:
    "Cyber Cypher is a 18 hour hackathon event that aims to bring together the best minds to innovate and build the future of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${retroTech.variable} ${ibm.variable} ${lcd.variable} antialiased w-full min-h-screen relative`}
      >
        <main className="relative z-10 w-full">{children}</main>
      </body>
    </html>
  );
}
