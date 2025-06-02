import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";

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
        <Navbar />
        <main className="flex-1">
          {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}
