import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Anek_Telugu } from "next/font/google";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Planify - Organisez vos rendez-vous",
  description: "Planifiez vos rendez-vous en toute simplicité",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
      <body
          className={cn(
              GeistSans.variable,
              GeistMono.variable,
              AnekTelugu.variable,
              "font-sans h-full bg-background text-foreground"
          )}
      >
      {children}
      </body>
      </html>
  );
}