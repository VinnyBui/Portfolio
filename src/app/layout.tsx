import "./globals.css";
import FloatingDockWrapper from "@/components/FloatingDockWrapper";

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
      <body className="relative">
        {children} 
        <FloatingDockWrapper />
      </body>
    </html>
  );
}
