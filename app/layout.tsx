import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/assets/styles/globals.css";
import { APP_DESCRIPTIION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: {
    template: `%s | Beltoria`,
    default: APP_NAME
  },
  description: APP_DESCRIPTIION,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
        attribute='class'
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
