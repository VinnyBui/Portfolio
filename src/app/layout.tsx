import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/features/ChatWidget";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Vinh Bui | Portfolio",
  description: "Welcome to my personal portfolio showcasing my work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f=clash-display@400,500,600,700&f=chubbo@400,500,700&f=boska@400&display=swap"
        />
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          async
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <Analytics/>
      </body>
    </html>
  );
}
