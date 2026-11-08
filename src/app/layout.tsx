import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
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
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
