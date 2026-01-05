import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Marinia - Comunicación Efectiva",
  description: "Plataforma de mensajería y gestión de llamadas",
  keywords: ["mensajería", "llamadas", "comunicación", "chat"],
  authors: [{ name: "Marinia" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#3b82f6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
