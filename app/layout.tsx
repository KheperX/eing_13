import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nateetorn - Software Developer",
  description: "Minimal portfolio showcasing thoughtful software development",
  keywords: "software developer, portfolio, minimal, clean code",
  authors: [{ name: "Nateetorn" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: '/green_logo.png',
    shortcut: '/green_logo.png',
    apple: '/green_logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}
