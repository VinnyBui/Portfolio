import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/features/ChatWidget";
import Script from "next/script";

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
      </body>
    </html>
  );
}
